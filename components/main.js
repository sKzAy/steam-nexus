import React from 'react'
import Card from './card'
import Modules from './modules'
import Registration from './registration'
import "@/app/globals.css"

const MainContent = () => {
  return (<>

    <div>
    <div data-aos="fade-up" className='main1'>
        <div className='main1-child'>
            <p className='main-p1 '>Steam-</p><p className='main-p2'>Nexus</p>
            </div>
        </div>
       <div data-aos="fade-up" className='flex1 nov'><p className='text-yellow-500 text-4xl'>Nove</p> <p className='text-red-700 text-4xl'>mber &nbsp;</p><p className='text-yellow-500 text-4xl'>1st &nbsp;&</p><p className='text-red-700 text-4xl'>&nbsp; 2nd</p></div>
       <div data-aos="fade-up" className=' venue flex1 nov2'><p className='text-yellow-500 text-center '>Venue: Beaconhouse Potohar Campus A levels Building & Ground</p></div>
        <div><Card/></div>

        <div data-aos="fade-up" className= "quote text-white flex1 flex2">
        <p className='text-yellow-500 text-center'>&quot;Education is not the learning of facts, but the training of the mind to think.&quot;
        </p><p className=' text-center font-bold text-red-500 pl-3'>Albert Einstein</p></div>
    </div>
    <div data-aos="fade-up" className="about-event flex1   ">
    <div className="details-div text-white border-2 border-red-500 rounded-xl p-10"><h2 className='font-extrabold text-2xl text-yellow-500 pb-4 size-large'>Event Details:</h2><p className='size-small'><b className='font-extrabold text-xl text-yellow-500'>Steam-</b><b className='font-extrabold text-xl text-red-600'>Nexus</b> aims to foster a culture of innovation and hands-on learning at Beaconhouse Potohar Campus by empowering students to apply theoretical STEM concepts to real-world challenges. As the college&apos;s inaugural event of its kind, it seeks to inspire creativity, critical thinking, and collaboration, preparing a new generation of problem-solvers for a dynamic technological landscape. Collaborating with professionals from organizations like NICAT and the NUST Science Society, the fest will offer interactive workshops, challenges, and competitions that encourage deep thinking and innovative application of knowledge, embodying the philosophy that true education transcends rote memorization.</p></div></div>
    <div id='modules' className='h-0 w-0'></div>
    <Modules/>
    <Registration/>
    </>
  )
}

export default MainContent
