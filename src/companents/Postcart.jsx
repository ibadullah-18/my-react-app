
import { Link } from "react-router-dom"


const Postcart = ({ post }) => {
  const isPosts = true;

  return (
      <Link to={`/details/${post._id}`} state={isPosts} className={`relative w-[500px] h-fit border border-gray-300 p-4 rounded-lg shadow-lg hover:bg-gray-200 duration-300`}>
        <img className="w-full h-[300px] object-contain" src={post.image} alt="" />
        <p className="bg-blue-100 text-blue-600 font-bold inline-block rounded p-1 flex items-center justify-center mt-4">{post.category}</p>
        <h2 className="mt-3 font-semibold text-lg">{post.title}</h2>
        <div className="flex grid grid-cols-2 mt-4 gap-4">
          <p className="text-gray-600 text-sm ">{post.user.email}</p>
        <p className="text-gray-600 text-sm">{post.createdAt}</p>
        </div>
      </Link>
    
  )
}

export default Postcart