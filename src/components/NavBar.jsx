import React from 'react'
import { AiOutlineClose,AiOutlineMenu,AiOutlineUser} from "react-icons/ai";
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useUserContext } from '../Context/userContext';


function Navbar() {
    const [menu,Setmenu]=useState(false);
    const {user,logOut}=useUserContext()

    const handleMenu=()=>{
        Setmenu(!menu)
    }
    console.log(user.IsGuest, "=TF")

    return (
       <div className='  bg-white border-b-4  w-full'>    
            <div className='z-10 grid grid-cols-4 gap-2 h-20  w-full mx-auto  px-4 text-blue-800'>
            {!user.IsGuest?
            ( 
                <div className='flex flex-row my-auto'>
                    <span className='my-auto text-green-600'><AiOutlineUser size={20}/></span>
                    <h1 className='w-full text-xl font-bold '>Hello <span className='text-[#00df9a]'>{user.name}</span></h1>
                </div>
                 ) :(
                     <div> </div>
                 )}

                <div className='my-auto lg:col-span-2 sm:col-span-0 md:col-span-2'>
                    <div className='hidden md:flex justify-between'>
                            <NavLink to={'/'} className='p-4 font-bold'>Home</NavLink>
                            <NavLink to={'/blog'} className='p-4 font-bold'>Blog</NavLink>
                            <NavLink to={'/reals'} className='p-4 font-bold'>Reals</NavLink>
                            <NavLink to={'/about'} className='p-4 font-bold'>About</NavLink>
                            <NavLink to={'/contact'} className='p-4 font-bold'>Contact</NavLink>
                    </div>
                </div>

                <div className='my-auto col-span-2  md:col-span-1 '>
                {user.IsGuest?
                       ( 
                        <NavLink to={"/login"} className="relative md:float-right sm:float-left bg-green-500 text-white rounded-md font-medium  h-full md:px-6 md:py-3 xsm:px-3 xsm:py-2  inline-flex items-center justify-center hover:font-bold duration-[2s]  overflow-hidden text-medium group" >
                            <span className="relative flex whitespace-nowrap"><span><AiOutlineUser/></span>Log In </span>
                        </NavLink>
                       ) :
                       (
                        <NavLink onClick={logOut} className="relative md:float-right sm:float-left bg-green-500 text-white rounded-md font-medium  h-full md:px-6 md:py-3 xsm:px-3 xsm:py-2  inline-flex items-center justify-center hover:font-bold duration-[2s]  overflow-hidden text-medium group" >
                            <span className="relative flex whitespace-nowrap"><span><AiOutlineUser/></span>Log Out</span>
                        </NavLink>

                       )}
                   
                   
                </div>
            </div>


            <div onClick={handleMenu} className='block md:hidden  float-right sm:mt-[-50px] xsm:mt-[-50px] text-blue-900' >
                {menu ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35} />}
            </div>
            <div>
                <div className=''>
                    <div className={menu ? 'z-10 flex flex-col fixed text-white left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%]  opacity-0'}>
                           
                            <NavLink to={"/"} className='p-4 border-b border-gray-600 text-white' onClick={(e)=>Setmenu(false)}>Home</NavLink >
                            <NavLink to={"/blog"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>Blog</NavLink >
                            <NavLink to={"/reals"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>Reals</NavLink >
                            <NavLink to={"/about"} className='p-4 border-b border-gray-600' onClick={(e)=>Setmenu(false)}>About</NavLink >
                            <NavLink to={"/contact"} className='p-4' onClick={(e)=>Setmenu(false)}>Contact</NavLink >
                    </div>
            </div>


            </div>


       </div>
    )
}

export default Navbar
