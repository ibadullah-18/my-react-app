import { getAccessToken } from "./auth"
import { refreshToken } from "./refresh"

export const fetchWithAuth = async (url, options = {}) => {
  let token = getAccessToken()

  let res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.status === 401) {
    token = await refreshToken()

    res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    })
  }

  return res
}
