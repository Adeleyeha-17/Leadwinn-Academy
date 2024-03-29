import { experienceA, experienceB, pricing, replay, review, time, tips } from "../../assets/icons";
import { useState } from "react";


export const DesktopPlans = () => {

   const [tooltips, setTooltips] = useState([false, false, false, false, false]);

   const handleTooltipToggle = (index: number) => {
      const newTooltips = [...tooltips];
      newTooltips[index] = !newTooltips[index];
      setTooltips(newTooltips);
   };

  return (
   <div className="bg-skill h-full font-poppins max-sm:px-5 sm:px-10 sm:flex flex-col gap-10 justify-center sm:items-center hidden">

   <div className="flex max-sm:flex-col gap-8 mx-auto">
      <div className="bg-white mx-auto w-[20rem] sm:w-[19rem] lg:w-[28rem] xl:w-[33rem] h-[40rem] lg:h-[50rem] xl:h-[46rem] rounded-2xl text-heading p-5 lg:p-10">
         <div className="mb-5">
            <h1 className=" text-base lg:text-xl font-semibold mb-1">Virtual Personal Tutoring</h1>
            <h4 className="text-xs lg:text-sm xl:text-base w-[17rem] lg:w-[23rem] xl:w-[25rem]">Elevate Your Learning with Tutor-Led Live Classes, One-on-One Excellence Tailored to You.</h4>
         </div>

         <a
         href={`https://api.whatsapp.com/send?phone=+2348165906106&text=Hello%20admin,%20I%20want%20to%20get%20started%20with%20the%20Virtual%20Personal%20Tutoring%20plan.%20Can%20we%20discuss%20further?`}
            className={`inline-block justify-center items-center py-3 w-[17.5rem] sm:w-[16.5rem] lg:w-[23rem] xl:w-[28rem] bg-head-blue text-white text-xs text-center font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} target="_blank" rel="noopener noreferrer">Get Started</a>

         <div className="mt-7">
            <h4 className="text-sm lg:text-base font-semibold mb-3">Features</h4>

            <div>
               <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={experienceA} alt="Experience Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs" >Personalized Learning Experience</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(0)}
                           onMouseLeave={() => handleTooltipToggle(0)}  loading="eager"/>

                        {tooltips[0] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[11.4rem] xl:-top-[12.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                                 Experience a tailored curriculum designed to meet individual needs, fostering focused learning through direct interaction with our expert tutors.
                              </div>
                           </div>
                        )}

                     </div>
                  </div>
                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={time} alt="Duration Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Time Flexibility</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(1)}
                           onMouseLeave={() => handleTooltipToggle(1)}  loading="eager"/>

                        {tooltips[1] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[11.4rem] xl:-top-[12.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Empower your learning journey with the flexibility to schedule classes at times convenient for you, offering the freedom to adjust timings.
                                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-t-4 border-blue-900"></div>
                              </div>
                           </div>
                        )}

                     </div>
                  </div>

                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={review} alt="Review Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Project Review</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(2)}
                           onMouseLeave={() => handleTooltipToggle(2)}  loading="eager"/>

                        {tooltips[2] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[11.4rem] xl:-top-[13.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                                 Gain valuable insights with personalized feedback on projects and assignments, fostering close collaboration with our tutors for targeted skill development.
                              </div>
                           </div>
                        )}

                     </div>
                  </div>

                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={replay} alt="Replay Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Replay</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(3)}
                           onMouseLeave={() => handleTooltipToggle(3)}  loading="eager"/>

                        {tooltips[3] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[12.3rem] xl:-top-[13.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                                 Enhance your learning with access to recorded sessions for thorough review and reinforcement. Never miss a class, as on-demand replays ensure continuous engagement.
                              </div>
                           </div>
                        )}

                     </div>
                  </div>


                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={pricing} alt="Pricing Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Premium Pricing</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(4)}
                           onMouseLeave={() => handleTooltipToggle(4)}  loading="eager"/>

                        {tooltips[4] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[10.5rem] xl:-top-[12.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                                 Immerse yourself in a premium learning experience with high-quality, one-on-one tutoring, tailored to meet your unique educational goals.
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-7">
               <h3 className="text-sm lg:text-base font-semibold mb-3">Additional Tracking</h3>

               <div>
                  <h3 className="text-xs lg:text-sm mb-2">
                     <span className="mr-2 font-semibold">
                        Progress Tracking:
                     </span>
                     Monitor and track individual progress through a dedicated dashboard
                  </h3>
               </div>
               <div>
                  <h3 className="text-xs lg:text-sm mb-2">
                     <span className="mr-2 font-semibold">
                        Priority Support:
                     </span>
                     Get priority access to customer support for a seamless learning journey.
                  </h3>
               </div>
            </div>

         </div>
      </div>

      <div className="bg-white mx-auto w-[20rem] sm:w-[19rem] lg:w-[28rem] xl:w-[33rem] h-[40rem] lg:h-[50rem] xl:h-[46rem] rounded-2xl text-heading p-5 lg:p-10">
         <div className="mb-5">
            <h1 className=" text-base lg:text-xl font-semibold mb-1">Virtual Group Classes</h1>
            <h4 className="text-xs lg:text-sm xl:text-base w-[17rem] lg:w-[23rem] xl:w-[25rem]">Maximize Learning in Virtual Group Classes with Expert Tutors, Limited to 4 Students per Class.</h4>
         </div>

         <a href={`https://api.whatsapp.com/send?phone=+2348165906106&text=Hello%20admin,%20I%20want%20to%20get%20started%20with%20the%20Virtual%20Group%20Classes%20plan.%20Can%20we%20discuss%20further?`} className={`inline-block justify-center items-center py-3 w-[17.5rem] sm:w-[16.5rem] lg:w-[23rem] xl:w-[28rem] bg-head-blue text-white text-xs text-center font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} target="_blank" rel="noopener noreferrer"
         >Get Started</a>
         <div className="mt-7">
            <h4 className="text-sm lg:text-base font-semibold mb-3">Features</h4>

            <div>
               <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={experienceB} alt="Experience Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs" >Networking Oppurtunities</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(5)}
                           onMouseLeave={() => handleTooltipToggle(5)}  loading="eager"/>

                        {tooltips[5] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[10.4rem] xl:-top-[12.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Engage yourself in a global learning experience by engaging with students from diverse backgrounds and countries.
                              </div>
                           </div>
                        )}

                     </div>                           </div>
                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={time} alt="Duration Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Agreed Time (Not Flexible)</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(6)}
                           onMouseLeave={() => handleTooltipToggle(6)}  loading="eager"/>

                        {tooltips[6] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[12.4rem] xl:-top-[14.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Experience a structured learning environment with a fixed class schedule. Interact with a group of peers at agreed-upon times, fostering a collaborative and engaging educational atmosphere.
                              </div>
                           </div>
                        )}

                     </div>
                     </div>

                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={review} alt="Review Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Project Review</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(7)}
                           onMouseLeave={() => handleTooltipToggle(7)}  loading="eager"/>

                        {tooltips[7] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[13.4rem] xl:-top-[14.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Enhance your learning through constructive feedback on group projects, fostering teamwork and collaborative learning experiences that contribute to your overall educational growth.
                              </div>
                           </div>
                        )}
                     </div>                           
                     </div>

                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={replay} alt="Replay Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Replay</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(8)}
                           onMouseLeave={() => handleTooltipToggle(8)}  loading="eager"/>

                        {tooltips[8] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[10.4rem] xl:-top-[11.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Optimize your learning journey by accessing group session recordings for thorough review and reinforcement. 
                              </div>
                           </div>
                        )}

                     </div>                           </div>

                  <div className="flex justify-between items-center border-skill-hov border-b-2">
                     <div className="flex gap-2 mb-2">
                        <img src={pricing} alt="Pricing Icon" className="h-4 w-4 sm:w-5 sm:h-5 lg:h-6 lg:w-6"  loading="eager"/>
                        <span className="max-lg:text-xs">Standard Pricing</span>
                     </div>
                     <div className="relative">

                        <img src={tips} className="mb-2 max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 sm:max-lg:h-5" onMouseEnter={() => handleTooltipToggle(9)}
                           onMouseLeave={() => handleTooltipToggle(9)}  loading="eager"/>

                        {tooltips[9] && (
                           <div className="relative">
                              <div className="tooltip bg-blue-900  border-blue-900 text-white text-[10px] xl:text-xs w-48 xl:w-80 rounded-xl p-5 xl:p-10 absolute -top-[11.4rem] xl:-top-[13.4rem] left-[38%] xl:left-[40%] transform -translate-x-1/2 text-center">
                              Gain valuable insights with personalized feedback on projects and assignments, fostering close collaboration with our tutors for targeted skill development.
                              </div>
                           </div>
                        )}

                     </div>                           </div>
               </div>
            </div>

            <div className="mt-7">
               <h3 className="text-sm lg:text-base font-semibold mb-3">Additional Tracking</h3>

               <div>
                  <h3 className="text-xs lg:text-sm mb-2">
                     <span className="mr-2 font-semibold">
                        Cross-Cultural Learning:
                     </span>
                     Gain insights into different cultures through group discussions and projects.
                  </h3>
               </div>
               <div>
                  <h3 className="text-xs lg:text-sm mb-2">
                     <span className="mr-2 font-semibold">
                        Collaborative Projects:
                     </span>
                     Work on team projects to enhance collaboration and communication skills.
                  </h3>
               </div>
            </div>

         </div>
      </div>
   </div>
</div>
  )
}
