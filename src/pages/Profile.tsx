
import { updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { db, auth } from "../config/firebase"


export const Profile: React.FC = () => {
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    fullName: auth.currentUser?.displayName || "",
    email: auth.currentUser?.email || ""
  })

  const userImg = auth?.currentUser?.photoURL

  const { fullName, email } = formData
  const navigate = useNavigate()

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  function onSignOut() {
    auth.signOut()
    navigate("/")
  }

  function editDetails() {
    {
      changeDetails && onSubmit();
      setChangeDetails(prevState => !prevState)
    }

  }

  async function onSubmit() {
    try {
      const user = auth.currentUser;

      if (user) {
        if (user.displayName !== fullName) {
          await updateProfile(user, {
            displayName: fullName,
          });
        }

        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          fullName: fullName,
        });

        toast.success("Profile Updated");
      }
    } catch (error) {
      toast.error("Could not update the profile data");
    }
  }

  return (
    < div className="flex flex-col justify-between md:px-12 px-5 xl:px-40 pt-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl font-poppins mb-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <section>
          <h1 className="text-3xl text-center font-bold mt-6 mb-3">Profile</h1>
          <div className="sm:w-full md:w-[85%] mt-6 px-3 mx-auto">
            <form onSubmit={onSubmit}>

              <div>
                {userImg && <img src={userImg} alt="profile"
                  className="rounded-full w-28 h-28 object-cover mb-4" />}
              </div>
              <input type="text" name="fullName" value={fullName} onChange={onChange} disabled={!changeDetails} className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out ${changeDetails && "bg-red-200 focus:bg-red-200"}`} />

              <input type="email" name="email" value={email} onChange={onChange} disabled={!changeDetails} className={`w-full rounded text-xl text-gray-700 bg-white px-4 py-2 my-2 border border-gray-300 transition ease-in-out`} />

              <div className="flex justify-between whitespace-nowrap text-sm mb-4 items-center">
                <p className="flex max-sm:text-xs">Do you want to change your name? <span className="ml-1 text-red-600 hover:text-red-700 transition ease-in-out duration-200 cursor-pointer" onClick={editDetails}>
                  {changeDetails ? "Apply" : "Edit"}</span></p>
                <p className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer max-sm:text-xs" onClick={onSignOut}>Sign out</p>

              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
