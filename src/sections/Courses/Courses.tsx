import { useEffect, useState } from "react";
import Slider from "react-slick";

export const Courses = () => { 

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:true,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
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
      <div key={van.id} className="w-[25rem] h-[30rem] rounded-3xl border px-6 py-10">
          <img alt={van.name} src={van.imageUrl} className="rounded-xl mb-4 transform transition duration-150 ease-in-out hover:"/>
          <div className="van-info">
          <i className={`border py-1 px-3 text-white bg-${van.color} rounded-md`}>{van.type}</i>
              <h3>{van.name}</h3>
          </div>
              <p>${van.price}<span>/day</span></p>
      </div>
  ))

  return (
   <div>

      <div className="flex flex-col items-center mb-32 px-10">
          <h1>FEATURED COURSES</h1>
          <h4>Find Yours From The Featured</h4>
          <div className="grid grid-cols-1">
              <Slider {...settings} className="p-10">
              {vanElements}
      
               </Slider>
          </div>
      </div>
   </div>
  )
}

