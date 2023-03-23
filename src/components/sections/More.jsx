import { styles } from "../../style";
import { ReactComponent as SendFill } from "../../assets/icons/Send_fill.svg";
import Buttons from "../pages/Button"

const More = () => (
   <>
      <div className={`${styles.backgroundBlur} my-20 flex flex-col  items-center justify-between w-full p-9`}>
         <h1 className={`${styles.headTextColor} font-bold text-md leading-45 font-secondary`}>
            Let's See More Portofolio
         </h1>
         <Buttons
               title="More Portofolio"
               icon={<SendFill/>}
               style={`p-3 flex items-center text-sm text-white bg-white/10`}
            />
      </div>
   </>
)

export default More;