import { homeIllus } from "../../assets/images"
import Brochure from "../../assets/WEB-DEVELOPMENT-GUIDE.pdf"

export const Otherplans = () => {
  return (
<div className="bg-nav-blue h-full font-poppins max-sm:px-5 py-20 sm:py-28 sm:px-10 flex max-sm:flex-col gap-10 xl:gap-28 justify-center sm:items-center">
         <div className="flex flex-col gap-3">
            <h4 className="sm:mb-2 xl:mb-4 text-lg sm:text-xl font-semibold text-footer-blue"> Other Plans</h4>

            <h3 className="text-lg sm:text-2xl xl:text-3xl text-heading font-bold w-[15rem] sm:w-[20rem] xl:w-[27rem]">Tailored Learning Beyond the Classroom</h3>

            <h5 className="text-courses text-xs xl:text-sm w-[19rem] lg:w-[27rem] xl:w-[30rem] mb-5">Unlock personalized education solutions designed for your child's success, bridging the gap between classroom teachings and individualized growth.</h5>
         
            <a download="" href={Brochure} className={ `flex justify-center items-center w-[7rem] sm:w-[8rem] py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Learn more</a>
            
         </div>

         <div>
            <img src={homeIllus} alt="" className="w-[20rem] sm:w-full rounded-3xl"/>
         </div>
</div>

  )
}
