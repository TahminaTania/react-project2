import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserContext } from '../Context/userContext';


export default function Register() {

  const {logIn}=useUserContext()
  const navigate = useNavigate()


  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const Byname = event.target.name;
    const Byvalue = event.target.value;
    setInputs(values => ({...values, [Byname]: Byvalue}))
  }
   

    const AddUser=(e)=>{
        e.preventDefault()
        logIn(inputs.username);
        setInputs({})
        console.log(logIn, "inputs now")
        navigate('/home')
    }

  return (
    <div className='pt-20 w-full h-screen bg-blue-300 flex items-center justify-center'>


    <div className=' w-[350px]  flex lg:w-1/4 justify-center py-10 items-center bg-white'>

      <form onSubmit={AddUser}>
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Please enter all data correctly</p>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <span className='text-gray-200'><FaUserAlt/></span>
        <input className="pl-2 outline-none border-none" 
        type="text" 
        name="fullname" 
        id="" 
        placeholder="Full name"
        value={inputs.fullname || ""} 
        onChange={handleChange} />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" 
          type="text" 
          name="username" 
          id="" 
          placeholder="Username" 
          value={inputs.username || ""} 
          onChange={handleChange}
            />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" 
          type="text" 
          name="email" id="" 
          placeholder="Email Address"
          value={inputs.email || ""} 
          onChange={handleChange} />
      </div>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <span className='text-gray-200'><FaUserAlt/></span>
          <input className="pl-2 outline-none border-none" type="text" 
          name="password" 
          id="" 
          placeholder="Password"
          value={inputs.password || ""} 
          onChange={handleChange} />
      </div>

      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Already Have an Account ? <NavLink to={"/"} className='text-blue-400 font-bold'> Log In</NavLink></span>
      </form>

    </div>
  </div>
  )
}
