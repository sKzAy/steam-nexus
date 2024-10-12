import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
        <nav>
            <div className=" mt-5 container-nav">
                <ul className='flex flex-grow align-middle justify-center'>
                    <li className='m-4'> <a className='font-extrabold text-white text underline hover:underline-offset-8 hover:font-bold' href=''>Steam Nexus</a> </li>
                    <li className='m-4'><a className='relative -right-80  text-white text underline hover:underline-offset-8 hover:font-bold' href='#modules'>Modules</a></li>
                    <li className='m-4'><a className='relative -right-80  text-white text underline hover:underline-offset-8 hover:font-bold'  href="#registration">Registration</a></li>
                    <li className='m-4'><a className='relative -right-80  text-white text underline hover:underline-offset-8 hover:font-bold'  href="">Schedule</a></li>
                </ul>
            </div>
        </nav>
      
  )
}

export default Navbar
