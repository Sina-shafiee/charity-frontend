"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/component/ui";

interface Props {
	title: string;
}

export const LoginButton = ({ title }: Props) => {
	return (
		<Button
			onClick={() => signIn()}
			size="sm"
			className="hidden text-base lg:block"
		>
			{title}
		</Button>
	);
};
