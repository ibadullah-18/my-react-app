import { Link, useNavigate } from "react-router-dom"
import { useDarkmode } from "../stores/darkmode"
import { getAccessToken } from "../utils/auth"

const Postcart = ({ post, isBig, isOwner, onDelete }) => {
  const { isDarkmodeEnabled } = useDarkmode()
  const navigate = useNavigate()

  const handleDelete = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const accessToken = getAccessToken()
    if (!accessToken) return

    const confirmDelete = window.confirm("Post silinsin?")
    if (!confirmDelete) return

    try {
      const res = await fetch(
        `https://ilkinibadov.com/api/b/blogs/${post._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      if (!res.ok) {
        throw new Error("Delete failed")
      }

      onDelete(post._id)
    } catch (err) {
      alert("Post silinmədi")
    }
  }

  return (
    <Link
      to={`/details/${post._id}`}
      state={true}
      className={`
        relative w-full h-fit border rounded-lg shadow-lg overflow-hidden
        hover:scale-[1.01] duration-300
        ${isBig ? "col-span-3" : "col-span-1"}
        ${
          isDarkmodeEnabled
            ? "bg-gray-900 border-gray-700 text-white"
            : "bg-white border-gray-300 text-black"
        }
      `}
    >
      {isOwner && (
        <button
          onClick={handleDelete}
          className="absolute top-3 right-3 z-20
          bg-red-600 text-white px-1 py-1 rounded
          hover:bg-red-700"
        >
          🗑️
        </button>
      )}

      <img
        src={post.image}
        alt=""
        className={`w-full object-cover ${
          isBig ? "h-[450px]" : "h-[250px]"
        }`}
      />

      {isBig && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      )}

      <div
        className={`${
          isBig
            ? "absolute bottom-0 left-0 w-full p-6 text-white z-10"
            : `p-5 ${isDarkmodeEnabled ? "bg-gray-900" : "bg-white"}`
        }`}
      >
        <p
          className={`inline-block rounded px-3 py-1 text-sm font-bold ${
            isBig
              ? "bg-blue-600/90"
              : isDarkmodeEnabled
              ? "bg-blue-900 text-blue-300"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {post.category}
        </p>

        <h2
          className={`mt-3 font-semibold ${
            isBig ? "text-3xl" : "text-lg"
          }`}
        >
          {post.title}
        </h2>

        <div className="w-[350px] grid grid-cols-2 mt-4 gap-4 text-sm">
          <p
            className="hover:underline cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              navigate(`/user/${post.user._id}`)
            }}
          >
            {post.user.email}
          </p>

          <p>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Postcart
