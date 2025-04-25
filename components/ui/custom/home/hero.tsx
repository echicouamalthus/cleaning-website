import React from 'react'
import Image from "next/image"

export default function Hero() {
  return (
    <div className='flex justify-between md:items-center items-end md:h-[600px] h-[550px] md:px-0 px-4 -z-20'>
            <div className='max-w-[700px] mx-auto space-y-5'>
              <div className='bg-primary px-2 py-1 rounded-md font-poppins font-regular text-md md:w-fit w-40 md:mx-0 mx-auto'>
                Pristine Perfection
              </div>
              <h1 className='md:text-5xl text-4xl font-semibold md:leading-14 md:text-start text-center'>Sparkle & Shine: Your Trusted Cleaning Experts</h1>
              <p className='text-[16px] text-stone-600 md:text-start text-center'>Experience a spotless sanctuary with our expert cleaning services. Reliable, thorough, and tailored to your needs. Enjoy the freshness!</p>
    
              <div className='flex md:flex-row flex-col gap-4 items-center'>
                <button className='bg-secondary rounded-sm px-5 py-3 text-white md:w-fit w-80'>
                  book an Apointment
                </button>
                <button className='border border-primary rounded-sm px-5 py-3 md:w-fit w-80'>
                  Our Services
                </button>
              </div>
            </div>
            <div className='bg-red-400 h-full w-[620px] relative md:block hidden'>
              <Image className='absolute size-full object-cover' width={900} height={900} src={"https://framerusercontent.com/images/1qYX2XawkPEXaA9yP8rsrDeNXWg.jpg?scale-down-to=512"} alt={"image descriptif de l'activité"} />
            </div>
    </div>
  )
}
