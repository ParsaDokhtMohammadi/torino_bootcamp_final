export type User = {
  id: string
  firstName: string
  lastName: string
  mobile: string
}

export type Role = "guest" | "user"

export type SendOtpBody = {
  mobile: string
}

export type SendOtpResponse = {
  message: string
  code: string
}

export type CheckOtpBody = {
  mobile: string
  code: string
}

export type CheckOtpResponse = {
  accessToken: string
  refreshToken: string
  user: User
}

export type RefreshTokenBody = {
  refreshToken: string
}

export type RefreshTokenResponse = {
  accessToken: string
}
