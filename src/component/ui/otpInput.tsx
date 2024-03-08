"use client";

import type { OTPInputProps } from "react-otp-input";
import ReactOtpInput from "react-otp-input";

import { Input } from "./input";

interface Props extends Omit<OTPInputProps, "renderInput"> {}

export const OtpInput = ({
	numInputs = 6,
	value,
	onChange,
	...props
}: Props) => {
	return (
		<ReactOtpInput
			{...props}
			value={value}
			skipDefaultStyles
			onChange={onChange}
			numInputs={numInputs}
			renderInput={({ className, ...inputProps }) => (
				<Input className="text-center text-2xl font-semibold" {...inputProps} />
			)}
			containerStyle="flex dir-ltr w-full justify-between gap-6"
			shouldAutoFocus
		/>
	);
};
