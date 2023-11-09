import { Link } from "react-router-dom"

export const Growth = () => {
  return (
   <div className="flex flex-col md:flex-row justify-between py-10 md:px-12 md:py-20 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl md:bg-[#F4F7FA] font-poppins">
    <div className="flex max-sm:flex-col md:justify-between md:items-center sm:w-full">
      <div className="flex flex-col gap-4 lg:gap-6 text-head-black md:w-2/5 max-sm:mb-10">
         <h1 className=" font-bold text-2xl sm:text-[1.875rem] lg:text-[2.5rem] sm:leading-9 lg:leading-[2.875rem] max-w-[20.625rem] sm:max-w-[23.75rem] lg:max-w-[31rem] max-sm:capitalize">See our growth, progress, and <span className="text-hero-blue">evolution</span></h1>
         <h4 className="text-[0.8125rem] lg:text-base max-w-[23.125rem] lg:max-w-[28rem]">Founded in 2020, Leadwinn has trained 100+ students in 10+ countries, demonstrating a global commitment to top-notch coding education. Our mission is to shape the future of education in an evolving digital landscape.</h4>

         <Link to="/about" className="flex justify-center items-center sm:max-md:w-28 sm:max-md:h-10 md:w-36 md:h-10 w-24 h-8 gap-3 bg-head-blue text-white font-poppins text-xs sm:text-sm sm:font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300">LEARN MORE</Link>

      </div>

      <div className="md:w-3/5">
         <img src="./growth.png" alt="growth image" className="max-w-full w-full"/>
      </div>
    </div>
    </div>
  )
}
