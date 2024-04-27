import { NextRequest, NextResponse } from "next/server";

/**
 * Having issue getting Nonce to work with
 * inline styles. So for now, disabled as the
 * current settings should be enough.
 */
const enableNonce: boolean = false;

/** Our CSP headers WITHOUT the Nonce. */
const cspHeaderWithOutNonce = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com/ https://www.googletagmanager.com/;
    connect-src 'self' https://www.google-analytics.com/ https://www.googletagmanager.com/;
    style-src 'self' data: 'unsafe-inline';
    img-src 'self'  data: 'unsafe-inline' https://mirrors.creativecommons.org/;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/**
 * Generate the Content-Security-Policy header value
 * with or without the Nonce value depending on the
 * flag above.
 */
function genNonceCPS() {
  const nonce = enableNonce
    ? Buffer.from(crypto.randomUUID()).toString("base64")
    : "";

  /**
   * Our CSP headers WITH the Nonce. 'unsafe-inline'
   * is removed in favor of the Nonce value.
   */
  const cspHeaderWithNonce = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'nonce-${nonce}' 'strict-dynamic' https://www.google-analytics.com https://www.googletagmanager.com/;
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com/;
    style-src 'self' data: 'nonce-${nonce}';
    img-src 'self'  data: 'unsafe-inline' https://mirrors.creativecommons.org/;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
  const contentSecurityPolicyHeaderValue = enableNonce
    ? cspHeaderWithNonce
    : cspHeaderWithOutNonce;
  return contentSecurityPolicyHeaderValue.replace(/\n/g, "");
}

const headerCPS = "Content-Security-Policy";
const maxAgeSeconds = 60 * 60; // 1 hour
const headerCookie: string = "Set-Cookie";
/** Note that this causes an error blocking a cookie for google-analytics. */
const setting: string = `SameSite=Lax;Secure;HttpOnly;Max-Age=${maxAgeSeconds}`;

export function middleware(request: NextRequest) {
  const contentSecurityPolicyHeaderValue = genNonceCPS();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(headerCookie, setting);
  requestHeaders.set(headerCPS, contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set(headerCookie, setting);
  response.headers.set(headerCPS, contentSecurityPolicyHeaderValue);
  return response;
}
