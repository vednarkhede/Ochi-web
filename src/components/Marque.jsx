import { motion } from 'framer-motion';
import React from 'react'

function Marque() {
  return (  
     <div data-scroll data-scroll-section data-scroll-speed="0.025" className='w-full rounded-tr-3xl rounded-tl-3xl py-10 bg-[#004D43] '>
         <div className="text border-t-2 border-b-2 border-zinc-400 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', duration:5, repeat: Infinity}} className= "text-[12vw] font-['Founders_Grotesk'] font-semibold uppercase  -mt-[2vw] -mb-[2vw] pr-5">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', duration:5, repeat: Infinity}} className="text-[12vw] font-['Founders_Grotesk'] font-semibold uppercase  -mt-[2vw] -mb-[2vw] pr-5">We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', duration:5, repeat: Infinity}} className="text-[12vw] font-['Founders_Grotesk'] font-semibold uppercase  -mt-[2vw] -mb-[2vw] pr-5">We are ochi</motion.h1>
        </div>
 </div>
     
  )
}

export default Marque;
