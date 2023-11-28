import { Link, useLocation } from "react-router-dom"
import dotImage from "../../src/assets/dots.png"
import OAuth from "../components/OAuth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from 'react';


export const Signin = () => {

  const location = useLocation();

  const routePathMatch = (route: string) => {
    return location.pathname === route ? "text-hero-blue" : "text-black";
  }


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false
  })

  const { email, password, showPassword } = formData

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const toggleShowPassword = () => {
    setFormData(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword
    }))
  }
  return (
    <div className="h-screen flex font-poppins">

      <div className="bg-head-black text-white w-6/12 h-screen flex flex-col justify-center ">
        <div className=" w-[28rem] flex flex-col gap-10 ml-12">
          <h2 className=" font-medium text-5xl">Welcome Back To Leadwinn</h2>
          <img src={dotImage} className="w-11/12" />
          <h4 className="w-[24rem] font-bold text-2xl">Sign in to continue to your account</h4>
        </div>
      </div>

      <div className="w-full flex flex-col items-center pt-32">

        <div className="flex items-center flex-col gap-10 text-xl text-head-black font-bold">
          <span className="text-base font-bold"> <Link to="/register" className={`${routePathMatch("/register")}`}>Register</Link> / <Link to="/sign-in" className={`${routePathMatch("/sign-in")}`}>Sign In</Link></span>

          <OAuth />

          <h4>Or</h4>

          <h1>Continue with Email</h1>

          <div>

            <form>
              <div className="flex gap-10 mb-8">

                <input className="w-[25rem] px-4 py-5 text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black" type="text" name="email" value={email} placeholder="Email" onChange={onChange} />
                <div className="relative">
                  <input className="w-[25rem] px-4 py-5 text-lg text-gray-700 font-medium bg-white border border-head-black rounded-2xl transition ease-in-out" type={showPassword ? "text" : "password"} name="password" value={password} placeholder="Password" onChange={onChange} />
                  {showPassword ? (
                    <AiFillEyeInvisible className="absolute right-3 top-7 text-xl cursor-pointer" onClick={toggleShowPassword} />
                  ) : (
                    <AiFillEye className="absolute right-3 top-7 text-xl cursor-pointer" onClick={toggleShowPassword} />
                  )}
                </div>
              </div>
              <div className="flex justify-between whitespace-nowrap font-medium  sm:text-sm">
                <p className="mb-6">
                  Remember me
                </p>
                <p>
                  <Link to="/forgot-password" className="text-hero-blue hover:text-blue-800 transition duration-200 ease-in-out">Forgot password?
                  </Link></p>
              </div>

              <button className="w-full bg-hero-blue text-white px-7 py-3 text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Sign In</button>

            </form>

          </div>
            <p className="mb-6 font-medium">{"Not a member yet?"} <Link to="/register" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign Up</Link></p>
        </div>

      </div>

    </div>
  )
}
