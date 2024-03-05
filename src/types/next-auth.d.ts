import _NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		firstName: string;
		lastName: string;
		email: string;
		refreshToken: string;
		token: string;
		tokenExpires: string;
		role: {
			id: number;
			name: string;
		};
	}
	interface Session {
		user: User;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		user: User;
	}
}
