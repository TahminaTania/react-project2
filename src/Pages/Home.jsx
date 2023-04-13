import React from 'react'
import { useUserContext } from '../Context/userContext'

import { hotelData } from '../DataSet'
import HotelRooms from '../components/HotelRooms'
import HomeComp from '../components/HomeComp'

export default function Home() { 
     const {logIn,user}=useUserContext()

  return (
    <div className='w-full h-full bg-cyan-100 py-20'>
     <HomeComp />

    </div>
  )
}
