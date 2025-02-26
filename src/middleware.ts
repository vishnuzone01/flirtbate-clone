import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const locale = url.searchParams.get("lang"); // Get `lang` from query params

  if (locale) {
    const res = NextResponse.next();
    res.cookies.set("NEXT_LOCALE", locale, { path: "/" }); // Store in a cookie
    return res;
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
