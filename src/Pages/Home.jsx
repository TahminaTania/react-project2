import React from 'react'
import { useUserContext } from '../Context/userContext'
import { NavLink } from 'react-router-dom'

export default function Home() {
 
   
     const {logIn,user}=useUserContext()
  return (
    <div className='w-full h-screen bg-red-200'>
        Home
        <div>{user.name}</div>

        go to this page <NavLink to={'/blog'}>BLOG</NavLink>
        
    </div>
  )
}
