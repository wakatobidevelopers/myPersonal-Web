import { useState } from "react";

const Buttons = ({ icon, title, onClick, style, link}) => {
   return (
      <button type="button" onClick={onClick} className={style}>
         <a href={link}>{ title }</a>
          <span className="ml-2">{icon}</span>
      </button>
   )
}

export default Buttons;