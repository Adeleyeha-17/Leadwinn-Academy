import React, {useState, ChangeEvent} from 'react'
import {Link} from "react-router-dom"

type quickLink = {
   link: string;
   path: string;
}

export const Footer: React.FC = () => {

   const [emailData, setEmailData] = useState({email: "", receiveMail: true})

   const {email, receiveMail} = emailData;

   const onChange = (e : ChangeEvent < HTMLInputElement >) => {
      const {name, value, type, checked} = e.target

      setEmailData((prevState) => ({
         ...prevState,
         [name]: type === "checkbox" ? checked : value
      }))
   }

   const quickLinks: quickLink[] = [
      {
         link: "About Us",
         path: "/about"
      }, {
         link: "Privacy Policy",
         path: "/"
      },{
         link: "FAQ",
         path: ""
      }, 
       {
         link: "Send Us a Feedback",
         path: ""
      }
   ]

   return (
      <div className="bg-footer-blue text-white font-poppins pb-20 md:px-12 px-5 py-10 xl:px-28 md:py-20 lg:max-xl:max-w-6xl mx-auto">
         <div className="grid sm:max-lg:grid-cols-2 lg:grid-flow-col gap-5 ">
          
            <div className="flex flex-col gap-2 w-full">
               <h1 className="text-sm lg:text-base font-bold">Contact Us</h1>

               <div className="flex gap-4">
                  <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M7 9L10.75 12C11.1047 12.284 11.5456 12.4388 12 12.4388C12.4544 12.4388 12.8953 12.284 13.25 12L17 9M21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </h1>

                  <div className="flex flex-col gap-1">
                     <h1 className="text-sm md:font-medium md:text-base">Email</h1>
                     <h1 className="text-xs md:text-sm ">info@leadwinnacademy@gmail.com</h1>
                  </div>
               </div>

               <div className="flex gap-4">
                  <h1>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6602 20.002 15.858C20.141 15.878 20.324 15.899 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0002 16.2961 21 16.42Z" fill="white"/>
                     </svg>
                  </h1>

                  <div className="flex flex-col gap-1">
                     <h1 className="text-sm md:font-medium md:text-base">Phone</h1>
                     <h1 className="text-xs md:text-sm">+2348165906106</h1>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
               <h1 className="text-sm font-bold lg:text-base">Quick Links</h1>
               <div className="flex flex-col gap-2 text-xs md:text-sm ">
                  {
                  quickLinks.map(links => (
                     <Link to={
                           links.path
                        }
                        key={
                           links.path
                     }>
                        {
                        links.link
                     }</Link>
                  ))
               } </div>
            </div>
  
            
            <div className="flex flex-col gap-2 w-full">
               <h1 className="text-sm lg:text-base font-bold">Socials</h1>

               <div className="flex gap-5">
                  <Link to="https://instagram.com/leadwinn_academy?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C32 24.8615 24.8615 32 16 32C7.13846 32 0 24.8615 0 16C0 7.13846 7.13846 0 16 0C24.8615 0 32 7.13846 32 16ZM11.9385 6.15385C13.0462 6.15385 13.2923 6.15385 16 6.15385C18.7077 6.15385 18.9538 6.15385 20.0615 6.15385C21.1692 6.15385 21.7846 6.4 22.4 6.64615C23.0154 6.89231 23.6308 7.26154 24.1231 7.75385C24.6154 8.24615 24.9846 8.86154 25.2308 9.47692C25.4769 10.0923 25.6 10.8308 25.7231 11.8154C25.7231 12.9231 25.7231 13.1692 25.7231 15.8769C25.7231 18.5846 25.7231 18.8308 25.7231 19.9385C25.7231 21.0462 25.4769 21.6615 25.2308 22.2769C24.9846 22.8923 24.6154 23.5077 24.1231 24C23.6308 24.4923 23.0154 24.8615 22.4 25.1077C21.7846 25.3538 21.0462 25.4769 20.0615 25.6C18.9538 25.6 18.7077 25.6 16 25.6C13.2923 25.6 13.0462 25.6 11.9385 25.6C10.8308 25.6 10.2154 25.3538 9.6 25.1077C8.98462 24.8615 8.36923 24.4923 7.87692 24C7.38462 23.5077 7.01538 22.8923 6.76923 22.2769C6.52308 21.6615 6.4 20.9231 6.27692 19.9385C6.27692 18.8308 6.27692 18.5846 6.27692 15.8769C6.27692 13.1692 6.27692 12.9231 6.27692 11.8154C6.27692 10.7077 6.52308 10.0923 6.76923 9.47692C7.01538 8.86154 7.38462 8.24615 7.87692 7.75385C8.36923 7.26154 8.98462 6.89231 9.6 6.64615C10.2154 6.4 10.9538 6.27692 11.9385 6.15385ZM19.9385 8C18.9538 8 18.5846 8 16 8C13.4154 8 13.0462 8 12.0615 8C11.0769 8 10.5846 8.24615 10.2154 8.36923C9.72308 8.49231 9.35385 8.73846 9.10769 9.10769C8.73846 9.35385 8.49231 9.72308 8.36923 10.2154C8.24615 10.5846 8 11.0769 8 12.0615C8 13.0462 8 13.4154 8 16C8 18.5846 8 18.9538 8 19.9385C8 20.9231 8.24615 21.4154 8.36923 21.7846C8.49231 22.2769 8.73846 22.5231 9.10769 22.8923C9.47692 23.2615 9.72308 23.5077 10.2154 23.6308C10.5846 23.7538 11.0769 23.8769 12.0615 24C13.0462 24 13.4154 24 16 24C18.5846 24 18.9538 24 19.9385 24C20.9231 24 21.4154 23.7538 21.7846 23.6308C22.2769 23.5077 22.5231 23.2615 22.8923 22.8923C23.2615 22.5231 23.5077 22.2769 23.6308 21.7846C23.7538 21.4154 23.8769 20.9231 24 19.9385C24 18.9538 24 18.5846 24 16C24 13.4154 24 13.0462 24 12.0615C24 11.0769 23.7538 10.5846 23.6308 10.2154C23.5077 9.72308 23.2615 9.47692 22.8923 9.10769C22.5231 8.73846 22.2769 8.49231 21.7846 8.36923C21.4154 8.24615 20.9231 8 19.9385 8ZM12.6769 16C12.6769 17.8462 14.1538 19.3231 16 19.3231C17.8462 19.3231 19.3231 17.8462 19.3231 16C19.3231 14.1538 17.8462 12.6769 16 12.6769C14.1538 12.6769 12.6769 14.1538 12.6769 16ZM10.9538 16C10.9538 13.1692 13.1692 10.9538 16 10.9538C18.8308 10.9538 21.0462 13.1692 21.0462 16C21.0462 18.8308 18.8308 21.0462 16 21.0462C13.1692 21.0462 10.9538 18.8308 10.9538 16ZM22.4 10.7077C22.4 11.3231 21.9077 11.9385 21.1692 11.9385C20.5538 11.9385 19.9385 11.4462 19.9385 10.7077C19.9385 9.96923 20.4308 9.47692 21.1692 9.47692C21.9077 9.6 22.4 10.0923 22.4 10.7077Z" fill="white"/>
                  </svg>
                  </Link>
                  

                  <Link to="https://www.linkedin.com/company/leadwinn-academy/" target='_blank'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9846 23.5077V17.2308C24.9846 13.9077 23.1385 12.3077 20.8 12.3077C18.8308 12.3077 17.9692 13.4154 17.4769 14.1538V12.5538H13.9077C13.9077 13.5385 13.9077 23.5077 13.9077 23.5077H17.4769V17.4769C17.4769 17.1077 17.4769 16.8615 17.6 16.6154C17.8462 16 18.4615 15.2615 19.4462 15.2615C20.8 15.2615 21.2923 16.2462 21.2923 17.7231V23.5077H24.9846ZM10.0923 11.2C11.3231 11.2 12.1846 10.3385 12.1846 9.35385C12.1846 8.24615 11.3231 7.38462 10.0923 7.38462C8.86154 7.38462 8.12308 8.24615 8.12308 9.23077C8.12308 10.3385 8.86154 11.2 10.0923 11.2ZM16 32C7.13846 32 0 24.8615 0 16C0 7.13846 7.13846 0 16 0C24.8615 0 32 7.13846 32 16C32 24.8615 24.8615 32 16 32ZM11.9385 23.5077V12.5538H8.24615V23.5077H11.9385Z" fill="white"/>
                  </svg>
                  </Link>

                  <Link to="" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                     <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="white"/>
                     <path d="M22.7666 6.4H26.1312L18.7803 14.8023L27.4286 26.2336H20.6574L15.3545 19.2997L9.28549 26.2336H5.91909L13.7819 17.2462L5.48571 6.40091H12.4288L17.2224 12.7387L22.7666 6.4ZM21.5863 24.2203H23.4505L11.4158 8.30811H9.41531L21.5863 24.2203Z" fill="#003B80"/>
                  </svg>
                  </Link>

                  <Link to="https://www.facebook.com/Leadwinnacademy" target='_blank'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M14.025 31.9275C6.35248 30.8137 0.412476 24.1312 0.412476 16.0875C0.412476 7.1775 7.58998 0 16.5 0C25.41 0 32.5875 7.1775 32.5875 16.0875C32.5875 24.1312 26.6475 30.8137 18.975 31.9275V20.6663H22.6875L23.43 15.9637H18.975V12.9937C18.975 11.7562 19.5937 10.5187 21.5737 10.5187H23.5537V6.55875C23.5537 6.55875 21.6975 6.1875 19.965 6.1875C16.2525 6.1875 13.9012 8.415 13.9012 12.4987V16.0875H9.94123V20.79H14.025V31.9275Z" fill="white"/>
                  </svg>
                  </Link>

               </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
               <h1 className="text-sm lg:text-base font-bold">Newsletter</h1>

               <h1 className="text-xs md:text-sm">Sign up with your email to join our mailing list</h1>

               <div className="flex flex-col gap-4">
                  <form>
                     <input type="email" id='email' name='email'
                        value={email}
                        placeholder='Email Address'
                        onChange={onChange}
                        className='px-2 py-3 w-3/4 md:w-full lg:px-4 lg:py-2 text-sm lg:text-lg text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-4 focus:border-none focus:outline-none'/>
                     <div className='flex gap-2 mb-4'>
                        <input type="checkbox" name="receiveMail" id="receiveMail"
                           checked={receiveMail}
                           onChange={onChange}/>
                        <label htmlFor="receiveMail" className="text-xs md:text-sm">I would like to receive emails from Leadwinn</label>
                     </div>

                     <button className="flex justify-center items-center sm:max-md:w-28 sm:max-md:h-8 md:w-32 md:h-10 w-24 h-8 gap-3 bg-head-blue text-white text-xs sm:text-sm sm:font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300">Subscribe</button>
                  </form>
               </div>
            </div>

         </div>

         <div className='border-t-2 sm:border-t border-gray-400 mt-20'>

            <div className='flex flex-col lg:flex-row items-center gap-4 mt-10 text-center max-sm:px-3'>
               <div className='flex gap-3 '>
                  <Link to="/"><img src="./leadwinn.svg" alt="leadwinn logo" className='w-9 md:w-10'/></Link>
                  <h5 className='text-xs sm:text-sm flex items-center justify-center'>Copyright © 2020 - 2023 Leadwinn Academy. All rights reserved
                  </h5>
               </div>
               <div className='flex items-center gap-3 px-2 sm:gap-4 text-xs md:text-sm'>
                  <Link to="">Terms of Use</Link>
                  <Link to="">Privacy Notice</Link>
               </div>
            </div>
         </div>

      </div>
   )
}
