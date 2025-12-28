import { Link } from "react-router-dom"
import { useDarkmode } from '../stores/darkmode'

const Postcart = ({ post, isBig }) => {
  const isPosts = true;
  const { isDarkmodeEnabled } = useDarkmode()

  return (
    <Link
      to={`/details/${post._id}`}
      state={true}
      className={`
        ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"}
    relative 
    w-full 
    h-fit 
    border 
    border-gray-300 
    rounded-lg 
    shadow-lg 
    overflow-hidden
    hover:scale-[1.01]
    duration-300
    ${isBig ? "col-span-3" : "col-span-1"}`}
    >
      <img
        src={post.image}
        alt=""
        className={`w-full object-cover ${isBig ? "h-[450px]" : "h-[250px]"}`}
      />

      {isBig && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      )}

      <div
        className={`
          ${isBig
            ? "absolute bottom-0 left-0 w-full p-6 text-white z-10"
            : "p-5 bg-white"}
        `}
      >
        <p
          className={`
            inline-block rounded px-3 py-1 text-sm font-bold
            ${isBig
              ? "bg-blue-600/90"
              : "bg-blue-100 text-blue-600"}
          `}
        >
          {post.category}
        </p>

        <h2 className={`mt-3 font-semibold ${isBig ? "text-3xl" : "text-lg"}`}>
          {post.title}
        </h2>

        <div className="w-[350px] grid grid-cols-2 mt-4 gap-4 text-sm">
          <p
            className={`${isBig ? "text-gray-200" : "text-gray-600"}  hover:underline cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/user/${post.user._id}`);
            }}
          >
            {post.user.email}
          </p>
          <p className={`${isBig ? "text-gray-200" : "text-gray-600"}`}>{post.createdAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default Postcart
