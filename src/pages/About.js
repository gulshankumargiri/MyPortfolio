import React from 'react'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import resume from '../images/resume.pdf'
import pic from "../images/pic.png";



const About = () => {
  return (
    <div className=' text-center bg-slate-300 p-4  '>
        <div>
            <h2 className=' text-center font-bold text-green-600 text-5xl'>About Me</h2>
           
        </div>
        

        <div className='flex flex-col justify-center items-center bg-gradient-to-r bg-slate-500  rounded shadow-xl shadow-slate-500 m-14 p-5  '>
    
          <img className="w-53 h-48 rounded-full relative" src={pic} alt="" />
          
          <div> 
            <p className=' font-bold text-violet-900'>My Brief Introduction</p>

                <p className=' text-left font-semibold '>
                Welcome to my portfolio! I'm Gulshan Kumar Giri, a final year student pursuing Computer Science and Engineering at Gargi Memorial Institute Of Technology, With a strong foundation in languages like C, Java and JavaScript, along with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js), I'm passionate about leveraging technology to create innovative solutions. Eager to embark on new challenges and open for work opportunities, I am excited to showcase my skills and projects. Explore my portfolio to learn more about my journey and accomplishments in the world of software development. Let's build something remarkable together! 
                </p>

                <div className='  font-bold text-lg text-green-900'>
                <button >
                <a href={resume} download="Resume">
                Download CV
                </a>
                <span className=' animate-bounce flex items-center justify-center'>
                <AiOutlineCloudDownload />
                </span>
                </button>
                </div>


            </div>
        </div>
    </div>
  )
}

export default About