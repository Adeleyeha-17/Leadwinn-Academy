import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Button from '../Button';

type NavLink = {
   link: string;
   path: string;
};

export const Navbar: React.FC = () => {
  
   const [nav, setNav] = useState(false);

   const toggleFunc = () => {
      setNav((prevState) => !prevState);
   };

   const navLinks: NavLink[] = [
      {
         link: "About",
         path: "/about"
      },
      {
         link: "Library",
         path: "/library"
      },
      {
         link: "Tech Hub",
         path: "/tech-hub"
      },
      {
         link: "Plans",
         path: "/plans"
      }
   ];

   return (
      <div>
         <div className="flex justify-between items-center lg:max-xl:px-10 lg:space-x-20 xl:space-x-2 h-16 px-5 xl:px-36 pt-10 xl:pt-16 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl mx-auto">
            <div className="flex justify-between items-center gap-2">
               <Link to="/"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 md:w-full transition duration-200 ease-in-out md:hover:scale-105'/></Link>
               <span className="flex flex-col text-lead-black text-base font-semibold font-poppins">
                  <h1>Leadwinn</h1>
                  <h1>Academy</h1>
               </span>
            </div>

            <div className='hidden sm:flex sm:max-md:space-x-3 md:max-xl:space-x-5 xl:space-x-9 font-poppins text-xs md:max-lg:text-sm lg:text-base font-semibold text-head-black'>
               {
               navLinks.map(link => (
                  <Link key={
                        link.path
                     }
                     to={
                        link.path
                  }>
                     {
                     link.link
                  }</Link>
               ))
            } </div>

            <div className="hidden sm:flex sm:max-md:space-x-2 md:max-lg:space-x-4 space-x-8 font-poppins">
               <Link to="" className='flex justify-center items-center text-head-blue text-xs md:max-lg:text-sm lg:text-base font-semibold'>Sign In</Link>
               <Button path="" title="Enroll Now"/>
               </div>

            <div onClick={toggleFunc}
               className="cursor-pointer md:hidden">
               {
               nav ? <AiOutlineClose size={28}
                  className="sm:hidden"/> : 
                  <AiOutlineMenu size={28}
                  className="sm:hidden"/>}
             </div>
         </div>

         <div className={
            nav ? "fixed left-0 top-0 w-1/2 h-full bg-nav-blue border-r border-gray-200 sm:hidden transition-all ease-in-out duration-500 z-10" : "fixed -left-full"
         }>
            <div className="font-poppins pt-20 mx-3 flex flex-col font-normal">
               <div className="flex items-center gap-2 ml-2 -mt-15">
                  <Link to="/"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 sm:w-full'/></Link>
                  <span className="flex flex-col text-lead-black font-normal font-poppins">
                     <h1>Leadwinn</h1>
                     <h1>Academy</h1>
                  </span>
               </div>

               {
               navLinks.map(link => (
                  <Link key={
                        link.path
                     }
                     to={
                        link.path
                     }
                     className="p-4 border-b text-head-black">
                     {
                     link.link
                  }</Link>
               ))
            }
               <Link to="/sign-in" className="p-4 border-b text-head-blue">Sign In</Link>
               <Link to="register" className="p-4 text-head-blue">Enroll Now</Link>
            </div>
         </div>
      </div>
   );
};
