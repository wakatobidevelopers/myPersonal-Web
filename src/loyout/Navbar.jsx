import { FaGithub} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { navLink } from "../constains";
import { styles } from "../style";
import { ReactComponent as Burger } from "../assets/icons/burger.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import 'animate.css';

const Navbar = () => {
   const [show, setShow] = useState(false);
   const [scroll, setScroll] = useState(0);

   const Toggle = () => {
      setShow(!show);
   }

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScroll(window.scrollY)
      })
   });

   const backdropBlur = "backdrop-blur-sm bg-white/10 py-2.5 animate__animated  animate__fadeInDown"

   return (
      
      <div>
         <div className='relative'>
            <nav className={`md:px-77.5 px-6 sm:px-4  fixed ${scroll !== 0 ? backdropBlur :"py-8 "} w-full z-20 top-0 left-0`}> 
               <div className="container flex-wrap flex items-center justify-between mx-auto">

                  <a href="https://flowbite.com/" className="flex items-center">
                        <span><Logo/></span>
                  </a>

                  <div className="flex md:order-2">

                     <a className='hidden text-white md:flex gap-1 items-center py-1 px-2 rounded-sm mr-4 bg-gradient-to-r from-green-400 to-blue-500'>
                        <FaGithub size='36px' /> <span>GitHub</span>
                     </a>
                     
                     <button onClick={() => Toggle()}  className="inline-flex items-center p-3 text-sm text-gray-500 bg-black/10  md:hidden focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>   
                        {show ? <Close/> : <Burger />}
                     </button>

                  </div>
                  <div className={`items-center justify-between ${!show ? "hidden" : "animate__animated animate__fadeInUp"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                     <ul className='flex flex-col p-4 mt-4 rounded-lg bg-gradient  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  md:bg-transparent'>
                        {navLink.map(items => 
                           <li key={items.title}>
                              <NavLink
                                 to={items.route}
                                 className={({ isActive }) => (isActive ? styles.navActiveClass : styles.navUnActiveClass)}
                              >
                                 {items.title}
                              </NavLink>
                           </li>
                        )}
                     </ul>
                  </div>
               </div>
            </nav>
         </div>
      </div>

   )
}

export default Navbar;