import style from "../../styles/Navbar.module.css"
import React, {useState} from 'react';

import { BsFillMoonStarsFill } from "react-icons/bs";  
import Link from "next/link";

const Navbar = ({darkMode, handleClick}) => {
  
    return(

      <nav className="py-10  flex justify-between  dark:text-white ">
      <h1 className="font-burtons text-xl md:text-2xl">
        <Link href="/#home">AJ </Link>
        </h1>
 
      
      <ul className="flex items-center">
        <li>
        <h1 className=" text-sm md:text-xl pl-2 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 ">
          <Link href="/#about">about me </Link>
          </h1>
        </li>
        <li>
        <h1 className=" text-sm md:text-xl px-4 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-200 ">
          <a href="/#project">Projects</a>
          <Link href="/#project">Projects </Link>
          </h1>
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