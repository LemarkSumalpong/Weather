import { useState, useEffect } from 'react';
import {
    getCurrentWeather, 
    getCurrentWeatherByCoords,
    getCurrentWeatherForecast,
} from '../services/weatherAPI';

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForeCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unit, setUnits] = useState("C");

    const fetchWeatherByCity = async(city) => {
        setLoading(true);
        setError(null);

        try{
            const[weatherData, foreCast] = await Promise.all([
                getCurrentWeather(city),
                getCurrentWeatherForecast(city)
            ])
            setCurrentWeather(weatherData);
            setForeCast(foreCast);

        }catch(err){
            setError(err instanceof Error ? err.message : "Faild to fetch weather data")
        }
        finally {
            setLoading(false)
        }
    };

    const fetchWeatherByLocation = async () => {
        if(!navigator.geolocation){
            setError("Geolocation is not supported by this browser")
        }
        setLoading(true);
        setError(null);

       navigator.geolocation.getCurrentPosition(async(position) =>{
        try{
                const{latitude, longitude} = position.coords;
                const weatherData = await getCurrentWeatherByCoords(latitude, longitude);
                setCurrentWeather(weatherData);

                const forecastData = await getCurrentWeatherForecast(weatherData.name);
                setForeCast(forecastData);
            }catch(err){
                 setError(err instanceof Error ? err.message : "Faild to fetch weather data")
            }
        finally{
            setLoading(false);
        }    
       }, (error) => {
        setError("unable to retrieve your location");
        setLoading(false)
       }
    );
    };

    const toggleUnit = () => {
        setUnits(unit === "C" ? "F" : "C");
    }

    useEffect(() =>{
        fetchWeatherByCity("Cagayan de Oro");
    });

    return {
        currentWeather,
        forecast, 
        loading, error,
        unit,
        fetchWeatherByCity,
        fetchWeatherByLocation,
        toggleUnit,
    };
};
