import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Union.png'
import SearchIcon from '../assets/search-outline.png'
import Sunny from '../assets/sunny.png'
import Moon from '../assets/night-mode.png'
import { useDarkmode } from '../stores/darkmode'


const Navbar = () => {
    const { isDarkmodeEnabled, toggleDarkmode } = useDarkmode()

    return (
        <div className={` w-full h-fit ${isDarkmodeEnabled ? "bg-black text-white" : "bg-white text-black"}`}>
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
                        <button className={`w-11 h-7 flex items-center bg-zinc-200  rounded-full p-1 cursor-pointer`} onClick={toggleDarkmode}>
                            <div className={`flex items-center justify-center bg-white w-5 h-5 rounded-full shadow-md transform duration-300  ${isDarkmodeEnabled ? "translate-x-4" : ""} `}>
                                {isDarkmodeEnabled ? <img src={Moon} alt="" /> : <img src={Sunny} alt="" />}
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className="transition duration ease-in-out bg-blue-600 text-white rounded p-2 ">Sing in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
