export type InvalidEntityError<T extends string> = {
	[K in T]: string;
}[];

export const invalidEntityErrorHandler = <T extends string>(
	errors: InvalidEntityError<T>,
	setError: any,
) => {
	errors.forEach((value: { [key: string]: string }) => {
		const [key] = Object.keys(value);
		setError(key, {
			message: value[key],
			type: "API_ERROR",
		});
	});
};
