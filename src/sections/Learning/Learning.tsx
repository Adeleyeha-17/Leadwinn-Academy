import { Link } from "react-router-dom"; 
import { growth }from "../../assets/images"


export const Learning = () => {
  return (
    <div className="bg-nav-blue w-full h-full px-14 xl:px-20 py-16 sm:py-10 flex items-center justify-center font-poppins relative mx-auto">
      <div className="flex max-lg:gap-4 max-lg:flex-col items-center justify-between max-lg:text-center text-heading">
      <img src={growth} className="w-1/2 lg:w-1/5" loading="lazy"/>
        <h1 className="font-bold text-xl lg:text-xl xl:text-3xl text-heading w-[26rem] xl:w-[40rem]">Affordable Online Learning Oppurtunities For You</h1>

        <Link to="/courses" className="flex justify-center items-center py-2 lg:py-3 px-6 lg:px-10 bg-head-blue text-white text-xs md:text-sm font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300">Start Learning Now</Link>

      </div>
      </div>
  )
}

