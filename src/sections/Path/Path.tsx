import { leftPlan, rightPlan } from "../../assets/images"

export const Path:React.FC = () => {
  return (
    <div>
      <div className="bg-footer-blue flex flex-col justify-center items-center w-full h-full py-[6rem] xl:py-[8.1rem] text-white font-poppins relative">
        <img src={leftPlan} className="hidden lg:flex h-[18rem] xl:h-[23.1rem] absolute xl:top-8 left-0 bottom-0"/>
        <img src={rightPlan} className="hidden lg:flex h-[18rem] xl:h-[23.1rem] absolute xl:top-8 right-0 bottom-0"/>
        <h1 className="text-base sm:text-2xl xl:text-4xl w-[19rem] sm:w-[45rem] mb-5 text-center font-semibold">
        Choose Your Path to Tech Brilliance With Leadwinn Plans
        </h1>

        <h4 className="text-xs xl:text-sm w-[20rem] sm:w-[40rem] xl:w-[46rem] text-center">
         <p className="max-sm:mb-3 sm:mb-0.5">
         Explore our subscription plans tailored to fuel your journey in coding and tech education. 
         </p>
         <p>
         Pick the perfect plan to unlock a world of learning, innovation, and limitless possibilities.
         </p>
        </h4>
    
    
      </div>
    </div>
  )
}
