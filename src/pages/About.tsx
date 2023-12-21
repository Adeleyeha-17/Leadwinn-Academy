import { Experience, IgnitingMind, Innovators, Team, Values, Learning } from "../sections"
import { motion } from "framer-motion"

export const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>

      <Innovators />

      <IgnitingMind />

      <Experience />

      <Values />

      <Team /> 
      
      <Learning />

    </motion.div>
  )
}
