// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all routes except API, static files, and Clerk routes
    "/((?!_next|.*\\..*|api|trpc|signin|signup).*)",
  ],
};
