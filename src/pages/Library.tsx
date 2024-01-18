import { motion } from "framer-motion"
import { Insights, Knowledge } from "../sections"
import React from "react"
import LibraryCourses from "../components/LibraryCourses";
import DownloadBrochure from "../components/DownloadBrochure";



export const Library: React.FC = () => {
  return (
    < motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>
      <Knowledge />

      <LibraryCourses />

    <Insights />

    <DownloadBrochure />
    </motion.div>
  )
}
