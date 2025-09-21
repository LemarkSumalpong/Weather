const API_KEY = "71fff297d7ea1e8eb2068d90322b5023";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0"


 export const getCurrentWeather = async (city) => {
    try {
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&
        units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`city ${city} not found, please try again.`);

            }else if(response.status === 401){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
        }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
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
        const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&
        units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
        }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
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
        const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&
        units=metric`);

        if (!response.ok){
            if(response.status === 404){
                throw new Error(`city ${city} not found, please try again.`);

            }else if(response.status === 401){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
        }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
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
        const response = await fetch(`${GEO_URL}/weather?q=${query}&limit=5&appid=${API_KEY}`);

          if (!response.ok){
            if(response.status === 404){
                throw new Error(`Invalid API key, please check OpenWeatherMap API configuration.`);
            }
        }else{
            throw new Error("Weather seruice is temporary unavailable, please try again.");
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

 