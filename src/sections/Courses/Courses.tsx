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

  const vanElements = vans.slice(0, 6).map(van => (
      <div key={van.id} className="w-[22rem] xl:w-[25rem] h-[30rem] rounded-3xl border px-6 py-10">
            <Link to={`/courses/${van.id}`}>
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
          <div>
          <i className={`border py-1 px-3 rounded-md text-sm`}>{van.type}</i>
              <h3 className="text-base font-semibold text-head-black mt-4">{van.name}</h3>
          </div>
              <p>${van.price}<span>/day</span></p>
            </Link>
      </div>
  ))

  return (
      <div className="flex flex-col items-center justify-center overflow-hidden font-poppins py-20">
          <h1 className="text-lg text-heading font-medium mb-2">FEATURED COURSES</h1>
          <h2 className="text-2xl text-head-black font-semibold mb-5">Find Yours From The Featured</h2>
          <h5 className="max-w-[36rem] text-center text-heading mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam atque officia sapiente sed molestias quo. Error </h5>
          <div className="flex items-center justify-center gap-8">
              {vanElements}
      
          </div>
      </div>
  )
}

