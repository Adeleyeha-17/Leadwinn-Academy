import { motion } from "framer-motion"
import { leftPlan, rightPlan } from "../assets/images"
import { Careers } from "../sections"

export const Career = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} >
<div className="bg-footer-blue flex flex-col justify-center items-center w-full h-full py-[6rem] xl:py-[8.75rem] text-white font-poppins relative">
        <img src={leftPlan} className="hidden lg:flex h-[18rem] xl:h-[23.1rem] absolute xl:top-8 left-0 bottom-0"/>
        <img src={rightPlan} className="hidden lg:flex h-[18rem] xl:h-[23.1rem] absolute xl:top-8 right-0 bottom-0"/>
        <h1 className="text-base sm:text-2xl xl:text-4xl w-[19rem] sm:w-[45rem] mb-5 text-center">
        Become a Crucial Part of our Educational Journey
        </h1>

        <h4 className="text-xs xl:text-sm w-[20rem] sm:w-[50rem] text-center">
         <p className="max-sm:mb-3 sm:mb-0.5">
         Explore exciting opportunities to mentor and guide the next generation of tech leaders at Leadwinn Academy.         </p>
        </h4>
    
    
      </div>
      
    <Careers />

</motion.div>
  )
}
