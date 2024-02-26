import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { supabase } from "../client";
import { User } from "@supabase/supabase-js";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });
  const { fullName, email } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        if (data && data.user) {
          setUser(data.user);
          setFormData({
            fullName: data.user.user_metadata.full_name || "",
            email: data.user.email || ""
          });
         
        } else {
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };
  
    fetchUserData();
  }, [navigate, user?.id]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col justify-between md:px-12 px-5 xl:px-40 pt-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mb-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <section>
          <h1 className="text-3xl text-center font-bold mt-6 mb-3">Profile</h1>

          <div className="sm:w-full md:w-[85%] mt-6 px-3 mx-auto">
          <h4>Welcome to your Leadwinn profile,</h4>
            <form>
              <input
                type="text"
                name="fullName"
                value={fullName}
                className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out `}
              />

              <input
                type="email"
                name="email"
                value={email}
                className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out`}
              />
              
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
