
import { motion } from "framer-motion";
import { updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { db, auth } from "../config/firebase"
import profileImage from "../assets/profile.jpg"


export const Profile: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    fullname: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || ""
  })

  const {fullname, email} = formData
  const navigate = useNavigate()

  function onChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
    setFormData( prevState => ({
      ...prevState,
      [name] : value,
    }))
  }
 
  function onSignOut() {
    auth.signOut()
    navigate("/")
  }

  function editDetails() {
    {
      changeDetails && onSubmit();
      setChangeDetails( prevState => !prevState)
    }
    
  }

  async function onSubmit() {
    try {
      const user = auth.currentUser;
  
      if (user) {
        if (user.displayName !== fullname) {
          await updateProfile(user, {
            displayName: fullname,
          });
        }
  
        if (selectedImage) {
          const storage = getStorage();
          const storageRef = ref(storage, `profile-images/${user.uid}`);
          await uploadBytes(storageRef, selectedImage);
          const downloadURL = await getDownloadURL(storageRef);
  
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, {
            name: fullname,
            profileImageURL: downloadURL,
          });
        } else {
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, {
            name: fullname,
          });
        }
  
        toast.success("Changes made");
      }
    } catch (error) {
      toast.error("Could not update the profile data");
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
  };
  
  


  return (
    < motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="flex flex-col justify-between md:px-12 md:py-6 px-5 xl:px-40 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mb-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <section>
        <h1 className="text-3xl text-center font-bold mt-6 mb-3">Profile</h1>
      <div className="sm:w-full md:w-[85%] mt-6 px-3 mx-auto">
      <form onSubmit={onSubmit}>

      <div>
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="profile"
                    className="rounded-full w-28 h-28 object-cover mb-4"
                  />
                ) : (
                  <img
                    src={profileImage}
                    alt="profile"
                    className="rounded-full w-28 h-28 object-cover mb-4"
                  />
                )}
               {!selectedImage && (
                <div className="mb-2">

                  <label htmlFor="fileInput" className="fileInputLabel">
                  Upload
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="fileInput"
                  />
                  </div>
                
                )}
              </div>
          {/* Name input */}
          <input type="text" name="fullname" value={fullname} onChange={onChange} disabled={!changeDetails} className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out ${changeDetails && "bg-red-200 focus:bg-red-200"}`}/>
          
          {/* Email input */}
          <input type="email" name="email" value={email} onChange={onChange} disabled={!changeDetails} className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out`}/>

          <div className="flex justify-between whitespace-nowrap text-sm mb-4 items-center">
            <p className="flex max-sm:text-xs">Do you want to change your name? <span className="ml-1 text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer" onClick={editDetails}>
              {changeDetails ? "Apply change" : "Edit"}</span></p>
            <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer max-sm:text-xs" onClick={onSignOut}>Sign out</p>

          </div>
        </form>
      </div>
        
      </section>
    </div>
    </motion.div>
  )
}
