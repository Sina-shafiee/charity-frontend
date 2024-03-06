"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
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
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		if (result?.status === 200) {
			router.push("/");
			return;
		}

		if (result?.error) {
			const errors = JSON.parse(result.error);

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
					router.push(`/auth/confirm-email?email=${email}`);
					return;
				}
				toast.error(errors);
			}
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
				<p className="mb-2 mt-4 text-sm">
					{t("Login.noAccount")}{" "}
					<Link className="text-indigo-500" href="/auth/register">
						{t("Login.register")}
					</Link>
				</p>
				<Button className="mt-4 h-12 rounded-sm">{t("Login.login")}</Button>
			</form>
		</Form>
	);
};
