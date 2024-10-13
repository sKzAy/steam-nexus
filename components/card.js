"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import "@/app/globals.css"

const targetDate = new Date('2024-11-02T03:00:00.000Z'); // 8am November 2nd, 2024 in Islamabad (UTC+5)

const Card = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date(); // Get the current date and time
        const timeDiff = targetDate.getTime() - now.getTime();

        if (timeDiff <= 0) {
          clearInterval(intervalId);
          alert("Event has started!")
          return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

  return (<>
    <div data-aos="fade-up" className='card-div flex1'>
        <div className='card flex1'>
            <p className="p-2 flex text-yellow-500">{days.toString().padStart(2, '0')}</p><p className='text-xs text-yellow-600'>days</p>
            <p className="p-2 hours text-yellow-500">{hours.toString().padStart(2, '0')}</p> <p className='text-xs text-yellow-600'>hours</p> 
            <p className="p-2 minutes text-yellow-500">{minutes.toString().padStart(2, '0')}</p><p className='text-xs text-yellow-600'>minutes</p>
            <p className="p-2 seconds text-yellow-500">{seconds.toString().padStart(2,'0')}</p><p className='text-xs text-yellow-600'>seconds</p>
        </div>
    </div>









    </>
  )
}

export default Card