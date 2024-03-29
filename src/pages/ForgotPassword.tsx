import { Link } from "react-router-dom";
import { useState } from 'react';
import { leadwinnLogo, mail } from "../../src/assets/icons";
import { motion } from "framer-motion";
import { supabase } from "../client";
import { dots } from "../assets/images";
import { animate } from "../assets/videos";

export const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    email: ""
  });
  const [resetSuccess, setResetSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { email } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error.message;
      }
      setResetSuccess(true)
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="flex font-poppins">
      {!resetSuccess && (
        <>
          <div className="bg-head-black hidden text-white w-6/12 h-screen lg:flex flex-col lg:justify-center py-72">
            <div className="w-[15rem] lg:w-[18rem] xl:w-[28rem] flex flex-col gap-10 ml-12">
              <h2 className=" font-medium sm:text-lg lg:text-2xl xl:text-4xl">Forgot Password?</h2>
              <img src={dots} className="sm:w-8/12 xl:w-8/12" loading="eager" />
              <h4 className="sm:w-[11rem] lg:w-[13rem] xl:w-[24rem] font-bold text-lg xl:text-2xl">Retrieve password to continue to your account</h4>
            </div>
          </div>
          <div className="max-lg:bg-head-black relative w-full h-screen sm:h-auto sm:pb-40 lg:h-screen flex flex-col items-center pt-12 lg:pt-16">
            <div className="flex justify-between items-center gap-2 pb-8">
              <Link to="/" className="flex items-center gap-2">
                <img src={leadwinnLogo} alt="leadwinn logo" loading='eager' className="h-10 w-10 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
                <span className="max-lg:text-white text-heading text-xl font-bold">
                  <h1>Leadwinn Academy</h1>
                </span>
              </Link>
            </div>
            <div className="bg-white px-6 sm:px-10 py-7 sm:py-10 rounded-2xl">
              <div className="flex items-center flex-col gap-6 xl:gap-10 text-sm sm:text-base lg:text-xl text-head-black font-bold">
                <div className="flex flex-col items-center justify-center lg:hidden ">
                  <h4 className="text-heading text-lg font-bold">Forgot Password</h4>
                  <h5 className="text-gray-700 text-sm">Enter your email to reset your password</h5>
                </div>
                <div>
                  <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2 mb-8">
                      <div className="relative">
                        <input className="w-[19rem] sm:w-[23rem] lg:w-[25rem] xl:w-[50rem] pl-12 xl:py-5 py-4 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-lg transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="e.g. john@gmail.com" onChange={onChange} />
                        <img src={mail} className="absolute left-4 top-4 sm:top-5 xl:top-6" loading="eager" alt="Mail Icon" />
                      </div>
                      {error && <p className="text-red-500 text-xs sm:text-sm lg:text-base w-[19rem] sm:w-[23rem] lg:w-[25rem] xl:w-[50rem]">{error}</p>}
                    </div>
                    <button className="w-full bg-hero-blue text-white px-7 py-4 text-xs sm:text-sm font-medium uppercase rounded-t-lg rounded-br-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Reset Password"}</button>
                  </form>
                </div>
                <p className="font-medium text-xs sm:text-sm lg:text-base">{"Don't have an account? "} <Link to="/register" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Register</Link></p>
              </div>
            </div>
          </div>
        </>
      )}
      {resetSuccess && (
        <div className="w-full flex flex-col gap-6 items-center justify-center h-screen bg-nav-blue">
          <div className='text-center text-heading font-bold'>

            <p>Password Reset Successful!</p>
            <p>Please check your email to confirm your password has been reset....</p>
          </div>
          <img src={animate} />
        </div>
      )}
    </motion.div>
  );
}
