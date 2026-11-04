import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cookieNames } from "@/constants/cookies"

export function proxy(request: NextRequest) {
  if (!request.cookies.has(cookieNames.refreshToken)) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/basket/:path*",
    "/checkout/:path*",
  ],
}
