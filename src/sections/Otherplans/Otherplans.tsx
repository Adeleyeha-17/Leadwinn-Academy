import { homeIllus } from "../../assets/images"
import Button from "../../components/Button"

export const Otherplans = () => {
  return (
<div className="bg-nav-blue h-full font-poppins max-sm:px-5 py-20 sm:py-28 sm:px-10 flex max-sm:flex-col gap-10 justify-center sm:items-center">
         <div className="flex flex-col gap-3">
            <h4 className="sm:mb-2 xl:mb-4 text-lg sm:text-xl font-semibold text-footer-blue"> Other Plans</h4>

            <h3 className="text-lg sm:text-2xl xl:text-3xl text-courses font-bold w-[15rem] sm:w-[20rem] xl:w-[27rem]">Tailored Learning Beyond the Classroom</h3>

            <h5 className="text-courses text-xs xl:text-sm w-[19rem] lg:w-[27rem] xl:w-[30rem] mb-5">Unlock personalized education solutions designed for your child's success, bridging the gap between classroom teachings and individualized growth.</h5>
         
            <Button path="" title="Learn more"/>
         </div>

         <div>
            <img src={homeIllus} alt="" className="w-[20rem] sm:w-full rounded-3xl"/>
         </div>
</div>

  )
}
