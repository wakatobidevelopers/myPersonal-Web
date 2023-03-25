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
               <div className='flex flex-col bg-gradient p-6 text-[0.86rem] text-white'>
                  <div className='flex w-full justify-between'>
                     <div>
                        <h2 className='text-md font-bold font-secondary text-white'>Bachelor Digree</h2>
                        <span> Informatics</span>
                     </div>
                  <div className=''>
                     <p className='bg-primary text-center'>2019 - Ongoing</p>
                     <p>Yogyakarta, Indonesia</p>
                  </div>
                  </div>

                     <div className='mt-10 w-full text-[1rem]'>
                        <p>GPA : 3.5 out of 4.00</p>
                        <p>Instituton : Universitas Teknologi Yogyakarta</p>
                     </div>
               
               </div>
            </div>
         </div>
         
     </>
  )
}

export default AboutMe