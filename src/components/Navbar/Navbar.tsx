import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Button from '../Button';

type NavLink = {
   link: string;
   path: string;
};

export const Navbar: React.FC = () => {
   const location = useLocation();

   const currentPath = (route: string) => {
      return location.pathname === route ? "bg-nav-blue" : "bg-white"
   }
  
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
      <div className={`${currentPath("/")}`}>
         <div className="flex justify-between items-center lg:space-x-20 xl:space-x-20 px-5 py-7 sm:px-12 xl:px-28 lg:max-xl:max-w-6xl mx-auto">
            <div className="flex justify-between items-center gap-2">
               <Link to="/" className="flex items-center gap-2"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 md:w-full transition duration-200 ease-in-out md:hover:scale-105'/>
               <span className="flex flex-col text-lead-black text-sm font-semibold font-poppins">
                  <h1>Leadwinn</h1>
                  <h1>Academy</h1>
               </span>
               </Link>
            </div>

            <div className='hidden md:flex sm:max-md:space-x-3 md:max-xl:space-x-5 xl:space-x-9 font-poppins text-xs md:text-sm font-semibold text-head-black'>
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

            <div className="hidden md:flex sm:max-md:space-x-2 md:max-lg:space-x-4 space-x-8 font-poppins">
               <Link to="" className='flex justify-center items-center text-head-blue text-xs md:text-sm  font-semibold'>Sign In</Link>
               <Button path="" title="Enroll Now"/>
               </div>

               <div onClick={toggleFunc}
               className="cursor-pointer md:hidden">
               {
               nav ? <AiOutlineClose size={28}
                  className="md:hidden"/> : 
                  <AiOutlineMenu size={28}
                  className="md:hidden"/>}
             </div>
            
         </div>
         

         <div className={
            nav ? "fixed left-0 top-0 w-1/2 h-full pt-10 bg-nav-blue border-r border-gray-200 md:hidden transition-all ease-in-out duration-500 z-10" : "fixed -left-full"
         }>
            <div className="font-poppins mx-3 flex flex-col font-semibold">
               <div className="flex items-center gap-2 ml-2">
                  <Link to="/"><img src="../leadwinn.svg" alt="leadwinn logo" className='w-14 sm:w-full'/></Link>
                  <span className="flex flex-col text-lead-black text-sm font-semibold font-poppins">
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
                     className="p-4 border-b text-sm text-head-black">
                     {
                     link.link
                  }</Link>
               ))
            }
               <Link to="/sign-in" className="p-4 border-b text-head-blue text-sm ">Sign In</Link>
               <Link to="register" className="p-4 text-head-blue text-sm ">Enroll Now</Link>
            </div>
         </div>
      </div>
   );
};
