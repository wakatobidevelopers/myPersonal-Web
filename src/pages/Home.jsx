import Loyout from "../loyout/Loyout";
import { styles } from "../style";
import Project from "../sections/Project";
import Hero from "../sections/Hero";
import More from "../sections/More";

const Home = (props) => {
   return (
     <Loyout>
         <div className={`${styles.container}`}>  
               <Hero/>
               <Project/>
               <More/>
         </div>
      </Loyout>
   )
}

export default Home;