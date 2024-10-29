import React, { useState } from 'react'
import Url from './API/Url';


 function App(){
  const [country ,setCountry]=useState("")


   function printvalue(){
    console.log("Country name is:",country)
    setCountry("");
   }
  function getvalue(event){
    setCountry(event.target.value)
   
  }
  return(
    <>
  <div className=' '>
  <label className='mr-4'>
  Country-Name
  </label>
        <div>
    <input type='text'
       placeholder='search'
        value={country}
        onChange={getvalue}/>
         </div>
         <div>
          <button
          className='ml-3'
          onClick={printvalue}>Search</button>
         </div>
  </div>
  <Url countryname={country} />
  
    </>
  )
 }
  export default App;
