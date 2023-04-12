import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


export default function Register() {

    const AddUser=(e)=>{
        e.preventDefault()
    }

  return (
    <div className='pt-20 w-full h-screen bg-blue-300 flex items-center justify-center'>


    <div className=' w-[350px]  flex lg:w-1/4 justify-center py-10 items-center bg-white'>

      <form onSubmit={AddUser}>
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Please enter all data correctly</p>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <span className='text-gray-200'><FaUserAlt/></span>
        <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>

      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Already Have an Account ? <NavLink to={"/login"} className='text-blue-400 font-bold'> Log In</NavLink></span>
      </form>

    </div>
  </div>
  )
}
