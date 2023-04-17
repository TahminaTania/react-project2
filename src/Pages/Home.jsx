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

const [searchVal, setSearchVal] = useState("");
function handleSearchClick() {

  console.log("handle search clicked")

    if (searchVal === "") { 
      setMenuItems(menuItem);
       return; 
      }
    const filterBySearch = menuItem.filter((item) => {
        if (item.title.toLowerCase().includes(searchVal.toLowerCase() )|| item.details.toLowerCase().includes(searchVal.toLowerCase() )
            ) {
               return item; 
              }
    })
    setMenuItems(filterBySearch);
}

     const {logIn,user}=useUserContext()

  return (
    <div className='w-full h-full bg-cyan-100 py-20'>
     <HomeComp filterItems={filterItems} categories={categories} menuItem={menuItem} handleSearchClick={handleSearchClick}setSearchVal={setSearchVal} />

    </div>
  )
}
