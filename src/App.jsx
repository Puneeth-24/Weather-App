import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard'
import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App(){
    
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")

    async function handleSearch(){
        if(city.trim().length == 0) return;
        
        setLoading(true);
        setError("")
        setWeather("");
        
        try{
            const response = await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            return setWeather(response.data)
        }
        catch(err){
            setError("Wrong city name or something went wrong during API call")
        }
        finally{
            setLoading(false);
        }

        
    }
    return(
        <div className="app">
            <h1>WEATHER APP ☁️</h1>
            <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
            
            {error && <p>{error}</p>}
            {weather && !error &&
            <WeatherCard 
                weather={weather}
                loading={loading}
            />}
        </div>
    );
}
export default App;