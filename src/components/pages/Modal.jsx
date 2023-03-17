import React from 'react';
import { Button } from 'flowbite-react';
import ReactDOM from 'react-dom';

const Modal = ({show, close}) => {
  return (
    <div>
     {
     show ?

     <div
        className="modalContainer"
      >
        <div className="flex backdrop-blur-lg bg-white/10 items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="relative w-full h-full max-w-2xl md:h-auto md:mx-auto">
                {/* <!-- Modal content --> */}
                <div className="relative backdrop-blur-sm bg-white/10 shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
                        <h1 className="text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  dark:text-white">
                            Get In Touch
                        </h1>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal" onClick={() => close()}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                      <form>
                      <div class="mb-6">
                          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                          <input type="name" id="name" class="bg-gray-50 border focus:rounded-none border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name..." required/>
                        </div>
                        <div class="mb-6">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Your Email</label>
                          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email..." required/>
                      </div>
                      <div class="mb-6">            
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                      </div>
                      </form>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button className="rounded-none bottom-0  md:w-max" gradientDuoTone="greenToBlue">
                        Send
                     </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      : null
     }
    </div>
  )
}

// const Modal = () => {
//   return (
//     <div>
      
        
//         <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//           Toggle modal
//         </button>

        
//         <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
//             <div class="relative w-full h-full max-w-2xl md:h-auto">
//                 {/* <!-- Modal content --> */}
//                 <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                     {/* <!-- Modal header --> */}
//                     <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
//                         <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
//                             Static modal
//                         </h3>
//                         <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
//                             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
//                         </button>
//                     </div>
//                     {/* <!-- Modal body --> */}
//                     <div class="p-6 space-y-6">
//                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                             With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
//                         </p>
//                         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                             The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
//                         </p>
//                     </div>
//                     {/* <!-- Modal footer --> */}
//                     <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
//                         <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
//                         <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

export default Modal;