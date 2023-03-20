import { useState } from "react";
import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import { Button } from "flowbite-react";


const Form = () => {
   const form = useRef();
   const [result, setResult] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [message, setMessage] = useState();

   const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true)
      emailjs.sendForm('service_omytowg', 'template_zlelc14', form.current, 'Br1tPhnK9wnWBoC94')
         .then((result) => {
            console.log('success', result.text);
            setResult(result.text);
            setIsLoading(false)
         }, (error) => {
            console.log(error.text);
         });
   };
    
   return (
      <form ref={form} onSubmit={sendEmail}>
         {result === "OK" ? <p className="bg-white text-md text-center w-fit p-10 mx-auto">Thank You <br /> {name}</p>
            
            : <div>
            
            <div class="mb-6">
         <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
         <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} id="name" class="bg-gray-50 border focus:rounded-none border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." required />
            </div>
            <div class="mb-6">
               <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your Email</label>
               <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." required />
            </div>
            <div class="mb-6">
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
               <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </div>
         
         <Button type='submit' value="Submit" className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
            {!isLoading ? "Send" : "Sending...."}
         </Button>

            </div>}

      </form>
   )
}

export default Form;