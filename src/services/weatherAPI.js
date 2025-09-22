const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0"


 export const getCurrentWeather = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`city ${city} not found, please try again.`);

            }else if(response.status === 401){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
            else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
        }
        }

        const data = await response.json();

        if (data.dt){
            data.dt = Math.floor(Date.now() / 1000);
        }

        return data;

    } catch(error) {
        if(error instanceof TypeError && error.message.includes("fetch")){
            throw new Error("Network error, please check your internet connection");
        }
        throw error;
    }
 };

  export const getCurrentWeatherByCoords = async (lat, lon) => {
    try {
        const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
        }
        }

        const data = await response.json();

        if (data.dt){
            data.dt = Math.floor(Date.now() / 1000);
        }

        return data;

    } catch(error) {
        if(error instanceof TypeError && error.message.includes("fetch")){
            throw new Error("Network error, please check your internet connection");
        }
        throw error;
    }
 };

  export const getCurrentWeatherForecast = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`city ${city} not found, please try again.`);

            }else if(response.status === 401){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
            else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
        }
        }

        return  await response.json();
    } catch(error) {
        if(error instanceof TypeError && error.message.includes("fetch")){
            throw new Error("Network error, please check your internet connection");
        }
        throw error;
    }
 };

 export const searchCities = async (query) => {
    try {
        const response = await fetch(`${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`);

          if (!response.ok){
            if(response.status === 404){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
        }
        }

        const data = await response.json();
        return data.map((city) => ({
            name: city.name,
            lat: city.lat,
            lon: city.lon,
            country: city.country,
            state: city.state || "",
        }))
    } catch(error) {
        if(error instanceof TypeError && error.message.includes("fetch")){
            throw new Error("Network error, please check your internet connection");
        }
        throw error;
    }
 };

 export const getWeatherWithUV = async (lat, lon) => {
  try {
    const response = await fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&exclude=minutely,hourly,alerts`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather with UV: ${response.status}`);
    }

    const data = await response.json();
    return data.current; // only return the 'current' object which includes 'uvi'
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new Error("Network error, please check your internet connection");
    }
    throw error;
  }
};
