import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState('london');
  const [name, setName] = useState();
  const [time, setTime] = useState();
  const [temp, setTemp] = useState();
  const [cloudy, setCloudy] = useState();
  const [humidity, setHumidity] = useState();
  const [rain, setRain] = useState();
  const [wind, setWind] = useState();
  const [condition, setCondition] = useState();
  const [conditionImage, setConditionImage] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=d371d697ed074751a21191722230701&q=${city}&aqi=no`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {

        const timeLocal = data.location.localtime.split(' ')

        setName(data.location.name)
        setTime(timeLocal)
        setTemp(data.current.temp_c)
        setCondition(data.current.condition.text)
        setConditionImage(data.current.condition.icon)
        setCloudy(data.current.cloud)
        setHumidity(data.current.humidity)
        setWind(data.current.wind_kph)
        setRain(data.current.precip_mm)
        console.log(data)

        fetch(`https://api.unsplash.com/search/photos?client_id=a2ky8n6hwnpCNdPfuxy1tQ_pXV-86bAqV8-a2kvkrFo&page=1&query=${data.location.name}`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => setImage(data.results[2].urls.full))
      });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        temp,
        name, 
        time,
        condition,
        conditionImage,
        image,
        rain,
        wind,
        cloudy,
        humidity
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
