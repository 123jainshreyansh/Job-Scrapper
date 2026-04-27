// src/middleware.ts
//
// HOW IT WORKS:
// Next.js runs this file on EVERY request BEFORE any page or API code runs.
// `withAuth` from next-auth reads the JWT cookie that NextAuth sets on login.
// If the cookie exists → user is signed in → request passes through.
// If the cookie is missing → user is signed out → redirect to /login.
//
// The `matcher` below lists WHICH routes are protected.
// Routes NOT listed (e.g. "/", "/login", "/signup") remain public.

import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    // `token` is the decoded JWT. If it's null, the user is not signed in.
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: "/login", // where to redirect when not authenticated
  },
});

export const config = {
  matcher: [
    "/jobs/:path*",       // the jobs listing page and any sub-routes
    "/dashboard/:path*",  // dashboard (future-proof)
    "/api/scrape/:path*", // the scrape API — signed-out users get 401 automatically
  ],
};
