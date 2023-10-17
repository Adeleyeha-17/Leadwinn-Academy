import React from "react"
import { Link } from "react-router-dom"

type Button = {
   path: string;
   title: string;
}
export const Button: React.FC<Button> = ({path, title}) => {
  return (
    <div>
      <Link to={path} className={`inline-block justify-center items-center py-2 md:px-6 px-4 bg-head-blue text-white text-sm md:text-base md:font-semibold rounded-3xl`}>{title}</Link>
    </div>
  )
}
