import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {

  const[ishovering1,setHovering1] = useState(false);
  const[ishovering2,setHovering2] = useState(false);
  
  return (
    <div className="w-full  py-20 bg-zinc-100">
        <div className="w-full  px-12 border-b-[1px] pb-9 border-zinc-400 ">
           <h1 className=" text-[8vh] font-['Neue Montreal'] tracking-tight text-black">Featured projects</h1>
         </div>
         <div className='px-16 mt-20'>
            <div className="cards w-full  flex gap-4">
                <div onMouseEnter={()=> setHovering1(true)} onMouseLeave={()=> setHovering1(false)}
                  className='cardcontainer w-1/2 h-[75vh] relative '>
                   <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-[15vh] leading-none tracking-tight">
                      {"FYDE".split("").map((item,index) =>(
                            <motion.span
                              initial={{y:"100%"}}
                              animate={ishovering1 ? {y:"0"} : {y:"100%"}}
                              transition={{ease : [0.22, 1, 0.36, 1], delay : index*.05}}
                              className='inline-block font-bold '
                              >{item}</motion.span>
                      ))}
                   </h1>
                   <div className="card w-full h-full rounded-xl   overflow-hidden">
                     <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='h-full w-full bg-cover'></img> 
                   </div>
                </div>
                
                <div onMouseEnter={()=> setHovering2(true)} onMouseLeave={()=> setHovering2(false)}
                    className='cardcontainer w-1/2 h-[75vh] relative '>
                     <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] text-[15vh] leading-none tracking-tight">
                        {"VISE".split("").map((item,index) =>(
                            <motion.span
                              initial={{y:"100%"}}
                              animate={ishovering2 ? {y:"0"} : {y:"100%"}}
                              transition={{ease : [0.22, 1, 0.36, 1], delay : index*.05}}
                              className='inline-block font-bold '
                              >{item}</motion.span>
                      ))}
                   </h1>
                   <div className="card w-full h-full rounded-xl   overflow-hidden">
                     <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='h-full w-full bg-cover'></img> 
                   </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Featured
