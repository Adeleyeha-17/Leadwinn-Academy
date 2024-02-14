import React from "react"
import { motion } from "framer-motion";
import { Insights, Knowledge } from "../sections"
import LibraryCourses from "../components/LibraryCourses";


export const Library: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="pt-20">
      <Knowledge />

      <LibraryCourses />

      <Insights />

    </motion.div>
  )
}
