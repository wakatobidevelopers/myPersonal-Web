import React from 'react'
import { styles } from "../style";
import { educations } from '../constains';

function EducationCard() {
  return (
         <div className={styles.section}>
            <div className=" w-[90%] ">
               <h1 className={`${styles.headTextStyle} font-secondary text-left text-lg`}>Education</h1>
               {educations.map((items) => 
                     <div className='relative flex-col bg-gradient bg-gradient-md md:p-8 p-4 text-[0.86rem] text-white mt-10'>
                     <div className='flex w-full justify-between md:text-[1.3rem] pb-4 border-b'>
                        <div>
                           <h2 className='md:text-md text-[1.3rem] font-bold font-secondary text-white'>{items.Title}</h2>
                           <p className='italic text-green-500'> {items.class}</p>
                           <p>at {items.institution}</p>
                        </div>
                     <div className='absolute top-0 right-0'>
                           <p className='bg-primary text-center'>{items.year}</p>
                           <p className='mr-3'>{ items.address }</p>
                     </div>
                     </div>

                     <div className='mt-8 w-full text-[1rem] md:text-[1.3rem] text-secondary'>
                        <p >{ items.desc }</p>
                        </div>
                  
                  </div>
               )}
            </div>
      </div>
  )
}

export default EducationCard;