import { motion } from "framer-motion"
import Faq from "../components/Faq"
import Path from "../components/Path"
import PlanCourses from "../components/PlanCourses"
import Otherplans from "../components/Otherplans"

export const Plans = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="font-poppins">
      <Path />

      <PlanCourses />

      <Otherplans />

      <Faq />

    </motion.div>
  )
}
