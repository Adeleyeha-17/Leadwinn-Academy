import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase"
import { toast } from "react-toastify"
import { db } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

export const OAuth: React.FC = () => {

  const navigate = useNavigate()
  
  async function onGoogleClick() {

    try{
    const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider)
      const user = result.user;
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
      console.log(user);
    } catch (error) {
      if (error === 'auth/cancelled-popup-request') {

        console.error("Popup request was cancelled");
      } else {

        toast.error("Could not authorize with Google");
        console.error(error);
    
      }
    }
    
  }

  return (
    <div> 
      <button type="button" onClick={onGoogleClick} className="flex items-center w-[20rem] sm:w-[23rem] lg:w-[20rem] xl:w-[23rem] text-head-black px-2 xl:px-4 py-2 xl:py-5 text-sm sm:text-base xl:text-xl font-bold rounded-2xl border border-head-black">
      <FcGoogle className="text-3xl bg-white rounded-full mr-12 sm:mr-14" /> Continue with Google
      </button>
    </div>
  )
}
