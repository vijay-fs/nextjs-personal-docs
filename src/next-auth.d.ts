// next-auth.d.ts
declare module "next-auth" {
  interface User {
    _id: string;
    name?: string | null;
    email?: string | null;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name?: string | null;
    email?: string | null;
  }
}
