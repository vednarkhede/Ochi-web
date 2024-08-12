import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
    
  return (
    <div  className="w-full h-screen border-b-[1px] border-zinc-700 bg-zinc-900 flex items-center px-12 gap-5">
      <div className="cardcontainer w-1/2 h-[55vh] ">
        <div className="card relative  w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
            <img className="w-32 " src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
            <button className="absolute left-8 bottom-10 px-3 py-1 border-2 rounded-full">&copy;2019-2022</button>
        </div>
      </div>

      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5">

        <div className="card relative w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center">
           <img className="w-32 " src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
           <button className="absolute left-8 bottom-10 px-3 py-1 border-2 rounded-full">RATING 5.0 ON CLUTCH</button></div>
        <div className="card relative w-1/2 h-full bg-[#192826] rounded-xl flex items-center justify-center">
           <img className="w-32 " src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
           <button className="absolute left-8 bottom-10 px-3 py-1 border-2 rounded-full">BUSINESS BOOTCAMP ALUMNI</button></div>

      </div>
    </div>
  )
}

export default Cards
