import React, { useState } from 'react'
import { styles } from "../style";
import {text} from '../constains'

function AboutMe() {
   const [string, setString] = useState(356)
   const Toggle = () => {
      setString(undefined);
   }

  return (
     <div className={styles.section}>
        <div className=" w-[90%] ">
        <h1 className={`text-secondary font-secondary text-left text-lg`}>About Me</h1>
           <p className='text-md text-secondary text-justify'>{ text.aboutMe.substring(0, string) } <span className={`${string === undefined && 'hidden'} text-primary underline cursor-pointer`} onClick={() => Toggle()}>Read More</span></p>
        </div>
    </div>
  )
}

export default AboutMe