import type { ReactNode } from "react";

interface Props {
	title: string;
	form: ReactNode;
	includeOauth?: boolean;
}

export const AuthShell = ({ form, title, includeOauth }: Props) => {
	return (
		<main className="grid min-h-screen w-full place-content-center">
			<section className="rounded-sm border p-8 shadow-sm">
				<section className="flex w-[420px] flex-col gap-4">
					<section className="flex flex-col gap-2">
						<h4 className="my-2 font-heading">{title}</h4>
					</section>
					{form}
					{!!includeOauth && <p>oauth</p>}
				</section>
			</section>
		</main>
	);
};
