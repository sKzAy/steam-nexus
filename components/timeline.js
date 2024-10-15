import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Day 1",
      content: (
        <div className="">
            <p className="time-p cap2 pt-16 text-2xl">First day starts at <span className="text-yellow-500">8:AM</span></p>
            <p className=" cap2 pt-2 text-2xl"> Check in from  <span className="text-yellow-500">8-8:30 AM</span></p>
            <p className="cap2 pt-2 text-2xl">  Physics & Media 1  <span className="text-yellow-500"> 8:30- 10:30 AM</span></p>
          
          
     
          <div className="flex justify-start">
          <div className="h-[0.25vh] w-full bg-red-600"></div></div>
        </div>
      ),
    },
    {
      title: "Break 1",
      content: (
        <div className="text-4xl text-red-700">
             10:30 - 11:00 am
        </div>
      ),
    },
    {
        title: "Resumes",
        content: (
          <div className="">
            <p
              className="pt-16 text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Computer/Business 1 at <span className="text-yellow-500 text-xl">11:00  - 12:30 pm</span>
            </p>
    
            <div className="flex justify-start">
            <div className="h-[0.25vh] w-full bg-red-600"></div></div>
          </div>
        ),
      },
      {
        title: "Break 2",
        content: (
          <div className="text-4xl text-red-700">
                12:30 - 1:00 pm
          </div>
        ),
      },
      {
        title: "Resumes",
        content: (
          <div className="">
            <p
              className="pt-16 text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Maths/Art 1 at <span className="text-yellow-500 text-xl">1:00-2:30pm </span>
            </p>
    
            <div className="flex justify-start">
            <div className="h-[0.25vh] w-full bg-red-600"></div></div>
          </div>
        ),
      },
      {
        title: "Break 3",
        content: (
          <div className="text-4xl text-red-700">
                  2:30-3:00pm
          </div>
        ),
      },
      {
        title: "Resumes",
        content: (
          <div className="">
            <p
              className="pt-16 text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Maths/Art 1 at <span className="text-yellow-500 text-xl">1:00-2:30pm </span>
            </p>
            <p
              className=" text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Exhibition/social at <span className="text-yellow-500 text-xl">4:30-6:00pm </span>
            </p>
            <p
              className=" text-white dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
               6:00pm <span className="text-yellow-500 text-2xl">Closing</span>
            </p>
    
            <div className="flex justify-start">
            <div className="h-[0.25vh] w-full bg-red-600"></div></div>
          </div>
        ),
      },
      
      
      
    
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
