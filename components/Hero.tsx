import React from "react"
import Particle  from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle/>
      <div className="absolute right-0 left-0 w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
        <h1 className="text-[35px] md:text-[50px] text-white font-bold">
          HI, I'M <span className="text-yellow-400">Erum!</span>
      </h1>
      <TextEffect />
      <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsa rem culpa nemo natus quo magni nihil modi, asperiores, earum aperiam. Quia similique voluptate, cupiditate alias magni quisquam expedita impedit.
      </p>
      <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
         <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"> 
           <p>Download Cv </p>
           <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
         </button>
         <button className="flex items-center space-x-2">
          <PlayCircleIcon className="w-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]"/>
          <p className="text-[20px] font-semibold text-white ">watch the video</p>
         </button>
       </div>
         </div>
        <div 
        className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"> 
          <Image
           src="/images/u3.avif"
            alt="user"
             layout="fill" 
             className="object-cover rounded-full"
              />
        </div>
     
      </div>  
    </div>
  )
}

export default Hero;

// import Image from "next/image"
// import React from "react";
// import Particle from "./Particle";
// import TextEffect from "./TextEffect";
// import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
// const Hero = () => {
//   return (
//      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
        
//         <Particle />
//         <div className="absolute w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
//           <div>
//           <h1 className="text-[35px] md:text-[50px] text-white font-bold">
//   HI, I'M  <span className="text-yellow-400">ERUM!</span> 
//   </h1>
//   <TextEffect />
//   <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     et quisquam tempora ea,consequatur minima,reprehenderit 
//     modi ipsum ullam natus a necessitatibus esse.
//   </p>
//   <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
// <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[18px] 
//  font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
//   <p>Download Cv</p>
//   <ArrowDownTrayIcon
//    className="w-[1.6rem] h-[1.7rem] text-black"/>
//   </button>
// <button className="flex items-center space-x-2">
// <PlayCircleIcon
//  className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 
// text-[#55e6a5]"/>
//   <p className="text-[20px] font-semibold text-white">
//      Watch the video
//      </p>
// </button>
// </div>
//  </div>
//   <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
//   <Image 
//    src="/images/1.jpg" 
//    alt="user" 
//    layout="fill"
//    className="object-cover rounded-full"/>
//  </div>
//  </div>
//  </div>
//   );
// };

// export default Hero;