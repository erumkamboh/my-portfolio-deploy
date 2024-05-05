
import React from "react"
import SkilsItem from "./SkilsItem"
import SkilsLanguage from "./SkilsLanguage"

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
<h1 className="heading">
    Education & <span className="text-yellow-400">Skill</span>
    </h1>
    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] 
    items-center">
        <div>
            <SkilsItem title="React Developer" year="2014 - 2018"/>
            <SkilsItem title="MERN Stack Developer" year="2016 - 2020"/>
            <SkilsLanguage 
            Skill1="html" 
            Skill2="css"
             Skill3="javascript"
              level1="w-[91%]" 
              level2="w-[88%]"
               level3="w-[80%]"
               />
        </div>
        <div>
            <SkilsItem  title="Next js Developer" year="2018 - 2021"/>
            <SkilsItem title="Node js Developer" year="2021 - 2023"/>
            <SkilsLanguage
            Skill1="React js" 
            Skill2="Next js"
             Skill3="Typescript"
              level1="w-[81%]" 
              level2="w-[78%]"
               level3="w-[80%]"
               />
            
        </div>

    </div>

    </div>
  )
}

export default Skils;
