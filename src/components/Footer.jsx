import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsPinterest, BsTwitter } from 'react-icons/bs';
import {BiPhoneCall, BiLocationPlus} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-700 py-[5rem]">
            <div className='mx-auto py-3 px-4 grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-gray-200'>
                <div>
                    <div className='my-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='.....'/>

                            <div className='w-[150px] h-full'> 
                            <button  class="relative bg-green-500 text-white rounded-md font-medium w-[150px] h-full my-6 ml-3 px-6 py-3 inline-flex items-center justify-center hover:font-bold duration-[2s]  overflow-hidden text-medium group">
                            <span class="absolute w-0  transition-all duration-700 ease-out bg-purple-500 rounded group-hover:w-full group-hover:h-full"></span>
                            <span class="relative">Subscribe</span>
                            </button></div>
                           {/*  <button className=' bg-green-500 text-white rounded-md font-medium w-[150px] h-full my-6 ml-3 px-6 py-3'>Subscribe</button> */}
                           {/* copy pasted this hover effect from here---> https://devdojo.com/tailwindcss/buttons#_ */}
                        </div>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-2 ml-10'>
                        <div>
                            <h3 className='font-medium text-green-500 mt-10'>Company</h3>
                            <div className='flex flex-col py-2'>
                                <NavLink className='text-sm py-2'>About us</NavLink>
                                <NavLink className='text-sm py-2'>Services</NavLink>
                                <NavLink className='text-sm py-2'>Latest News</NavLink>
                            </div>
                        </div>

                        <div>
                            <h3 className='font-medium text-green-500 mt-10'>Support</h3>
                            <div className='flex flex-col py-2'>
                                <NavLink className='text-sm py-2'>FAQ's</NavLink>
                                <NavLink className='text-sm py-2'>Privacy Policy</NavLink>
                                <NavLink className='text-sm py-2'>Terms & Condition</NavLink>
                                <NavLink className='text-sm py-2'>Community</NavLink>
                                <NavLink className='text-sm py-2'>Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='font-medium text-green-500 mt-10'>Address</h3>
                    <div className='flex flex-col py-2'>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><BiLocationPlus/></span>2nd Floor, 273/3, Dhaka Cantonment, Mirpur Link Road, Dhaka-1206</NavLink>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><AiOutlineMail/></span>info@cloudproductionltd.com <br/>admin@cloudproductionltd.com</NavLink>
                        <NavLink className='text-sm py-2 flex'><span className='px-2'><BiPhoneCall/></span>Phone: +8801752411182</NavLink>
                        <div className='flex justify-between md:w-[75%] my-6'>
                            <BsFacebook className=' rounded-full' size={25}/>
                            <BsInstagram className='    rounded-full' size={25}/>
                            <BsLinkedin className='   rounded-full' size={25}/>
                            <BsPinterest className='  rounded-full'  size={25}/>
                            <BsTwitter className='   rounded-full'  size={25}/>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer

