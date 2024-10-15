"use client"
import React from 'react'
import "@/app/globals.css"
import { useEffect, useRef } from 'react'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const Modules = () => {


  return (<>
  <div className='h-0 w-1' id='modules'></div>
  <div  data-aos="zoom-in" className=' bigboy text-yellow-500 mb-14'>
    <div className='flex1'>
    <h2 className='cap3 font-extrabold'>Modules</h2>
    </div>
    
  <div className="carouselbox">
  <div className="carousel flex1 border-2 border-red-500">
  <Carousel className=" car  w-[30vw]">
  <CarouselContent>
    <CarouselItem className='item flex1 text-2xl text-center'> The Euler Expedition (Maths)</CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center"> The Musk Marketplace (Business)</CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center"> The Sherlock Solution (Law & Crime)</CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center"> The Hawking Hypothesis (Physics)</CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center">The Gates Gateway (Computer Science) </CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center">  The Edison Edit (Media)</CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center"> The Picasso Puzzle (Art) </CarouselItem>
    <CarouselItem className="item flex1 text-2xl text-center"> The da Vinci Dare (Surprise Module)</CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="bg-black" />
  <CarouselNext className='bg-black' />
</Carousel>
<div id='registration' className='w-0 h-0'></div>
</div>
</div>
</div>

 
</>
  )
}

export default Modules
