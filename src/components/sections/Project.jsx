import { styles } from "../../style";
import { projects } from "../constains";
import Card from "../pages/Card";

const Project = () => (
   <div className="mt-40 place-self-stretch">
      <div className="text-center ">
         <h1 className={`${styles.headTextStyle}`}>Portofolio</h1>
      </div>
      <div className=" md:max-w-full mt-12 flex flex-col gap-20">
         {projects.map((item) => 
            <Card
               title={item.title}
               image={item.image}
            />
         )}
      </div>
   </div>
)

export default Project;