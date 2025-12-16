import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] bg-blue-300 flex flex-row items-center '>
            <img className='mx-3' src="src\assets\Union.png" alt="Logo" />
            <h1 className='text-2xl '>Meta</h1>
            <h1 className='text-2xl font-bold mr-[100px]'>Blog</h1>
            <div className='bg-blue-200 px-45 flex flex-row items-center justify-center gap-15'>
                <p>Home</p>
                <p>Write a Blog</p>
                <p>My Blogs</p>
                <p>Contact</p>
            </div>
            <div>
                <input type="search" placeholder='Search' className='bg-gray-400 p-1 ' />
            </div>
        </div>
    )
}

export default Navbar