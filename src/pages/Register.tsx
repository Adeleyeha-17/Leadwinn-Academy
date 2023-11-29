import { Link, useLocation, useNavigate} from "react-router-dom";
import dotImage from "../../src/assets/dots.png";
import OAuth from "../components/OAuth";
import { motion } from "framer-motion";
import { useState } from 'react';
import { AiOutlineClose} from "react-icons/ai";

export const Register = () => {

   const location = useLocation();
   const history = useNavigate();

   const routePathMatch = (route:string) => {
     return location.pathname === route ? "text-hero-blue" : "text-black";
   }

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      password: "",
      showPassword: false,
      rememberMe: true
    })
  
    const { firstName, lastName } = formData
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  
    
  
    const handleGoBack = () => {
      history(-1)
    }

  return (
   <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration: 1}}  className="h-screen flex font-poppins">
      
   <div className="bg-head-black hidden text-white w-6/12 max-sm:h-screen sm:h-[65rem] lg:h-screen sm:flex flex-col lg:justify-center py-72">
   <div className="w-[15rem] lg:w-[14rem] xl:w-[25rem] flex flex-col gap-10 ml-12">
     <h2 className="font-medium sm:text-lg lg:text-2xl xl:text-4xl">Join Leadwinn For Free</h2>
     <img src={dotImage}  className="sm:w-10/12 xl:w-10/12"/>
     <h4 className="sm:w-[11rem] lg:w-[15rem] xl:w-[22.5rem] font-bold text-lg xl:text-2xl">Fuel your creativity at Leadwinn with cutting-edge courses in coding, tech skills, and more.</h4>
   </div>
   </div>
   
   <div className="relative w-full max-sm:h-screen lg:h-screen flex flex-col items-center pt-24 xl:pt-32">

   <div className="absolute top-16 right-8 sm:right-14 lg:right-14 mb-5">
       
       <AiOutlineClose className="cursor-pointer" onClick={handleGoBack}/>
        
       </div>
        
        <div className="flex items-center flex-col gap-6 xl:gap-10 text-sm sm:text-base lg:text-xl text-head-black font-bold">
        <span className="text-sm sm:text-base font-bold"> <Link to="/register" className={`${routePathMatch("/register")}`}>Register</Link> / <Link to="/sign-in" className={`${routePathMatch("/sign-in")}`}>Sign In</Link></span>

        <OAuth />

        <h4>Or</h4>

        <h1>Register with Email</h1>

        <div>

<form>
  <div className="flex flex-col lg:flex-row gap-10 mb-8">

    <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[25rem] xl:px-4 px-2 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="firstName" value={firstName} placeholder="First Name" onChange={onChange} />
    
    <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[25rem] xl:px-4 px-2 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={onChange} />
  </div>


  <button className="w-full bg-hero-blue text-white px-7 py-3 text-xs sm:text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Sign Up</button>

</form>

</div>
<p className="mb-6 font-medium text-xs sm:text-sm lg:text-base">{"Already a member?"} <Link to="/sign-in" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign In</Link></p>
</div>

        </div>
     
 </motion.div>
  )
}
