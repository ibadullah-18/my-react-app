import { useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

const Detalis = () => {
    const { id } = useParams()
    const location = useLocation()
    const { isPosts } = location.state
    const [loading, setLoading] = useState(true)
    const [postDetalis, setPostDetalis] = useState({})

    const fetchPostDetails = async () => {
        try {
            const res = await fetch(
                `https://ilkinibadov.com/api/b/blogs/blog/${id}`
            )
            const data = await res.json()
            console.log(data);
            setPostDetalis(data)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        console.log(isPosts)
        fetchPostDetails()
    }, [id])

    if (loading) return <p>Loading...</p>
    return (
        <div className="w-full max-w-4xl mx-auto p-5 mt-10 mb-30">
            <p className="bg-blue-600 text-white font-bold inline-block rounded p-1 px-2 flex items-center justify-center mt-4">{postDetalis.category}</p>
            <h2 className="mt-3 font-semibold text-[40px]">{postDetalis.title}</h2>
            <div className=" w-[500px] flex grid grid-cols-2 mt-4 gap-2 ">
                <p className="text-gray-600 text-sm ">{postDetalis.user.email}</p>
                <p className="text-gray-600 text-sm">{postDetalis.createdAt}</p>
            </div>
            <img className="w-full h-full object-contain border border-gray-300 rounded-lg shadow-lg mt-4" src={postDetalis.image} alt="" />
            <p className="mt-4 text-[24px] text-gray-800">{postDetalis.description}</p>
        </div>
    )
}

export default Detalis
