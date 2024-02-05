import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import { leadwinnLogo} from '../../assets/icons';
import { auth } from '../../config/firebase.ts';
import { User, signOut } from 'firebase/auth';

type NavLink = {
  link: string;
  path: string;
};

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      return setUser(user);
    });

    return () => unsubscribe();
  }, []);

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
    },
    {
      link: 'Plans',
      path: '/plans',
    },
    {
      link: 'Library',
      path: '/library',
    },
    {
      link: 'Career',
      path: '/career',
    },
  ];

  return (
    <header className={`${currentPath('/')} fixed top-0 right-0 left-0 z-10`}>
      <nav className="flex justify-between items-center lg:space-x-20 xl:space-x-20 px-5 py-4 sm:py-2 md:px-12 lg:max-xl:max-w-6xl xl:px-24 mx-auto">
        <div className="flex justify-between items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={leadwinnLogo} alt="leadwinn logo" className="h-10 w-10 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
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
              <Link to="/" className={ `hidden md:inline-block justify-center items-center py-2 md:px-6 px-4 bg-head-blue text-white text-xs font-semibold rounded-3xl transition hover:bg-blue-600 ease-in-out duration-300 cursor-pointer`} onClick={() => {
              signOut(auth);
            }}>Sign Out</Link>
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

        <div className="cursor-pointer md:hidden">
    <NavbarMobile />
        </div>
      </nav>
      
  

    </header>
  );
};

import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function NavbarMobile() {
	const [mobileNav, setMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<header className="sticky top-0 inset-x-0 p-6">
			<nav className="container mx-auto">
				<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 relative z-10"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
							},
						}}
						className="w-6 bg-[#07e] h-px block"
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
						className="w-6 bg-[#07e] h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
							},
						}}
						className="w-6 bg-[#07e] h-px block"
					></motion.span>
				</motion.button>
				<AnimatePresence>
					{mobileNav && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "-100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed inset-0 bg-red-900 p-6 flex flex-col justify-center space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #1
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #2
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #3
										</a>
									</li>
								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex justify-center gap-x-4"
								>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
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
}