import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Day 1",
      content: (
        <div className="">
            <p className="time-p cap2 mt-16 text-2xl">First day starts at <span className="text-yellow-500">8:AM</span></p>
            <p className=" cap2 pt-2 text-2xl"> Check in <span className="text-yellow-500">8-8:30 AM</span></p>
            <p className="cap2 pt-2 text-2xl">  Physics & Media 1  <span className="text-yellow-500"> 8:30- 10:30 AM</span></p>
          <div className=" divider flex align-middle justify-start pt-3">
          <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
            <p className="time-p cap2 mt-16 text-2xl">Computer/Business 1 at <span className="text-yellow-500"> 11:00 - 12:30 PM</span></p>
            <div className=" divider flex align-middle justify-start pt-3">
            <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
                  <p className="time-p cap2 mt-16 text-2xl">Math/Art 1 at<span className="text-yellow-500"> 1:00 - 2:30 PM</span></p>
                  <div className=" divider flex align-middle justify-start pt-3">
                  <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
            <p className="time-p cap2 mt-16 text-2xl">Suprise/Law 1 at <span className="text-yellow-500">3:00-4:30 PM</span></p>
            <p className="time-p cap2 pt-2 text-2xl">Exhibition/social at <span className="text-yellow-500"> 4:30-6:00 PM</span></p>

            <div className=" divider flex align-middle justify-start pt-3">
            <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
          </div>
        ),
      },
      {
        title: "Closing",
        content: (
          <div className="text-2xl text-yellow-500">
            <p className="text-white">Day 1 Ends at</p><span className="text-yellow-500">6:00 PM</span>
          </div>
        ),
      },
    {
      title: "Day 2",
      content: (
        <div className="">
            <p className="time-p cap2 mt-16 text-2xl">Second day starts at <span className="text-yellow-500">8:AM</span></p>
            <p className=" cap2 pt-2 text-2xl"> Check in <span className="text-yellow-500">8:00-8:30 AM</span></p>
            <p className="cap2 pt-2 text-2xl">  Physics & Media 2  <span className="text-yellow-500"> 8:30- 10:30 AM</span></p>
            <div className=" divider flex align-middle justify-start pt-3">
            <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
            <p className="time-p cap2 mt-16 text-2xl">Computer/Business 2 at <span className="text-yellow-500"> 11:00 - 12:30 PM</span></p>
        <div className=" divider flex align-middle justify-start pt-3">
          <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
                  <p className="time-p cap2 mt-16 text-2xl">Math/Art 2 at<span className="text-yellow-500"> 1:00 - 2:30 PM</span></p>
        <div className=" divider flex align-middle justify-start pt-3">
          <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
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
            <p className="time-p cap2 mt-16 text-2xl">Suprise/Law 2 at<span className="text-yellow-500"> 3:00-4:30 PM</span></p>
            <p className="time-p cap2 pt-2 text-2xl">Panel Talk at <span className="text-yellow-500"> 4:30-5:15 PM</span></p>

        <div className=" divider flex align-middle justify-start pt-3">
          <div className="h-[0.25vh] w-full relative right-48 bg-red-600"></div></div>
          </div>
        ),
      },
      {
        title: "Ending",
        content: (
          <div className="text-2xl text-yellow-500">
            <p className="text-white text-2xl">Closing Ceremony starts at <span className="text-yellow-500 text-2xl">5:15 PM</span> and Ends at<span className="text-yellow-500"> 6:00 PM </span></p>
          </div>
        ),
      },
      
      
      
    
  ];
  return (<>
    (<div id="schedule"   className="w-full">
      <Timeline data={data} />
    </div>)
    </>
  );
}
