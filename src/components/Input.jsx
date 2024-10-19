import React from 'react';
import { useWeather } from '../context/Weather';

const Input = () => {
    const weather = useWeather();
    console.log(weather);
    return (
        <>
            <input
                className="w-[70%] px-4 py-2 mt-4 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                type="text"
                placeholder="Search here..."
                value={weather.city}
                onChange={(e) => weather.setCity(e.target.value)}
            />
        </>
    );
}

export default Input;
