
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
  <div className="abbu">
  <div  data-aos="zoom-in" className="car-cont">
    <div className='car-div border-2 border-red-500 flex1 w-[80vw]' >
    <Carousel className="py-32 car w-[30vw]" >
      <div className='flex1 mb-5'>
      <p className='size-large text-3xl text-yellow-500'>Modules</p>
      </div>
  <CarouselContent className="car-content">
    <CarouselItem className="car-item flex1 h-[30vh] ">
    <div className='car-item-div flex1 flex-col'><p className='text-red-600 size-medium text-center'>The Euler Expedition (Maths)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1  h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'>The Sherlock Solution (Law & Crime)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'> The Hawking Hypothesis (Physics)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'> The Gates Gateway (Computer Science)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'> The Edison Edit (Media)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'> The Picasso Puzzle (Art)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'>The da Vinci Dare (Surprise Module)</p>
      <p className='text-center size-small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
    <CarouselItem className="flex1 h-[30vh]">
    <div className='flex1 flex-col'><p className='text-red-600 size-medium text-center'> The Musk Marketplace (Business)</p>
      <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit hic sequi beatae corporis amet, saepe rerum omnis molestiae ab esse.</p>
    </div>
       </CarouselItem>
   

  </CarouselContent>
  <CarouselPrevious className="bg-black" />
  <CarouselNext className="bg-black" />
 </Carousel>
</div>
</div>
</div>
</>
  )
}

export default Modules
