"use client"

import React, { useCallback } from 'react'
import Image from 'next/image'
import NavBar from '@/components/ui/custom/home/nav-bar'
import Hero from '@/components/ui/custom/home/hero'
import { Marquee } from '@/components/magicui/marquee'
import Solution from '@/components/ui/custom/home/solution'
import Stats from '@/components/ui/custom/home/stats'
import Works from '@/components/ui/custom/home/works'
import About from '@/components/ui/custom/home/about'
import { CheckSquare, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import useEmblaCarousel from 'embla-carousel-react'
import CarouselButton from '@/components/ui/custom/home/carousel-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const partners = [
  {
    logo: "https://img.logoipsum.com/360.svg"
  },
  {
    logo: "https://img.logoipsum.com/367.svg"
  },
  {
    logo: "https://img.logoipsum.com/343.svg"
  },
  {
    logo: "https://img.logoipsum.com/250.svg"
  },
  {
    logo: "https://img.logoipsum.com/342.svg"
  },
  {
    logo: "https://img.logoipsum.com/337.svg"
  },

]

const faqs = [
  {
    question: "What types of cleaning services do you offer?",
    content: "We offer residential, commercial, move-in/move-out, specialized, eco-friendly, and post-construction cleaning services."
  },
  {
    question: "Are your cleaning products eco-friendly?",
    content: "Yes, we use eco-friendly and non-toxic cleaning products to ensure the safety of your family, pets, and the environment."
  },
  {
    question: "Do I need to provide cleaning supplies or equipment?",
    content: "No, our team comes fully equipped with all the necessary cleaning supplies and equipment."
  },
  {
    question: "How do I schedule a cleaning service?",
    content: "You can schedule a cleaning service by contacting us through our website, phone, or email. We’ll work with you to find a convenient time."
  },
  {
    question: "What is your cancellation policy?",
    content: "We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations may incur a fee."
  },
  {
    question: "Are your cleaners insured and background-checked?",
    content: "Yes, all our cleaners are fully insured and undergo thorough background checks to ensure your peace of mind."
  },
  {
    question: "Do you offer recurring cleaning services?",
    content: "Yes, we offer weekly, bi-weekly, and monthly cleaning plans to suit your needs."
  },

]

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start'})

  return (
    <div className='relative'>
      <NavBar />
      <Hero />

      <div className='flex justify-center items-center h-[200px] bg-background md:px-0 px-4'>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
          <Marquee pauseOnHover className="[--duration:50s]">
            {partners.map((e, index) => (
              <div key={index} className='mx-4 flex items-center'>
                <Image className='saturate-0' src={e.logo} width={200} height={200} alt='les partenaires de confiances'/> 
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>

      <Solution />

      <Stats />

      <Works />

      <About />

      <div className='min-h-screen grid place-content-center space-y-20 py-20 md:px-0 px-4'>
        <div className='flex justify-center items-center flex-col gap-10 '>
          <h1 className='md:text-5xl text-4xl md:text-start text-center font-semibold'>Affordable Pricing Plans</h1>
          <p className='text-[16px] text-stone-600 max-w-2xl mx-auto text-center'>We offer flexible and transparent pricing plans designed to fit your needs and budget. Choose the plan that best suits your requirements and enjoy a spotless, sparkling space.</p>
        </div>

        <div className='max-w-6xl mx-auto '>
          <div className='grid md:grid-cols-3 gap-13'>
            <div className='border border-black/50 rounded-xs p-5 flex flex-col justify-between space-y-10'>
                <div className='bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit'>
                    Basic Plan
                </div>

                <div className='bg-white rounded-md flex flex-col space-y-5'>
                  <div className='space-y-4'>
                    <div className='relative flex justify-start items-end'>
                      <h1 className='font-semibold text-7xl'>$99</h1>
                      <p className='text-stone-500 font-medium'>per month</p>
                    </div>

                    <p>Perfect for smaller spaces and routine cleaning needs.</p>
                  </div>

                <div className='border-1 border-black/15'/>

                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Weekly Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Full-Seervice Deep Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Carpet and Upholstery Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Eco-Friendly Product</p>
                  </li>
                </ul>
                </div>

              <button className='bg-secondary rounded-sm px-5 py-3 text-white w-full'>
                  Buy Now
              </button>
            </div>
            <div className='border border-black/50 rounded-xs p-5 space-y-10 md:scale-105 scale-100'>
                <div className='bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit'>
                    Premuim Plan
                </div>

                <div className='bg-white rounded-md flex flex-col space-y-5'>
                  <div className='space-y-4'>
                    <div className='relative flex justify-start items-end'>
                      <h1 className='font-semibold text-7xl'>$299</h1>
                      <p className='text-stone-500 font-medium'>per month</p>
                    </div>

                    <p>Best for larger spaces and deep cleaning services.</p>
                  </div>

                <div className='border-1 border-black/15'/>

                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Weekly Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Full-Seervice Deep Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Carpet and Upholstery Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Window cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Eco-Friendly Product</p>
                  </li>
                </ul>
                </div>

              <button className='bg-secondary rounded-sm px-5 py-3 text-white w-full'>
                  Buy Now
              </button>
            </div>
            <div className='border border-black/50 rounded-xs p-5 space-y-10 flex flex-col justify-between'>
                <div className='bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit'>
                    Standart Plan
                </div>

                <div className='bg-white rounded-md flex flex-col space-y-5'>
                  <div className='space-y-4'>
                    <div className='relative flex justify-start items-end'>
                      <h1 className='font-semibold text-7xl'>$199</h1>
                      <p className='text-stone-500 font-medium'>per month</p>
                    </div>

                    <p>Ideal for medium-sized spaces requiring regular maintenance.</p>
                  </div>

                <div className='border-1 border-black/15'/>

                <ul className='space-y-2'>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Weekly Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Full-Seervice Deep Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Carpet and Upholstery Cleaning</p>
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckSquare size={30} className='text-primary'/>
                    <p>Eco-Friendly Product</p>
                  </li>
                </ul>
                </div>

              <button className='bg-secondary rounded-sm px-5 py-3 text-white w-full'>
                  Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>


      <div className='bg-secondary text-white h-[600px] '>
          <div className='max-w-7xl mx-auto grid place-content-center h-full md:p-20 p-0 md:px-0 px-4 space-y-10'>
            <div className='flex md:flex-row flex-col gap-3 justify-between items-center'>
              <h1 className='md:text-5xl text-4xl md:text-start text-center font-semibold' >What Our Clients Says</h1>
              <CarouselButton emblaApi={emblaApi} />
            </div>

            <div className="embla" >
              <div className='embla__viewport' ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <div className='border border-white/25 p-4 space-y-4'>
                      <p className='text-xl font-semibold'>"Impeccable service! My home has never looked better. Delta Cleaning's team was professional, and left no corner untouched. I am thoroughly impressed with their attention to detail and dedication to cleanliness. Highly recommend!"</p>

                      <div className='flex items-center gap-2'>
                        <div className=''>
                          <Image src={"https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png"} alt='avatar temoin' width={60} height={60} />
                        </div>
                        <div className='space-y-1'>
                          <h1 className='text-xl font-semibold'>
                            Sarah L.
                          </h1>
                          <p>HomeOwner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className='border border-white/25 p-4 space-y-4'>
                      <p className='text-xl font-semibold'>"Impeccable service! My home has never looked better. Delta Cleaning's team was professional, and left no corner untouched. I am thoroughly impressed with their attention to detail and dedication to cleanliness. Highly recommend!"</p>

                      <div className='flex items-center gap-2'>
                        <div className=''>
                          <Image src={"https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png"} alt='avatar temoin' width={60} height={60} />
                        </div>
                        <div className='space-y-1'>
                          <h1 className='text-xl font-semibold'>
                            Sarah L.
                          </h1>
                          <p>HomeOwner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="embla__slide">
                    <div className='border border-white/25 p-4 space-y-4'>
                      <p className='text-xl font-semibold'>"Impeccable service! My home has never looked better. Delta Cleaning's team was professional, and left no corner untouched. I am thoroughly impressed with their attention to detail and dedication to cleanliness. Highly recommend!"</p>

                      <div className='flex items-center gap-2'>
                        <div className=''>
                          <Image src={"https://framerusercontent.com/images/UM7myi2umXAFWdwmEncZFkdo2js.png"} alt='avatar temoin' width={60} height={60} />
                        </div>
                        <div className='space-y-1'>
                          <h1 className='text-xl font-semibold'>
                            Sarah L.
                          </h1>
                          <p>HomeOwner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='min-h-screen max-w-7xl mx-auto grid place-content-center md:px-0 px-4 py-20'>
        <div className='grid md:grid-cols-2 gap-10'>

        <div className='space-y-5'>
          <div className='bg-primary px-2 py-1 rounded-sm font-poppins font-regular text-md w-fit'>
            Frequently Asked Questions
          </div>

          <h1 className='md:text-5xl text-4xl font-semibold md:w-[500px] '>
            Find answers to the most common inquiries.
          </h1>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              return (
              <AccordionItem key={index} tabIndex={index} value={`item-${index}`}>
                <AccordionTrigger className='md:text-2xl text-xl font-semibold'>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
              )
            })}
          </Accordion>
        </div>

        </div>
      </div>
      
      <div className='bg-primary md:h-[600px]'>
        <div className='grid md:grid-cols-2 h-full max-w-7xl mx-auto items-center space-y-4'>

          <div className='space-y-5 flex flex-col items-center py-10'>
            <h1 className='md:text-7xl text-4xl md:text-start text-center font-semibold '>Ready for a Spotless Space?</h1>
            <p className='text-stone-700 md:text-start text-center'>Experience the Delta Cleaning difference. Contact us today for top-quality cleaning services tailored to your needs. Let us bring sparkle and shine to your space!</p>
            <button className='bg-secondary rounded-xs px-5 py-3 text-white md:w-fit w-60'>
              Book a Visit Now
            </button>
          </div>

          <div className='md:size-full flex justify-center'>
            <Image className='object-cover' src={"https://framerusercontent.com/images/Hyho7c5bj43TI4WRiGqWP76X7hs.png"} alt="image de fond" width={400} height={400} />
          </div>

        </div>
      </div>

      <footer className='bg-secondary text-white md:h-[450px] md:px-0 px-4'>

        <div className='h-full flex flex-col justify-between max-w-7xl mx-auto py-10 space-y-10'>

          <div className='flex md:flex-row flex-col justify-between md:items-start 
          items-center md:gap-3 gap-10'>
            <div className='space-y-5 flex flex-col items-center md:items-start'>
              <Image className='invert' src={"https://framerusercontent.com/images/4w2V1XLOvX9FiwcTUo3eU60fSoc.svg"} alt='Brand logo' width={100} height={100}/>

              <p className='text-xl md:w-80 font-semibold text-center md:text-start'>Need assistance or have questions? Get in touch with us directly.</p>

              <button className='bg-primary rounded-xs px-5 py-3 text-black font-medium'>
                Get In Touch
              </button>
            </div>

            <div className='grid md:grid-cols-2 gap-10'>
              <div className='space-y-5 flex flex-col items-center'>
                    <h1 className='font-semibold text-xl'>Company</h1>

                    <ul className='space-y-2 flex flex-col items-center'>
                      <li>About Us</li>
                      <li>How We Work</li>
                      <li>Pricing</li>
                    </ul>
              </div>

              <div className='space-y-5 flex flex-col items-center'>
                    <h1 className='font-semibold text-xl'>Contact Us</h1>

                    <ul className='space-y-2 flex flex-col items-center'>
                      <li>123 Clean Street, Sparkle City, SC 12345</li>
                      <li>(123) 456-7890</li>
                      <li>info@deltacleaning.com</li>
                    </ul>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col justify-between items-center md:py-10 py-4 border-t border-white/25 gap-3'>
            <p className='text-center'>©Delta Cleaning. Designed by fourtwelve. All rights reserved.</p>

            <ul className="flex gap-5">
              <li><LinkedinLogo size={32} weight="fill" /></li>
              <li><InstagramLogo size={32} weight="fill" /></li>
              <li><FacebookLogo size={32} weight="fill" /></li>
            </ul>
          </div>

        </div>

      </footer>

    </div>
  )
}