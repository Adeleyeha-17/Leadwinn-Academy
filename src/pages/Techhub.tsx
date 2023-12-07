import { motion } from "framer-motion"
import comingSoon from "../assets/coming soon.png"

export const Techhub = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="flex flex-col justify-center items-center md:px-12 md:py-6 px-5 xl:px-40 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins h-screen text-5xl text-head-blue">

<img src={comingSoon} className="max-lg:w-[30rem]" />    
</motion.div>
  )
}
