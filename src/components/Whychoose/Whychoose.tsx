import React, { useState } from "react";
import CarouselItem from "./CarouselItem";

interface Item {
  title: string;
  description: string;
  icon: string;
  notActive: string;
  active: string;
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
      icon: "./instructors.png",
      notActive: './expert.png',
      active: './active_expert.png',
    },
    {
      title: "Age Appropriate Curriculum",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      icon: "./curriculum.png",
      notActive: './age.png',
      active: './active_age.png',
    },
    {
      title: "Interactive",
      description: "Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.",
      icon: "./interactive.png",
      notActive: './learning.png',
      active: './active_learning.png',
    },
    {
      title: 'Convenient Online Learning',
      description: 'Our experienced instructors are passionate about teaching coding to kids. They bring a wealth of knowledge and industry experience to make learning engaging and effective.',
      icon: './convenients.png',
      notActive: './convenient.png',
      active: './active_convenient.png',
    }
  ];

  return (
    <div className="carousel my-24">
      <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} activeIndex={activeIndex} index={index} updateIndex={updateIndex} />
        ))}
      </div>
    </div>
  );
};
