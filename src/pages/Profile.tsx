import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { supabase } from "../client";
import { User } from "@supabase/supabase-js";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
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
          if (data.user.user_metadata.picture) {
            setProfilePictureUrl(data.user.user_metadata.picture);
            setEmailVerified(data.user.user_metadata.email_verified || false);
          }
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
        {profilePictureUrl && (
          <img src={profilePictureUrl} alt="Profile" className="rounded-full w-40 h-40 mb-4" />
        )}
        <section>
          <h1 className="text-3xl text-center font-bold mt-6 mb-3">Profile</h1>
          <div className="mt-6 px-3 mx-auto">
            <h4 className="text-lg">Welcome to your Leadwinn profile,</h4>
            <div className="bg-white h-auto flex flex-col gap-4 mt-4 border border-gray-300 rounded-lg px-5 lg:px-10 py-10">
              <h4>Name: <span className="text-heading">{fullName}</span></h4>
              <h4>Email Address: <span className="text-heading">{email}</span></h4>
              <h4>Email Verified: <span className="text-heading">{emailVerified ? 'No' : 'Yes'}</span></h4>
              
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
