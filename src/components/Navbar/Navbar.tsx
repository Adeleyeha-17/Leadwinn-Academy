import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
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

  const [nav, setNav] = useState(false);

  const toggleFunc = () => {
    setNav((prevState) => !prevState);
  };

  const closeNav = () => {
    setNav(false);
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
    <div className={`${currentPath('/')} fixed top-0 right-0 left-0 z-10`}>
      <div className="flex justify-between items-center lg:space-x-20 xl:space-x-20 px-5 py-4 sm:py-2 md:px-12 lg:max-xl:max-w-6xl xl:px-24 mx-auto">
        <div className="flex justify-between items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src={leadwinnLogo} alt="leadwinn logo" className="h-12 w-12 md:h-14 md:w-14 transition duration-200 ease-in-out md:hover:scale-105" />
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
              closeNav();
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
          {nav ? <AiOutlineClose size={32} className="md:hidden cursor-pointer" onClick={closeNav}/>
 : <AiOutlineMenu size={32} className="md:hidden" onClick={toggleFunc}/> }
        </div>
      </div>
      
  <div
    className={nav ? 'fixed left-0 top-20 w-full h-[45%] pt-4 bg-nav-blue border-r border-gray-200 md:hidden transition-all duration-700 ease-in-out z-20' : 'fixed -left-full transition-all duration-1000 ease-in-out z-20'}
  >
    <div className="font-poppins mx-1 mr-4 flex flex-col font-semibold">

      {navLinks.map((link) => (
        <Link key={link.path} to={link.path} className={`px-4 py-3 text-sm ${currentMatchPath(link.path)}`} onClick={closeNav}>
          {link.link}
        </Link>
      ))}

      {user ? (
        <>
          <Link to="/profile" className={`px-4 py-3 text-sm ${currentMatchPath('/profile')}`} onClick={closeNav}>
            Profile
          </Link>
          <Link to="/"
            className={`px-4 py-3 text-sm ${currentMatchPath('/sign-out')}`} 
            onClick={() => {
              signOut(auth);
              closeNav();
            }}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/sign-in" className={`px-4 py-3 text-sm ${currentMatchPath('/sign-in')}`}  onClick={closeNav}>
            Sign In
          </Link>
          <Link to="/register" className={`px-4 py-3 text-sm ${currentMatchPath('/register')}`}  onClick={closeNav}>
            Enroll Now
          </Link>
        </>
      )}
    </div>
  </div>

    </div>
  );
};
