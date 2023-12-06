import {Link, useNavigate } from "react-router-dom"
import dotImage from "../../src/assets/dots.png"
import {AiOutlineClose} from "react-icons/ai";
import { FormEvent, useState } from 'react';
import { motion } from "framer-motion";
import mailSvg from "../../src/assets/mail.svg";
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from "../config/firebase"



export const ForgotPassword: React.FC = () => {

  const history = useNavigate();

  
  
  const [formData, setFormData] = useState({
    email: ""
  })

  const { email } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]:  value
    }))
  }

  const handleGoBack = () => {
    history(-1)
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
   e.preventDefault();

   try {
     await sendPasswordResetEmail(auth, email)
     toast.success("Password sent")
   } catch (error) {
     toast.error("input correct email")
   }
 }
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="flex font-poppins">

      <div className="bg-head-black hidden text-white w-6/12 max-sm:h-screen sm:h-[65rem] lg:h-screen sm:flex flex-col lg:justify-center py-72">
        <div className="w-[15rem] lg:w-[18rem] xl:w-[28rem] flex flex-col gap-10 ml-12">
          <h2 className=" font-medium sm:text-lg lg:text-2xl xl:text-4xl">Forgot Password?</h2>
          <img src={dotImage} className="sm:w-8/12 xl:w-8/12" />
          <h4 className="sm:w-[11rem] lg:w-[13rem] xl:w-[24rem] font-bold text-lg xl:text-2xl">Retrieve password to continue to your account</h4>
        </div>
      </div>

      <div className="relative w-full max-sm:h-screen lg:h-screen flex flex-col items-center pt-16 sm:pt-24 xl:pt-32">

      <div className="absolute top-16 right-8 sm:right-14 lg:right-14 mb-5">
       
      <AiOutlineClose className="cursor-pointer relative max-sm:-top-8" onClick={handleGoBack}/>
       
      </div>

        <div className="flex items-center flex-col gap-6 xl:gap-10 text-sm sm:text-base lg:text-xl text-head-black font-bold">
        

       

          <h1>Retrieve Password</h1>

          <div>

            <form onSubmit={onSubmit}>
              <div className="flex flex-col lg:flex-row gap-10 mb-8">

    <div className="relative">

                <input className="w-[20rem] sm:w-[23rem] lg:w-[25rem] xl:w-[50rem] pl-12 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="Email" onChange={onChange} />

                <img src={mailSvg} className="absolute left-4 top-3 sm:top-4 xl:top-6"/>
                
    </div>
                
              </div>
             
              <button className="w-full bg-hero-blue text-white px-7 py-3 text-xs sm:text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Reset Password</button>

            </form>

          </div>
            <p className="mb-6 font-medium text-xs sm:text-sm lg:text-base">{"Not a member yet?"} <Link to="/register" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign Up</Link></p>
        </div>

      </div>

    </motion.div>
  )
}
