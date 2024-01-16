import { motion } from "framer-motion"
import { Insights, Knowledge, Learning } from "../sections"
import React from "react"
import LibraryCourses from "../components/LibraryCourses";



export const Library: React.FC = () => {
  return (
    < motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>
      <Knowledge />

      <LibraryCourses />

    <Insights />

    <Learning />
    </motion.div>
  )
}
