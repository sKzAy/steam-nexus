import React from 'react'
import "@/app/globals.css"

const Modules = () => {
  return (
    <div  id='modules'>
      <div className="border-2 border-red-500 about-event flex justify-center align-middle mt-10 ">
    <div className="mod-div text-white border-4 border-r-4 border-red-600 rounded-xl p-10">
      <h2 className='font-extrabold text-2xl text-yellow-500'>Modules:</h2>
        <ul>
            <li>The Euler Expedition (Maths)</li>
            <li> The Musk Marketplace (Business)</li>
            <li> The Sherlock Solution (Law & Crime)</li>
            <li>The Hawking Hypothesis (Physics)</li>
            <li> The Gates Gateway (Computer Science)</li>
            <li> The Edison Edit (Media)</li>
            <li>The Picasso Puzzle (Art)</li>
            <li> The da Vinci Dare (Surprise Module)</li>
        </ul>
    </div>
     </div>
    
</div>
  )
}

export default Modules
