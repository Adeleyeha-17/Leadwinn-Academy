import { Insights, Knowledge } from "../sections"
import React from "react"
import LibraryCourses from "../components/LibraryCourses";

export const Library: React.FC = () => {
  return (
    < div className="pt-20">
      <Knowledge />

      <LibraryCourses />

      <Insights />

    </div>
  )
}
