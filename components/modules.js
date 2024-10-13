
import React from 'react'
import "@/app/globals.css"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const Modules = () => {

  
  return (<>
  <div  data-aos="zoom-in" className="car-cont">
    <div className='car-div border-2 border-red-500 flex1' >
    <Carousel className="w-[30vw]" >
      <div className='flex1 mb-5'>
      <p className='size-large text-3xl text-yellow-500'>Modules</p>
      </div>
  <CarouselContent>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'>The Euler Expedition (Maths)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'>The Sherlock Solution (Law & Crime)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'> The Hawking Hypothesis (Physics)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'> The Gates Gateway (Computer Science)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'> The Edison Edit (Media)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'> The Picasso Puzzle (Art)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'>The da Vinci Dare (Surprise Module)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium'> The Musk Marketplace (Business)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
   

  </CarouselContent>
  <CarouselPrevious className="bg-black" />
  <CarouselNext className="bg-black" />
 </Carousel>
</div>
</div>
</>
  )
}

export default Modules
