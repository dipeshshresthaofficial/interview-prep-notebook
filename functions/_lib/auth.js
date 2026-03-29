const SESSION_COOKIE = "diyo_access";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function encodeBase64Url(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function decodeBase64Url(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (base64.length % 4 || 4)) % 4);
  const binary = atob(base64 + padding);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function signPayload(payload, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return encodeBase64Url(signature);
}

function readCookies(cookieHeader = "") {
  return Object.fromEntries(
    cookieHeader
      .split(";")
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const splitIndex = entry.indexOf("=");
        const key = entry.slice(0, splitIndex);
        const value = entry.slice(splitIndex + 1);
        return [key, value];
      }),
  );
}

export function buildCookieHeader(value, maxAge = SESSION_TTL_SECONDS) {
  return `${SESSION_COOKIE}=${value}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax; Secure`;
}

export function clearCookieHeader() {
  return `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax; Secure`;
}

export async function createSession(secret) {
  const payload = JSON.stringify({
    expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000,
  });

  const payloadPart = encodeBase64Url(new TextEncoder().encode(payload));
  const signaturePart = await signPayload(payloadPart, secret);
  return `${payloadPart}.${signaturePart}`;
}

export async function hasValidSession(request, secret) {
  const cookieValue = readCookies(request.headers.get("Cookie") || "")[SESSION_COOKIE];

  if (!cookieValue) {
    return false;
  }

  const [payloadPart, signaturePart] = cookieValue.split(".");

  if (!payloadPart || !signaturePart) {
    return false;
  }

  const expectedSignature = await signPayload(payloadPart, secret);

  if (expectedSignature !== signaturePart) {
    return false;
  }

  try {
    const payload = JSON.parse(new TextDecoder().decode(decodeBase64Url(payloadPart)));
    return typeof payload.expiresAt === "number" && payload.expiresAt > Date.now();
  } catch {
    return false;
  }
}

export function renderLoginPage(errorMessage = "") {
  const errorMarkup = errorMessage
    ? `<p style="margin:0 0 1rem;color:#b13a2d;font-size:0.95rem;">${errorMessage}</p>`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Diyo Interview Prep Access</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
      :root {
        color-scheme: light;
        font-family: "Instrument Sans", sans-serif;
        background: #f1f5f2;
        color: #17342e;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          linear-gradient(180deg, rgba(255,255,255,0.86), rgba(241,245,242,0.98)),
          radial-gradient(circle at top, rgba(94,148,137,0.22), transparent 35%);
      }
      .card {
        width: min(28rem, calc(100% - 1.5rem));
        padding: 2rem;
        border-radius: 1.5rem;
        background: rgba(255,255,255,0.92);
        border: 1px solid rgba(23,52,46,0.1);
        box-shadow: 0 22px 50px rgba(11,37,33,0.1);
      }
      .eyebrow {
        margin: 0 0 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        font-size: 0.76rem;
        color: #1f7568;
      }
      h1 {
        margin: 0;
        font-size: 2.3rem;
        line-height: 0.95;
        letter-spacing: -0.05em;
      }
      p {
        color: #5d726d;
        line-height: 1.65;
      }
      label {
        display: block;
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
        font-size: 0.92rem;
        color: #4c615c;
      }
      input {
        width: 100%;
        border-radius: 0.95rem;
        border: 1px solid rgba(23,52,46,0.12);
        padding: 0.95rem 1rem;
        font: inherit;
      }
      button {
        margin-top: 1rem;
        width: 100%;
        border: 0;
        border-radius: 999px;
        padding: 0.95rem 1.2rem;
        background: #1f7568;
        color: white;
        font: inherit;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <p class="eyebrow">Private Access</p>
      <h1>Diyo Interview Prep</h1>
      <p>Enter the shared password to access the interview preparation library.</p>
      ${errorMarkup}
      <form method="post" action="/authenticate">
        <label for="password">Shared password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" required />
        <button type="submit">Continue</button>
      </form>
    </main>
  </body>
</html>`;
}
