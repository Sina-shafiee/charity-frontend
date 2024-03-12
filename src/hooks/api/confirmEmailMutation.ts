import { useMutation } from "@tanstack/react-query";

import { env } from "@/lib/env";
import type { ConfirmEmailSchema } from "@/lib/validation";
import { useCurrentLocale } from "@/locale/client";
import type { Locale } from "@/locale/helper";

const confirmEmail = async (
	payload: ConfirmEmailSchema,
	lang: Locale,
): Promise<void> => {
	try {
		const response = await fetch(
			`${env.NEXT_PUBLIC_API_URL}/auth/email/confirm`,
			{
				method: "POST",
				body: JSON.stringify({
					email: payload.email,
					token: Number.parseInt(payload.token, 10),
				}),
				headers: {
					"Content-Type": "application/json",
					"x-application-lang": lang,
				},
			},
		);

		if (response.status === 204) {
			return;
		}

		const data = await response.json();

		if (response.status > 299) {
			throw new Error(JSON.stringify(data));
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
};

export const useConfirmEmailMutation = () => {
	const lang = useCurrentLocale();
	return useMutation({
		mutationFn: (payload: ConfirmEmailSchema) => {
			return confirmEmail(payload, lang);
		},
		mutationKey: ["confirm-email"],
	});
};
