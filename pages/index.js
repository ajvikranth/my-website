import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Project from '../components/Project'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Footer from '../components/Footer';

import {
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,

} from "react-icons/ai";

export default function Home() {
  let [darkMode, setDarkMode] = useState(true);
  function handleClick() {
    setDarkMode(!darkMode);
    
 }
  
  return (
    <div className={styles.container} >
      <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Vikranth&apos;s Website</title>
        <meta name="description" content="Anton J Vikranth's Personal Data Science Portfolio Website build with Next.js and Tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white  dark:bg-gray-900  px-6   md:px-20 lg:px-40 ">
      <section id='Home' className="min-h-screen">
      
      <Navbar darkMode={darkMode} handleClick={handleClick}/>
          <div className="text-center sm:p-10 py-10 lg:flex gap-10">
            <div>
              <div className="mx-auto bg-gradient-to-b from-purple-400 text- to-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-5 sm:h-96 sm:w-96">
                <Image  src={deved} layout="fill" objectFit="cover" alt='avatar' />
              </div>
            
            </div>
            <div className=" mt-7  dark:text-white">
              <h2 className="text-5xl py-2  font-medium  md:text-6xl "> Hi! I&apos;m</h2>
              <h2 className="text-5xl py-2   ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 font-semibold  md:text-6xl">Vikranth </span>
                <span className={styles.hand}  >🤚</span>  
              </h2>
              <h3 className="text-2xl py-2  md:text-3xl">
                Data Science Enthusiast.
              </h3>
                <p className="text-md py-5 leading-8 text-gray-800  dark:text-white max-w-xl mt-7 mx-auto md:text-xl">
                A hobbyist programmer who is passionate about data science, at present working as a DBA at Infosys based in India
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
                  <a href="https://github.com/ajvikranth">
                    <AiFillGithub className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:fill-gray-300 duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/anton-j-vikranth/">
                    <AiFillLinkedin  className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:fill-gray-300 duration-200" />
                  </a>
                  <a href="mailto:aj.vikranth@gmail.com">
                    <AiFillMail className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:fill-gray-300 duration-200" />
                  </a>
              </div> 
            </div>
          </div>
          </section>
          <section >
            <About/>
          
          <Project  />
             
            
          </section>

      <Footer/>


      
      </main>
      
      
      
    </div>
    </div>
    
  )
}
