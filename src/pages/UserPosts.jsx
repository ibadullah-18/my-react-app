import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Postcart from "../companents/Postcart"
import Navbar from "../companents/Navbar"
import Footer from "../companents/footer"
import { useDarkmode } from '../stores/darkmode'

const UserPosts = () => {
    const { userId } = useParams()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const { isDarkmodeEnabled, toggleDarkmode } = useDarkmode()
    useEffect(() => {
        const getUserPosts = async () => {
            try {
                const res = await fetch(`https://ilkinibadov.com/api/b/blogs?page=1&limit=100`)
                const data = await res.json()

                const filtered = data.blogs.filter(post => post.user._id === userId)
                setPosts(filtered)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        getUserPosts()
    }, [userId])

    if (loading) return <p className="text-center mt-10">Loading...</p>

    return (
        <div className={` w-full h-fit ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <Navbar />
            <div className={`${isDarkmodeEnabled ? "bg-gray-800 text-white rounded-lg" : "bg-gray-100 text-black rounded-lg"} w-full max-w-4xl mx-auto p-5 mt-10 mb-10 flex items-center justify-center`}>
                <h1 >
                    {posts.length > 0 ? posts[0].user.email : "User"}
                </h1>
            </div>
            <h1 className="w-full max-w-[1550px] mx-auto mt-10 mb-10 text-xl font-bold">Latest Post</h1>
            <div className="max-w-[1550px] mx-auto mt-10 mb-100">
                <div className="grid grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Postcart key={post._id} post={post} isBig={false} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPosts
