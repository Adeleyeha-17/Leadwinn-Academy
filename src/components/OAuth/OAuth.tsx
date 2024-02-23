import { FcGoogle } from 'react-icons/fc';

export const OAuth: React.FC = () => {
  
  async function onGoogleClick() {
    
  }

  return (
    <div> 
      <button type="button" onClick={onGoogleClick} className="flex items-center w-[20rem] sm:w-[23rem] lg:w-[20rem] xl:w-[23rem] text-head-black px-2 xl:px-4 py-2 xl:py-5 text-sm sm:text-base xl:text-xl font-bold rounded-2xl border border-head-black">
      <FcGoogle className="text-3xl bg-white rounded-full mr-12 sm:mr-14" /> Continue with Google
      </button>
    </div>
  )
}
