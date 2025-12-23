import Navbar from '../companents/Navbar'
import Postcart from '../companents/Postcart'
import Footer from '../companents/footer'
import { useState, useEffect } from 'react'


const Homepage = () => {
    const [posts, setPosts] = useState([])
    const [visibleCount, setVisibleCount] = useState(9);

    const getposts = async () => {
        try {
            const res = await fetch("https://ilkinibadov.com/api/b/blogs")
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
        setVisibleCount(prev => prev + 3);
    };


    return (
        <div className=''>
            <Navbar />
            <div className='mt-10 w-full min-h-screen grid grid-cols-3 gap-4 '>
                {posts.slice(0, visibleCount).map((post, index) => (
                    <Postcart key={post._id} post={post} />
                ))}

                {visibleCount < posts.length && (
                    <div className="w-screen flex justify-center items-center mt-4 ">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Load More
                        </button>
                    </div>
                )}
            </div>
            <div className='mt-100'>
                <Footer />
            </div>
        </div>
    )
}
export default Homepage