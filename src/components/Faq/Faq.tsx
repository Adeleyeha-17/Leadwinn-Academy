import React, { useState } from 'react';
import { motion } from "framer-motion";
import { accordionUp, accordionDown } from "../../assets/icons"

export const Faq: React.FC = () => {
   const [activeAccordion, setActiveAccordion] = useState(0);
   const toggleTab = (index: number) => {
      setActiveAccordion(index === activeAccordion ? 0 : index);
   };

   const accordionData = [
      {
         title: 'What is Leadwinn',
         content: 'Leadwinn is an online learning platform that offers coding and technology education for kids aged 6-17. We provide interactive classes to help children learn coding skills in a fun and engaging way.'
      }, {
         title: 'How can I get started with Leadwinn',
         content: 'To get started, simply visit our website, explore our course offerings, and sign up for a trial class. Our team is here to assist you every step of the way.'
      }, {
         title: 'How do online class work',
         content: 'Our online classes are conducted live by experienced instructors. Students can join from the comfort of their homes using a PC. Classes are interactive, and students can ask questions and participate in coding projects.'
      }, {
         title: 'What benefits will my child gain from Leadwinn classes',
         content: `Your child will develop coding skills, problem-solving abilities, creativity, and a strong foundation in technology. These skills are essential in today's digital world and can open up future career opportunities.`
      },
      {
         title: 'Do I need any prior coding experience to enroll my child',
         content: 'No, prior coding experience is not required. Our courses are designed to accommodate beginners, and our instructors provide step-by-step guidance.'
      }, {
         title: `What coding languages are taught at Leadwinn`,
         content: 'Leadwinn offers courses in popular coding languages such as Python, Scratch, JavaScript, and more. The specific languages taught may vary based on the course and age group.'
      },
   ];

   return (
      <div className="px-6 sm:px-10 md:px-20 lg:px-28 xl:px-40 p-10 md:max-lg:max-w-6xl mx-auto font-poppins">
         <h1 className="text-heading font-semibold text-base sm:text-xl lg:text-3xl mb-8 flex items-center justify-center">Frequency Asked Question
         </h1>
         {
            accordionData.map((data, index) => (
               <div key={index} className='mb-4 border-b border-gray-300 cursor-pointer py-2 flex flex-col'>
                  <div className="flex justify-between items-center"
                     onClick={
                        () => toggleTab(index + 1)
                     }>
                     <h3 className='text-head-black w-3/4 sm:w-full text-xs md:text-base font-semibold focus:border-none'>{
                        `${data.title}?`
                     }</h3>
                     <span className="w-1/4 flex items-end justify-end">{
                        activeAccordion === index + 1 ? <img src={accordionUp} className='h-4 w-4 md:h-8 md:w-8' alt="accordionUp"/> : <img src={accordionDown} className='h-4 w-4 md:h-8 md:w-8' alt="accordionDown"/>
                     }</span>
                  </div>
                  <motion.div
                     className="pr-6 sm:pr-10 overflow-hidden"
                     initial={{ opacity: 0, height: 0 }}
                     animate={{
                        opacity: activeAccordion === index + 1 ? 1 : 0,
                        height: activeAccordion === index + 1 ? 'auto' : 0,
                     }}
                     transition={{ duration: 0.3 }}
                  >
                     <p className="text-head-black text-xs md:text-sm ">{data.content}</p>
                  </motion.div>
               </div>
            ))
         } </div>
   );
};
