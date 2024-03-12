import { z } from "zod";

import type { TranslateFunc } from "@/types/translateFunc";

export const registerSchema = (t: TranslateFunc) =>
	z.object({
		firstName: z.string().min(
			1,
			t("Validation.required", {
				inputname: t("InputNames.firstName"),
			}),
		),
		lastName: z.string().min(
			1,
			t("Validation.required", {
				inputname: t("InputNames.lastName"),
			}),
		),
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

export type RegisterSchema = z.infer<ReturnType<typeof registerSchema>>;
