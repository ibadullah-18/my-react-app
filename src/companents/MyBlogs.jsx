import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAccessToken, logout } from "../utils/auth"
import { useDarkmode } from "../stores/darkmode"
import Postcart from "./Postcart"

const MyBlogs = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const { isDarkmodeEnabled } = useDarkmode() 

  useEffect(() => {
    const token = getAccessToken()

    if (!token) {
      navigate("/login")
      return
    }

    const fetchMyBlogs = async () => {
      try {
        const res = await fetch(
          "https://ilkinibadov.com/api/b/blogs/user/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (res.status === 401) throw new Error("Unauthorized")
        if (!res.ok) throw new Error("Fetch failed")

        const data = await res.json()
        setPosts(data)
      } catch (err) {
        logout()
        navigate("/login")
      }
    }

    fetchMyBlogs()
  }, [])

  return (
    <div className={`p-10 pb-50 ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      
      {posts.length > 0 && posts[0].user && (
        <div className={`w-full max-w-4xl mx-auto p-5 mt-10 mb-10 flex items-center justify-center rounded-lg ${
          isDarkmodeEnabled ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}>
          <h2 className="text-xl font-semibold">{posts[0].user.email}</h2>
        </div>
      )}

      <h1 className="text-3xl font-bold my-10">My Blogs</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">Post tapılmadı</p>
      )}

      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <Postcart
            key={post._id}
            post={post}
            isOwner={true}
            onDelete={(id) =>
              setPosts((prev) => prev.filter((p) => p._id !== id))
            }
          />
        ))}
      </div>
    </div>
  )
}

export default MyBlogs
