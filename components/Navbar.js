import React from 'react'
import Image from 'next/image'
import "@/app/globals.css"

const Navbar = () => {
  return (
        <nav className='flex1'>
            <div className='ul-cont'>
                <ul className='ul-div'>
                    <li><a className='underline hover:underline-offset-4 hover:font-extrabold' href='#modules'>Modules</a></li>
                    <li> <a className='underline hover:underline-offset-4 hover:font-extrabold' href="#registration">Registration</a></li>
                    <li><a className='underline hover:underline-offset-4 hover:font-extrabold' href="">Schedule</a></li>
                </ul>
            </div>
        </nav>
      
  )
}

export default Navbar
