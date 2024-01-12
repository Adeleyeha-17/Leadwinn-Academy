import { motion } from "framer-motion"
import { Insights, Knowledge, Learning } from "../sections"


export const Library = () => {
  return (
    < motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>
      <Knowledge />

      <div className="flex flex-col justify-between md:px-12 md:py-6 px-5 xl:px-24 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins">
        Library...
      </div>

    <Insights />

    <Learning />
    </motion.div>
  )
}
