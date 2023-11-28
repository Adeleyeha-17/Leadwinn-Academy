import { Link, useLocation} from "react-router-dom"
import dotImage from "../../src/assets/dots.png"
import OAuth from "../components/OAuth";

export const Register = () => {

   const location = useLocation();

   const routePathMatch = (route:string) => {
     return location.pathname === route ? "text-hero-blue" : "text-black";
   }

  return (
   <div className="h-screen flex font-poppins">
      
   <div className="bg-head-black text-white w-6/12 h-screen flex flex-col justify-center ">
   <div className=" w-[28rem] flex flex-col gap-10 ml-12">
     <h2 className=" font-medium text-5xl">Join Leadwinn For Free</h2>
     <img src={dotImage}  className="w-11/12"/>
     <h4 className="w-[24rem] font-bold text-2xl">Fuel your creativity at Leadwinn with cutting-edge courses in coding, tech skills, and more.</h4>
   </div>
   </div>
   
   <div className="w-full flex flex-col items-center pt-32">
        
        <div className="flex items-center flex-col gap-10 text-xl text-head-black font-bold">
        <span className="text-base font-bold"> <Link to="/register" className={`${routePathMatch("/register")}`}>Register</Link> / <Link to="/sign-in" className={`${routePathMatch("/sign-in")}`}>Sign In</Link></span>

        <OAuth />

        <h4>Or</h4>

        <h1>Register with Email</h1>

        <div>
          
          
        </div>
        </div>

      </div>
 </div>
  )
}
