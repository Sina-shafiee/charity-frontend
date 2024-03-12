import { AuthShell } from "@/component/domain/auth";
import { RegisterForm } from "@/component/form";
import { getScopedI18n } from "@/locale/server";

const RegisterPage = async () => {
	const t = await getScopedI18n("Register");
	return <AuthShell title={t("pageTitle")} form={<RegisterForm />} />;
};

export default RegisterPage;
