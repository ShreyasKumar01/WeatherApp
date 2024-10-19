import React from 'react';
import { useWeather } from '../context/Weather';

const Submit = (props) => {
    const weather=useWeather();
    return (
            <button className="px-6 py-3 m-2 bg-blue-500 text-white rounded-lg font-serif shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out w-40 text-center" onClick={weather.fetchData}>
                {props.text}
            </button>
    );
}

export default Submit;
