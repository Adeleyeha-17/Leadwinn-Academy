import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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
    <div className="pt-24 max-w-sm sm:max-w-2xl mx-auto">
      {vans ? (
      <div className="flex flex-col items-center justify-center">
      <img alt={vans.name} src={vans.imageUrl} />
      <i className="">
          {vans.type}
      </i>
      <h2>{vans.name}</h2>
      <p className=""><span>${vans.price}</span>/day</p>
      <p>{vans.description}</p>
      <button className="">Rent this van</button>
  </div>) :
      <h3>Loading ...</h3>}
    </div>
  )
}

export default CourseDetails