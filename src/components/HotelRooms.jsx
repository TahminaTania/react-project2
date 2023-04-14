import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HotelRooms({hotel}) {
  return (
<div class="container my-24 px-6 mx-auto">

  <section class="mb-32 text-gray-800 text-center md:text-left">

    <div class="block rounded-lg shadow-lg bg-white">
      <div class="flex flex-wrap items-center ">
        <div class="grow-0  shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
          <img src={hotel.image} alt="room"
            class="w-full h-[500px] m-5 object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg " />
        </div>
        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-3xl font-bold mb-2 text-blue-600">{hotel.title}</h2>
            <p>{hotel.category}</p>
            <div className='flex flex-wrap items-center justify-center md:justify-start'>
                <p class="font-semibold mb-4 text-gray-500">{hotel.email} |</p>
                <p class="font-semibold mb-4  text-gray-500">| {hotel.phone}</p>
            </div>
            <p class="font-semibold mb-4">{hotel.location}</p>
            <p class="text-gray-500 mb-6">{hotel.details}</p>
             <div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' ><NavLink to={`/hotel/${hotel.id}`}>See Details</NavLink></button>
             </div>
          </div>
        </div>
      </div>
    </div>

  </section>


</div>

  )
}
