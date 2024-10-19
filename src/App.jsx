import { useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import Submit from './components/Submit'
import Card from './components/Card'
import { useWeather } from './context/Weather'

function App() {
  const weather=useWeather();
  console.log(weather)

  useEffect(()=>{
    console.log("I was run once..")
    weather.fetchDataFromLocation();
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold">
        Weather Forecast App
      </h1>
      <div className='flex flex-col mt-8'>
        <div>
          <Input />
          <Submit text="Search"/>
        </div >
          <Card />
          <div className="flex justify-center items-center mt-4">
          <Submit text="Refresh" />
        </div>
        </div>
    </>
  )
}

export default App