import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

import type { SessionData } from "@/lib/auth";
import { sessionOptions } from "@/lib/auth";
import { env } from "@/lib/env";
import { getCurrentLocale } from "@/locale/server";

export async function POST(request: NextRequest) {
	const credentials = await request.json();
	const lang = getCurrentLocale();

	const loginResponse = await fetch(
		`${env.NEXT_PUBLIC_API_URL}/auth/email/login`,
		{
			body: JSON.stringify(credentials),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-application-lang": lang,
			},
		},
	);

	const userData = await loginResponse.json();

	if (!loginResponse.ok) {
		return new Response(JSON.stringify(userData), {
			status: loginResponse.status ?? 400,
		});
	}

	const session = await getIronSession<SessionData>(cookies(), sessionOptions);

	session.user = userData.user;
	session.token = userData.token;
	session.tokenExpires = userData.tokenExpires;

	await session.save();

	return new Response(JSON.stringify({ status: 200 }), {
		status: 200,
	});
}
