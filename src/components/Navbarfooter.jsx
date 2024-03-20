
import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {  FaGithub, FaLinkedin} from "react-icons/fa";


const Navbarfooter = () => {
  return (

    <>

  
    <div className=' flex flex-row  justify-center  gap-5 h-10 items-center'>
    
    <a href='mailto:gulshan.cse.gmit.2024@gmail.com'><HiOutlineMail/></a>
    <a href='https://github.com/gulshankumargiri/'><FaGithub/></a>
    
    <a href='https://www.linkedin.com/in/gulshan-kr-giri-445914250/'><FaLinkedin/></a>
     
   
    <br/>
    <p>© 2024 All Rights Reserve </p>
    </div> 

      </>
  )
}

export default Navbarfooter