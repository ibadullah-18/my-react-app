
import axios from 'axios'

const Login = () => {
    const { setAccessToken, setRefreshToken } = useTokens()
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleInputChange = (title, value) => {
        setFormData(prevState => ({
            ...prevState,
            [title]: value
        }))
    }

    const handleLogin = async () => {
        try {
            const { data, statusText } = await axios.post("https://ilkinibadov.com/api/v1/auth/login", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (statusText === "OK") {
                setAccessToken(data.accessToken)
                setRefreshToken(data.refreshToken)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='max-w-[300px] w-full flex flex-col gap-5 p-5 border border-zinc-300'>
                <input value={formData.email} placeholder='Enter your email' className='border border-zinc-300 p-2' onChange={(e) => {
                    handleInputChange("email", e.target.value)
                }} type="email" />

                <input value={formData.password} placeholder='Enter your password' className='border border-zinc-300 p-2' onChange={(e) => {
                    handleInputChange("password", e.target.value)
                }} type="password" />

                <button onClick={handleLogin} className='bg-slate-900 text-white py-2'>Login</button>
            </div>
        </div>
    )
}

export default Login