import React from 'react'
import Image from 'next/image'

export default function about() {
  return (
    <div className='relative md:h-[600px]'>

          <Image className='absolute size-full object-cover -z-20' src={"https://framerusercontent.com/images/fT5uvJMIDIHal3fpzVWGY01rRY4.jpg"} width={900} height={900} alt='qui nous sommes'/>

          <div className='absolute size-full bg-black/50 z-10' />

          <div className='relative text-white z-20 max-w-7xl mx-auto space-y-10 grid place-content-center size-full md:px-0 px-4 md:py-0 py-10'>
              <div className='space-y-5'>
                <p className=''>Qui Nous Sommes</p>
                <h1 className='text-3xl font-semibold md:w-[600px]'>Nous sommes des professionnels du nettoyage expérimentés, engagés à créer des environnements impeccables et accueillants.</h1>
              </div>
    
              <div className='border-1 border-white/50'/>
    
              <div className='grid md:grid-cols-4 gap-10'>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Notre Équipe</h1>
                  <p>Nos nettoyeurs hautement formés et expérimentés garantissent un nettoyage méticuleux et approfondi à chaque fois.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Notre Engagement</h1>
                  <p>Nous privilégions la qualité et la fiabilité, en adaptant nos services à vos besoins avec soin et attention.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Notre Approche</h1>
                  <p>Nous utilisons des équipements avancés et des produits écologiques pour un nettoyage efficace et durable.</p>
                </div>
                <div className='space-y-5'>
                  <h1 className='font-semibold text-xl'>Notre Promesse</h1>
                  <p>La satisfaction de nos clients est notre priorité. Nous dépassons les attentes et assurons un espace impeccable à chaque fois.</p>
                </div>
              </div>
           </div>
    
          </div>
  )
}
