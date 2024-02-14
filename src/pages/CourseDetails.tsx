import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";
import { IoPeopleOutline } from "react-icons/io5";
import { BsGlobe, BsExclamationOctagon } from "react-icons/bs";

interface Van {
   id: string;
   name: string;
   price: number;
   description: string;
   imageUrl: string;
   type: string;
   students: number;
   rating: number;
   tick: string;
}

const CourseDetails = () => {
   const params = useParams();

   const [vans, setVans] = useState<Van | null>(null);

   useEffect(() => {
      fetch(`/api/vans/${params.id}`)
         .then(res => res.json())
         .then(data => setVans(data.vans))
   }, [params.id]
   )

   return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="font-poppins pt-24 max-w-sm sm:max-w-5xl py-8 px-5 sm:max-lg:px-16 lg:max-xl:px-20 mx-auto">
         {vans ? (
            <div>

               <div className="flex max-lg:flex-col gap-6 lg:gap-10">
                  <img alt={vans.name} src={vans.imageUrl} className="w-[22rem] h-[22rem] lg:w-[29rem] xl:w-[30rem] xl:h-[30rem] rounded-xl" />
                  <div className="flex flex-col gap-4">
                     <h2 className="text-xl font-semibold text-head-black mt-4">{vans.name}</h2>
                     <p className="text-sm lg:text-base">{vans.description}</p>

                     <p className="text-sm">{vans.rating} Rating</p>
                     <div className="flex gap-4 text-sm">
                        <p className="flex items-center gap-2"><BsExclamationOctagon /> Last updated 2023-11</p>
                        <p className="flex items-center gap-2"><IoPeopleOutline /> {vans.students} </p>
                        <p className="flex items-center gap-2"><BsGlobe /> English</p>
                     </div>
                     <button className="bg-head-blue text-white py-2 rounded-md">CHAT WITH THE ADMIN</button>
                     <button className="bg-head-blue bg-opacity-30 text-white py-2 rounded-md">CONTINUE TO PAYMENT</button>
                  </div>
               </div>
               <div className="mt-8 border p-10">
                  <h4 className="mb-3 text-2xl font-semibold  text-head-black">What you'll learn</h4>
                  <h3 className="mb-5  text-head-black">
                     In this course, you will:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-head-black">

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Master the Fundamentals: Gain a solid understanding of the core concepts and principles of the subject matter.
                     </p>
                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Develop Practical Skills: Learn hands-on techniques and best practices that you can apply in real-world scenarios.
                     </p>

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Build Projects: Work on a series of guided projects that reinforce your learning and help you build a portfolio.
                     </p>

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Collaborate with Peers: Engage in group activities and discussions to share insights and learn from others.
                     </p>

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Receive Expert Guidance: Get personalized feedback and support from experienced instructors throughout the course.
                     </p>

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />
                        Prepare for Certification: Prepare for industry-standard certification exams and validate your expertise.
                     </p>

                     <p className="flex gap-3">
                        <img src={vans.tick} alt={vans.tick} className="w-5 h-5" />

                        By the end of this course, you'll be equipped with the knowledge, skills, and confidence to excel in your field and pursue new opportunities.
                     </p>

                  </div>

               </div>

               <div className="mt-4">
                  <h3 className="mb-3 text-2xl font-semibold  text-head-black">
                     Requirements
                  </h3>

                  <ul className="list-disc pl-4 text-sm">
                     <li>There are no skill prerequisites for this course although it's helpful if you are familiar with operating your computer and using the internet.</li>
                     <li>You can take this course using a Mac, PC or LInux machine.</li>
                     <li>It is recommended that you download the free text editor and IDE the instructors will be using.</li>
                  </ul>

               </div>
            </div>) : (

            <Spinner />
         )
         }
      </motion.div>
   )
}

export default CourseDetails