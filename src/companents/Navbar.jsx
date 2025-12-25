import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Union.png'
import SearchIcon from '../assets/search-outline.png'

const Navbar = () => {
    return (
        <div className='w-full h-[100px] flex flex-row items-center gap-10 px-5'>
            <div className='flex flex-row items-center'>
                <img className='mx-3' src={Logo} alt="Logo" />
                <h1 className='text-2xl '>Meta</h1>
                <h1 className='text-2xl font-bold mr-[100px]'>Blog</h1>
            </div>
            <div className='px-10 flex flex-row items-center justify-center gap-10'>
                <Link to="/" className='hover:text-blue-600'>Home</Link>
                <Link to="/write" className='hover:text-blue-600'>Write a Blog</Link>
                <Link to="/my-blogs" className='hover:text-blue-600'>My Blogs</Link>
                <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
            </div>
            <div className='flex flex-row items-center gap-6 ml-auto mr-1'>
                <div className='flex flex-row items-center relative'>
                    <input
                        type="search"
                        placeholder='Search'    
                        className=' bg-gray-300 p-1 pl-8 rounded'
                    />
                    <img
                        src={SearchIcon}
                        className='absolute left-2'
                    />
                </div>

                <div>
                    <button className="transition duration ease-in-out bg-black text-white rounded p-2">Dark mode</button>
                </div>
                <div>
                    <button className="transition duration ease-in-out bg-blue-600 text-white rounded p-2 ">Sing in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
