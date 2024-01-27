import { rating } from "../../assets/icons" 
import { beginners, intermediate,advanced, plans, beginnerSvg, intermediateSvg, advancedSvg,beginnerActive, intermediateActive, advancedActive  } from "../../assets/images";
import { useState } from "react";

export const Skill = () => {

   type Skill = {
      rating: string;
      skill: string;
    };
    
    type SkillLevel = {
      img: string;
      level: string;
      age: string;
      btnImg: string;
      svg: string;
      activeSvg: string;
    };
    
    const skills: Skill[] = [
      {
        rating: rating,
        skill: "MIT",
      },
      {
        rating: rating,
        skill: "Python Programming",
      },
      {
        rating: rating,
        skill: "Roblox Design",
      },
      {
        rating: rating,
        skill: "Scratch",
      },
      {
        rating: rating,
        skill: "UI/UX Design",
      },
      {
        rating: rating,
        skill: "Web Development",
      },
    ];
    
    const skillLevel: SkillLevel[] = [
      {
        img: beginners,
        level: "Beginner",
        age: "6+ Years",
        btnImg: plans,
        svg: beginnerSvg,
        activeSvg: beginnerActive
      },
      {
        img: intermediate,
        level: "Intermediate",
        age: "8+ Years",
        btnImg: plans,
        svg: intermediateSvg,
        activeSvg: intermediateActive
      },
      {
        img: advanced,
        level: "Advanced",
        age: "10+ Years",
        btnImg: plans,
        svg: advancedSvg,
        activeSvg: advancedActive
      },
    ];
    

    const [selected, setSelected] = useState<SkillLevel | null >(skillLevel[0])
  
  return (


   <div className="font-poppins pb-12 lg:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="text-heading flex flex-col justify-center items-center gap-1 mb-10 sm:mb-16">

      <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
         Our Courses are based on skill level
      </h2>

      <h5 className="max-sm:text-xs max-lg:text-sm text-center"> Elevate Your Skills, Regardless of Your Starting Point.</h5>
      </div>
   <div className="flex max-sm:flex-col-reverse justify-center items-center gap-10 sm:px-16">
     <div className="h-auto sm:h-[21rem] lg:h-[26rem] xl:h-[28.8rem] w-[21rem] sm:w-[27.8rem] flex flex-col gap-[2.35rem]">
      {skillLevel.map((data, index) => (

       <div key={index} className={`${selected?.level === data.level ? "bg-skill-hov" :"bg-skill"} w-full h-[5.4rem] lg:h-[7.1rem] xl:h-[8rem] rounded-2xl px-6 lg:px-14 py-5 cursor-pointer`} onMouseOver={() => setSelected(data)}>
         <div className="flex justify-between items-center relative">
            <img src={data.btnImg} alt="" className="absolute -right-6 w-[7rem] lg:w-[9.5rem] h-full xl:w-[12rem]" loading="eager"/>
         <div className="text-heading flex flex-col gap-1">
            <h3 className="text-sm lg:text-lg font-semibold">{data.level}</h3>
            <h5 className="text-xs lg:text-sm">({data.age})</h5>
         </div>

         <img src={selected?.level === data.level ? data.activeSvg : data.svg} className="z-10 h-full max-lg:w-[3.5rem] max-xl:w-[5rem]" loading="eager"/>
         </div>
       </div>
      ))}
       
     </div>

     <div className="flex flex-col-reverse sm:flex-col bg-skill h-auto sm:h-[21rem] lg:h-[26rem] xl:h-[28.8rem] w-[21rem] sm:w-[27.8rem] rounded-2xl px-6 sm:px-3 lg:px-8 pt-7 sm:pt-5 lg:pt-10 overflow-hidden">
      <div className="flex flex-wrap gap-y-6 gap-x-4 max-sm:pb-7 max-sm:ml-2 xl:gap-x-12 w-[18rem] sm:w-[17rem] lg:w-[22rem] lg:mx-auto">

      {skills.map((skill, index) => (
         <div key={index} className={`flex gap-2 items-center w-max`}>

            <img src={skill.rating} alt={skill.rating} className="h-4 w-4 lg:h-6 lg:w-6" loading="eager"/>
            <h4 className="text-xs lg:text-sm">
               {skill.skill}
               </h4>
         </div>
      ))}
      </div>

<div className="max-sm:mb-5 sm:mt-11">

     {selected && <img src={selected.img} alt={selected.level} className="w-full h-full max-sm:rounded-3xl" loading="eager"/> }
</div>
     </div>
   </div>
   
 </div>
  )
}
