import { Insights, Knowledge } from "../sections"
import React from "react"
import LibraryCourses from "../components/LibraryCourses";
import DownloadBrochure from "../components/DownloadBrochure";

export const Library: React.FC = () => {
  return (
    < div className="pt-20">
      <Knowledge />

      <LibraryCourses />

      <Insights />

      <DownloadBrochure />
    </div>
  )
}
