"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	OtpInput,
} from "@/component/ui";
import { useConfirmEmailMutation } from "@/hooks/api";
import type { ConfirmEmailSchema } from "@/lib/validation/";
import { confirmEmailSchema } from "@/lib/validation/";
import { useI18n } from "@/locale/client";

export const ConfirmEmailForm = () => {
	const router = useRouter();
	const t = useI18n();

	const searchParams = useSearchParams();
	const emailValue = searchParams.get("sub");

	const registerQuery = useConfirmEmailMutation();

	const form = useForm<ConfirmEmailSchema>({
		resolver: zodResolver(confirmEmailSchema(t)),
		defaultValues: {
			email: atob(emailValue ?? ""),
			token: "",
		},
	});

	const onSubmit = async (payload: ConfirmEmailSchema) => {
		try {
			await registerQuery.mutateAsync(payload);
			router.push(`/auth/login`);
			toast.success(t("ConfirmEmail.emailConfirmed"));
		} catch (error) {
			const { errors, status: statusCode } = JSON.parse(
				(error as Error).message,
			);

			if (Array.isArray(errors)) {
				errors.forEach((value: { [key: string]: string }) => {
					const [key] = Object.keys(value);
					form.setError(key as keyof ConfirmEmailSchema, {
						message: value[key],
						type: "API_ERROR",
					});
				});
			} else if (typeof errors === "string") {
				if (statusCode === 409) {
					toast.error(errors);
					router.replace("/auth/login");
					return;
				}
				toast.error(errors);
			} else {
				toast.error(t("Validation.serverError"));
			}
		} finally {
			form.resetField("token");
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-y-2"
				noValidate
			>
				<FormField
					control={form.control}
					name="token"
					render={({ field }) => {
						return (
							<FormItem className="my-4">
								<FormControl dir="ltr">
									<OtpInput onChange={field.onChange} value={field.value} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button className="mt-8 h-12 rounded-sm">
					{t("ConfirmEmail.confirmEmail")}
				</Button>
			</form>
		</Form>
	);
};
