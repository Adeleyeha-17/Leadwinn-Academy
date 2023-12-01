import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"

export const OAuth: React.FC = () => {
  
  const onGoogleClick = async () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    
    return signInWithPopup(auth, provider)
    
  }
  return (
    <div>
<button
  onClick={onGoogleClick}
      type="button"
      className="flex items-center w-[20rem] sm:w-[23rem] lg:w-[20rem] xl:w-[28rem] text-head-black px-2 xl:px-4 py-2 xl:py-3 text-sm sm:text-base xl:text-xl font-bold hover:shadow-lg active:shadow-sm transition duration-150 ease-in-out rounded-2xl border border-head-black"
    >
      <FcGoogle className="text-3xl xl:text-4xl bg-white rounded-full mr-12 sm:mr-20" />
      Continue with Google
    </button>
    </div>
  )
}
