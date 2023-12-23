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


   <div className="font-poppins pb-10 md:px-12 px-5 py-10 xl:px-40 md:py-20 lg:max-xl:max-w-6xl mx-auto">
      <div className="text-heading flex flex-col justify-center items-center gap-1 mb-16">

      <h2 className="text-3xl font-semibold ">
         Our Courses are based on skill level
      </h2>

      <h5> Elevate Your Skills, Regardless of Your Starting Point.</h5>
      </div>
   <div className="flex max-sm:flex-col justify-center items-center gap-10 sm:px-16">
     <div className="h-[28.8rem] w-[27.8rem] flex flex-col gap-[2.35rem]">
      {skillLevel.map((data, index) => (

       <div key={index} className={`${selected?.level === data.level ? "bg-skill-hov" :"bg-skill"} w-full h-[8rem] rounded-2xl px-14 py-5 cursor-pointer`} onClick={() => setSelected(data)}>
         <div className="flex justify-between items-center relative">
            <img src={data.btnImg} alt="" className="absolute -right-6 w-[12rem]"/>
         <div className="text-heading flex flex-col gap-1">
            <h3 className="text-lg font-semibold">{data.level}</h3>
            <h5 className="text-sm">({data.age})</h5>
         </div>

         <img src={selected?.level === data.level ? data.activeSvg : data.svg} className="z-10"/>
         </div>
       </div>
      ))}
       
     </div>

     <div className="bg-skill h-[28.8rem] w-[27.8rem] rounded-2xl px-8 pt-10 overflow-hidden">
      <div className="flex flex-wrap gap-y-6 gap-x-12 w-[22rem] mx-auto">

      {skills.map((skill, index) => (
         <div key={index} className={`flex gap-2 items-center w-max`}>

            <img src={skill.rating} alt={skill.rating} className="w-6"/>
            <h4 className="text-sm">
               {skill.skill}
               </h4>
         </div>
      ))}
      </div>

<div className="mt-11">

     {selected && <img src={selected.img} alt={selected.level} /> }
</div>
     </div>
   </div>
   
 </div>
  )
}
