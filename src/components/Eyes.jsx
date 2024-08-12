import React, { useEffect, useState } from "react";

function Eyes() {

    const [rotate,setRotate] = useState(0); 

    useEffect(() =>{
        window.addEventListener("mousemove", (e) =>{
            let mouseX = e.clientX;    //X coordinate of mouse 
            let mouseY = e.clientY;    //Y coordinate of mouse

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
             
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)

            setRotate(angle - 180);
        })
    })

  return (
    <div  className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-section data-scroll-speed="-0.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute flex gap-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[100%] ">
          <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className=" relative w-[9vw] h-[9vw]  rounded-full bg-zinc-800">

              <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-6  ">
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
              </div>

            </div>
          </div>

          <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className=" relative w-[9vw] h-[9vw]  rounded-full bg-zinc-800">
              
              <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-6  ">
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
