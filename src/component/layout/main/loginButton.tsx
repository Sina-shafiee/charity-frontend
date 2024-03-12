"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, Skeleton } from "@/component/ui";
import { useSessionQuery } from "@/hooks/api";
import { Roles } from "@/types/enums";

interface Props {
	loginTitle: string;
	dashboardTitle: string;
}

export const LoginButton = ({ loginTitle, dashboardTitle }: Props) => {
	const pathname = usePathname();
	const sessionQuery = useSessionQuery();

	if (sessionQuery.status === "pending") {
		return <Skeleton className="h-10 w-[5.5rem] bg-background/70" />;
	}

	const dasboardRoute =
		sessionQuery.data?.user?.role?.id === Roles.ADMIN
			? "admin"
			: sessionQuery.data?.user?.role?.id === Roles.USER
				? "user"
				: "/";

	const ActionButton = sessionQuery.data?.user ? (
		<Button size="sm" className="hidden w-[5.5rem] text-base lg:block">
			<Link href={dasboardRoute}>{dashboardTitle}</Link>
		</Button>
	) : (
		<Button size="sm" className="hidden w-[5.5rem] text-base lg:block">
			<Link href={`/auth/login?callbackUrl=${pathname}`}>{loginTitle}</Link>
		</Button>
	);

	return ActionButton;
};
