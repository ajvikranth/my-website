import style from "../../styles/Navbar.module.css"
import React, {useState} from 'react';

import { BsFillMoonStarsFill } from "react-icons/bs";  

const Navbar = ({darkMode, handleClick}) => {
  
    return(

      <nav className="py-10 mb-12 flex justify-between  dark:text-white ">
      <h1 className="font-burtons text-xl md:text-2xl">AJ</h1>
 
      
      <ul className="flex items-center">
        <li>
        <h1 className=" text-sm md:text-xl pl-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 "><a href="#about">about me</a></h1>
        </li>
        <li>
        <h1 className=" text-sm md:text-xl px-4 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 "><a href="#project">Projects</a></h1>
        </li>
        <li>
          <BsFillMoonStarsFill
            className=" cursor-pointer text-xl md:text-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200"
            onClick={handleClick}
          />
        </li>
        <li>
          <a
            className={style.button}
            href="/Anton_J_Vikranth_resume.pdf"
            alt="AJ's Resume"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
    
    )

}
export default Navbar;