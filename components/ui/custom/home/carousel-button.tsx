"use client"

import { useCallback } from 'react';
import {  CaretLeft, CaretRight } from '@phosphor-icons/react'

export default function CarouselButton({ emblaApi }: { emblaApi: any }) {
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex gap-4">
      <button  className='border border-white/25 p-2 rounded-xs' onClick={scrollPrev}>
        <CaretLeft size={18} className='text-primary'/>
      </button>
      <button className='border border-white/25 p-2 rounded-xs' onClick={scrollNext}>
        <CaretRight size={18} className='text-primary'/>
      </button>
    </div>
  );
}