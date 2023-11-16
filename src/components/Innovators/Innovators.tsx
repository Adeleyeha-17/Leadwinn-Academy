
export const Innovators:React.FC = () => {
  return (
    <div>
      <div className="bg-footer-blue flex flex-col justify-center items-center max-sm:h-[18rem] sm:h-[22rem] xl:h-[23.5rem] text-white font-poppins relative">
        <img src="./tech-left.png" className="hidden lg:flex h-[22rem] xl:h-[23.5rem] absolute top-0 left-0 bottom-0"/>
        <img src="./tech-right.png" className="hidden lg:flex h-[22rem] xl:h-[23.5rem] absolute top-0 right-0 bottom-0"/>
        <h1 className="text-base sm:text-3xl xl:text-5xl font-medium mb-5">
        Shaping Tech Innovators Of Tommorrow
        </h1>

        <h4 className="text-xs sm:text-sm xl:text-base w-[20rem] sm:w-[30rem] xl:w-[46rem] text-center">
        Leadwinn is dedicated to transforming learners, inspiring progress, and nurturing the future of tech education.
        </h4>
    
      </div>
    </div>
  )
}