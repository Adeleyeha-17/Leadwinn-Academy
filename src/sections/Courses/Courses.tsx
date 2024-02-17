import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";

export const Courses = () => { 

    interface Course {
        id: string;
        name: string;
        price: number;
        description: string;
        imageUrl: string;
        type: string;
        hostId: string;
        students: number
        instructorUrl: string;
    }

    const [vans, setVans] = useState<Course[]>([])
    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.slice(0, 9).map(van => (
      <div key={van.id} className="w-[22rem] xl:w-[25rem] h-[30rem] xl:h-[32rem] rounded-3xl border px-6 py-10">
            <Link to={`/courses/${van.id}`}>
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
          <div>
            <div className="flex justify-between">

          <i className={`border py-1 px-3 rounded-md text-xs`}>{van.type}</i>
          <p>Stars</p>
            </div>
              <h3 className="text-sm font-semibold text-head-black mt-4">{van.name}</h3>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <img src={van.instructorUrl} className="w-8 h-8 rounded-full" />
            <p className="text-sm">Fetuga</p>
          </div>
          <div className="flex justify-between mt-4 text-sm">
                <div>
                <p className="flex items-center gap-2"><IoPeopleOutline /> {van.students} </p>
                </div>
              <p>${van.price}</p>
          </div>
        </Link>
      </div>
  ))

  return (
      <div className="flex flex-col items-center justify-center overflow-x-auto font-poppins py-20">
          <h1 className="text-lg text-heading font-semibold mb-2">FEATURED COURSES</h1>
          <h2 className="text-xl sm:text-2xl text-head-black font-semibold mb-5">Find Yours From The Featured</h2>
          <h5 className="px-2 sm:max-w-[36rem] text-center text-heading mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam atque officia sapiente sed molestias quo. Error </h5>
          <div className="flex items-center justify-center gap-8 mr-[0rem] ">
              {vanElements}
      
          </div>
      </div>
  )
}