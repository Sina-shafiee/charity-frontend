import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { SessionData } from "@/lib/auth";
import { sessionOptions } from "@/lib/auth";

export async function POST() {
	const session = await getIronSession<SessionData>(cookies(), sessionOptions);
	session.destroy();
	return NextResponse.json({});
}
