import React from 'react'
import Card from './card'
import Modules from './modules'
import Registration from './registration'

const MainContent = () => {
  return (<>

    <div>
        <div className=' w-85vw left m-12 flex justify-center align-middle'>
            <p className='text-9xl font-extrabold text-yellow-500 '>Steam-</p><p className='text-9xl text-red-700 font-extrabold'>Nexus</p>
        </div>
       <div className='flex justify-center align-middle'><p className='text-yellow-500 text-4xl'>Nove</p> <p className='text-red-700 text-4xl'>mber &nbsp;</p><p className='text-yellow-500 text-4xl'> 1</p><p className='text-red-700 text-4xl'> &nbsp;& 2</p></div>
       <div className='flex justify-center align-middle'><p className='text-red-600'>Venue:</p><p className='text-yellow-500'> &nbsp; Beaconhouse Potohar Campus A levels Building & Ground</p></div>
        <div><Card/></div>

        <div className="quote text-white flex justify-center align-middle">
        <p className='text-yellow-500'>"Education is not the learning of facts, but the training of the mind to think."
        </p><p className=' font-bold text-red-500 '>-Albert Einstein</p></div>
    </div>
    <div className="about-event flex justify-center align-middle mt-10 ">
    <div className=" text-white w-[40vw] border-4 border-r-4 border-red-600 rounded-xl p-10"><h2 className='font-extrabold text-2xl text-yellow-500'>Event Details:</h2><p>Potohar Spark Fest aims to foster a culture of innovation and hands-on learning at Beaconhouse Potohar Campus by empowering students to apply theoretical STEM concepts to real-world challenges. As the college's inaugural event of its kind, it seeks to inspire creativity, critical thinking, and collaboration, preparing a new generation of problem-solvers for a dynamic technological landscape. Collaborating with professionals from organizations like NICAT and the NUST Science Society, the fest will offer interactive workshops, challenges, and competitions that encourage deep thinking and innovative application of knowledge, embodying the philosophy that true education transcends rote memorization.</p></div></div>

    <Modules/>
    <Registration/>
    
    
    </>
  )
}

export default MainContent
