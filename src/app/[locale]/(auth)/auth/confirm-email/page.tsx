import { AuthShell } from "@/component/domain/auth";
import { ConfirmEmailForm } from "@/component/form";
import { getScopedI18n } from "@/locale/server";

const ConfirmEmailPage = async () => {
	const t = await getScopedI18n("ConfirmEmail");
	return <AuthShell form={<ConfirmEmailForm />} title={t("pageTitle")} />;
};

export default ConfirmEmailPage;
