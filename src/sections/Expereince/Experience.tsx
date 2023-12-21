import { experience } from "../../assets/images"

export const Experience = () => {
  return (
    <div className="bg-footer-blue w-full h-full mt-5 sm:mt-10 font-poppins">
      <div className="md:px-12 xl:px-0 px-5 py-10 md:py-20 md:max-w-6xl xl:max-w-7xl mx-auto flex max-sm:flex-col justify-between">
         <div>
            <img src={experience} className="w-3/5 md:w-4/5 max-sm:mb-7"/>
            </div>

            <div className="text-white flex flex-col sm:justify-center ">
               <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl sm:w-52 md:w-80 mb-3 lg:mb-5">Leadwinn Skills Experience</h1>
               <ul className="flex flex-col gap-2 max-md:text-xs text-lg">
                  <li>Problem Solving</li>
                  <li>Skills Assessment</li>
                  <li>Guided Learning Journeys</li>
                  <li>Hands-On Practical Exercises</li>
                  <li>Interactive Instructor-Led Sessions</li>
               </ul>
            </div>

      </div>
    </div>
  )
}
