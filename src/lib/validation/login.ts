import { z } from "zod";

import type { TranslateFunc } from "@/types/translateFunc";

export const loginSchema = (t: TranslateFunc) =>
	z.object({
		email: z.string().min(
			1,
			t("Validation.required", {
				inputname: t("InputNames.email"),
			}),
		),
		password: z.string().min(
			1,
			t("Validation.required", {
				inputname: t("InputNames.password"),
			}),
		),
	});

export type LoginSchema = z.infer<ReturnType<typeof loginSchema>>;
