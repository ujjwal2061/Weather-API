import React, { useState } from 'react'
import Url from './API/Url';
import'./App.css'




 function App(){
  const [country ,setCountry]=useState("")
  const [searchCountry, setSearchCountry] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);


   
  function getvalue(event){
    setCountry(event.target.value)

   
  }
   const handleClick =()=>{
    setSearchCountry(country);
       setCountry("");
       
     }

  return(
    <>
    {/*this main div */ }
  <div className=' mt-8  flex flex-col  sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8' >
  <label className='font-jetbrains block   lg:text-lg md:text-base'>
  Country-Name
  </label>
        <div>
    <input 
    className='font-jetbrains border-2 dark:text-slate-600'
    type='text'
       placeholder='search'
        value={country}
        onChange={getvalue}/>

         </div>
      
         <button 
         onClick ={handleClick}type="button" className=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
         
             </div>
  {/* pass the props from App.jsx to Url.jsx */ }
  <Url countryname={searchCountry}  setWeatherDetails={setWeatherDetails}/>
   {
    weatherDetails &&(
          
      <div className='flex flex-col justify-center items-center p-4'>
           
         <p className=' p-1 text-xl font-itim '>Name: {weatherDetails.name}</p>
          <p className='p-1 text-xl font-itim'>Climate: {weatherDetails.climate}</p>
          <p className='p-1 text-xl font-itim'>Temp: {weatherDetails.temp}°C</p>
          <p className='p-1 text-xl font-itim'> Description: {weatherDetails.description}</p>
        </div>

      )}
      </>
    
  
  )
 }
  export default App;
