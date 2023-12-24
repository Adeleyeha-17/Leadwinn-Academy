import { motion } from "framer-motion"
import Faq from "../components/Faq"
import { Path, PlanCourses, Otherplans, Skill, SelectedPlans } from "../sections"



export const Plans = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="font-poppins">
      <Path />

      <Skill />

      <SelectedPlans />

      <PlanCourses />

      <Otherplans />

      <Faq />

    </motion.div>
  )
}
