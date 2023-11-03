import React from "react"
import { Link } from "react-router-dom"

type Button = {
   path: string;
   title: string;
}
export const Button: React.FC<Button> = ({path, title}) => {
  return (
    <div>
      <Link to={path} className={ `hidden md:inline-block justify-center items-center py-2 md:px-6 px-4 bg-head-blue text-white md:text-sm md:font-semibold rounded-3xl transition hover:bg-blue-800 ease-in-out duration-300`}>{title}</Link>
    </div>
  )
}
