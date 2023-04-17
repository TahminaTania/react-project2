import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { useUserContext } from '../Context/userContext';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {

  const {logIn}=useUserContext()
  const navigate = useNavigate()
 

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const Byname = event.target.name;
    // targetting by name
    const Byvalue = event.target.value;
    // targetting by value
    setInputs(values => ({...values, [Byname]: Byvalue}))
    // putting the value on the name target
  }
   
  const handleSubmit = (event) => {
     event.preventDefault();
    logIn(inputs.username);
    setInputs({})
    console.log(logIn, "inputs now")
    navigate('/home')
  }

 
  // console.log(inputs, "inputs now")

  return (
    <div className='pt-20 w-full h-screen bg-blue-300 flex items-center justify-center'>


      <div className=' w-[350px]  flex lg:w-1/4 justify-center py-10 items-center bg-white'>

		<form className="" onSubmit={handleSubmit}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello !</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Please enter all data correctly</p>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <span className='text-gray-200'><FaUserAlt/></span>
            <input className="pl-2 outline-none border-none" 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
             />
        </div>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <span className='text-gray-200'><FaUserAlt/></span>
            <input className="pl-2 outline-none border-none" 
            type="text" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange} />
        </div>

        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Log In</button>
        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Don't have an Account ? <NavLink to={'/Register'} className='text-blue-400 font-bold'>Sign Up</NavLink></span>
		</form>

      </div>
    </div>
  )
}
