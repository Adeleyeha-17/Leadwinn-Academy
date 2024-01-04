import { leftPlan, rightPlan } from "../../assets/images"

export const Innovators:React.FC = () => {
  return (
    <div>
      <div className="bg-footer-blue flex flex-col justify-center items-center w-full h-full py-[7.87rem] text-white font-poppins relative">
        <img src={leftPlan} className="hidden lg:flex h-[21rem] xl:h-[22rem] absolute top-0 left-0 bottom-0"/>
        <img src={rightPlan} className="hidden lg:flex h-[21rem] xl:h-[22rem] absolute top-0 right-0 bottom-0"/>
        <h1 className="text-base sm:text-2xl xl:text-4xl mb-5 font-medium">
        Shaping Tech Innovators Of Tommorrow
        </h1>

        <h4 className="text-xs xl:text-sm w-[20rem] sm:w-[30rem] xl:w-[40rem] text-center">
        Leadwinn is dedicated to transforming learners, inspiring progress, and nurturing the future of tech education.
        </h4>
    
    
      </div>
    </div>
  )
}
