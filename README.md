# Torino | Online Tour Booking

Torino is a Persian (RTL) website for browsing and booking domestic and international tours. Users can search tours by origin, destination and date, log in with a one-time code sent to their mobile number, book a tour, and manage their profile, booked tours and transactions from a personal dashboard.

This project was built as the final project of the Botostart frontend bootcamp. The backend API was provided; the frontend in `client/` is my work.



## Tech Stack

- Next.js 16 (App Router)
- React 19 with React Compiler
- TypeScript
- Tailwind CSS
- TanStack React Query
- Axios
- React Hook Form + Zod
- js-cookie
- Motion (animations)
- Swiper (image slider)
- zaman
- React Toastify
- React Icons

Backend (provided): Node.js + Express, with JSON files as storage.

## Getting Started

**Requirements:** Node.js 20+ and pnpm.

1. Clone the repository:
   ```bash
   git clone https://github.com/ParsaDokhtMohammadi/torino_bootcamp_final.git
   cd torino_bootcamp_final
   ```

2. Start the backend:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in `server/`:
   ```
   PORT=6500
   JWT_SECRET=any-secret-string
   ```
   Then run:
   ```bash
   npm run dev
   ```
   The API runs on `http://localhost:6500` (Swagger docs at `/api-docs`). If the port is busy, the server picks the next one, so check the startup log.

3. Start the frontend (in a second terminal):
   ```bash
   cd client
   pnpm install
   cp .env.example .env.local
   pnpm dev
   ```

4. Open `http://localhost:3000`.

**Logging in:** enter any mobile number. There is no SMS service, so the backend returns the code in terminal.

## Features

- **Server-rendered pages**:
  - The home page and tour pages are rendered on the server and cached, refreshing every 2 hours.
  - Dashboard pages are also rendered on the server, but never cached, because the data belongs to one user.
  - Interactive parts (login, forms, basket) run in the browser and use React Query.
- **Automatic token refresh**: the access token expires after 1 hour, and it is renewed in two places.
  - **Server side:** the dashboard pages are rendered on the server, so the server needs a valid access token before the page loads. `proxy.ts` runs before protected routes (`/dashboard`, `/basket`). If the access token has expired, it uses the refresh token to get a new one. If there is no refresh token, the user is sent back to the home page.
  - **Browser side:** requests made from the browser (for example "reserve" on a tour page) go through an Axios interceptor. When a request fails with 401/403, it refreshes the token and retries the request.
- **SSR-safe modal**: the modal is rendered into `document.body` with a portal, so it isn't clipped by parent layouts. During server rendering `document` doesn't exist, so the modal uses a small `useIsClient` hook built on `useSyncExternalStore`. It returns `false` on the server and during hydration, then `true` in the browser, so the portal is only created on the client. The modal can be placed anywhere on the website without crashing the app.
- **Real national code validation**: the national code is checked with the official algorithm, not just its length.
  - Persian or Arabic digits are converted to English first.
  - The code must be exactly 10 digits and can't be one repeated digit (like `1111111111`).
  - The first 9 digits are multiplied by weights 10 down to 2 and summed, and the sum is divided by 11. If the remainder is less than 2, the last digit must equal the remainder. Otherwise it must equal `11 - remainder`.

## Contact

- GitHub: [ParsaDokhtMohammadi](https://github.com/ParsaDokhtMohammadi)
