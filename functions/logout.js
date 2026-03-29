import { clearCookieHeader } from "./_lib/auth";

export async function onRequestGet() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": clearCookieHeader(),
      "Cache-Control": "no-store",
    },
  });
}
