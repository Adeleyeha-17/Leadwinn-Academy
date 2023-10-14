import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar: React.FC = () => {
   const [nav, setNav] = useState(false);

   const toggleFunc = () => {
      setNav((prevState) => !prevState);
   };

   return (
      <div>
         <div className="flex justify-between items-center lg:max-xl:px-10 lg:space-x-20 h-16 px-5 pt-10 md:max-w-6xl  lg:max-w-7xl mx-auto">
            <div className="flex justify-between items-center gap-2">
               <Link to="/"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 md:w-full' /></Link>
               <span className="flex flex-col text-lead-black md:max-lg:text-sm font-bold font-poppins">
                  <h1>Leadwinn</h1>
                  <h1>Academy</h1>
               </span>
            </div>

            <div className='hidden sm:flex md:max-xl:space-x-5 xl:space-x-9 font-poppins md:max-lg:text-sm xl:text-base font-semibold text-head-black'>
               <Link to="/about">About</Link>
               <Link to="/library">Library</Link>
               <Link to="/tech-hub">Tech Hub</Link>
               <Link to="/plans">Plans</Link>
               <Link to="/faq">FAQ</Link>
            </div>

            <div className="hidden sm:flex md:max-lg:space-x-4 space-x-8 font-poppins md:max-lg:text-sm text-base font-semibold">
               <Link to="" className='flex justify-center items-center text-head-blue'>Sign In</Link>
               <Link to="" className="flex justify-center items-center md:max-lg:w-36 md:max-lg:h-10 w-48 h-14 gap-3 bg-head-blue text-white rounded-3xl">Enroll Now</Link>
            </div>

            <div onClick={toggleFunc} className="cursor-pointer md:hidden">
               {nav ? <AiOutlineClose size={28} className="sm:hidden" /> : <AiOutlineMenu size={28} className="sm:hidden" />}
            </div>
         </div>

         <div className={nav ? "fixed left-0 top-0 w-1/2 h-full bg-nav-blue border-r border-gray-200 sm:hidden transition-all ease-in-out duration-500 z-10" : "fixed -left-full"}>
               <div className="font-poppins pt-20 mx-3 flex flex-col font-semibold">
                  <div className="flex items-center gap-2 ml-2 -mt-15">
                     <Link to="/"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 sm:w-full' /></Link>
                     <span className="flex flex-col text-lead-black font-bold font-poppins">
                        <h1>Leadwinn</h1>
                        <h1>Academy</h1>
                     </span>
                  </div>
                  <Link to="/about" className="p-4 border-b text-head-black">About</Link>
                  <Link to="/library" className="p-4 border-b text-head-black">Library</Link>
                  <Link to="/tech-hub" className="p-4 border-b text-head-black">Tech Hub</Link>
                  <Link to="/plans" className="p-4 border-b text-head-black">Plans</Link>
                  <Link to="/faq" className="p-4 border-b text-head-black">FAQ</Link>
                  <Link to="/sign-in" className="p-4 border-b text-head-blue">Sign In</Link>
                  <Link to="register" className="p-4 text-head-blue">Enroll Now</Link>
               </div>
            </div>
         
      </div>
   );
};
