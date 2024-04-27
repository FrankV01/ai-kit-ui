import { NextRequest, NextResponse } from "next/server";

const maxAgeSeconds = 60 * 60; // 1 hour
const header = "Set-Cookie";
const setting = `SameSite=Lax;Secure;HttpOnly;Max-Age=${maxAgeSeconds}`;

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(header, setting);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(header, setting);
  return response;
}
