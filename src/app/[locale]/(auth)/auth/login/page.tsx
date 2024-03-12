import { AuthShell } from "@/component/domain/auth";
import { LoginForm } from "@/component/form";
import { getScopedI18n } from "@/locale/server";

const LoginPage = async () => {
	const t = await getScopedI18n("Login");
	return <AuthShell backLink="/" form={<LoginForm />} title={t("pageTitle")} />;
};

export default LoginPage;
