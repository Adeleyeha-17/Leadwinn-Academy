import { Link } from "react-router-dom"


export const Learning = () => {
  return (
    <div className="bg-learning-mobile md:bg-learning bg-contain bg-no-repeat flex items-center justify-center sm:h-[240px] lg:h-[300px] xl:h-[400px] font-poppins mx-auto">
      <div className="flex flex-col gap-2 items-center text-center text-head-black">
      <h1 className="font-bold text-sm sm:text-xl lg:text-3xl">Start your learning journey today!</h1>
      <h1 className="text-xs lg:text-base mb-5">Start Your Learning Journey and Discover a World of Opportunities Await</h1>

      <Link to="" className="flex justify-center items-center py-2 lg:py-3 px-4 lg:px-6 bg-head-blue text-white text-xs md:text-sm font-semibold rounded-3xl">Sign up now</Link>

      </div>
    </div>
  )
}
