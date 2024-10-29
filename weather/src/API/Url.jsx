import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";

 const API_key=`4021d0edc956bf8e0bcf7670131760aa`
 
 function Url({countryname}){
      const [weather ,setweather]=useState({})
     const getweather =async(countryname)=>{
         const url=(`https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${API_key}`)
         try{
             const res= await fetch(url)
             const data=  await res.json();
             setweather(data)
             console.log(data)
            }catch(error){
                console.log("Error:",error)
            }
        };
        const debouncedGetWeather = debounce(getweather, 500);
        
        useEffect(()=>{
            if(countryname){
          debouncedGetWeather(countryname);
            }
            return()=>{
                debouncedGetWeather.cancel();
            };
        },[countryname])
     return(

        <div>
       
        </div>
    )
   }
   export default Url;