import { useParams, useLocation, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDarkmode } from '../stores/darkmode'

const Detalis = () => {
  const { id } = useParams()
  const location = useLocation()
  const isPosts = location.state || false  

  const [loading, setLoading] = useState(true)
  const [postDetalis, setPostDetalis] = useState(null)
  const { isDarkmodeEnabled } = useDarkmode()

  const fetchPostDetails = async () => {
    try {
      const res = await fetch(
        `https://ilkinibadov.com/api/b/blogs/blog/${id}`
      )
      const data = await res.json()
      setPostDetalis(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPostDetails()
  }, [id])

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!postDetalis) return null

  return (
    <div  className={` w-full h-fit ${isDarkmodeEnabled ? "bg-black text-white" : "bg-white text-black"}`}> 
    <div className="w-full max-w-4xl mx-auto p-5 mt-10 mb-30">
      <p className="bg-blue-600 text-white font-bold inline-block rounded px-2 py-1 mt-4">
        {postDetalis.category}
      </p>

      <h2 className="mt-3 font-semibold text-[40px]">
        {postDetalis.title}
      </h2>

      <div className="w-[500px] grid grid-cols-2 mt-4 gap-2 text-sm">
        <Link
          to={`/user/${postDetalis.user._id}`}
          className="text-gray-600 hover:underline"
        >
          {postDetalis.user.email}
        </Link>

        <p className="text-gray-600">
          {postDetalis.createdAt}
        </p>
      </div>

      <img
        className="w-full object-contain border border-gray-300 rounded-lg shadow-lg mt-6"
        src={postDetalis.image}
        alt=""
      />

      <p className="mt-6 text-[24px] text-gray-500">
        {postDetalis.description}
      </p>
    </div>
    </div>
  )
}

export default Detalis
