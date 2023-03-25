import Loyout from '../loyout/Loyout';
import React, { useState } from 'react'
import { styles } from "../style";
import {text} from '../constains'

function AboutMe() {
   const [isReadMore, setIsReadMore] = useState(true)
   const Toggle = () => {
      setIsReadMore(!isReadMore);
   }
   return (
      <>
         <div className={styles.section}>
            <div className=" w-[90%] ">
            <h1 className={`text-secondary font-secondary text-left text-lg`}>About Me</h1>
               <p className='text-md text-secondary text-justify'>{isReadMore ? text.aboutMe.slice(0, 356) : text.aboutMe} <span className={` text-primary underline cursor-pointer`} onClick={() => Toggle()}>{isReadMore ? "Read More" : "Show Less"}</span></p>
            </div>
         </div>

         <div className={styles.section}>
            <div className=" w-[90%] ">
            <h1 className={`text-secondary font-secondary text-left text-lg`}>Education</h1>
            </div>
         </div>
         
     </>
  )
}

export default AboutMe