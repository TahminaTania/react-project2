import React, { useState } from 'react'
import { useUserContext } from '../Context/userContext'

import { hotelData } from '../DataSet'
import HotelRooms from '../components/HotelRooms'
import HomeComp from '../components/HomeComp'

export default function Home() { 

  const allCategories=[...new Set(hotelData.map((item)=> item.category))];
  const [menuItem,setMenuItems]=useState(hotelData);
  const [categories, setCategories]=useState(allCategories);

  const filterItems =(category)=>{
    const newItems =hotelData.filter((item)=> item.category ===category);
    setMenuItems(newItems)

  }
     const {logIn,user}=useUserContext()

  return (
    <div className='w-full h-full bg-cyan-100 py-20'>
     <HomeComp filterItems={filterItems} categories={categories} menuItem={menuItem} />

    </div>
  )
}
