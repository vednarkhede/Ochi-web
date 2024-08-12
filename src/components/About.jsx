import React from "react";

function About() {
  return (
    <div  className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-[3.5vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-2 flex gap-5 mt-12 pt-5 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-[3.5vw]">Our approach:</h1>
          <button className="px-10 py-5 uppercase mt-10 flex items-center gap-12 rounded-full bg-zinc-900 text-white">Read More
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl ">
          <img className="w-full h-full rounded-3xl bg-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
