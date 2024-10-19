import { createContext, useContext, useState } from "react";
import { getData, getDataFromLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () =>{
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) =>{
    const [data, setData]= useState(null);
    const [city, setCity]= useState("");

    const fetchData = async()=>{
        console.log("button clicked")
        const response = await getData(city);
        setData(response);
    }

    const fetchDataFromLocation = () => {
        console.log("I reached here..");
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Success:", position.coords.latitude);
                getDataFromLocation(
                    position.coords.latitude,
                    position.coords.longitude
                ).then((response) => setData(response));
            },
            (error) => {
                console.error("Error getting location:", error.message);
            },
            options  // Pass the options object as the third argument
        );
    };

    return <WeatherContext.Provider value={{data, city, setCity, fetchData, fetchDataFromLocation}}>{props.children}</WeatherContext.Provider>
};