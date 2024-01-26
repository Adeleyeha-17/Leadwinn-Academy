import { leftPlan, rightPlan } from "../../assets/images"

export const Knowledge = () => {
  return (
   <div className="bg-footer-blue flex flex-col justify-center items-center w-full h-full py-[6.63rem] text-white font-poppins relative">
   <img src={leftPlan} alt="leftplan" className="hidden lg:flex lg:h-[19.5rem] xl:h-[22rem] absolute top-0 left-0 bottom-0"/>
   <img src={rightPlan} alt="rightplan" className="hidden lg:flex lg:h-[19.5rem] xl:h-[22rem] absolute top-0 right-0 bottom-0"/>
   <h1 className="text-base sm:text-2xl xl:text-4xl w-[19rem] sm:w-[45rem] mb-5 text-center font-semibold">
   Embark on a Knowledge Expedition with Leadwinn Library        </h1>

   <h4 className="text-xs xl:text-sm w-[20rem] sm:w-[30rem] xl:w-[50rem] text-center">
   Explore our digital library, finely curated to elevate your understanding of coding and technology with resources crafted to fuel your learning journey, spark innovation, and open doors to limitless possibilities.        </h4>


 </div>
  )
}
