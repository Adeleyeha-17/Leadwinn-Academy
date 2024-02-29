import { FcGoogle } from 'react-icons/fc';
import { supabase } from "../../client"
import { toast } from 'react-toastify';

export const OAuth: React.FC = () => {
  

  async function onGoogleClick() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      })
      if (error) {
        console.error('Error signing in:', error.message);
        toast.error("Failed to authenticate with Google. Please try again");
      } 
    } catch (error) {
      console.error('Error signing in:', (error as Error).message);
    
    }
  }

  return (
    <div className="flex items-center justify-center"> 
      <button type="button" onClick={onGoogleClick} className="flex items-center justify-center w-12 h-10 rounded-b-lg border border-head-black">
      <FcGoogle className="text-2xl bg-white rounded-full" />
      </button>
    </div>
  )
}
