import Loyout from "../loyout/Loyout";
import avatar from '../../images/avatar.png';
import { Button, Card } from "flowbite-react";
import { FaRegEnvelope, FaFileDownload, FaArrowAltCircleRight, FaWhatsapp } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";

const Home = (props) => {
   const [modal, setModal] = useState(false);
   const Toggle = () => setModal(!modal);

   return (
    
         <Loyout>
            
            <div className="grid grid-cols-1 gap-4 place-items-center max-w-md mx-auto md:my-184 my-20">
               <div className="place-self-stretch flex flex-col md:flex-row gap-6 items-center mt-10">
               <div className="flex gap-8 flex-col md:w-3/5 w-10/12">
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg leading-45 font-secondary">Hi There, I'm <br /> La Ode Mimshad.</h1>
                  <span className="text-md text-secondary">I am a beginner front-end developer with a passion for creating beautiful and user-friendly websites. </span>
                  <div className="flex items-center md:flex-row  flex-col">
                     <Button type="button" onClick={() => Toggle()} className="rounded-none bottom-0  md:w-max w-full mb-1" gradientDuoTone="greenToBlue">
                     <FaRegEnvelope className=" mr-2 "/> Let's Talk
                     </Button>
                     <Modal show={modal} close={ Toggle } />
                     
                     <a className="flex items-center text-secondary underline text-md rounded-none bottom-0  md:w-max" href="">
                        <FaFileDownload className="mr-1 ml-6"/>
                        Download CV
                     </a>
                  </div>
               </div>
               <div className="flex items-center justify-center backdrop-blur-sm bg-white/10 w-80 h-80 overflow-hidden drop-shadow-xl mt-10">
               <img className=" md:block w-3/5" img src={avatar} alt="gambar" />
                  </div>
            </div>
            <div className="mt-40 place-self-stretch">
               <div>
               <h1 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-lg leading-45 font-secondary">Recent Project</h1>
               </div>
               <div className=" md:max-w-full mt-12">
                  <Card 
                     className="backdrop-blur-sm bg-white/10 rounded-none border-0 pt-6 px-6 md:w-full w-11/12 mx-auto"
                     imgAlt="Meaningful alt text for an image that is not purely decorative"
                     imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                  >
                     <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-md leading-45 font-secondary">Fullstack Ecommerce Website</h1>
                     <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                        More About This Project
                        <FaArrowAltCircleRight className=" ml-2 " /> 
                     </Button>
                  </Card>
                  <Card 
                     className="backdrop-blur-sm bg-white/10 rounded-none border-0 pt-6 px-6 mt-12 md:w-full w-11/12 mx-auto"
                     imgAlt="Meaningful alt text for an image that is not purely decorative"
                     imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                  >
                     <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-md leading-45 font-secondary">Fullstack Ecommerce Website</h1>
                     <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                        More About This Project
                        <FaArrowAltCircleRight className=" ml-2 " /> 
                     </Button>
                  </Card>
                  </div>
            </div>
            <div className="my-40 flex justify-between w-full items-center p-9 backdrop-blur-sm bg-white/10">
               <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold text-md leading-45 font-secondary">Get In Touch</h1>
               <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                           <FaWhatsapp className=" mr-2 " /> 
                           WhatsApp
               </Button>
              
            </div>
         </div>
         </Loyout>
      
   )
}

export default Home;