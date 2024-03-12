// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/*
	 * Serverside Environment variables, not available on the client.
	 * Will throw if you access these variables on the client.
	 */
	server: {
		APP_URL: z.string(),
		NODE_ENV: z.enum(["development", "production", "test"]),
		OPEN_API_SPEC_URL: z.string().url(),
		SESSION_COOKIE_NAME: z.string(),
		SESSION_SECRET: z.string().min(32),
		SESSION_TTL: z.string(),
	},
	/*
	 * Environment variables available on the client (and server).
	 *
	 * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
	 */
	client: {
		NEXT_PUBLIC_API_URL: z.string().url(),
	},
	/*
	 * Due to how Next.js bundles environment variables on Edge and Client,
	 * we need to manually destructure them to make sure all are included in bundle.
	 *
	 * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
	 */
	runtimeEnv: {
		APP_URL: process.env.APP_URL,
		NODE_ENV: process.env.NODE_ENV,
		OPEN_API_SPEC_URL: process.env.OPEN_API_SPEC_URL,
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME,
		SESSION_SECRET: process.env.SESSION_SECRET,
		SESSION_TTL: process.env.SESSION_TTL,
	},
});
