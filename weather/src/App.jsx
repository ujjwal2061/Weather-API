import React, { useState } from 'react'


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
  <div>
  <label>
    Weather:
  </label>
        <div>
    <input type='text'
       placeholder='Country Name :'
        value={country}
        onChange={getvalue}/>
         </div>
         <div>
          <button onClick={printvalue}>Search</button>
         </div>
  </div>
    </>
  )
 }
  export default App;
