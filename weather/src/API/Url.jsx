import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";

 const API_key=`4021d0edc956bf8e0bcf7670131760aa`
 
 function Url({countryname}){
      const [climate ,setclimate]=useState(null)
      //  function  that  show the api data .
     const getweather =async(countryname)=>{
         const url=(`https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${API_key}`)
         try{
            // in this part we use await 
             const res= await fetch(url)
             const result=  await res.json();
             setclimate(result) // setClimate store the data that store in Result 
             console.log(result) 
            }catch(error){
                console.log("Error:",error)
            }
        };
        // i add this bcz withou this the error is showimg every time i  write single string so to avoid this i use 
        // for check u can remove and ckeck it 
        const debouncedGetWeather = debounce(getweather, 500);
        

        // useEffect is use to  handle  side effect the  in React function
        // this part  run while the country name change for every country name change  
        useEffect(()=>{
            if(countryname){
          debouncedGetWeather(countryname);
            }
            return()=>{
                debouncedGetWeather.cancel();
            };
        },[countryname])
        if (!climate || !climate.weather || !climate.main ) 
            return null;
        const tempCelsius = climate.main.temp - 273.15;
     return(

        <div>
         <p>Name:{climate.name}</p>
         <p>Climate:{climate.weather[0].main}</p>
         <p>Temp:{tempCelsius.toFixed(2)}°C</p>
        <p>Description:{climate.weather[0].description}</p>
        </div>
    )
   }
   export default Url;