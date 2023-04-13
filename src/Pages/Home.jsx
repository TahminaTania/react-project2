import React from 'react'
import { useUserContext } from '../Context/userContext'
import { NavLink } from 'react-router-dom'

export default function Home() {
 
   
     const {logIn,user}=useUserContext()
  return (
    <div className='w-full h-screen bg-red-200'>

    </div>
  )
}
