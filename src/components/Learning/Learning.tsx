import { Link } from "react-router-dom"


export const Learning = () => {
  return (
    <div className="bg-learning-mobile sm:bg-learning bg-contain bg-no-repeat flex items-center justify-center h-[200px] sm:h-[260px] lg:h-[320px] xl:h-[400px] 2xl:h-[560px] font-poppins -mb-16 lg:-mb-10">
      <div className="flex flex-col gap-1 sm:gap-2 items-center justify-center text-center text-head-black max-sm:-mt-16 xl:-mt-6 ">
      <h1 className="font-bold text-sm sm:text-xl lg:text-[32px] leading-[44px] lg:mb-3">Start your learning journey today!</h1>
      <h1 className="text-xs sm:text-xs lg:text-base mb-2 sm:mb-5">Start Your Learning Journey and Discover a World of Opportunities Await</h1>

      <Link to="" className="flex justify-center items-center py-2 lg:py-3 px-6 lg:px-16 bg-head-blue text-white text-xs md:text-sm font-medium sm:font-semibold rounded-3xl">Sign up now</Link>

      </div>
    </div>
  )
}
