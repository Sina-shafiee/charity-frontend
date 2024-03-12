"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/component/ui";
import type { LoginSchema } from "@/lib/validation";
import { loginSchema } from "@/lib/validation";
import { useI18n } from "@/locale/client";

export const LoginForm = () => {
	const searchParams = useSearchParams();
	const queryClinet = useQueryClient();
	const router = useRouter();
	const t = useI18n();

	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema(t)),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async ({ email, password }: LoginSchema) => {
		const callbackUrl = searchParams.get("callbackUrl");

		try {
			const response = await fetch("/api/auth/login", {
				body: JSON.stringify({ email, password }),
				method: "POST",
			});

			const result = await response.json();

			if (result?.status === 200) {
				await queryClinet.invalidateQueries({ queryKey: ["user-session"] });
				router.push(callbackUrl ?? "/");
				return;
			}

			const errors: unknown = result?.errors;

			if (Array.isArray(errors)) {
				errors.forEach((value: { [key: string]: string }) => {
					const [key] = Object.keys(value);
					form.setError(key as keyof LoginSchema, {
						message: value[key],
						type: "API_ERROR",
					});
				});
			} else if (typeof errors === "string") {
				if (errors === "emailVerificationTokenSent") {
					router.push(`/auth/confirm-email?sub=${btoa(email)}`);
					toast.info(t("Login.verificationSent"));
					return;
				}
				toast.error(errors);
			} else {
				toast.error(t("Validation.serverError"));
			}
		} catch (error) {
			toast.error(t("Validation.serverError"));
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
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>{t("InputNames.email")}</FormLabel>
								<FormControl>
									<Input
										dir="ltr"
										type="email"
										className="min-w-[340px]"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>{t("InputNames.password")}</FormLabel>
								<FormControl>
									<Input
										dir="ltr"
										type="password"
										className="min-w-[340px]"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<div className="mb-2 mt-4 flex items-center justify-between text-sm">
					<p className="text-sm">
						<Link
							className="underline underline-offset-4"
							href="/auth/register"
						>
							{t("Login.noAccount")}{" "}
						</Link>
					</p>
					<Link
						className="underline underline-offset-4"
						href="/auth/reset-password"
					>
						{t("Login.resetPassword")}
					</Link>
				</div>
				<Button className="mt-4 h-12 rounded-sm">{t("Login.login")}</Button>
			</form>
		</Form>
	);
};
