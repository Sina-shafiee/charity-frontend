import { useMutation } from "@tanstack/react-query";

import { env } from "@/lib/env";
import type { RegisterSchema } from "@/lib/validation";
import { useCurrentLocale } from "@/locale/client";
import type { Locale } from "@/locale/helper";

const registerUser = async (
	payload: RegisterSchema,
	lang: Locale,
): Promise<void> => {
	try {
		const response = await fetch(
			`${env.NEXT_PUBLIC_API_URL}/auth/email/register`,
			{
				method: "POST",
				body: JSON.stringify(payload),
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

export const useRegisterUserMutation = () => {
	const lang = useCurrentLocale();
	return useMutation({
		mutationFn: (payload: RegisterSchema) => {
			return registerUser(payload, lang);
		},
		mutationKey: ["register-user"],
	});
};
