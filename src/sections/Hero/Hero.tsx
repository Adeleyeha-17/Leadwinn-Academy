import { Link } from "react-router-dom"
import { edu1, edu2, edu3, home } from "../../assets/images"
import { MdAirplay, MdTipsAndUpdates } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaReact, FaGrinStars } from "react-icons/fa";

export const Hero: React.FC = () => {

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-5 md:px-12 pt-28 sm:pb-10 lg:pb-20 xl:pb-0 px-5 xl:px-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto font-poppins">
        <div className="font-poppins text-heading lg:w-1/2">
          <h1
            className="max-lg:text-center max-sm:text-2xl sm:max-xl:text-[2.3125rem] xl:max-2xl:text-[2.53125rem] font-bold mb-6 sm:mx-0">Limitless learning at your fingertips</h1>
          <h1 className="mb-6 max-lg:text-center sm:max-lg:mx-auto text-base lg:text-sm xl:text-lg sm:max-w-[38rem] lg:max-w-[30rem] xl:max-w-[36rem]">Online learning and teaching marketplace with courses & over 100 students. Taught by experts to help you acquire new skills.</h1>

          <div className="flex flex-wrap items-center max-lg:justify-center text-xs xl:text-base gap-3 mb-7">
            
            <div className="flex items-center gap-2">
                <IoCheckmarkDoneCircleOutline className="w-6 h-6"/> 
              <h5>
                Learn with experts</h5>
              </div>

              <div className="flex items-center gap-2">
              <IoCheckmarkDoneCircleOutline className="w-6 h-6"/>
            <h5>Get certificate</h5>
              </div>

              <div className="flex items-center gap-2">
              <IoCheckmarkDoneCircleOutline className="w-6 h-6"/>
            <h5> Get membership</h5>
              </div>
          </div>
          <div className="flex max-sm:flex-col gap-5 items-center max-lg:justify-center sm:gap-10 mb-10">

            <Link to="/courses" className={`flex justify-center items-center max-sm:w-40 py-4 px-8 bg-head-blue text-white  text-xs font-semibold rounded-xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Get Started</Link>

            <Link to="/library" className={`flex gap-3 justify-center items-center text-sm font-semibold cursor-pointer`}> <MdAirplay className="w-8 h-8" /> Visit Library</Link>
          </div>

        </div>
        <div className="relative lg:w-1/2">
          <img
            src={home}
            alt="home illustration"
            className="lg:max-xl:w-3/5 mx-auto home__img"
            loading="eager" />

          <MdTipsAndUpdates className="w-10 h-10 absolute top-0 right-20 text-yellow-500"/>
          <FaReact className="w-14 h-14 rounded-lg absolute top-64 left-16 bg-nav-blue text-heading"/>
          <FaGrinStars className="w-10 h-10 absolute top-20 left-0 text-yellow-500"/>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex max-sm:flex-col justify-center items-center gap-5">
          <div className="flex items-center gap-4 bg-white text-heading border rounded-lg py-5 px-20 sm:px-6 lg:px-12 shadow-md">
            <img src={edu1} alt="students" className="w-16 lg:w-20" loading="eager" />
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">100+</span> Students</h1>
          </div>
          <div className="flex items-center gap-4 bg-white text-heading border rounded-lg py-5 px-20 sm:px-6 lg:px-12 shadow-md">
            <img src={edu2} alt="certified" className="w-16 lg:w-20" loading="eager" />
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">100+</span> Certified</h1>
          </div>

          <div className="flex items-center gap-4 bg-white text-heading border rounded-lg py-5 px-20 sm:px-6 lg:px-12 shadow-md">
            <img src={edu3} alt="countries" className="w-16 lg:w-20" loading="eager" />
            <h1 className="max-w-[5rem] text-xl"><span className="font-semibold">10+</span> Countries</h1>
          </div>
        </div>

      </div>
    </div>
  )
}
