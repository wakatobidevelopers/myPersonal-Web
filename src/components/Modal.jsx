import React from 'react';
import Form from './Form';

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
                      <Form/>  
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
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

export default Modal;