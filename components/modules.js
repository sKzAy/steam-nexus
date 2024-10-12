import React from 'react'
import "@/app/globals.css"

const Modules = () => {
  return (
    <div  id='modules' className='flex1'>
      <div className=" about-event flex1 mt-10 ">
    <div className="mod-div text-white border-2 border-r-4 border-red-600 rounded-xl p-10">
      <h2 className='font-extrabold text-2xl text-yellow-500 pb-4 size-large'>Modules:</h2>
        <ul>
            <li className='size-small'>The Euler Expedition (Maths)</li>
            <li className='size-small'> The Musk Marketplace (Business)</li>
            <li className='size-small'> The Sherlock Solution (Law & Crime)</li>
            <li className='size-small'>The Hawking Hypothesis (Physics)</li>
            <li className='size-small'> The Gates Gateway (Computer Science)</li>
            <li className='size-small'> The Edison Edit (Media)</li>
            <li className='size-small'>The Picasso Puzzle (Art)</li>
            <li className='size-small'> The da Vinci Dare (Surprise Module)</li>
        </ul>
    </div>
     </div>
    
</div>
  )
}

export default Modules
