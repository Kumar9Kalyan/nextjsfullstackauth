import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function cas be marked 'async' if using 'await' inside

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  const token = request.cookies.get("token")?.value || "";
  console.log(token);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// Matching paths are created here

export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup", "/verifyemail"],
};
