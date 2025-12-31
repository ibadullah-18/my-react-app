import { useState } from "react"
import { loginUser } from "../stores/auth"
import { useDarkmode } from "../stores/darkmode"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { isDarkmodeEnabled } = useDarkmode()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const data = await loginUser(email, password)
      localStorage.setItem("accessToken", data.accessToken)
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user))
      }
      window.location.href = "/"
    } catch (err) {
      setError("Email or password is incorrect.")
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `
    w-full h-15 p-4 mb-3 text-lg rounded outline-none transition
    ${
      isDarkmodeEnabled
        ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-400"
        : "bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-yellow-400"
    }
  `

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={handleSubmit} className="w-[700px]">
        <h2 className="text-4xl font-poppins font-semibold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <a
          href="/register"
          className={`mb-4 inline-block text-sm ${
            isDarkmodeEnabled
              ? "text-blue-400 hover:underline"
              : "text-blue-600 hover:underline"
          }`}
        >
          Don&apos;t have an account? Register
        </a>

        <button
          type="submit"
          disabled={loading}
          className={`
            w-full h-15 mt-2 rounded text-lg font-poppins font-semibold transition
            ${
              isDarkmodeEnabled
                ? "bg-yellow-500 text-black hover:bg-yellow-400"
                : "bg-yellow-400 text-black hover:bg-yellow-500"
            }
          `}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  )
}

export default Login
