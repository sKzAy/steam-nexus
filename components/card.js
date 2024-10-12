"use client"
import { useState, useEffect } from 'react';
import React from 'react'
import "@/app/globals.css"

const targetDate = new Date('2024-11-02T08:00:00.000Z'); // 8am November 2nd

const Card = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
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
    <div className='card-div flex justify-center mt-20 mb-20 align-middle '>
        <div className='card flex justify-center align-middle'>
            <div className="  days text-7xl flex text-yellow-500">{days.toString().padStart(2, '0')}<p className='text-xs text-yellow-600'>days</p></div>
            <div className="  hours text-7xl flex text-yellow-500">{hours.toString().padStart(2, '0')} <p className='text-xs text-yellow-600'>hours</p> </div>
            <div className="  minutes text-7xl flex text-yellow-500">{minutes.toString().padStart(2, '0')}<p className='text-xs text-yellow-600'>minutes</p></div>
            <div className="  seconds text-7xl flex text-yellow-500">{seconds.toString().padStart(2,'0')}<p className='text-xs text-yellow-600'>seconds</p></div>
        </div>
    </div>









    </>
  )
}

export default Card
