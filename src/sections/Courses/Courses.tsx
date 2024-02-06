import { useEffect, useState } from "react";

export const Courses = () => { 

    interface Course {
        id: string;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        type: string;
        hostId: string;
    }

    const [vans, setVans] = useState<Course[]>([])
    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.map(van => (
      <div key={van.id} className="w-[25rem] h-[30rem] rounded-3xl border px-6 py-10">
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4"/>
          <div className="van-info">
          <i className="border py-1 px-3 rounded-md">{van.type}</i>
              <h3>{van.name}</h3>
          </div>
              <p>${van.price}<span>/day</span></p>
      </div>
  ))

  return (
      <div className="flex flex-col items-center">
          <h1>Explore Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {vanElements}
          </div>
      </div>
  )
}
