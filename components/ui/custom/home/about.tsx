import React from 'react'
import Image from 'next/image'

export default function about() {
  return (
    <div className='relative md:h-[600px]'>

          <Image className='absolute size-full object-cover -z-20' src={"https://framerusercontent.com/images/fT5uvJMIDIHal3fpzVWGY01rRY4.jpg"} width={900} height={900} alt='who we are'/>

          <div className='absolute size-full bg-black/50 z-10' />

          <div className='relative text-white z-20 max-w-7xl mx-auto space-y-10 grid place-content-center size-full md:px-0 px-4 md:py-0 py-10'>
              <div className='space-y-5'>
                <p className=''>Who We Are</p>
                <h1 className='text-3xl font-semibold md:w-[600px]'>We are experienced cleaning professionals committed to creating spotless, welcoming environments.</h1>
              </div>
    
              <div className='border-1 border-white/50'/>
    
              <div className='grid md:grid-cols-4 gap-10'>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Our Team</h1>
                  <p>Our highly trained, experienced cleaners ensure meticulous, thorough cleaning every time.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Our Commitment</h1>
                  <p>We prioritize quality and reliability, tailoring our services to your needs with care and attention.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Our Approach</h1>
                  <p>We use advanced equipment and eco-friendly products for effective, sustainable cleaning.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Our Promise</h1>
                  <p>Customer satisfaction is our priority. We exceed expectations and ensure a pristine space every time.</p>
                </div>
              </div>
           </div>
    
          </div>
  )
}
