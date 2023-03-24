import Navbar from "./Navbar";
import Footer from './Footer';
import React from 'react';

const Loyout = (props) => (
 
    <div>
         <div>
            <Navbar/>
            {props.children}
            <Footer/>
         </div>
      </div>      
   
)

export default Loyout;

