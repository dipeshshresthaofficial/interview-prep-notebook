import { buildCookieHeader, createSession, renderLoginPage } from "./_lib/auth";

export async function onRequestPost({ request, env }) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");

  if (!password || password !== env.RULEBOOK_PASSWORD) {
    return new Response(renderLoginPage("Incorrect password. Please try again."), {
      status: 401,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }

  const sessionValue = await createSession(env.COOKIE_SECRET);

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
      "Set-Cookie": buildCookieHeader(sessionValue),
      "Cache-Control": "no-store",
    },
  });
}
