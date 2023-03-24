import Buttons from "./Button"
import { ReactComponent as External } from '../assets/icons/External.svg'
import { styles } from "../style";

const Card = ({ title, image, detail }) => (
   <div className={`${styles.backgroundBlur} border-0 p-6 md:w-full w-11/12 mx-auto`}>
      <img src={image} className='rounded-lg'/>
      <h1 className="text-md font-secondary text-[#ececec] py-4 mb-4 tracking-wider">{title}</h1>
      <Buttons
         title="More About This Project"
         style={`p-3 flex items-center text-sm text-[#ececec] bg-white/10`}
         link={'#'}
         icon={<External />}
         onClick={() => alert('Coming Soon, Kawan')}
      />
   </div>
);

export default Card;
