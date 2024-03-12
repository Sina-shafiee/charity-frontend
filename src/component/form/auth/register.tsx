"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { useRegisterUserMutation } from "@/hooks/api";
import type { RegisterSchema } from "@/lib/validation";
import { registerSchema } from "@/lib/validation";
import { useI18n } from "@/locale/client";

export const RegisterForm = () => {
	const t = useI18n();
	const router = useRouter();

	const registerQuery = useRegisterUserMutation();

	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema(t)),
		defaultValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
		},
	});

	const onSubmit = async (payload: RegisterSchema) => {
		try {
			await registerQuery.mutateAsync(payload);
			toast.info(t("Register.verificationSent"));
			router.push(`/auth/confirm-email?sub=${btoa(payload.email)}`);
		} catch (error) {
			const { errors } = JSON.parse((error as Error).message);

			if (Array.isArray(errors)) {
				errors.forEach((value: { [key: string]: string }) => {
					const [key] = Object.keys(value);
					form.setError(key as keyof RegisterSchema, {
						message: value[key],
						type: "API_ERROR",
					});
				});
			} else if (typeof errors === "string") {
				toast.error(errors);
			} else {
				toast.error(t("Validation.serverError"));
			}
		} finally {
			form.reset();
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
					name="firstName"
					render={({ field }) => {
						return (
							<FormItem className="col-span-1">
								<FormLabel>{t("InputNames.firstName")}</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => {
						return (
							<FormItem className="col-span-1">
								<FormLabel>{t("InputNames.lastName")}</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>{t("InputNames.email")}</FormLabel>
								<FormControl>
									<Input dir="ltr" type="email" {...field} />
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
									<Input dir="ltr" type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<p className="mb-2 mt-4 text-sm">
					{t("Register.haveAccount")}{" "}
					<Link className="underline underline-offset-4" href="/auth/login">
						{t("Register.login")}
					</Link>
				</p>
				<Button className="mt-4 h-12 rounded-sm">
					{t("Register.register")}
				</Button>
			</form>
		</Form>
	);
};
