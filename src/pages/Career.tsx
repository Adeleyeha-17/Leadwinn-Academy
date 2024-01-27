import { leftPlan, rightPlan } from "../assets/images"
import { Careers, JoinLeads } from "../sections"

export const Career = () => {
  return (
    <div>
      <div className="bg-footer-blue flex flex-col justify-center items-center w-full h-full py-[6rem] xl:py-[8.75rem] text-white font-poppins relative overflow-hidden">
        <img src={leftPlan} className="hidden lg:flex lg:h-[18rem] xl:h-[23.1rem] absolute xl:top-8 left-0 bottom-0" loading="eager"/>
        <img src={rightPlan} className="hidden lg:flex lg:h-[18rem] xl:h-[23.1rem] absolute xl:top-8 right-0 bottom-0" loading="eager"/>
        <h1 className="text-base sm:text-2xl xl:text-4xl w-[19rem] sm:w-[45rem] mb-5 text-center font-semibold">
          Become a Crucial Part of our Educational Journey
        </h1>

        <h4 className="text-xs xl:text-sm w-[20rem] sm:w-[50rem] text-center">
          <p className="max-sm:mb-3 sm:mb-0.5">
            Explore exciting opportunities to mentor and guide the next generation of tech leaders at Leadwinn Academy.</p>
        </h4>

      </div>

      <Careers />

      <JoinLeads />

    </div>
  )
}
