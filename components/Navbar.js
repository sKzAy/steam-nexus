import React from 'react'
import Image from 'next/image'
import "@/app/globals.css"

const Navbar = () => {
  return (
        <nav className='flex1'>
            <div className='ul-cont'>
                <ul className='ul-div'>
                    <li><a className='underline hover:underline-offset-8 hover:font-extrabold' href='#modules'>Modules</a></li>
                    <li> <a className='underline hover:underline-offset-8 hover:font-extrabold' href="#registration">Registration</a></li>
                    <li><a className='underline hover:underline-offset-8 hover:font-extrabold' target='_blank' href="https://www.instagram.com/steamnexus24/">Instagram</a></li>
                </ul>
            </div>
        </nav>
      
  )
}

export default Navbar
