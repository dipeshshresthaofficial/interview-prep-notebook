# Cloudflare Password Gate

This project uses Cloudflare Pages Functions for lightweight shared-password protection.

## Files involved

- `functions/_middleware.js`
- `functions/authenticate.js`
- `functions/logout.js`
- `functions/_lib/auth.js`

## Required Cloudflare secrets

Add these secrets in the Cloudflare Pages project settings:

- `RULEBOOK_PASSWORD`
- `COOKIE_SECRET`

## Important notes

- Do not expose the password through `VITE_*` variables.
- `COOKIE_SECRET` should be a long random string.
- Session cookies are HTTP-only, `Secure`, and `SameSite=Lax`.
- Session lifetime is 12 hours.

## Flow

1. A user requests the site.
2. Middleware checks for a valid signed cookie.
3. If the cookie is missing or invalid, Cloudflare returns the password page.
4. The password form posts to `/authenticate`.
5. If the password matches `RULEBOOK_PASSWORD`, the function signs a session cookie using `COOKIE_SECRET`.
6. The user is redirected back to `/`.
7. `/logout` clears the cookie and redirects back to `/`.

## Build and deploy notes

- Vite base path is `/`.
- For Cloudflare Pages:
  - install command: `npm ci`
  - build command: `npm run build`
  - output directory: `dist`
- Use Node 20 for the build image.
