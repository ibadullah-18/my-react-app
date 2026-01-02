import { setAccessToken } from "./auth"

export const refreshToken = async () => {
  const res = await fetch(
    "https://ilkinibadov.com/api/b/auth/refresh",
    {
      method: "POST",
      credentials: "include", 
    }
  )

  if (!res.ok) {
    throw new Error("Refresh token expired")
  }

  const data = await res.json()
  setAccessToken(data.accessToken)
  return data.accessToken
}
