import React from 'react'
import Link from 'next/link'

const Registration = () => {
    return (
        <>
            <div id='registration' className="about-event flex justify-center align-middle mt-10 border-2 border-red-500">
                <div className=" mod-div text-white  border-4 border-r-4 border-red-600 rounded-xl p-10"><h2 className='font-extrabold text-2xl text-yellow-500' id='modules'>Registration:</h2>
                    <h3 className='text-red-500'>Registration fee: </h3>
                    <ul>
                        <li> Fee Per Delegate: Rs.2000+2000 (Early Bird)</li>
                        <li>Fee Per Delegate: Rs.2500 + 2500 (Normal Registrations)</li>
                        <li></li>
                    </ul>
                    <h3 className='text-red-500'>Registration Details:</h3>
                    <ul>
                        <li> Each delegation would comprise of 2-6 delegates</li>
                        <li>Registrations open: 11th October</li>
                        <li>Early Bird Discount ends:22nd October</li>
                        <li>Registrations close: 31st October</li>
                    </ul>
                    <div className="btn">
                    <Link href="www.google.com">
                    <button>Registration form</button>
                    

                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
