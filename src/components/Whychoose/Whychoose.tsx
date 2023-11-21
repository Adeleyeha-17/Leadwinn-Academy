import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import instructorsImage from "../../assets/instructors.png"
import curriculumImage from "../../assets/curriculum.png"
import interactiveImage from "../../assets/interactive.png"
import convenientsImage from '../../assets/convenients.png'


interface Item {
  title: string;
  description: string;
  icon: string;

}

export const Whychoose: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const items: Item[] = [
    {
      title: "Expert Instructors",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      icon: instructorsImage,
    },
    {
      title: "Age Appropriate Curriculum",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      icon: curriculumImage,
    },
    {
      title: "Interactive",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      icon: interactiveImage,
    },
    {
      title: 'Convenient Online Learning',
      description: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      icon: convenientsImage,
    }
  ];

  return (
    <div className="my-8 lg:my-20 flex flex-col justify-center overflow-hidden font-poppins">

<div className="py-10 md:px-12 px-5 xl:px-40 lg:py-20 md:max-lg:max-w-6xl lg:max-xl:max-w-7xl">
        <h2 className="text-head-black font-bold max-sm:text-xl sm:text-[2.5rem] leading-[3rem] sm:mb-3">
          Why Choose <span className="text-hero-blue">Leadwinn?</span>
        </h2>
        <h3 className="max-sm:text-xs text-base text-head-black max-w-[20rem] sm:max-w-[30rem]">
          At Leadwinn, we're dedicated to providing the best online coding education for kids and teens. Here are the compelling reasons why you should choose us
        </h3>
      </div>


      <div className="transform ease-in-out duration-700 whitespace-nowrap shadow-md" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} activeIndex={activeIndex} updateIndex={updateIndex} />
        ))}
      </div>
    </div>
  );
};
