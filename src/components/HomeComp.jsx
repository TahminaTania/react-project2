import React, { useState } from 'react'
import { hotelData } from '../DataSet'
import HotelRooms from './HotelRooms'

export default function HomeComp({categories,filterItems,menuItem,handleSearchClick,setSearchVal}) {

console.log(categories)



  return (
    <div>
        <div className='mt-[100px]'>
           <div className=''>
                <div className='flex flex-row items-center  md:w-[50%] xsm:w-[80%] mx-auto'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='.....' onChange={e => setSearchVal(e.target.value)}/>
                    <button className=' bg-blue-900 text-white rounded-md font-medium  h-full my-1 ml-1 px-3 py-3' onClick={handleSearchClick}>Search</button> 
                </div>
            </div>
        </div>

        <div className='flex flex-row justify-between mt-[50px] md:w-[50%] sm:w-[90%] xsm:w-[95%] mx-auto'>
            <div><button className=' bg-gray-400 text-gray-700 hover:bg-blue-900 hover:text-white rounded-full font-medium  h-full  px-4 py-1' onClick={()=> filterItems("Hotel")}>Hotel</button></div>
            <div><button className=' bg-gray-400 text-gray-700 hover:bg-blue-900 hover:text-white rounded-full font-medium  h-full mx-2 px-4 py-1' onClick={()=> filterItems("Apartment")}>Apartment</button></div>
            <div><button className=' bg-gray-400 text-gray-700 hover:bg-blue-900 hover:text-white rounded-full font-medium  h-full mx-2 px-4 py-1' onClick={()=> filterItems("Airbnb")}>Airbnb</button></div>
            <div><button className=' bg-gray-400 text-gray-700 hover:bg-blue-900 hover:text-white rounded-full font-medium  h-full px-4 py-1' onClick={()=> filterItems("Motel")}>Motel</button></div>
        </div>
        
    <div>
     <div className=' text-center mt-20 '>Total: <span className='font-bold'>{menuItem.length}</span></div>
        {
            menuItem.map((hotel)=>{
            return(
            // <div key={hotel.id}> 
              <HotelRooms hotel={hotel} key={hotel.id}/>
            // </div>
            )
            })
        }
      </div>
    </div>
  )
}
