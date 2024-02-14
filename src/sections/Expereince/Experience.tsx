import { experience } from "../../assets/images"
import { star } from "../../assets/icons"

export const Experience = () => {
  return (
    <div className="bg-footer-blue w-full h-full mt-5 sm:mt-10 font-poppins">
      <div className="md:px-12 px-5 py-10 md:py-20 md:max-w-6xl mx-auto flex max-sm:flex-col justify-between">
         <div>
            <img src={experience} className="w-3/5 h-full sm:w-4/5 max-sm:mb-7" loading="lazy"/>
            </div>

            <div className="text-white flex flex-col sm:justify-center ">
               <h1 className="font-semibold text-xl lg:text-3xl sm:w-52 md:w-80 mb-3 lg:mb-5">What Leadwinn Offers</h1>
               <ul className="flex flex-col gap-2 text-sm lg:text-base">
                  <li className="flex items-center gap-3"><img src={star} className="w-[1.2rem] h-[1.2rem] lg:w-[1.4rem] lg:h-[1.4rem]" loading="lazy"/>Problem Solving Skills</li>
                  <li className="flex items-center gap-3"><img src={star} className="w-[1.2rem] h-[1.2rem] lg:w-[1.4rem] lg:h-[1.4rem]" loading="lazy"/>  Skills Assessment</li>
                  <li className="flex items-center gap-3"><img src={star} className="w-[1.2rem] h-[1.2rem] lg:w-[1.4rem] lg:h-[1.4rem]" loading="lazy"/> Guided Learning Journeys</li>
                  <li className="flex items-center gap-3"><img src={star} className="w-[1.2rem] h-[1.2rem] lg:w-[1.4rem] lg:h-[1.4rem]" loading="lazy"/> Hands-On Practical Exercises</li>
                  <li className="flex items-center gap-3"><img src={star} className="w-[1.2rem] h-[1.2rem] lg:w-[1.4rem] lg:h-[1.4rem]" loading="lazy"/> Interactive Instructor-Led Sessions</li>
               </ul>
            </div>

      </div>
    </div>
  )
}
