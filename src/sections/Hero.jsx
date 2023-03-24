import {FaFileDownload} from "react-icons/fa";
import { styles } from "../style";
import { ReactComponent as Comment } from "../assets/icons/comment_fill.svg";
import Heros from "../assets/images/Hero.png";
import Buttons from "../components/Button";
import avatar from '../assets/images/avatar.png';
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

const Hero = () => {
   const [modal, setModal] = useState(false);

   const Toggle = () => setModal(!modal);

   return(
      <>
         <div className={`${styles.section}`}>
            <div className="flex gap-8 flex-col md:w-3/5 w-[90%]">
               <h1 className={`${styles.headTextStyle}`}>Hi There, I'm <br /> La Ode Mimshad.</h1>
               <span className={`text-md text-secondary`}>I am a beginner front-end developer with a passion for creating beautiful and user-friendly websites.
               </span>
               <div className={`${styles.flexItemCenter} gap-3 flex md:items-center  md:flex-row  flex-col text-center`}>
            
                  <Buttons
                     title="Let's Talk"
                     icon={<Comment />}
                     onClick={() => Toggle()}
                     style={`${styles.button} w-full md:w-auto justify-center`}
                  />

                  <Modal
                     show={modal}
                     close={Toggle}
                  />
                  <a className={`${styles.flexItemCenter} hover:text-white font-normal text-secondary underline text-md rounded-none   md:w-max`} href="#" onClick={() => alert('CV Coming Soon !!!')}>
                     <FaFileDownload className="mr-1" />
                     Download CV
                  </a>
               </div>
            </div>
            <div className={`${styles.flexItemCenter} justify-center  overflow-hidden drop-shadow-xl mt-10`}>
                  <img className=" md:block w-3/5" img src={Heros} alt="gambar" />
            </div>
         </div>
      </>
   )
};

export default Hero;
