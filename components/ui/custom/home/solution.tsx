import React from 'react'
import Image from 'next/image'

export default function Solution() {
  return (
    <div className='max-w-7xl mx-auto space-y-10 md:min-h-screen md:px-0 px-4 md:py-0 py-10'>
        <div className='flex justify-center items-center flex-col gap-10'>
          <h1 className='md:text-5xl text-4xl text-center font-semibold'>Comprehensive Cleaning Solutions</h1>
          <p className='text-[16px] text-stone-600 max-w-2xl mx-auto text-center'>At Delta Cleaning, we provide top-quality cleaning services tailored to your needs. Our team ensures every corner of your space shines. Here’s what we offer:</p>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='bg-secondary text-white p-5 md:h-60 h-80 flex flex-col justify-between items-start rounded-md'>
              <div className='space-y-4'>
                <h1 className='text-2xl font-medium'>Residential Cleaning</h1>
                <p>Keep your home spotless and welcoming with our comprehensive services, from regular housekeeping to deep cleaning.</p>
              </div>
              <button className='border border-primary rounded-sm px-5 py-3 w-fit'>
                  Learn More
              </button>
            </div>
            <div className='bg-secondary text-white p-5 md:h-60 h-80 flex flex-col justify-between items-start rounded-md'>
              <div className='space-y-4'>
                <h1 className='text-2xl font-medium'>Commercial Cleaning</h1>
                <p>Maintain a hygienic workspace with our reliable cleaning solutions for offices, retail spaces, and more, boosting productivity.</p>
              </div>
              <button className='border border-primary rounded-sm px-5 py-3 w-fit'>
                  Learn More
              </button>
            </div>
          </div>

          <div className='relative md:h-full h-60'>
            <Image className='absolute size-full object-cover rounded-md' src={"https://framerusercontent.com/images/HMcgJUZys12lXlUAkd9co4ldk8.jpg"} width={300} height={300} alt=''/>
          </div>
        </div>

      </div> 
  )
}
