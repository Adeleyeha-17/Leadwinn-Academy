import {Link, useLocation, useNavigate } from "react-router-dom"
import dotImage from "../../src/assets/dots.png"
import OAuth from "../components/OAuth";
import { AiFillEyeInvisible, AiFillEye, AiOutlineClose} from "react-icons/ai";
import { useState } from 'react';
import { motion } from "framer-motion";


export const Signin: React.FC = () => {

  const location = useLocation();
  const history = useNavigate();

  const routePathMatch = (route: string) => {
    return location.pathname === route ? "text-hero-blue" : "text-black";
  }
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
    rememberMe: true
  })

  const { email, password, showPassword, rememberMe } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const toggleShowPassword = () => {
    setFormData(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword
    }))
  }

  const handleGoBack = () => {
    history(-1)
  }
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration: 1}} className="flex font-poppins">

      <div className="bg-head-black hidden text-white w-6/12 max-sm:h-screen sm:h-[65rem] lg:h-screen sm:flex flex-col lg:justify-center py-72">
        <div className="w-[15rem] lg:w-[18rem] xl:w-[28rem] flex flex-col gap-10 ml-12">
          <h2 className=" font-medium sm:text-lg lg:text-2xl xl:text-4xl">Welcome Back To Leadwinn</h2>
          <img src={dotImage} className="sm:w-8/12 xl:w-8/12" />
          <h4 className="sm:w-[11rem] lg:w-[13rem] xl:w-[24rem] font-bold text-lg xl:text-2xl">Sign in to continue to your account</h4>
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

          <h1>Continue with Email</h1>

          <div>

            <form>
              <div className="flex flex-col lg:flex-row gap-10 mb-8">

                <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[25rem] xl:px-4 px-2 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="Email" onChange={onChange} />
                <div className="relative">
                  <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[25rem] xl:px-4 px-2 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white border border-head-black focus:border-head-blue rounded-2xl transition ease-in-out" type={showPassword ? "text" : "password"} name="password" value={password} placeholder="Password" onChange={onChange} />
                  {showPassword ? (
                    <AiFillEyeInvisible className="absolute right-3 top-4 xl:top-7 text-xl cursor-pointer" onClick={toggleShowPassword} />
                  ) : (
                    <AiFillEye className="absolute right-3 top-4 xl:top-7 text-xl cursor-pointer" onClick={toggleShowPassword} />
                  )}
                </div>
              </div>
              <div className="flex justify-between whitespace-nowrap font-medium  text-xs sm:text-sm">
                <p className="mb-6 ">
                <div className='flex gap-2 mb-4'>
                        <input type="checkbox" name="rememberMe" id="rememberMe"
                           checked={rememberMe}
                           onChange={onChange}/>
                        <label htmlFor="rememberMe" className="text-xs md:text-sm cursor-pointer">Remember me</label>
                     </div>
                </p>
                <p>
                  <Link to="/forgot-password" className="text-hero-blue hover:text-blue-800 transition duration-200 ease-in-out">Forgot password?
                  </Link></p>
              </div>

              <button className="w-full bg-hero-blue text-white px-7 py-3 text-xs sm:text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Sign In</button>

            </form>

          </div>
            <p className="mb-6 font-medium text-xs sm:text-sm lg:text-base">{"Not a member yet?"} <Link to="/register" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign Up</Link></p>
        </div>

      </div>

    </motion.div>
  )
}
