import { motion } from "framer-motion"
import Faq from "../components/Faq"
import { Path, Otherplans, Skill, SelectedPlans } from "../sections"

export const Plans = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="font-poppins pt-20">
      <Path />

      <Skill />

      <SelectedPlans />

      <Otherplans />

      <Faq />

    </motion.div>
  )
}
