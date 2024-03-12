import { z } from "zod";

import type { TranslateFunc } from "@/types/translateFunc";

export const confirmEmailSchema = (t: TranslateFunc) =>
	z.object({
		email: z.string().min(
			1,
			t("Validation.required", {
				inputname: t("InputNames.email"),
			}),
		),
		token: z
			.string()
			.min(
				1,
				t("Validation.required", {
					inputname: t("InputNames.token"),
				}),
			)
			.refine(
				(arg) => {
					const num = +arg;
					return !isNaN(num) && num >= 100000 && num <= 999999;
				},
				t("Validation.invalid", {
					inputname: t("InputNames.token"),
				}),
			),
	});

export type ConfirmEmailSchema = z.infer<ReturnType<typeof confirmEmailSchema>>;
