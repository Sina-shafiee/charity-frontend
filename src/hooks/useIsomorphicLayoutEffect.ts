import { useEffect, useLayoutEffect } from "react";

/**
 * Custom hook for using either `useLayoutEffect` or `useEffect`
 * based on the environment (client-side or server-side).
 */
export const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;
