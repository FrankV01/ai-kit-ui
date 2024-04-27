import { NextRequest, NextResponse } from "next/server";
import Next from "next-auth/src";
// import cookieParser from "cookie-parser";
// import csurf from "csurf";
//

const maxAgeSeconds = 60 * 60; // 1 hour
const header = "Set-Cookie";
const setting = `SameSite=Lax;Secure;HttpOnly;Max-Age=${maxAgeSeconds}`;

export function middleware(request: NextRequest) {
  console.log("middleware");
  //request.headers.append(header, setting);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(header, setting);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(header, setting);
  return response;
}

// function generateAndSetNonce(request: NextRequest) {
//   const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
//   const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
//     style-src 'self' 'nonce-${nonce}';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `;
//   // Replace newline characters and spaces
//   const contentSecurityPolicyHeaderValue = cspHeader
//     .replace(/\s{2,}/g, " ")
//     .trim();
//
//   return { nonce, contentSecurityPolicyHeaderValue };
// }
//
// export function middleware(request: NextRequest) {
//   console.log("middleware ran");
//
//   const response = NextResponse.next({
//     // request: {
//     //   headers: requestHeaders,
//     // },
//   });
//   response.setHeader(
//     "Set-Cookie",
//     `session=${sessionId}; Path=/;   Max-Age=600; SameSite=Strict; HttpOnly`,
//   );
//
//   // const csrfMiddleware = csurf({
//   //   cookie: true,
//   // });
//
//   // const { nonce, contentSecurityPolicyHeaderValue } = generateAndSetNonce(request)
//
//   // const requestHeaders = new Headers(request.headers);
//   // requestHeaders.set("x-nonce", nonce);
//   //
//   // requestHeaders.set(
//   //   "Content-Security-Policy",
//   //   contentSecurityPolicyHeaderValue,
//   // );
//
//   // response.headers.set(
//   //   "Content-Security-Policy",
//   //   contentSecurityPolicyHeaderValue,
//   // );
//
//   return response;
// }
