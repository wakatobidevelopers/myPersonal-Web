import Navbar from "./Navbar";
import Footer from './Footer';
import React, { useRef } from 'react';
import { useState } from "react";
import emailjs, { sendForm } from '@emailjs/browser';
import { ReactDOM } from "react";


const Loyout = (props) => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [error, setError] = useState(true);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("")
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_omytowg', 'template_zlelc14', form.current, 'Br1tPhnK9wnWBoC94')
      .then((result) => {
        console.log('success', result.text);
        setError(false)
      }, (error) => {
        console.log(error.text);
        setError(true)
      });
  };
   return (
     
      <div>
         <div>
            <Navbar/>
         {props.children}
         {!error && <p></p>}
         <form className={`${!error ? "hidden" : "block"}`} ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Email</label>
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Message</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type="submit" value="Send" />     
          </form>

         <React.Fragment>
         <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
              <div class="relative w-full h-full max-w-2xl md:h-auto">
              <div class="relative backdrop-blur-sm bg-white/25 shadow dark:bg-gray-700">
               
                      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                          <h1 class=" text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:text-white">
                              Get In Touch
                          </h1>
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              <span class="sr-only">Close modal</span>
                          </button>
                      </div>
                        
                      <div class="p-6 space-y-6">
                          <form>
                            <div class="mb-6">
                              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
                            </div>
                            <div class="mb-6">
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                          </form>
                      </div>
                      
                      <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                          <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                      </div>
                      
                  </div>
              </div>
          </div>
          </React.Fragment>
            <Footer></Footer>
         </div>
      </div>

    
     
         
   );
}

export default Loyout;

