import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] flex flex-row items-center gap-10 '>
            <div className='flex flex-row items-center'>
                <img className='mx-3' src="src\assets\Union.png" alt="Logo" />
                <h1 className='text-2xl '>Meta</h1>
                <h1 className='text-2xl font-bold mr-[100px]'>Blog</h1>
            </div>
            <div className='px-55 flex flex-row items-center justify-center gap-15'>
                <p>Home</p>
                <p>Write a Blog</p>
                <p>My Blogs</p>
                <p>Contact</p>
            </div>
            <div className='flex flex-row items-center gap-6 ml-auto mr-10'> 
                <div className='flex flex-row items-center relative'>
                    <input
                        type="search"
                        placeholder='Search'
                        className=' bg-gray-300 p-1 pl-8 rounded'
                    />
                    <img
                        src="src/assets/search-outline.png"
                        alt="search"
                        className='absolute left-2'
                    />
                </div>

                <div>
                    <button class="transition duration ease-in-out bg-black text-white rounded p-2">Dark mode</button>
                </div>
                <div>
                    <button class="transition duration ease-in-out bg-blue-600 text-white rounded p-2 ">Sing in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar