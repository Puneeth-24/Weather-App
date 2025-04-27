import React from 'react';
import humidIcon from  "./images/humidity.png";
import windIcon from "./images/wind.png";

function WeatherIcon({obj}){
    return <img src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`} alt={obj.weather[0].main}  />
}

function WeatherCard({weather,loading}){
     let weather_desc="---";
     let temp="---";;
     let city_name="---";;
     let humidity="---";;
     let windSpeed="---";;
     
     if(!loading && weather){
        weather_desc=weather.weather[0].description;
        temp=weather.main.temp;  
        city_name=weather.name;
        humidity=weather.main.humidity;
        windSpeed=weather.wind.speed;
     }


    return (
        <div className="weather-card">
            <div className='weather-desc'>
               <WeatherIcon obj={weather}/>
                <span  style={{fontSize:"85%"}}>{weather_desc}</span>
                <span style={{fontWeight:"Bold"}}>{temp}°C</span>
                <span style={{fontSize:"75%"}}>{city_name}</span>
            </div>
            <div className="humSpeed-desc">
                
            <span><img src={humidIcon}  style={{height:"30px"}} alt="" /><span style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center'}}>{humidity}%<span style={{fontSize:"45%"}}>Humidity</span></span></span>
            <span><img src={windIcon}  style={{height:"30px"}} alt="" /><span style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center'}}>{windSpeed}Kmph<span style={{fontSize:"45%"}}>Wind Speed</span></span></span>
            </div>
        </div>
    );
}

export default WeatherCard;