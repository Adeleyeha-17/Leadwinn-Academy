import {FC, useRef, FormEvent } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { edit, mail } from "../../src/assets/icons"
import { feedback } from "../../src/assets/images"

interface FeedbackProps {}

export const Feedback: FC<FeedbackProps> = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    if (form.current) {
      emailjs.sendForm(
        "service_1l751sg",
        "template_0wboj38",
        form.current,
        "xw-05FedmoQeFTClZ"
      );
      e.currentTarget.reset();
    }
  };

  return (

    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 2.5}}>

      <div className="bg-feedback bg-no-repeat bg-cover py-8 flex flex-col justify-center items-center font-poppins">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 text-head-black">Send Us Your Feedback</h2>
        <img src={feedback} className="w-[10rem] md:w-[14rem]"/>
      </div>

    <div className="contact font-poppins pb-20 md:px-12 px-5 xl:px-40 py-10 lg:max-xl:max-w-6xl mx-auto text-head-black ">
      
      

      <div className="grid max-sm:grid-cols-1 grid-cols-2 justify-center gap-4 pb-12">
        <div className="mx-auto mb-8">
          <h3 className="text-center text-[1.125rem] font-semibold mb-8">
            Talk to Us
          </h3>

          <div className="grid gap-y-8 md:gap-y-14 grid-cols-[300px]">
            <div className="px-4 py-6 rounded-[0.75rem] text-center border border-opacity-10">
              <i className="bx bx-mail-send text-3xl"></i>

              <h3 className="text-[0.875rem] font-semibold">Email</h3>
              <span className="text-xs block mb-[0.75rem]">
                info.leadwinnacademy@gmail.com
              </span>

              <Link
                to="mailto:info.leadwinnacademy@gmail.com"
                className="text-[0.75rem] inline-block items-center justify-center gap-x-1 text-hero-blue"
               target="_blank">
                Write us
              </Link>
            </div>

            <div className="px-4 py-6 rounded-[0.75rem] text-center border border-opacity-10">
              <i className="bx bxl-whatsapp text-3xl"></i>

              <h3 className="text-[0.875rem] font-semibold">Whatsapp</h3>
              <span className="text-xs block mb-[0.75rem]">+2348165906106</span>

              <Link
                to="https://api.whatsapp.com/send?phone=+2348165906106&text=Hello Leadwinn,"
                className="text-[0.75rem] inline-block items-center justify-center gap-x-1 text-hero-blue"
                target="_blank">
                Write us
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <h3 className="text-center text-[1.125rem] font-semibold mb-8">
            Write your feedback
          </h3>
         
          <form ref={form} onSubmit={sendEmail} className="w-[350px] sm:max-xl:w-[320px] xl:w-[360px]">
               <div className="relative mb-8 h-16">
                  <input type="text" name="name" className="relative top-0 left-0 w-full h-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30 pl-12" placeholder="Full Name"/>
                  <img src={edit} className="absolute left-4 top-5"/>

               </div>

               <div className="relative mb-8 h-16">
                  <input type="email" name="email" className="relative top-0 left-0 w-full h-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30 pl-12" placeholder="Email"/>
                  <img src={mail} className="absolute left-4 top-5"/>

               </div>

               <div className="relative mb-28 h-32 contact__form-area">
                  <textarea name="feedback" cols={30} rows={10} className="relative top-0 left-0 w-full bg-none outline-none rounded-[0.75rem] p-[1.5rem] border-2 border-opacity-30 h-[12rem]" placeholder="Type your message"></textarea>
               </div>

               <button className="text-sm inline-flex items-center bg-hero-blue text-white rounded-[1rem] border py-[1.25rem] px-[2rem]">Send Message
       </button>
            </form>
        </div>
      </div>
      </div>
    </motion.div>
  );
};


