import { motion } from 'framer-motion';
import React from 'react'
// import { FaArrowUp } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='h-screen w-full bg-zinc-900 pt-1 '>
      <div className="textstructure mt-52 px-20">
        {["We Create","Eye Opening", "Presentations"].map((item,index) =>{

          return (
            <div className="masker">
              <div className="  w-fit flex  ">
                {index === 1 && 
                (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                    className="h-[5vw] w-[8vw] bg-red-500 mr-[1vw] relative top-[0.5vw] rounded-md">
                      <img className="w-full h-full bg-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBcPKDahU-tUJogJJIql09ic43ykRFcJsWQ&s"></img>
                    </motion.div>)}
                <h1 className= " text-[7vw] leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                {item}
               </h1>
           </div>
         </div>
          )
          
        })}
        
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20 ">
         {["For public and private companies","From the first pitch to IPO"].map((item,index) =>(
          <p className="tracking-tight font-light text-md leading-none">{item}</p>
         ))}
 
         <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full">Start the project</div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 flex items-center justify-center rounded-full">
            <span className="rotate-45">
            <FaArrowUpLong/>
              </span>
          </div>
         </div>

      </div>

      
    </div>
  )
}

export default LandingPage;
