import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className='footerLinks'>
        <a href="https://github.com/CodeDevvv"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/vijay-patil-520797207/"><FaLinkedin /></a>
        <a href='mailTo:vijaypatil0516@gmail.com'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer