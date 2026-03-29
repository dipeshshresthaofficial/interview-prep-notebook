import { hasValidSession, renderLoginPage } from "./_lib/auth";

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  if (url.pathname === "/authenticate" || url.pathname === "/logout") {
    return next();
  }

  const hasSession = await hasValidSession(request, env.COOKIE_SECRET);

  if (hasSession) {
    return next();
  }

  const acceptsHtml = request.headers.get("Accept")?.includes("text/html");

  if (!acceptsHtml) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response(renderLoginPage(), {
    status: 401,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
