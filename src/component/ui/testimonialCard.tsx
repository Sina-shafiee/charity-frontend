import dummyAvatar from "@/assets/dummy-avatar.jpeg";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface Props {
	author: string;
	job: string;
	text: string;
}

export const TestimonialCard = ({ author, job, text }: Props) => {
	return (
		<section className="mt-8  flex flex-col items-center">
			<Avatar className="size-20">
				<AvatarImage src={dummyAvatar.src} alt="Cameron Williamson avatar" />
				<AvatarFallback className="text-black">EN</AvatarFallback>
			</Avatar>
			<h4 className="mt-8 font-heading text-xl text-white">{author}</h4>
			<h6 className="mt-2 text-white">{job} </h6>
			<p className="mt-8 line-clamp-3 w-11/12 text-center font-body text-lg font-semibold">
				{text}
			</p>
		</section>
	);
};
