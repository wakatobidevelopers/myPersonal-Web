import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
   return (
      <div>
         
         <footer className="md:px-77.5 sm:p-6 dark:bg-gray-900 mb-0 backdrop-blur-sm bg-white/5">
            <div className="flex items-center md:justify-between flex-col-reverse gap-6 md:flex-row py-6">
               <span className="text-sm font-semibold font-secondary text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 sm:text-center">© 2023 <a href="https://flowbite.com/" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:underline">Mimshad.id</a>
               </span>
               <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 items-center">
                     <span className="text-md text-white">Follow Me :</span>
                     <a href="#" className="text-white text-center rounded-full flex items-center justify-center h-11 w-11 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  dark:hover:text-white">
                     <FaFacebookF size="25px" />
                     
                  </a>
                  <a href="#" className="text-white text-center rounded-full flex items-center justify-center h-11 w-11 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   dark:hover:text-white">
                        <FaInstagram size="25px"/>
                  </a>
                  <a href="#" className="text-white text-center rounded-full flex items-center justify-center h-11 w-11 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   dark:hover:text-white">
                        <FaLinkedinIn size="25px"/>
                  </a>
                     
               </div>
            </div>
         </footer>

      </div>
   )
}

export default Footer;