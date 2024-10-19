import React from 'react';
import { useWeather } from '../context/Weather';

const Card = () => {
    const weather = useWeather();
    return (
        <>
            <div className="flex flex-col items-center bg-white p-8 m-6 rounded-lg shadow-2xl border border-gray-300 mx-auto w-80">
                <div className="text-2xl font-semibold mt-2 text-gray-800"><img src={weather.data?.current?.condition?.icon} alt="Logo"/></div>
                <div className="text-4xl font-bold mt-2 text-blue-600">{weather.data?.current?.temp_c} °C</div>
                <div className="mt-4 text-lg text-gray-600">{weather.data?.location?.name}, {weather.data?.location?.country}</div>
            </div>
        </>
    );
}

export default Card;