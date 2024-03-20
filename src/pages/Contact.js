

import React from 'react'
import {TbSend} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zbu98nw', 'template_34x9izm', form.current, 'X1PzmwXghdSstb509')

      e.target.reset();
      toast.success("message sent successfully.")
  };


  return (
    <div className='  flex flex-col items-center justify-center '>
      <div className=' font-bold text-2xl  '>
            <h2 className=' text-center border-solid border-teal-200 border-b-4  text-stone-600 m-3  font-bold'>Contact Me</h2>
            <p className=' text-left text-xl font-bold'>Get in Touch</p>
            <span className=' text-xs p-3 m-3 text-gray-400'>please share your idea...</span>
      </div>
      <div className='  rounded shadow-xl shadow-slate-500   '>
       
        <div className='  px-40 py-14  bg-slate-600 rounded-md'>
          <form className='form-container' ref={form} onSubmit={sendEmail}>
            <fieldset>
              <legend className=' text-green-500 font-bold text-lg'>Name</legend>
              <input type='text' name='name' placeholder='Insert your name' className='peer h-full min-h-[10px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-l-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all' required/>
            </fieldset>
            <fieldset>
              <legend className=' text-green-500 font-bold text-lg '>Email</legend>
              <input type='email' name='email' placeholder='Insert your email' className='peer h-full min-h-[10px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-l-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-400 outline outline-0 transition-all' required/>
            </fieldset>
            <fieldset>
              <legend className=' text-green-500 font-bold text-lg'>Project </legend>
              <textarea name='message' placeholder='your project description'
              class="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all cursor-text"
     
                required></textarea>
            </fieldset>
            
            <div className=' relative flex flex-col justify-center items-center'>
              <button className=' flex flex-col justify-center items-center font-bold rounded
              bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
               '>Send  <TbSend className='text-emerald-100 animate-pulse text-xl hover:fill-green-500 hover:animate-none cursor-pointer'/></button>
             
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact







// my code blew 



// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [stateMessage, setStateMessage] = useState(null);
//   const sendEmail = (e) => {

//     e.persist();
//     e.preventDefault();
//     setIsSubmitting(true);
//     const SERVICE_ID = "service_zbu98nw";
//     const TEMPLATE_ID = "template_a839ln9";
//     const PUBLIC_KEY = "X1PzmwXghdSstb509";
    

//     emailjs
//       .sendForm(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         e.target,
//         PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setStateMessage("Message sent!");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         },
//         (error) => {
//           console.error(error)
//           setStateMessage("Something went wrong, please try again later");
//           setIsSubmitting(false);
//           setTimeout(() => {
//             setStateMessage(null);
//           }, 5000); // hide message after 5 seconds
//         }
//       );

//     // Clears the form after sending the email
//     e.target.reset();
//   };
//   return (

//     <div>

//       <div className="flex flex-col justify-center items-center  rounded shadow-xl shadow-slate-500  m-14 p-5 ">
//       <form  onSubmit={sendEmail}>
//       <label className=" font-bold text-green-600">Name</label>
//       <input type="text" name="user_name" />   <br/>
//       <br/>

//       <label className=" font-bold text-green-600">Email</label>
//       <input type="email" name="user_email" />   

//         <br/>
//       <label className=" font-bold text-green-600">Message</label>
//       <textarea name="message" />     <br/>     <br/>

//       <input className=" text-center font-bold text-green-600" type="submit" value="Send" disabled={isSubmitting} />   
//       {stateMessage && <p>{stateMessage}</p>}
//     </form>
//     </div>


//     </div>
    

//   );
// };
// export default ContactForm;
