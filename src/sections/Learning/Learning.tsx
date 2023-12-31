import { Link } from "react-router-dom"; 
import { puzzleLeft, puzzleRight, monitorRight, monitorLeft }from "../../assets/images"


export const Learning = () => {
  return (
    <div className="bg-nav-blue w-full h-full py-10 sm:py-16 lg:py-24 flex items-center justify-center font-poppins relative mx-auto">
      <img src={puzzleLeft} className="absolute top-0 left-4 sm:left-16 xl:left-52 w-[3.5rem] sm:w-[6rem] lg:w-[9rem]"/>
      <img src={puzzleRight} className="absolute top-0 right-4 sm:right-16 xl:right-52 w-[3.5rem] sm:w-[6rem] lg:w-[9rem]"/>
      <img src={monitorLeft} className="absolute bottom-0 left-0 w-[6rem] sm:w-[12rem] lg:w-[15rem]"/>
      <img src={monitorRight} className="absolute bottom-0 right-0 w-[6rem] sm:w-[12rem] lg:w-[15rem]"/>

      <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center text-center text-heading">
        <h1 className="font-bold text-sm sm:text-xl lg:text-[2rem] lg:leading-[2.75rem] lg:mb-3">Start your learning journey today!</h1>
        <h1 className="max-sm:max-w-[18.75rem] text-xs lg:text-base mb-2 sm:mb-5">Start Your Learning Journey and Discover a World of Opportunities Await</h1>

        <Link to="/register" className="flex justify-center items-center py-2 lg:py-3 px-6 lg:px-10 bg-head-blue text-white text-xs md:text-sm font-medium sm:font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300">Sign Up Now</Link>

      </div>
    </div>
  )
}

