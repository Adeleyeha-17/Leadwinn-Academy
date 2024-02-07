import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner";

interface Van {
   id: string;
   name: string;
   price: number;
   description: string;
   imageUrl: string;
   type: string;
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
    <div className="pt-24 h-screem lg:h-[90vh] max-w-sm sm:max-w-5xl py-8 px-5 sm:max-lg:px-16 lg:max-xl:px-20 mx-auto">
      {vans ? (
      <div className="flex max-lg:flex-col gap-6 lg:gap-10">
      <img alt={vans.name} src={vans.imageUrl} className="w-[22rem] h-[22rem] lg:w-[29rem] xl:w-[30rem] xl:h-[30rem] rounded-xl"/>
     <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-head-black mt-4">{vans.name}</h2>
      <p>{vans.description}</p>
      <button className="bg-head-blue text-white py-2 rounded-md">CHAT WITH THE ADMIN</button>
      <button className="bg-head-blue bg-opacity-30 text-white py-2 rounded-md">CONTINUE TO PAYMENT</button>
     </div>
  </div>) : (

     <Spinner />
  )
  }
</div>
  )
}

export default CourseDetails