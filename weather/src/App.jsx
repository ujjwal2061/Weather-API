import React, { useState } from 'react'
import Url from './API/Url';
import'./App.css'




 function App(){
  const [country ,setCountry]=useState("")
  const [weatherDetails, setWeatherDetails] = useState(null);


   function printvalue(){
    console.log("Country name is:",country)
    setCountry("");
   }
  function getvalue(event){
    setCountry(event.target.value)
   
  }
   const handleClick =()=>{
    if(weatherDetails){
      console.log("Weather details:",country)
    }
   };
  return(
    <>
    {/*this main div */ }
  <div className=' mt-8  flex flex-col  sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8' >
  <label className='font-jetbrains block'>
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
         <div>
         <button  className=" m-3  p-3 font-jetbrains  rounded-md border-2 bg"
         onClick={handleClick}>Serach</button>
         </div>
         
             </div>
  {/* pass the props from App.jsx to Url.jsx */ }
  <Url countryname={country}  setWeatherDetails={setWeatherDetails}/>
   {
    weatherDetails &&(
      <div>
         <p>Name: {weatherDetails.name}</p>
          <p>Climate: {weatherDetails.climate}</p>
          <p>Temp: {weatherDetails.temp}°C</p>
          <p>Description: {weatherDetails.description}</p>
        </div>
      )}
      </>
    
  
  )
 }
  export default App;
