import { Link } from "react-router-dom"

export const Growth = () => {
  return (
   <div className="flex flex-col md:flex-row justify-between py-10 sm:px-20 md:py-20 px-5 lg:px-0 xl:px-28 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto md:bg-[#F4F7FA] font-poppins">
    <div className="flex max-sm:flex-col justify-between items-center w-full">
      <div className="flex flex-col gap-4 lg:gap-6 text-head-black md:w-3/5 max-sm:mb-10">
         <h1 className=" font-bold text-2xl lg:text-4xl max-w-[330px] lg:max-w-[440px] max-sm:capitalize">See our growth, progress, and <span className="text-hero-blue">evolution</span></h1>
         <h4 className="text-[13px] lg:text-base max-w-[370px] lg:max-w-[445px]">Founded in 2020, Leadwinn has trained 100+ students in 10+ countries, demonstrating a global commitment to top-notch coding education. Our mission is to shape the future of education in an evolving digital landscape.</h4>

         <Link to="" className="flex justify-center items-center sm:max-md:w-28 sm:max-md:h-10 md:w-36 md:h-10 w-24 h-8 gap-3 bg-head-blue text-white text-xs sm:text-sm sm:font-normal rounded-3xl">LEARN MORE</Link>

      </div>

      <div className="md:w-3/6">
         <img src="./growth.svg" alt="growth image" className="w-full"/>
      </div>
    </div>
    </div>
  )
}
