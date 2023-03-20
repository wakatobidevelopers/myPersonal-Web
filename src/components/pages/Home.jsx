import Loyout from "../loyout/Loyout";
import avatar from '../../assets/images/avatar.png';
import img1 from '../../assets/images/img1.png';
import personal from '../../assets/images/personal.png';
import { Button } from "flowbite-react";
import { FaRegEnvelope, FaFileDownload, FaArrowAltCircleRight, FaWhatsapp } from "react-icons/fa";
import Modal from "./Modal";
import { styles } from "../../style";
import { useState } from "react";
import { ReactComponent as Comment } from "../../assets/icons/comment_fill.svg";
import { ReactComponent as External } from "../../assets/icons/External.svg";
import { ReactComponent as SendFill } from "../../assets/icons/Send_fill.svg";
import Buttons from "../pages/Button"
import Card from '../pages/Card'
import { projects } from "../constains";

const Home = (props) => {

   const [modal, setModal] = useState(false);
   const Toggle = () => setModal(!modal);

   return (
    
         <Loyout>
            
         <div className={`${styles.container}`}>
               {/* Hero Section */}
               <div className={`${styles.section}`}>
                  <div className="flex gap-8 flex-col md:w-3/5 w-10/12">
                     <h1 className={`${styles.headTextStyle}`}>Hi There, I'm <br /> La Ode Mimshad.</h1>
                     <span className="text-md text-secondary">I am a beginner front-end developer with a passion for creating beautiful and user-friendly websites.
                     </span>
                     <div className={`${styles.flexItemCenter} md:flex-row  flex-col text-center`}>
                     
                        <Buttons
                           title="Let's Talk"
                           icon={<Comment />}
                           onClick={() => Toggle()}
                           style = {`${styles.button} w-full md:w-auto justify-center`}
                        />

                        <Modal
                           show={modal}
                           close={Toggle}
                        />
                     
                        <a className={`${styles.flexItemCenter} text-secondary underline text-md rounded-none bottom-0  md:w-max`} href="">
                           <FaFileDownload className="mr-1 ml-6"/>
                           Download CV
                        </a>
                     </div>
                  </div>
                  <div className={`${styles.flexItemCenter} justify-center backdrop-blur-sm bg-white/10 w-80 h-80 overflow-hidden drop-shadow-xl mt-10`}>
                     <img className=" md:block w-3/5" img src={avatar} alt="gambar" />
                  </div>
               </div>

               {/* Recent Project Section */}
               <div className="mt-40 place-self-stretch">
               <div className="text-center ">
                     <h1 className={`${styles.headTextStyle}`}>Recent Project</h1>
                  </div>
                  <div className=" md:max-w-full mt-12 flex flex-col gap-20">
                     {/* <Card 
                        className={`${styles.backgroundBlur} rounded-none border-0 pt-6 px-6 md:w-full w-11/12 mx-auto`}
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={personal}
                     >
                        <h1 className={`${styles.headTextColor} font-bold text-md leading-45 font-secondary`}>Amazing Responsive Headers for Freelancer/Agency Website</h1>
                        <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                           More About This Project
                           <FaArrowAltCircleRight className=" ml-2 " />
                        </Button>
                     </Card>
                     <Card 
                        className={`${styles.backgroundBlur} rounded-none border-0 pt-6 px-6 md:w-full w-11/12 mx-auto`}
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc={img1}
                     >
                        <h1 className={`${styles.headTextColor} font-bold text-md leading-45 font-secondary`}>Fullstack Ecommerce Website</h1>
                        <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                           More About This Project
                           <FaArrowAltCircleRight className=" ml-2 " /> 
                        </Button>
                     </Card> */}
                     {projects.map((item) => 
                        <Card
                           title={item.title}
                           image={item.image}
                        />
                     )}
                  </div>
               </div>
               <div className={`my-40 ${styles.flexItemCenter} justify-between w-full p-9 ${styles.backgroundBlur}`}>
                  <h1 className={`${styles.headTextColor} font-bold text-md leading-45 font-secondary`}>Get In Touch
                  </h1>
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