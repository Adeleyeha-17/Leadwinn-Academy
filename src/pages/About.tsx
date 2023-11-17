import Experience from "../components/Expereince"
import IgnitingMind from "../components/IgnitingMinds"
import Innovators from "../components/Innovators"
import Team from "../components/Team"
import Values from "../components/Values"
import { motion } from "framer-motion"

export const About = () => {
  return (
    <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration: 0.5}}>

      <Innovators />

      <IgnitingMind />

      <Experience />

      <Values />

      <Team />

    </motion.div>
  )
}
