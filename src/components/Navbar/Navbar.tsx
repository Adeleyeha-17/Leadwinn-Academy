import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import { leadwinnLogo } from '../../assets/icons';
import { IoLibraryOutline } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import { MdMonetizationOn } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { supabase } from '../../client';
import { User } from '@supabase/supabase-js';

type NavLink = {
  link: string;
  path: string;
  icon: ReactNode;
};

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        setUser(data?.user || null);
      } catch (error) {
        console.error('Error fetching user:', (error as Error).message);
      }
    };
  
    fetchUser();
  }, []);
  
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const currentPath = (route: string) => {
    return location.pathname === route ? 'text-head-blue bg-nav-blue' : ' text-head-black bg-white';
  };

  const currentMatchPath = (route: string) => {
    return location.pathname === route ? 'text-head-blue' : ' text-head-black';
  };

  const navLinks: NavLink[] = [
    {
      link: 'About',
      path: '/about',
      icon: <BsInfoCircle />
    },
    {
      link: 'Plans',
      path: '/plans',
      icon: <MdMonetizationOn />
    },
    {
      link: 'Courses',
      path: '/courses',
      icon: <FaBookOpenReader />
    },
    {
      link: 'Library',
      path: '/library',
      icon: <IoLibraryOutline />
    },
  ];

  return (
    <header className={`${currentPath('/')} fixed top-0 right-0 left-0 z-20`}>
      <nav className="flex justify-between items-center lg:space-x-20 xl:space-x-20 px-5 py-4 sm:py-2 md:px-12 lg:max-xl:max-w-6xl xl:px-20 mx-auto">
        <div className="flex justify-between items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={leadwinnLogo} alt="leadwinn logo" loading='eager' className="h-10 w-10 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
            <span className="flex flex-col text-lead-black text-xs font-semibold font-poppins">
              <h1>Leadwinn</h1>
              <h1>Academy</h1>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex sm:max-md:space-x-3 md:max-xl:space-x-5 xl:space-x-9 font-poppins text-xs font-semibold">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`${currentMatchPath(link.path)}`}>
              {link.link}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex sm:max-md:space-x-2 md:max-lg:space-x-4 space-x-8 font-poppins">
          {user ? (
            <>
              <Link to="/profile" className="flex justify-center items-center text-head-blue text-xs font-semibold">
                Profile
              </Link>
              <Link to="/" className={`hidden md:inline-block justify-center items-center py-2 md:px-6 px-4 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} onClick={handleSignOut}>Sign Out</Link>
            </>
          ) : (
            <>
              <Link to="/sign-in" className="flex justify-center items-center text-head-blue text-xs font-semibold">
                Sign In
              </Link>
              <Button path="/register" title="Enroll Now" />
            </>
          )}
        </div>

        <div className="cursor-pointer sm:hidden">
          <NavbarMobile navLinks={navLinks} user={user} />
        </div>
      </nav>
    </header>
  );
};


import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { BiLogIn, BiLogOut, BiUser } from "react-icons/bi";
import { AiOutlineRightCircle } from "react-icons/ai";

interface NavLinks {
  link: string;
  path: string;
  icon: ReactNode;
}

interface NavbarMobileProps {
  navLinks: NavLinks[];
  user: User | null;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ navLinks }) => {
  const [userIn, setUserIn] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        setUserIn(data?.user || null);
      } catch (error) {
        console.error('Error fetching user:', (error as Error).message);
      }
    };
  
    fetchUser();
  }, []);

  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  const currentMatchPath = (route: string) => {
    return location.pathname === route ? 'text-head-blue' : ' text-head-black';
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUserIn(null);
  };

  return (
    <header className="sticky top-0 inset-x-0 ">
      <nav className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? 'show' : 'hide'}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-2 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 9,
              },
            }}
            className="w-6 bg-[#07e] h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-[#07e] h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -9,
              },
            }}
            className="w-6 bg-[#07e] h-[2px] block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: 'spring',
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: '-100%',
                    transition: {
                      type: 'spring',
                      bounce: 0.1,
                      when: 'afterChildren',
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: '0%',
                    transition: {
                      type: 'spring',
                      bounce: 0.1,
                      when: 'beforeChildren',
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-nav-blue p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <li className='flex flex-col mb-4'>
                    {navLinks.map((link) => (
                      <div className='flex items-center'>
                        <div>{link.icon}</div>
                        <Link key={link.path} to={link.path} className={`px-4 py-3 text-lg ${currentMatchPath(link.path)}`} onClick={toggleMobileNav} >
                          {link.link}
                        </Link>
                      </div>
                    ))}
                  </li>

                  {userIn ? (
                    <div onClick={toggleMobileNav} className='flex gap-4'>
                      <Link to="/profile" className={`py-3 flex items-center text-lg ${currentMatchPath('/profile')}`}>
                        <BiUser className="mr-4" /> Profile
                      </Link>
                      <Link to="/"
                        className={`py-3 flex items-center text-lg ${currentMatchPath('/sign-out')}`}
                        onClick={handleSignOut}>
                        <BiLogOut className="mr-4" />
                        Sign Out
                      </Link>
                    </div>
                  ) : (
                    <div onClick={toggleMobileNav} className='flex gap-4'>
                      <Link to="/sign-in" className={`py-3 flex items-center text-lg ${currentMatchPath('/sign-in')}`} >
                        <BiLogIn className="mr-4" /> Sign In
                      </Link>
                      <Link to="/register" className={`py-3 flex items-center text-lg ${currentMatchPath('/register')}`} >
                        <AiOutlineRightCircle className="mr-4" /> Enroll Now
                      </Link>
                    </div>
                  )}

                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-heading/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8">
                      <img src={leadwinnLogo} alt="leadwinn logo" className="h-8 w-8 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
                    </div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavbarMobile;
