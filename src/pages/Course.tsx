import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Courses = () => { 

    interface Course {
        id: string;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        type: string;
        hostId: string;
        color: string;
    }

    const [vans, setVans] = useState<Course[]>([])
    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(van => (
      <div key={van.id} className="w-[22rem] xl:w-[19rem] h-[25rem] rounded-3xl border px-6 py-10">
        <Link to={`/courses/${van.id}`}>
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
          <div>
          <i className={`border py-1 px-3 rounded-md text-xs`}>{van.type}</i>
              <h3 className="text-sm font-semibold text-head-black mt-4">{van.name}</h3>
          </div>
              <p>${van.price}<span>/day</span></p>
        </Link>
      </div>
  ))

  return (
      <div className="flex flex-col items-center justify-center pt-24 font-poppins">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-5">
              {vanElements}
      
          </div>
      </div>
  )
}

