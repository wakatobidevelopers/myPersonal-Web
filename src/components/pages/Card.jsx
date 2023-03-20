import Buttons from "./Button"
import { ReactComponent as External } from '../../assets/icons/External.svg'
import { styles } from "../../style";

const Card = ({ title, image, detail }) => (
   <div className={`${styles.backgroundBlur} border-0 p-6 md:w-full w-11/12 mx-auto`}>
      <img src={image} className='rounded-lg'/>
      <h1 className="text-md font-secondary text-white py-4 mb-4 tracking-wider">{title}</h1>
      <Buttons
         title="More About This Project"
         style={styles.button}
         link=""
         icon={<External />}
      />
   </div>
);

export default Card;
