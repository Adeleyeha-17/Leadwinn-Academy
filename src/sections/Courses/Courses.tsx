import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import Slider from 'react-slick';

import "./courses.css"

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
        instructor: string;
        star: string;
        title: string;
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const [vans, setVans] = useState<Course[]>([])
    useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const vanElements = vans.slice(0, 6).map(van => (
        <div className="sm:px-5 lg:px-10">
      <div key={van.id} className="w-[20rem] sm:w-[14rem] lg:w-[18.8rem] xl:w-[24rem] h-[30rem] sm:max-lg:h-[25rem] xl:h-[32rem] rounded-3xl border px-6 py-10 max-sm:ml-10">

            <Link to={`/courses/${van.id}`}>
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
          <div>
            <div className="flex justify-between">

          <i className={`border py-1 px-3 rounded-md text-xs`}>{van.type}</i>
          <img src={van.star} className="w-28 sm:max-lg:w-20 lg:w-28" title={van.title}/>
            </div>
              <h3 className="text-sm font-semibold text-head-black mt-4">{van.name}</h3>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <img src={van.instructorUrl} className="w-10 h-10 rounded-full" alt=""/>
            <p className="text-sm">{van.instructor}</p>
          </div>
          <div className="flex justify-between mt-4 text-sm">
                <div>
                <p className="flex items-center gap-2"><IoPeopleOutline /> {van.students} </p>
                </div>
          </div>
        </Link>
        </div>
      </div>
  ))

  return (

      <div className="mb-28">
        <div className="flex flex-col items-center justify-center font-poppins pt-20">

          <h1 className="text-lg text-heading font-semibold mb-2">FEATURED COURSES</h1>
          <h2 className="text-xl sm:text-2xl text-head-black font-semibold mb-5">Find Yours From The Featured</h2>
          <h5 className="px-2 sm:max-w-[36rem] text-center text-heading mb-10">From coding to design and beyond, find the perfect course to elevate your expertise and achieve your goals.</h5>
        </div>
        <div className="- sm:px-10">
          <Slider {...settings}>
        {vanElements}
        </Slider>
    </div>
          </div>
  )
}