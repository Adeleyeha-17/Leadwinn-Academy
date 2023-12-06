
import { motion } from "framer-motion";

export const Profile: React.FC = () => {


 
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration: 2.5}} className="flex font-poppins">

      Eden
    </motion.div>
  )
}
