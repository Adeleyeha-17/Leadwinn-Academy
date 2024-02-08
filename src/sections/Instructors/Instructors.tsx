import { growth } from "../../assets/images"

export const Instructors = () => {

  return (
    <div className="bg-nav-blue">
    <div className="flex flex-col md:flex-row justify-between py-24 md:px-12 sm:py-28 px-5 xl:px-20 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mx-auto">
      <div className="flex max-sm:flex-col md:justify-between md:items-center sm:w-full">
        <div className="sm:w-1/2 flex flex-col gap-3 xl:gap-4">
          <div className="max-sm:text-center flex flex-col gap-3 xl:gap-4">

            <h4 className="font-semibold text-heading ">BECOME AN INSTRUCTOR</h4>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl  font-semibold text-head-black">
              Let’s Join Us & Spread Your
              Knowledge
            </h2>

            <h5 className="max-w-[34rem] mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus optio rerum obcaecati repellat</h5>
          </div>

          <div className="mt-3">

            <a
              href="mailto:info.leadwinnacademy@gmail.com"
              className={`inline-block justify-center items-center py-2 lg:py-3 px-4 lg:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}
            >
              Become An Instructor
            </a>

          </div>

        </div>

        <div className="max-sm:mt-14 sm:w-1/2">
          <img src={growth} alt="growth image" className="w-full h-full" loading="lazy" />
        </div>
      </div>
    </div>
    </div>
  )
}
