import { useState } from "react";

import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

interface UseMediaQueryOptions {
	defaultValue?: boolean;
	initializeWithValue?: boolean;
}

const IS_SERVER = typeof window === "undefined";

export enum MediaQueries {
	SM = "(min-width: 640px)",
	MD = "(min-width: 768px)",
	LG = "(min-width: 1024px)",
	XL = "(min-width: 1280px)",
	"XXL" = "(min-width: 1536px)",
}

/**
 * Custom hook for tracking the state of a media query.
 * WARNING: ONLY PASS MEDIA QUERY USING "MediaQueries" ENUM
 */
export function useMediaQuery(
	query: MediaQueries,
	options?: UseMediaQueryOptions | boolean,
): boolean {
	const defaultValue =
		typeof options === "boolean" ? options : options?.defaultValue ?? false;
	const initializeWithValue =
		typeof options === "boolean"
			? undefined
			: options?.initializeWithValue ?? undefined;

	const getMatches = (passedQuery: string): boolean => {
		if (IS_SERVER) {
			return defaultValue;
		}

		return window.matchMedia(passedQuery).matches;
	};

	const [matches, setMatches] = useState<boolean>(() => {
		if (initializeWithValue) {
			return getMatches(query);
		}

		return defaultValue;
	});

	function handleChange() {
		setMatches(getMatches(query));
	}

	useIsomorphicLayoutEffect(() => {
		const matchMedia = window.matchMedia(query);

		handleChange();

		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener("change", handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener("change", handleChange);
			}
		};
	}, [query]);

	return matches;
}
