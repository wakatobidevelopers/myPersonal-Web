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
            <h1 className={`${styles.headTextStyle} text-secondary font-secondary text-left text-lg`}>About Me</h1>
               <p className='text-md text-secondary text-justify'>{isReadMore ? text.aboutMe.slice(0, 356) : text.aboutMe} <span className={` text-primary underline cursor-pointer`} onClick={() => Toggle()}>{isReadMore ? "Read More" : "Show Less"}</span></p>
            </div>
         </div>

         <div className={styles.section}>
            <div className=" w-[90%] ">
               <h1 className={`${styles.headTextStyle} font-secondary text-left text-lg`}>Education</h1>
               <div className='flex flex-col bg-gradient p-4 text-[0.86rem] text-white mt-10'>
                  <div className='flex w-full justify-between'>
                     <div>
                        <h2 className='text-[1.3rem] font-bold font-secondary text-white'>Bachelor Digree</h2>
                        <span> Informatics <br /> at Universitas Teknologi Yogyakarta</span>
                     </div>
                  <div className='mt-2'>
                     <p className='bg-primary text-center'>2019 - currently</p>
                     <p>Yogyakarta, Indonesia</p>
                  </div>
                  </div>

                  <div className='mt-10 w-full text-[1rem] text-secondary'>
                     <p>I am currently pursuing a degree in informatics at Yogyakarta Technoloy University. In this program, I am learning about various aspects of computer science, including programming, data structures, algorithms, and software development. </p>
                     </div>
               
               </div>
               <div className='flex flex-col bg-gradient p-4 text-[0.86rem] text-white mt-10'>
                  <div className='flex w-full justify-between'>
                     <div>
                        <h2 className='text-[1.3rem] font-bold font-secondary text-white'>Senior High School</h2>
                        <span> Science Math <br /> at SMA Negeri 1 Wangi-Wangi</span>
                     </div>
                  <div className='mt-2'>
                     <p className='bg-primary text-center'>2016-2019</p>
                     <p>Waktobi, Indonesia</p>
                  </div>
                  </div>

                  <div className='mt-10 w-full text-[1rem] text-secondary'>
                     <p >In senior high school, I had the opportunity to learn about programming and computer science for the first time. I was immediately drawn to the logical and problem-solving aspects of programming, and I found the idea of being able to create and design software programs to be incredibly fascinating. </p>
                     </div>
               
               </div>
            </div>
         </div>
         
     </>
  )
}

export default AboutMe