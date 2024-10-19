const KEY=import.meta.env.VITE_API_KEY;

export const getData= async(city)=>{
    const data=await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`);
    return data.json();
}

export const getDataFromLocation= async(lat, lon)=>{
    console.log("Okay, I got here too..")
    const data=await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${lat},${lon}&aqi=no`);
    return data.json();
}