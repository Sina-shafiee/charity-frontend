import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ReactNode } from "react";

import LeftPath from "@/component/icon/hero-left-path.svg";
import RightPath from "@/component/icon/hero-right-path.svg";
import { Button } from "@/component/ui";
import { getCurrentLocale } from "@/locale/server";
import { cn } from "@/utils";

interface Props {
	title: string;
	form: ReactNode;
	includeOauth?: boolean;
	backLink?: string;
}

export const AuthShell = ({
	form,
	title,
	includeOauth,
	backLink = "/auth/login",
}: Props) => {
	const isRtl = getCurrentLocale() === "fa";
	return (
		<main className="relative grid min-h-screen w-full place-content-center bg-gray-600 bg-[url('/images/landing-hero-pattern.webp')] bg-cover bg-center bg-no-repeat">
			<RightPath className="absolute bottom-0 right-0 h-auto w-56" />
			<LeftPath className="absolute bottom-0 left-0 h-52 w-auto" />
			<section className="relative my-20 rounded-sm border bg-white p-12 shadow-sm">
				<section className="flex w-[420px] flex-col gap-4">
					<section className="flex items-center justify-between gap-2">
						<Button
							asChild
							size="icon"
							variant="link"
							className={cn(
								"absolute top-4 size-10 rounded-full text-black",
								isRtl ? "right-6" : "left-6",
							)}
						>
							<Link href={backLink} className="flex items-center gap-2">
								{isRtl ? (
									<ArrowRightIcon className="size-6" />
								) : (
									<ArrowLeftIcon className="size-6" />
								)}
							</Link>
						</Button>
						<h4 className="my-4 w-full text-center font-heading">{title}</h4>
					</section>
					{form}
					{!!includeOauth && <p>oauth</p>}
				</section>
			</section>
		</main>
	);
};
