import React from 'react'
import Image from 'next/image'
import "@/app/globals.css"

const Navbar = () => {
  return (
        <nav className='flex1'>
            <div className='ul-cont'>
                <ul className='ul-div'>
                    <li><a href='#modules'>Modules</a></li>
                    <li> <a href="#registration">Registration</a></li>
                    <li><a href="">Schedule</a></li>
                </ul>
            </div>
        </nav>
      
  )
}

export default Navbar
