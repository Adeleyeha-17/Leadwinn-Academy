import { FcGoogle } from 'react-icons/fc';

export const OAuth = () => {
  return (
    <div>
<button
      type="button"
      className="flex items-center w-[28rem] text-head-black px-4 py-3 text-xl font-bold hover:shadow-lg active:shadow-sm transition duration-150 ease-in-out rounded-2xl border border-head-black"
    >
      <FcGoogle className="text-4xl  bg-white rounded-full mr-20" />
      Continue with Google
    </button>
    </div>
  )
}
