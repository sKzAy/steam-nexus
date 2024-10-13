import React from 'react'
import Link from 'next/link'
import "@/app/globals.css"

const Registration = () => {
    return (
        <>
            <div data-aos="zoom-in" id='registration' className="about-event flex1 mt-10 ">
                <div className=" mod-div text-white rounded-xl border-2 border-red-500 p-10"><h2 className='font-extrabold text-2xl text-yellow-500 size-large' id='modules '>Registration:</h2>
                    <h3 className='text-red-500 pb-4 pt-4 size-semismall'>Registration fee: </h3>
                    <ul>
                        <li className='size-small'> Fee Per Delegate: Rs.2000+2000 (Early Bird)</li>
                        <li className='size-small'>Fee Per Delegate: Rs.2500 + 2500 (Normal Registrations)</li>
                    </ul>
                    <h3 className='text-red-500 pt-4 pb-4 size-semismall'>Registration Details:</h3>
                    <ul>
                        <li className='size-small'> Each delegation would comprise of 2-6 delegates</li>
                        <li className='size-small'>Registrations open: 11th October</li>
                        <li className='size-small'>Early Bird Discount ends:22nd October</li>
                        <li className='size-small'>Registrations close: 31st October</li>
                    </ul>
                    <div className="btn flex1 pt-5">
                    <a target ="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd-qi-FgdnXs7dvc3YbZiZwuvoDN9ps5KTmALIGov_WGrz03g/viewform"><button className=' button border-2 border-red-600 rounded-3xl p-3 text-center'>Click Here to Register</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration
