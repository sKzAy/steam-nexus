import React from 'react'
import Link from 'next/link'
import "@/app/globals.css"

const Registration = () => {
    return (
        <>
            <div id='registration' className="about-event flex1 mt-10 ">
                <div className=" mod-div text-white rounded-xl border-2 border-red-500 p-10"><h2 className='font-extrabold text-2xl text-yellow-500' id='modules size-large'>Registration:</h2>
                    <h3 className='text-red-500 pb-4 pt-4 size-mid'>Registration fee: </h3>
                    <ul>
                        <li className='size-small'> Fee Per Delegate: Rs.2000+2000 (Early Bird)</li>
                        <li className='size-small'>Fee Per Delegate: Rs.2500 + 2500 (Normal Registrations)</li>
                    </ul>
                    <h3 className='text-red-500 pt-4 pb-4 size-mid'>Registration Details:</h3>
                    <ul>
                        <li className='size-small'> Each delegation would comprise of 2-6 delegates</li>
                        <li className='size-small'>Registrations open: 11th October</li>
                        <li className='size-small'>Early Bird Discount ends:22nd October</li>
                        <li className='size-small'>Registrations close: 31st October</li>
                    </ul>
                    <div className="btn">
                    {/* <Link href="www.google.com">
                    <button>Registration form</button>
                    </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
