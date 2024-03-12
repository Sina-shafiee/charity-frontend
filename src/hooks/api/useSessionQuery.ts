import { useQuery } from "@tanstack/react-query";

import type { SessionData } from "@/lib/auth";

const fetchSession = async (): Promise<SessionData> => {
	const response = await fetch("/api/auth/me", {
		method: "POST",
	});
	const data = await response.json();
	return data;
};

export const useSessionQuery = () => {
	return useQuery({
		queryFn: () => {
			return fetchSession();
		},
		queryKey: ["user-session"],
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
	});
};
