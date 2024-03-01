import { brochureImg } from "../../assets/images"
import brochure from "../../assets/brochure.pdf"

export const Brochure = () => {
   const downloadFilename = "leadwinn_brochure.pdf";


  return (
    <div className="bg-skill-hov">
    <div className="flex flex-col md:flex-row justify-between py-20 sm:max-lg:py-10 sm:py-28 px-5 md:px-12 xl:px-20  md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mx-auto">
      <div className="flex max-sm:flex-col md:justify-between md:items-center sm:w-full">
        <div className="sm:w-1/2 mb-10">
          <img src={brochureImg} alt="growth image" className="w-full h-full mx-auto" loading="lazy" />
        </div>

        <div className="sm:w-1/2 flex flex-col gap-3 xl:gap-4">
          <div className="max-sm:text-center flex flex-col gap-3 xl:gap-4">

            <h4 className="font-semibold text-heading ">LEARNERS AND STUDENTS</h4>
            <h2 className="text-xl lg:text-2xl xl:text-3xl  font-semibold text-head-black">
            We Teach The Fundamentals Of Technology While Encouraging Creativity, Curiosity, And Individuality.
            </h2>

            <h5 className="text-xs lg:text-base max-w-[34rem] mb-3">Experience the power of technology as we foster creativity, ignite curiosity, and celebrate individuality. Our engaging learning environment empowers learners to explore, innovate, and thrive.</h5>
          </div>

          <div className="max-sm:text-center">

          <a download={downloadFilename} href={brochure} className="inline-block justify-center items-center py-2 px-4 md:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer">
          Download Brochure
        </a>

          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
