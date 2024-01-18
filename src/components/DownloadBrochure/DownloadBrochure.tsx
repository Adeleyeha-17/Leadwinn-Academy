import { brochureLeft, brochureRight, brochureButLeft, brochureButRight }from "../../assets/images"
import brochure from "../../assets/brochure.pdf"

export const DownloadBrochure = () => {
  return (
    <div className="bg-nav-blue w-full h-full py-10 sm:py-16 lg:py-24 flex items-center justify-center font-poppins relative mx-auto">
      <img src={brochureLeft} className="absolute top-0 left-1 sm:left-20 lg:left-16 xl:left-52 w-[3.5rem] sm:w-[6rem] lg:w-[8rem] xl:w-[9rem]"/>
      <img src={brochureRight} className="absolute top-0 right-1 sm:right-20 lg:right-16 xl:right-52 w-[3.5rem] sm:w-[6rem] lg:w-[8rem] xl:w-[9rem]"/>
      <img src={brochureButLeft} className="absolute bottom-0 left-0 w-[6rem] sm:w-[12rem] lg:w-[15rem]"/>
      <img src={brochureButRight} className="absolute bottom-0 right-0 w-[6rem] sm:w-[12rem] lg:w-[15rem]"/>

      <div className="flex flex-col gap-1 sm:gap-1 items-center justify-center text-center text-heading">
        <h1 className="font-bold text-sm sm:text-xl lg:text-[2rem] lg:leading-[2.75rem] lg:mb-2">Embark on your learning journey today!</h1>
        <h1 className="max-sm:max-w-[18.75rem] text-xs lg:text-base mb-2 sm:mb-5">Ready to explore the pathways of your learning journey with leadwinn ?</h1>

        <a download="" href={brochure} className="inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer">
          Download Brochure
        </a>
      </div>
    </div>
  )
}

