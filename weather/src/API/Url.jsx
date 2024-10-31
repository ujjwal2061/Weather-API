import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";

 const API_key=`4021d0edc956bf8e0bcf7670131760aa`
 
 function Url({countryname ,setWeatherDetails}){
        
        
        //  function  that  show the api data .
        const getweather =async(countryname)=>{
         if(!countryname) return;
         const url=(`https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${API_key}`)
         try{
            // in this part we use await 
             const res= await fetch(url)
             const result=  await res.json();
            // setClimate store the data that store in Result 
             setWeatherDetails({
                /// the SetWeather is props that pass from the App.jsx to URl.jsx it show the value of the Country
                name:result.name,
                climate:result.weather[0].main,
                temp:(result.main.temp-273.15).toFixed(2),
                description:result.weather[0].description,
             })
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
        

  
     return null ;
   }
   export default Url;