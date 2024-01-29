import { Link, useLocation, useNavigate } from "react-router-dom";
import { dots } from "../../src/assets/images";
import OAuth from "../components/OAuth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from "../config/firebase"
import { setDoc, doc, serverTimestamp, FieldValue } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { edit, mail, passwordSvg } from "../../src/assets/icons"
import { auth } from "../config/firebase.ts"

export const Register = () => {
  const location = useLocation();
  const history = useNavigate();

  const routePathMatch = (route: string) => {
    return location.pathname === route ? "text-hero-blue" : "text-black";
  }

  const [formData, setFormData] = useState<{
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    rememberMe?: boolean;
    timeStamp: FieldValue;
  }>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    timeStamp: serverTimestamp(),
  });

  const [loading, setLoading] = useState(false);
  const { fullName, email, password, confirmPassword } = formData

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        await updateProfile(user, {
          displayName: fullName,
        });

        const formDataCopy = { fullName, email, timeStamp: serverTimestamp() };

        await setDoc(doc(db, "users", user.uid), formDataCopy);

        history("/");
      }
    } catch (error) {
      toast.error(`Registration failed`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex font-poppins">

      <div className="bg-head-black hidden text-white w-6/12 max-sm:h-screen sm:h-[65rem] lg:h-screen sm:flex flex-col lg:justify-center py-72">
        <div className="w-[15rem] lg:w-[14rem] xl:w-[20rem] flex flex-col gap-10 ml-12">
          <h2 className="font-medium sm:text-lg lg:text-2xl xl:text-4xl">Join Leadwinn Now</h2>
          <img src={dots} className="sm:w-10/12 xl:w-10/12" loading="eager"/>
          <h4 className="sm:w-[11rem] lg:w-[15rem] xl:w-[22.5rem] font-bold text-lg xl:text-2xl">Fuel your creativity at Leadwinn with cutting-edge courses in coding, tech skills, and more.</h4>
        </div>
      </div>

      <div className="relative w-full max-sm:h-screen lg:h-screen flex flex-col items-center pt-16 sm:pt-24">

        <div className="absolute top-16 right-8 sm:right-14 lg:right-14 mb-5">

          <AiOutlineClose className="cursor-pointer relative max-sm:-top-8" onClick={handleGoBack} />

        </div>

        <div className="flex items-center flex-col gap-6 xl:gap-6 text-sm sm:text-base lg:text-xl text-head-black font-bold">

          <span className="text-sm sm:text-base font-bold"> <Link to="/register" className={`${routePathMatch("/register")}`}>Register</Link> / <Link to="/sign-in" className={`${routePathMatch("/sign-in")}`}>Sign In</Link></span>

          <OAuth />

          <h4>Or</h4>

          <h1>Register with Email</h1>

          <div>

            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">

                <div className="relative ">

                  <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="fullName" value={fullName} placeholder="Full Name" onChange={onChange} />
                  <img src={edit} className="absolute left-4 top-3 sm:top-4 xl:top-6" loading="eager"/>
                </div>

                <div className="relative">

                  <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white rounded-2xl transition ease-in-out border border-head-black focus:border-head-blue" type="text" name="email" value={email} placeholder="Email" onChange={onChange} />
                  <img src={mail} className="absolute left-4 top-3 sm:top-4 xl:top-6" loading="eager"/>
                </div>

                <div className="relative">
                  <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 pr-5 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white border border-head-black focus:border-head-blue rounded-2xl transition ease-in-out" type="password" name="password" value={password} placeholder="Password" onChange={onChange} autoComplete="true" />

                  <img src={passwordSvg} className="absolute left-4 top-3 sm:top-4 xl:top-6" loading="eager"/>
                </div>

                <div className="relative">
                  <input className="w-[20rem] sm:w-[23rem] lg:w-[18rem] xl:w-[23rem] pl-12 pr-5 xl:py-5 py-3 text-base sm:text-lg text-gray-700 font-medium bg-white border border-head-black focus:border-head-blue rounded-2xl transition ease-in-out" type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={onChange} autoComplete="true" />

                  <img src={passwordSvg} className="absolute left-4 top-3 sm:top-4 xl:top-6" loading="eager"/>
                </div>
              </div>
              <button className="w-full bg-hero-blue text-white px-7 py-3 text-xs sm:text-sm font-medium uppercase rounded-3xl shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit"
                disabled={loading}>{loading ? "Signing Up..." : "Sign Up"}</button>
            </form>
          </div>
          <p className="mb-6 font-medium text-xs sm:text-sm lg:text-base">{"Already a member?"} <Link to="/sign-in" className="text-hero-blue font-semibold transition duration-200 ease-in-out ml-1 sm:ml-0"> Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}
