import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "next/image";

import cars from "../public/used_cars.jpg";


export default function About() {

  let [darkMode, setDarkMode] = useState(true);
  function handleClick() {
    setDarkMode(!darkMode);
    
 }
  
    const [formData, setFormData] = useState({});
    const [apiData, setApiData] = useState(null);
 

  
    const handleChange = e => {
      if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity("Please select a valid option");
      } else {
        event.target.setCustomValidity("");
      }
      
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })

    }
  
    const handleSubmit = async e => {
      e.preventDefault()
  
      try {
        const res = await fetch(process.env.OCI_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        console.log(formData)
        const json = await res.json();
        setApiData(json);
        console.log(json);
      } catch (err) {
        console.error(err)
      }
    }

    let items=['Datsun','Hyundai','Maruti','Mahindra','Honda','Tata','Renault',
    'Volkswagen','Toyota','Ford','BMW','Audi','Mercedes-Benz','Skoda','Volvo',
    'Land Rover','Jeep','Jaguar','Lexus','Porsche','others','Kia','Mini',
    'MG','Nissan','Isuzu'];

    const options = items.join('|');

  
    return (
      <div className={styles.container} >
      <div className={darkMode ? "dark" : ""} >
      
      <Head>
        <title>Vikranth&apos;s Website</title>
        <meta name="description" content="Vikranth's Data Science project: Used Car Price Pridictor " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white  dark:bg-gray-900  px-6   md:px-20 lg:px-40 ">  
      <section id='Home' className="min-h-screen">
      <Navbar darkMode={darkMode} handleClick={handleClick}/>
      <h1 className="mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Used Car Price</span>  Pridictor.</h1>
      <div className="lg:flex gap-10 mb-20">
      
      <div className='sm:w-fit lg:w-3/5 '> 
      <Image className='rounded-xl' src={cars} alt="used cars"/>
      <p className='text-gray-800  dark:text-white my-10 text-xl text-justify'>
      As a data science enthusiast, I was captivated by the challenge of predicting the market price of used cars. 
      My solution was a random forest ML model, optimized using grid search and random search, which achieved a mean R2 score of 0.937,
       explaining 93.7% of the variability in the target variable. I am proud of the highly accurate and reliable model I've created,
        and I am excited to share it with the world through my portfolio website. Hosting the model as a Flask API on an Oracle Cloud VPS
         makes it easily accessible and convenient for users. This project has been a valuable learning experience, honing my skills in 
         data science and machine learning. 
      </p>
        <a href="https://www.kaggle.com/datasets/saisaathvik/used-cars-dataset-from-cardekhocom?select=cardekho_updated.csv" class="inline-flex items-center text-blue-600 hover:underline text-2xl">
        dataset source
        <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
        </a>
      
      
      </div>  
      
      <div className="  leading-8 text-gray-800  dark:text-white max-w-xl  mx-auto md:text-l">
      <form onSubmit={handleSubmit}>
      <div>
      <h4>What is the brand of your car?</h4>
      <input className='text-gray-800 w-full text-l my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' list="brand" name="brand" placeholder='eg. Tata' pattern={`^(${options})$`} onChange={handleChange} required/>
      <datalist id="brand">
        {
          items.map((item) =>{
            return (<option key={items.indexOf(item)} value={item}></option>)
          })
        }
      </datalist>  
      </div>
      <div>
      <h4>What is the current market price of your car?</h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="max_cost_price" min="400000.0" max="50000000.0" required placeholder='₹' onChange={handleChange} />
      </div>
      <div>
      <h4>What is the age of your vehicle?</h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="vehicle_age" min="0" max="30" required placeholder='years' onChange={handleChange} />
      </div>
      <div>
      <h4>how many kilometers have you driven your car?</h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="km_driven" min="0" max="4000000.0" required placeholder='km'  onChange={handleChange} />
      </div>
      <div>
      <h4>Where did you buy your car?</h4> 
      <input type="radio" name="seller_type" value="Dealer"  onChange={handleChange}required />
      <label className='my-2 pr-4 pl-1 py-1' > Dealer</label>
      <input type="radio" name="seller_type" value="Individual" onChange={handleChange} required/>
      <label className='my-2 pr-4 pl-1 py-1' > Individual</label>
      </div>
      <div>
      <h4>What type of fuel does your car use?</h4> 
      <input type="radio" name="fuel_type" value="Petrol" required onChange={handleChange}  />
      <label className='my-2 pr-4 pl-1 py-1' > Petrol</label>
      <input type="radio" name="fuel_type" value="Diesel" required onChange={handleChange} />
      <label className='my-2 pr-4 pl-1 py-1' > Diesel</label>
      <input type="radio" name="fuel_type" value="Gas" required onChange={handleChange} />
      <label className='my-2 pr-4 pl-1 py-1' > Gas</label>
      <input type="radio" name="fuel_type" value="Electric" required onChange={handleChange} />
      <label className='my-2 pr-4 pl-1 py-1'>Electric</label>
      </div>
      <div>
      <h4>What is the transmission type?</h4> 
      <input type="radio" name="transmission_type" value="Manual"  onChange={handleChange}required />
      <label className='my-2 pr-4 pl-1 py-1' >Manual</label>
      <input type="radio" name="transmission_type" value="Automatic"  onChange={handleChange} required/>
      <label className='my-2 pr-4 pl-1 py-1' > Automatic</label>
      </div>
      <div>
      <h4>How much milage does your car gives? </h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400'  type="number" name="mileage" min="5.0" max="35.0" required placeholder='kmpl'  onChange={handleChange} />
      </div>
      <div>
      <h4>What is the engine capacity of your car?</h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="engine" min="750.0" max="6000.0" required placeholder='cc' onChange={handleChange} />
      </div>
      <div>
      <h4>What is the max power of your car? </h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="max_power" min="35.0" max="625.0" step="0.01" required placeholder='bhp' onChange={handleChange} />
      </div>
      <div>
      <h4>How many seats does your car have?</h4>
      <input className='text-gray-800 w-full text-xl my-2 px-4 py-1 bg-gray-200 focus:bg-white border-2  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400' type="number" name="seats" min="2" max="9" step="1" required placeholder='eg. 5' onChange={handleChange} />
      </div>      
        
        <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mt-3 mb-2 mr-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
        </span>
        </button>
        <button type="reset" className="relative inline-flex items-center justify-center p-0.5 mt-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Reset
        </span>
        </button>
        
      </form>
      <div className=' text-2xl my-10 text-center'>
      {apiData && <div>the predicted price range is from <br/>  <span className='text-3xl text-teal-500'>₹ {Math.ceil(Object.values(apiData)[0] * 0.9)}</span>  to <span className='text-3xl text-teal-500'>₹ {Math.ceil(Object.values(apiData)[0]) } </span></div>}
      </div>
      
      </div>
      </div>

      </section>
      <Footer/>
      </main>
      
      </div>
      </div>  
    )
  
};

