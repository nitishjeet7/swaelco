import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Vercel static / web branch: hide admin panel — redirect app and auth routes to marketing home
const HIDDEN_PATHS = [
  "/dashboard",
  "/projects",
  "/customers",
  "/buildings",
  "/tasks",
  "/profile",
  "/login",
  "/register",
];

function pathIsHidden(pathname: string): boolean {
  return HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function middleware(request: NextRequest) {
  if (pathIsHidden(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/projects/:path*",
    "/customers/:path*",
    "/buildings/:path*",
    "/tasks/:path*",
    "/profile/:path*",
    "/login",
    "/login/",
    "/register",
    "/register/",
  ],
};
