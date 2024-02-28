import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "next/image";

export default function About() {

    let [darkMode, setDarkMode] = useState(true);
    function handleClick() {
      setDarkMode(!darkMode);  
   }
   return (
    <div className={styles.container} >
    <div className={darkMode ? "dark" : ""} >
    
    <Head>
      <title>Vikranth&apos;s Website</title>
      <meta name="description" content="Vikranth's Data Science project: Data Engineering Anime Data " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className=" bg-white  dark:bg-gray-900  px-6   md:px-20 lg:px-40 ">  
    <section id='Home' className="min-h-screen">
    <Navbar darkMode={darkMode} handleClick={handleClick}/>
    <h1 className="mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Data Engineering </span>  Anime Data</h1>
    <div className="lg:flex gap-10 mb-20">
    <a href='https://github.com/ajvikranth/Data-Engineering' className="inline-flex items-center text-blue-600 hover:underline text-2xl">
        Github repository
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
      
    

    </div>  
    
    </section>
    <Footer/>
    </main>
    
    </div>
    </div>  
  )

};