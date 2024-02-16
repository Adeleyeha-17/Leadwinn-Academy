import { motion } from 'framer-motion';
import React, { useState } from 'react';

type ProfileQuestionsProps = {
  onComplete: (answers: string[]) => void;
};

export const ProfileQuestion: React.FC<ProfileQuestionsProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions: string[] = [
    "Are you a parent or a student?",
    "Are you 6 years and above?",
    "What course would you like to participate in?"
  ];

  const options: string[][] = [
    ["Parent", "Student"],
    ["Yes", "No"],
    ["Scratch", "MIT", "ROBLOX", "UI/UX DESIGN", "WEB DEVELOPMENT", "PYTHON"]
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prevAnswers => [...prevAnswers, answer]); // Use a callback function with setAnswers
    if (currentQuestion === questions.length - 1) {
      onComplete([...answers, answer]); // Pass the updated answers array to onComplete
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="h-screen flex flex-col items-center justify-center gap-5 mx-auto font-poppins text-heading">
      <p className='text-sm lg:text-xl'>{questions[currentQuestion]}</p>

      <div className='flex gap-10 '>

      {options[currentQuestion].map((option, index) => (
         <button key={index} onClick={() => handleAnswer(option)} className='border px-3 py-1 rounded-lg border-heading text-xs lg:text-base hover:text-white hover:bg-head-blue hover:border-head-blue transform transition duration-150 ease-in-out'>{option}</button>
         ))}
         </div>
   </motion.div>
  );
};
