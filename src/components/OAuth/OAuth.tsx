import { FcGoogle } from 'react-icons/fc';
import { supabase } from "../../client"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const OAuth: React.FC = () => {
  
  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })
      if (error) {
        console.error('Error signing in:', error.message);
        toast.error("Could not authenticate with google");
      } else {
        console.log('User data:', data);
        toast.success('Sign in successful');
        navigate("/")
      }
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
    
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
