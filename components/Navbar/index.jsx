import style from "../../styles/Navbar.module.css"
import React, {useState} from 'react';

import { BsFillMoonStarsFill } from "react-icons/bs";  

const Navbar = ({darkMode, handleClick}) => {
  
    return(

      <nav className="py-10 mb-12 flex justify-between  dark:text-white ">
      <h1 className="font-burtons text-2xl">AJ</h1>
 
      
      <ul className="flex items-center">
        <li>
        <h1 className=" text-xl  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 "><a href="#about">about me</a></h1>
        </li>
        <li>
        <h1 className=" text-xl px-6 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 "><a href="#project">Projects</a></h1>
        </li>
        <li>
          <BsFillMoonStarsFill
            className=" cursor-pointer text-2xl transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200"
            onClick={handleClick}
          />
        </li>
        <li>
          <a
            className={style.button}
            href="/AJ_Resume.pdf"
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