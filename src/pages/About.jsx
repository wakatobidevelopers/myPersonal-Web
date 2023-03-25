import Loyout from "../loyout/Loyout"
import { styles } from "../style";
import AboutMe from "../sections/AboutMe";

const About = () => {
   return (
      <Loyout>
         <div className={`${styles.container}`}>
            <AboutMe/>
         </div>
      </Loyout>
   )
}


export default About;