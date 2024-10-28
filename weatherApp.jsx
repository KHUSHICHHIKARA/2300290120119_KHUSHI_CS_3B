import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike: 24,
        temp:25,
        tempMin:25,
        tempmax:45,
        humidity: 47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
