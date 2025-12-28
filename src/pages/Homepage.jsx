import Navbar from '../companents/Navbar'
import Postcart from '../companents/Postcart'
import Footer from '../companents/footer'
import { useState, useEffect } from 'react'
import { useDarkmode } from '../stores/darkmode'

const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [visibleCount, setVisibleCount] = useState(9);
    const { isDarkmodeEnabled } = useDarkmode()

    const getposts = async () => {
        try {
            const res = await fetch(`https://ilkinibadov.com/api/b/blogs?page=1&limit=100`)
            const data = await res.json()
            console.log(data);
            setPosts(data.blogs);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getposts()
    }, [])

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 4);
    };


    return (
        <div className= {`w-full h-fit ${isDarkmodeEnabled ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

            <Navbar />
            <div className='mt-10 w-[1550px] min-h-screen mx-auto'>

                <div className='grid grid-cols-3 gap-4'>
                    {posts.slice(0, visibleCount).map((post, index) => (
                        <Postcart
                            key={post._id}
                            post={post}
                            className={index === 0 ? "col-span-3" : "col-span-1"}
                            isBig={index === 0}

                        />
                    ))}
                </div>

                {visibleCount < posts.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Load More
                        </button>
                    </div>
                )}
            </div>
            <div className={`mt-100`}>
                <Footer />
            </div>
        </div>
    )
}
export default Homepage