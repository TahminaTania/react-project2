import React, { useState } from 'react'
import { hotelData } from '../DataSet'

export default function SingleRoom() {
    const hotel=hotelData[1]

    const [showMore, setShowMore] = useState(false);
  return (
    <div className='pt-20'>
        <section class="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage:`url(${hotel.image})` }}>
         <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

            <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl font-extrabold sm:text-4xl ">Find your Forever Home in<strong class="block py-4 font-extrabold text-rose-700">{hotel.title}</strong></h1>

                <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed"> 
                {showMore ? hotel.details : `${hotel.details.substring(0, 150)}`}
                   <button className="" onClick={() => setShowMore(!showMore)}> <span className='text-blue-600 ml-2'>...{showMore ? "Show less" : "Show more"}</span></button></p>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#" class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">Book Now</a>
                    <a href="#" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">Learn More</a>
                </div>
                </div>
        </div>
        </section>
        {/* <section className='my-20 bg-white'>
          <h1 class="text-3xl font-extrabold sm:text-5xl text-center">Find your Dream in <strong class="font-extrabold text-rose-700">{hotel.title}</strong></h1>

          <div className='m-20 border-2 border-gray-400'>
            <div className='m-20'>
                {hotel.details}
            </div>
          </div>
        </section> */}
    </div>
  )
}
