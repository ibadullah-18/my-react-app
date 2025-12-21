import Navbar from '../companents/Navbar'
import Postcart from '../companents/Postcart'
import { useState, useEffect } from 'react'


const Homepage = () => {
    const [posts, setPosts] = useState([])

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

    return (
        <div className=''>
            <Navbar />
            <div className='mt-10    w-full h-screen grid grid-cols-3 gap-4 '>
                {posts.map(post => <Postcart key={post._id} post={post} />)}
                </div>
        </div>
    )
}
export default Homepage