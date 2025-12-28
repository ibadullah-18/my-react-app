import React from 'react'
import Logo from '../assets/Union.png'
import { useDarkmode } from '../stores/darkmode'

const Footer = () => {
    const { isDarkmodeEnabled } = useDarkmode()
    return (
        <div className={` w-full h-fit py-10 ${isDarkmodeEnabled ? "bg-black text-white" : "bg-white text-black"}`}>
            <div className='flex flex-row items-center justify-between w-[1200px] ml-[150px]' >
                <div className='w-[300px]'>
                    <h1 className='font-bold text-[20px]'>About</h1>
                    <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='flex flex-row mt-4'>
                        <h1 className='font-bold '>Email:</h1>
                        <p className='text-gray-600 pl-1'>info@jstemplate.net</p>
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='font-bold'>Phone:</h1>
                        <p className='text-gray-600 pl-1'>+123 456 7890</p>
                    </div>
                </div>
                <div className='w-[300px]'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h1 className='font-bold text-[20px]'>Quick Links</h1>
                            <ul className='mt-2 text-gray-600'>
                                <li className='mt-3'>About Us</li>
                                <li className='mt-1'>Services</li>
                                <li className='mt-1'>Contact</li>
                                <li className='mt-1'>Home</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>Category</h1>
                            <ul className='mt-2 text-gray-600'>
                                <li className='mt-3'>Technology</li>
                                <li className='mt-1'>Health</li>
                                <li className='mt-1'>Travel</li>
                                <li className='mt-1'>Food</li>
                                <li className='mt-1'>Sports</li>
                                <li className='mt-1'>Economy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-[150px] border-t border-gray-300 w-[1200px] my-5 py-5 '>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <img className='mx-3' src={Logo} />
                        <h1 className='text-2xl '>Meta</h1>
                        <h1 className='text-2xl font-bold mr-[100px]'>Blog</h1>
                    </div>
                    <div>
                        <h1 className='text-gray-600 '>© 2024 Meta Blog. All rights reserved.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer