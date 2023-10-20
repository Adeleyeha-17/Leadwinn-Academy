import React from "react"
import { Link } from "react-router-dom"

type Button = {
   path: string;
   title: string;
}
export const Button: React.FC<Button> = ({path, title}) => {
  return (
    <div>
      <Link to={path} className={`inline-block justify-center items-center py-2 xl:py-3 md:px-6 xl:px-10 px-4 bg-head-blue text-white text-xs md:max-lg:text-sm lg:text-base md:font-semibold rounded-3xl`}>{title}</Link>
    </div>
  )
}
