import { styles } from "../style";
import { ReactComponent as SendFill } from "../assets/icons/Send_fill.svg";
import Buttons from "../components/Button"

const More = () => (
   <>
      <div className={`${styles.backgroundBlur} my-40 flex flex-col  items-center justify-between w-full p-9`}>
         <h1 className={`${styles.headTextColor} text-center font-bold text-md leading-1 font-secondary mb-6`}>
         I'm always excited to collaborate <br /> on  new projects and help bring your vision to life
         </h1>
         <Buttons
               title="Let's Talk"
               icon={<SendFill/>}
               style={`p-3 flex items-center text-sm text-white bg-white/10`}
            />
      </div>
   </>
)

export default More;