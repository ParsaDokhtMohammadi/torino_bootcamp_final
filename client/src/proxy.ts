import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cookieNames } from "@/constants/cookies"
import type { RefreshTokenResponse } from "@/types/auth"

const ACCESS_TOKEN_MAX_AGE = 60 * 60

function redirectHome(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url))
  response.cookies.delete(cookieNames.accessToken)
  response.cookies.delete(cookieNames.refreshToken)
  response.cookies.delete(cookieNames.user)
  return response
}

async function refreshAccessToken(refreshToken: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
    cache: "no-store",
  })
  if (!res.ok) return null
  const data = (await res.json()) as RefreshTokenResponse
  return data.accessToken
}

export async function proxy(request: NextRequest) {
  const refreshToken = request.cookies.get(cookieNames.refreshToken)?.value
  if (!refreshToken) return redirectHome(request)

  if (request.cookies.has(cookieNames.accessToken)) return NextResponse.next()

  const accessToken = await refreshAccessToken(refreshToken).catch(() => null)
  if (!accessToken) return redirectHome(request)

  request.cookies.set(cookieNames.accessToken, accessToken)
  const response = NextResponse.next({ request: { headers: request.headers } })
  response.cookies.set(cookieNames.accessToken, accessToken, { maxAge: ACCESS_TOKEN_MAX_AGE, path: "/" })
  return response
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/basket/:path*",
    "/checkout/:path*",
  ],
}
