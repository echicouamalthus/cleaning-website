import React from 'react'

export default function Stats() {
  return (
    <div className='bg-secondary text-white space-y-8 py-20 md:px-0 px-4'>
    <div className='flex justify-center items-center flex-col gap-10'>
      <h1 className='md:text-5xl text-4xl font-semibold'>Why Choose Us</h1>
      <p className='text-[16px] max-w-3xl mx-auto text-center'>Discover our difference with our exceptional cleaning services, backed by impressive numbers that demonstrate our commitment to quality and customer satisfaction.</p>
    </div>

    <div className='grid md:grid-flow-col gap-10 max-w-7xl mx-auto'>
      <div className='border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4'>
        <h5 className='text-6xl font-semibold'>100+</h5>
        <p>Years of Experience</p>
      </div>
      <div className='border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4'>
        <h5 className='text-6xl font-semibold'>98%</h5>
        <p>Satisfaction Rate</p>
      </div>
      <div className='border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-15 p-6 gap-4'>
        <h5 className='text-6xl font-semibold'>1,000+</h5>
        <p>Spaces Cleaned</p>
      </div>
      <div className='border border-primary rounded-md flex flex-col justify-center items-center h-full md:p-10 p-6 gap-4'>
        <h5 className='text-6xl font-semibold'>100%</h5>
        <p>Eco-Friendly Products</p>
      </div>
    </div>
  </div>

  )
}
