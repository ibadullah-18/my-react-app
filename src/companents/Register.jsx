import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useDarkmode } from "../stores/darkmode"

const Register = () => {
    const { isDarkmodeEnabled } = useDarkmode()
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const inputClass = `
    w-full p-4 mb-3 text-lg rounded outline-none transition
    ${isDarkmodeEnabled
            ? "bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-yellow-400"
            : "bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-yellow-400"
        }
  `

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)

        const payload = { firstname, lastname, email, password }
        console.log("REGISTER PAYLOAD:", payload)

        try {
            const res = await fetch("https://ilkinibadov.com/api/b/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })

            const text = await res.text() 
            console.log("BACKEND RESPONSE:", text)
        } catch (err) {
            console.error(err)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }



    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <form onSubmit={handleSubmit} className="w-[700px]">
                <h2 className="text-4xl font-poppins font-semibold mb-6 text-center">
                    Register
                </h2>

                <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className={inputClass}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className={inputClass}
                    required
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass}
                    required
                />

                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                <div className="flex justify-between items-center mb-4 text-sm">
                    <p>

                        <Link
                            to="/login"
                            className={`font-semibold ${isDarkmodeEnabled ? "text-blue-400 hover:underline" : "text-blue-600 hover:underline"}`}
                        >
                            Already have an account? Login
                        </Link>
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-4 mt-2 rounded text-lg font-semibold transition
            ${isDarkmodeEnabled ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}
                >
                    {loading ? "Loading..." : "Register"}
                </button>
            </form>
        </div>
    )
}

export default Register
