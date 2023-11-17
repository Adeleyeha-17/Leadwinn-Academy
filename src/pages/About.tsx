import Experience from "../components/Expereince"
import IgnitingMind from "../components/IgnitingMinds"
import Innovators from "../components/Innovators"
import Team from "../components/Team"
import Values from "../components/Values"
import { motion } from "framer-motion"

export const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>

      <Innovators />

      <IgnitingMind />

      <Experience />

      <Values />

      <Team />

    </motion.div>
  )
}
