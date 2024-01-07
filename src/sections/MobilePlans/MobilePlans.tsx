import { experienceA, pricing, replay, review, time, tips } from "../../assets/icons";
import { useState } from "react";
import { motion } from "framer-motion"

export const MobilePlans = () => {

   const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleTab = (index: number) => {
    setActiveAccordion(index === activeAccordion ? 0 : index);
  };

  return (
  <div className="bg-skill h-full font-poppins px-5 flex flex-col gap-10 items-center justify-center sm:hidden">
  
   <div className="flex max-sm:flex-col gap-8">
      <div className="bg-white mx-auto w-[20rem] sm:w-[19rem] lg:w-[28rem] xl:w-[33rem] h-[40rem] lg:h-[50rem] xl:h-[46rem] rounded-2xl text-heading p-5 lg:p-10">

      <div className="mb-5">
            <h1 className=" text-base lg:text-xl font-semibold mb-1">Virtual Group Classes</h1>
            <h4 className="text-xs lg:text-sm xl:text-base w-[17rem] lg:w-[23rem] xl:w-[25rem]">Maximize Learning in Virtual Group Classes with Expert Tutors, Limited to 4 Students per Class.</h4>
         </div>

         <a   href={`https://api.whatsapp.com/send?phone=+2348165906106&text=Hello%20admin,%20I%20want%20to%20get%20started%20with%20the%20Virtual%20Group%20Classes%20plan.%20Can%20we%20discuss%20further?`}
            className={`inline-block justify-center items-center py-3 w-[17.5rem] sm:w-[16.5rem] lg:w-[23rem] xl:w-[28rem] bg-head-blue text-white text-xs text-center font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} target="_blank" rel="noopener noreferrer"
         >
            Get Started
         </a>

         <div className="mt-7">
         <h4 className="text-sm lg:text-base font-semibold mb-3">Features</h4>
         </div>

          <div className='mb-4 border-b border-skill-hov flex flex-col'>
            <div className="flex justify-between items-center" >
              <div className="flex gap-2 mb-2">
                <img src={experienceA} alt="Experience Icon" className="w-4" />
                <div className="flex gap-[6rem]">
                <div>

                <span className="text-[0.7rem]">Networking Opportunities</span>
                </div>
                <img src={tips} className='w-4 cursor-pointer' onClick={() => toggleTab(0 + 1)}/>
                </div>
              
              </div>
            </div>
            <motion.div initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === 0 + 1 ? 1 : 0,
                        height: activeAccordion === 0 + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }} className="overflow-hidden">
              <p className="text-head-black text-[0.7rem]">EEngage yourself in a global learning experience by engaging with students from diverse backgrounds and countries.</p>
          </motion.div>
            </div>
       
          <div className='mb-4 border-b border-skill-hov flex flex-col'>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 mb-2">
                <img src={time} alt="Pricing Icon" className="w-4" />
                <div className="flex gap-[5.7rem]">
                <span className="text-[0.7rem]">Agreed Time (Not Flexible)</span>
                <img src={tips} className='w-4 cursor-pointer' onClick={() => toggleTab(1 + 1)}/>
                </div>
                </div>
             
            </div>
            <motion.div initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === 1 + 1 ? 1 : 0,
                        height: activeAccordion === 1 + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }} className="overflow-hidden">
              <p className="text-head-black text-[0.7rem] ">Experience a structured learning environment with a fixed class schedule. Interact with a group of peers at agreed-upon times, fostering a collaborative and engaging educational atmosphere.</p>
            </motion.div>
          </div>
       

          <div className='mb-4 border-b border-skill-hov flex flex-col'>
            <div className="flex justify-between items-center" >
              <div className="flex gap-2 mb-2">
                <img src={review} alt="Pricing Icon" className="w-4 sm:w-5 lg:w-6" />
                <div className="flex gap-[9.9rem]">
                <span className="text-[0.7rem]">Project Review</span>
                <img src={tips} className='w-4 cursor-pointer' onClick={() => toggleTab(2 + 1)}/>
                </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === 2 + 1 ? 1 : 0,
                        height: activeAccordion === 2 + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }} className="overflow-hidden">
              <p className="text-head-black text-[0.7rem] ">Enhance your learning through constructive feedback on group projects, fostering teamwork and collaborative learning experiences that contribute to your overall educational growth..</p>
            </motion.div>
          </div>
       

          <div className='mb-4 border-b border-skill-hov flex flex-col'>
            <div className="flex justify-between items-center" >
              <div className="flex gap-2 mb-2">
                <img src={replay} alt="Pricing Icon" className="w-4 sm:w-5 lg:w-6" />
                <div className="flex gap-[12.55rem]">
                <span className="text-[0.7rem]">Replay</span>
                <img src={tips} className='w-4 cursor-pointer' onClick={() => toggleTab(3 + 1)}/>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === 3 + 1 ? 1 : 0,
                        height: activeAccordion === 3 + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }} className=" overflow-hidden">
              <p className="text-head-black text-[0.7rem]">Optimize your learning journey by accessing group session recordings for thorough review and reinforcement. </p>
            </motion.div>
          </div>
       

          <div className='mb-4 border-b border-skill-hov flex flex-col'>
            <div className="flex justify-between items-center" >
              <div className="flex gap-2 mb-2">
                <img src={pricing} alt="Experience Icon" className="w-4" />
                <div className="flex gap-[9.1rem]">
                <div>

                <span className="text-[0.7rem]">Standard Pricing</span>
                </div>
                <img src={tips} className='w-4 cursor-pointer' onClick={() => toggleTab(9 + 1)}/>
                </div>
              
              </div>
            </div>
            <motion.div initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === 9 + 1 ? 1 : 0,
                        height: activeAccordion === 9 + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }} className="overflow-hidden">
              <p className="text-head-black text-[0.7rem]">Gain valuable insights with personalized feedback on projects and assignments, fostering close collaboration with our tutors for targeted skill development.</p>
          </motion.div>
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
  )
}
