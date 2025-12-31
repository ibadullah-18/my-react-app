export const loginUser = async (email, password) => {
  const res = await fetch(
    "https://ilkinibadov.com/api/b/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }
  )

  if (!res.ok) {
    throw new Error("Login failed")
  }

  return res.json()
}
