import React, {useState} from 'react';

export const Faq: React.FC = () => {
   const [activeAccordion, setActiveAccordion] = useState(0);

   const toggleTab = (index : number) => {
      setActiveAccordion(index === activeAccordion ? 0 : index);
   };

   const accordionData = [
      {
         title: 'What is Leadwinn',
         content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
      }, {
         title: 'How do online class work',
         content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
      },  {
        title: 'Do I need any prior coding experience to enroll my child',
        content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
     }, {
        title: 'How can I get started with Leadwinn',
        content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
     },
     {
      title: 'What benefits will my child gain from Leadwinn classes',
      content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
   }, {
      title: `Can I track my child's progress`,
      content: 'This is the hidden content for Accordion 1. This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.This is the hidden content for Accordion 1.'
   },

   ];

   return (
      <div className="lg:max-xl:px-10 lg:space-x-20 px-40 p-16 md:max-w-6xl lg:max-w-7xl mx-auto">
        <h1 className="text-head-black font-bold text-3xl mb-8 flex items-center justify-center">Frequency Asked Question</h1>
         {
         accordionData.map((data, index) => (
            <div key={index} className='mb-4 border-b border-gray-300 cursor-pointer py-2'>
               <div className="flex justify-between"
                  onClick={
                     () => toggleTab(index + 1)
               }>
                  <h3 className='text-head-black font-bold'>{
                     `${data.title}?`
                  }</h3>
                  <span>{
                     activeAccordion === index + 1 ? <img src="./accordionBtnUp.svg" className='w-8'/> : <img src="./accordionBtnDown.svg" className='w-8'/>
                  }</span>
               </div>
               {
               activeAccordion === index + 1 && (
                  <div>
                     <p>{
                        data.content
                     }</p>
                  </div>
               )
            } </div>
         ))
      } </div>
   );
};
