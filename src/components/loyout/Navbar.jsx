import { FaGithub, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import 'animate.css';


const Navbar = () => {
   
   const [show, setShow] = useState(false);
   const Toggle = () => {
      setShow(!show);
      
   }

   let activeClassName = "block py-2 pl-3 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 rounded md:bg-transparent md:after:block md:after:absolute md:after:-inset-1 md:after:h-1 md:after:bg-gradient-to-r md:after:from-green-400 md:after:to-blue-400 md:after:mt-15 relative inline-block text-thirdty rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
 
   return (
      
      <div>

         <div className='relative'>
         <nav className="md:px-77.5 px-2 sm:px-4 py-2.5 dark:bg-gray-900 backdrop-blur-sm bg-white/10 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
         <div className="container flex flex-wrap items-center justify-between mx-auto">
         <a href="https://flowbite.com/" className="flex items-center">
               <span className="self-center text-md font-semibold font-secondary whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-wide">Mimshad.id</span>
         </a>
               <div className="flex md:order-2">
                     <a className='text-white flex gap-1 items-center py-1 px-2 rounded-sm mr-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'><FaGithub size='36px' />  <span>GitHub</span> </a>
                    
                 
                 
            <button onClick={() => Toggle()}  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
                        
               {show ? <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                  <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                  </svg>
                        </div> : <div>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7H19" stroke="white" stroke-width="2" stroke-linecap="square"/>
<path d="M5 12H15" stroke="white" stroke-width="2" stroke-linecap="square"/>
<path d="M5 17H11" stroke="white" stroke-width="2" stroke-linecap="square"/>
</svg>
                           </div>
               
               }
            </button>
         </div>
         <div  className={`items-center justify-between ${!show ? "hidden" : "animate__animated animate__fadeInUp"} w-full    md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0  md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
               <li>
                        <NavLink
                              to="/"
                              className={({ isActive }) =>
                              isActive ? activeClassName : "block py-2 pl-3 pr-4  rounded md:bg-transparent text-blue-500  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              }
                           >
                           Homes
                        </NavLink>
               </li>
               <li>
                           <NavLink
                              to="/about"
                              className={({ isActive }) =>
                              isActive ? activeClassName : "block py-2 pl-3 pr-4  md:bg-transparent text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              }
                           >
                           About
                        </NavLink>
               </li>
                  <li>
                           <NavLink
                              to="/project"
                              className={({ isActive }) =>
                              isActive ? activeClassName : "block py-2 pl-3 pr-4   md:bg-transparent text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              }
                           >
                           Project
                           </NavLink>
                  </li>
               <li>
                        <NavLink
                              to="/contact"
                              className={({ isActive }) =>
                              isActive ? activeClassName : "block py-2 pl-3 pr-4  md:bg-transparent text-blue-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-thirdty md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                              }
                           >
                           Contact
                        </NavLink>
               </li>
            </ul>
         </div>
         </div>
         </nav>
         </div>
      </div>

   )
}

export default Navbar;