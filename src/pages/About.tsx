import { motion } from "framer-motion"
import { Experience, IgnitingMind, Innovators, Team, Values, Learning } from "../sections"

export const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="pt-20">

      <Innovators />

      <IgnitingMind />

      <Experience />

      <Values />

      <Team /> 
      
      <Learning />

    </motion.div>
  )
}
