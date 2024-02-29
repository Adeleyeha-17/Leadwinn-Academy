import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { dots } from "../../src/assets/images";
import { FormEvent } from 'react';
import { edit, mail, passwordSvg, loadingSvg, leadwinnLogo } from "../../src/assets/icons";
import { motion } from "framer-motion";
import { ProfileQuestion } from './ProfileQuestion';
import { supabase } from '../client';
import OAuth from '../components/OAuth';

export const Register = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    rememberMe?: boolean;
  }>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const [profileQuestionData, setProfileQuestionData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const handleProfileCompletion = (profileAnswers: string[]) => {
    setProfileQuestionData(profileAnswers);
    setProfileCompleted(true);
    setShowRegistration(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const { fullName, email, password, confirmPassword } = formData
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registrationData = {
      profileData: profileQuestionData,
      ...formData
    };
    console.info(registrationData)

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName
          }
        }
      });

      if (error) {
        setError(error.message)
        setLoading(false)
      } else {
        setRegistrationSuccess(true);
        setTimeout(() => {
          setShowRegistration(false);
        }, 1);
      }
    } catch (error) {
      setError(error as string);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="flex font-poppins">
      {!profileCompleted && <ProfileQuestion onComplete={handleProfileCompletion} />}
      {showRegistration && (
        <div className="bg-head-black hidden text-white w-6/12 h-screen lg:flex flex-col lg:justify-center py-72">
          <div className="w-[15rem] lg:w-[14rem] xl:w-[20rem] flex flex-col gap-10 ml-12">
            <h2 className="font-medium sm:text-xl lg:text-2xl xl:text-4xl">Join Leadwinn Now</h2>
            <img src={dots} className="sm:w-10/12 xl:w-10/12" loading="eager" />
            <h4 className="sm:w-[15rem] xl:w-[22.5rem] font-bold text-lg xl:text-2xl">Fuel your creativity at Leadwinn with cutting-edge courses in coding, tech skills, and more.</h4>
          </div>
        </div>
      )}
      {showRegistration && (
        <div className="max-lg:bg-head-black  relative w-full py-40 h-screen flex flex-col items-center pt-12 lg:pt-16">

          <div className="flex justify-between items-center gap-2 pb-8">
            <Link to="/" className="flex items-center gap-2">
              <img src={leadwinnLogo} alt="leadwinn logo" loading='eager' className="h-10 w-10 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
              <span className="max-lg:text-white text-heading text-xl font-bold">
                <h1>Leadwinn Academy</h1>
              </span>
            </Link>
          </div>

          <div className="bg-white px-6 sm:px-10 py-7 sm:py-10 rounded-2xl">
            <div className="flex items-center flex-col gap-6 xl:gap-6 text-sm sm:text-base lg:text-xl text-head-black font-bold">
              <div className="flex flex-col items-center justify-center lg:hidden ">
                <h4 className="text-heading text-lg font-bold">Create a Secure Account</h4>
                <h5 className="text-gray-700 text-sm">Welcome to the home of learning</h5>
              </div>
              <div>
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="relative ">
                      <input className="w-[19rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 xl:py-5 py-4 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-lg transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="fullName" value={fullName} placeholder="Full Name" onChange={onChange} />
                      <img src={edit} className="absolute left-4 top-4 sm:top-5 xl:top-6" loading="eager" />
                    </div>

                    <div className="relative">
                      <input className="w-[19rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 xl:py-5 py-4 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-lg transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="Email Address" onChange={onChange} />
                      <img src={mail} className="absolute left-4 top-4 sm:top-5 xl:top-6" loading="eager" />
                    </div>

                    <div className="relative">
                      <input className="w-[19rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 pr-5 xl:py-5 py-4 text-base sm:text-lg text-gray-700 font-medium bg-white border border-head-black focus:border-head-blue rounded-lg transition ease-in-out" type="password" name="password" value={password} placeholder="Password" onChange={onChange} autoComplete="true" />
                      <img src={passwordSvg} className="absolute left-4 top-4 sm:top-5 xl:top-6" loading="eager" />
                    </div>

                    <div className="relative">
                      <input className="w-[19rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 pr-5 xl:py-5 py-4 text-base sm:text-lg text-gray-700 font-medium bg-white border border-head-black focus:border-head-blue rounded-lg transition ease-in-out" type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={onChange} autoComplete="true" />
                      <img src={passwordSvg} className="absolute left-4 top-4 sm:top-5 xl:top-6" loading="eager" />
                    </div>
                    {error && <p className="text-red-500 text-xs sm:text-sm lg:text-base -mt-8">{error}</p>}
                  </div>
                  <button className="w-full bg-hero-blue text-white px-7 py-4 text-xs sm:text-sm font-semibold uppercase rounded-t-lg rounded-br-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit"
                    disabled={loading}>{loading ? <img src={loadingSvg} className='h-5 w-14 mx-auto' /> : "Create Account"}</button>
                </form>


                <div className="flex my-2 items-center before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
                  <p className="text-center font-semibold mx-4 text-heading">OR CONTINUE WITH</p>
                </div>

                <OAuth />

              </div>
              <p className="font-medium text-xs sm:text-sm lg:text-base">{"Already have an account?"} <Link to="/sign-in" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Log In</Link></p>
            </div>
          </div>
        </div>
      )}
      {registrationSuccess && (
        <div className="fixed top-72 w-full bg-nav-blue py-4 text-center">
          <p>Thank you for registering! Please check your email to confirm your registration....</p>
        </div>
      )}
    </motion.div>
  );

};
