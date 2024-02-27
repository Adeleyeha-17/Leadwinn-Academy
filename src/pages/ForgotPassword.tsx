import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { mail } from "../../src/assets/icons";
import { motion } from "framer-motion";
import { supabase } from "../client";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

export const ForgotPassword: React.FC = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: ""
  });
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

  const handleGoBack = () => {
    history(-1);
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
      toast.success("Password reset email sent successfully! Please check your inbox.");
    } catch (error) {
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="flex font-poppins">
      <div className="bg-head-black hidden text-white w-6/12 max-sm:h-screen sm:h-[65rem] lg:h-screen sm:flex flex-col lg:justify-center py-72">
      </div>
      <div className="relative w-full max-sm:h-screen lg:h-screen flex flex-col items-center pt-16 sm:pt-24 xl:pt-32">
        <div className="absolute top-16 right-8 sm:right-14 lg:right-14 mb-5">
          <AiOutlineClose className="hidden md:flex cursor-pointer relative max-sm:-top-8" onClick={handleGoBack} />
        </div>
        <div className="flex items-center flex-col gap-6 xl:gap-10 text-sm sm:text-base lg:text-xl text-head-black font-bold">
          <h1>Retrieve Password</h1>
          <div>
            <form onSubmit={onSubmit}>
              <div className="flex flex-col gap-2 mb-8">
                <div className="relative">
                  <input className="w-[20rem] sm:w-[23rem] lg:w-[25rem] xl:w-[50rem] pl-12 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="Email" onChange={onChange} />
                  <img src={mail} className="absolute left-4 top-3 sm:top-4 xl:top-6" loading="eager" alt="Mail Icon" />
                </div>
                {error && <p className="text-red-500 text-xs sm:text-sm lg:text-base">{error}</p>}
              </div>
              <button className="w-full bg-hero-blue text-white px-7 py-3 text-xs sm:text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit" disabled={isLoading}>{isLoading ? "Loading..." : "Reset Password"}</button>
            </form>
          </div>
          <p className="mb-6 font-medium text-xs sm:text-sm lg:text-base">{"Not a member yet?"} <Link to="/register" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign Up</Link></p>
        </div>
      </div>
    </motion.div>
  );
}
