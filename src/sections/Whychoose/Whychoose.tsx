import React from "react";
import { checked } from "../../assets/icons";
import { Link } from "react-router-dom";
import { whychoose } from "../../assets/images";


export const Whychoose: React.FC = () => {


  return (
    <div className="flex flex-col sm:flex-row justify-center overflow-hidden font-poppins py-24 sm:py-20 lg:py-28 bg-nav-blue md:px-12 xl:px-20 px-5 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl">

      <div className="sm:w-1/2 flex flex-col gap-3 xl:gap-4 max-sm:text-center">
        <h4 className="font-semibold text-lg text-heading">WHY CHOOSE US</h4>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-head-black">
          Don't Know How to Start With Leadwinn Courses
        </h2>

        <h5 className="text-sm lg:text-base max-w-[30rem] mb-2 xl:mb-3 text-head-black">Discover Your Path and Ignite Your Creativity by Unlocking Your Potential with Us.</h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs lg:text-sm text-head-black font-semibold">

          <p className="flex text-center gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Innovative Learning Tools
          </p>

          <p className="flex gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Interactive Learning Modules
          </p>

          <p className="flex gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Updated Curriculum
          </p>

          <p className="flex gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Qualified Instructors         </p>

          <p className="flex gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Personalized Learning Environment
          </p>

          <p className="flex gap-3">
            <img src={checked} alt="check" className="w-5 h-5" />
            Comprehensive Knowledge Base
          </p>

        </div>

        <div className="mt-3">
          <Link to="/courses" className={`inline-block justify-center items-center py-2 lg:py-3 px-4 lg:px-6 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`}>Discover All Courses</Link>

        </div>

      </div>
      <div className="max-sm:mt-14 sm:w-1/2">
        <img src={whychoose} alt="kids coding" />
      </div>

    </div>
  );
};
