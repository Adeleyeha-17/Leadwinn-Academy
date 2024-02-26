import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { supabase } from "../client";
import { User } from "@supabase/supabase-js";

export const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });
  const [profilePicture, setProfilePicture] = useState<string>("");
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

          const { data: profile, error: profileError } = await supabase.storage
            .from("profiles")
            .download(`profile_${user?.id}`);
          if (profileError) {
            console.error("Error fetching profile picture:", profileError.message);
          } else if (profile) {
            setProfilePicture(URL.createObjectURL(profile));
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
  
  

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  function onSignOut() {
    supabase.auth.signOut().then(() => {
      navigate("/");
    }).catch(error => {
      console.error("Error signing out:", error.message);
    });
  }

  function editDetails() {
    {
      changeDetails && onSubmit();
      setChangeDetails((prevState) => !prevState);
    }
  }

  async function onSubmit() {
  }

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

          <h4>Welcome back, {user && user.user_metadata.full_name}</h4>
          <div className="sm:w-full md:w-[85%] mt-6 px-3 mx-auto">
            <form onSubmit={onSubmit}>
              <div>
              {profilePicture && (
            <div className="rounded-full w-28 h-28 object-cover mb-4">
              <img src={profilePicture} alt="profile" />
            </div>
          )}
              </div>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={onChange}
                disabled={!changeDetails}
                className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out ${
                  changeDetails && "bg-red-200 focus:bg-red-200"
                }`}
              />

              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                disabled={!changeDetails}
                className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out`}
              />

              <div className="flex justify-between whitespace-nowrap text-sm mb-4 items-center">
                <p className="flex max-sm:text-xs">
                  Do you want to change your name?{" "}
                  <span
                    className="ml-1 text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer"
                    onClick={editDetails}
                  >
                    {changeDetails ? "Apply" : "Edit"}
                  </span>
                </p>
                <p
                  className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer max-sm:text-xs"
                  onClick={onSignOut}
                >
                  Sign out
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
