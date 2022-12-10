import React from "react";

// React Icons
import { 
    FaLinkedinIn, 
    FaCodepen,
    FaGithub,
    FaInstagram,
    
} from "react-icons/fa";

import {
    AiFillLinkedin,
    AiFillMail,
    AiFillGithub,
    AiFillInstagram
  
  } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="px-2">
            <div className="py-4 border-b border-b-gray-400 flex justify-between items-center max-w-6xl m-auto">
                <h2 className="text-md text-black dark:text-white font-semibold">
                    <a href="#Home">A J Vikranth</a>
                </h2>
                <ul className="flex justify-center items-center gap-3  text-black dark:text-white">
                    <li className=" text-sm" title="LinkedIn">
                        <a href="https://www.linkedin.com/in/anton-j-vikranth/" className="ease-in-out duration-150 hover:text-teal-500">
                            <AiFillLinkedin />
                        </a>
                    </li>
                    <li className=" text-sm" title="Codepen">
                        <a href="mailto:aj.vikranth@gmail.com" className="ease-in-out duration-150 hover:text-teal-500">
                          <AiFillMail/>  
                        </a>
                    </li>
                    <li className=" text-sm" title="GitHub">
                        <a href="https://github.com/ajvikranth" className="ease-in-out duration-150 hover:text-teal-500">
                            <AiFillGithub />
                        </a>
                    </li>
                    
                </ul>
            </div>

            <div className="py-8 flex flex-col gap-4 justify-between items-center max-w-6xl m-auto sm:flex-row sm:gap-0">
                <ul className="flex justify-center items-center gap-4">
                    <li className=" text-black dark:text-white text-sm" title="Experiences">
                        <a href="#about" className="font-bold ease-in-out duration-150 hover:text-teal-500">
                            About me
                        </a>
                    </li>
                    <li className=" text-black dark:text-white text-sm" title="Projects">
                        <a href="#project" className="font-bold ease-in-out duration-150 hover:text-teal-500">
                            Projects
                        </a>
                    </li>
                    <li className=" text-black dark:text-white text-sm" title="Contact">
                        <a href="/Anton_J_Vikranth_resume.pdf"
                           alt="AJ's Resume"
                           rel="noopener noreferrer" 
                           className="font-bold ease-in-out duration-150 hover:text-teal-500">
                            Resume
                        </a>
                    </li>
                </ul>
                <h5 className=" text-black dark:text-white font-initial text-center text-sm">&copy; 2022 - A J Vikranth. All Rights Reserved.</h5>
            </div>
            
        </div>
    );
}

export default Footer;