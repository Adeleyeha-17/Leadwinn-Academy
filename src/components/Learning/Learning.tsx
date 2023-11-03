import { Link } from "react-router-dom"


export const Learning = () => {
  return (
    <div className="bg-learning bg-contain bg-no-repeat flex items-center justify-center lg:h-[300px] xl:h-[400px] font-poppins">
      <div className="flex flex-col gap-2 items-center text-center text-head-black">
      <h1 className="font-bold text-3xl">Start your learning journey today!</h1>
      <h1 className="text-base mb-5">Start Your Learning Journey Today and Discover a World of Opportunities Await</h1>

      <Link to="" className="flex justify-center items-center w-40 py-3 md:px-6 px-4 bg-head-blue text-white md:text-sm font-semibold rounded-3xl">Sign up now</Link>

      </div>
    </div>
  )
}
