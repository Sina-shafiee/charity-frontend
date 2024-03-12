import { useMutation, useQueryClient } from "@tanstack/react-query";

const logout = async (): Promise<void> => {
	await fetch("/api/auth/logout", {
		method: "POST",
	});
};

export const useLogoutMutation = () => {
	const queryClinet = useQueryClient();
	return useMutation({
		mutationFn: () => {
			return logout();
		},
		mutationKey: ["user-session"],
		async onSuccess() {
			await queryClinet.invalidateQueries({ queryKey: ["user-session"] });
		},
	});
};
