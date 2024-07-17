import './App.css';
import Container from './component/Container';
import Navbar from './component/Navbar';
import Forecast from './component/Forecast';
import WeatherGraph from './component/WeatherGraph'; 
import { useState, useEffect } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const apikey = '2b90dcbc772e49f9a1051120232008';
// console.log(hourlyData);
  const handleDataChange = (newData) => {
    setWeatherData(newData);
    if (newData && newData.forecast && newData.forecast.forecastday) {
      setHourlyData(newData.forecast.forecastday[0].hour.map(hour => ({
        time: hour.time.split(' ')[1], // Extract only the time part
        temp: hour.temp_c
      })));
    }
  };

  // console.log(hourlyData);

  useEffect(() => {
    const fetchInitialData = async () => {
      // if ("geolocation" in navigator) {
      //   navigator.geolocation.getCurrentPosition(
      //     async (position) => {
      //       const latitude = position.coords.latitude;
      //       const longitude = position.coords.longitude;
      //       console.log(`${latitude},${longitude}`);
      //     })}

      const data = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&days=3&aqi=no&alerts=no&q=mumbai`;
      try {
        const response = await fetch(data);
        const result = await response.json();
        handleDataChange(result);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchInitialData();
  }, [apikey]);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div style={{ height: "max-content", backgroundColor: "#23212e", paddingBottom: "10px" }}>
      <Navbar apikey={apikey} onDataChange={handleDataChange} />
      <Container data={weatherData} />
      <h1 className="mx-5" style={{ color: "white" }}>THREE DAY FORECAST</h1>
      <hr style={{ color: "white" }} />




      {weatherData && weatherData.forecast && weatherData.forecast.forecastday && (
        <>
          {weatherData.forecast.forecastday.map((day, index) => (
            <Forecast
              key={index}
              day={days[new Date(day.date).getDay()]}
              degree={`${day.day.avgtemp_c}°C`}
              condition={day.day.condition.text}
            />

            
          ))}

          <h1 className="mx-5" style={{ color: "white" }}>GRAPH OVERVIEW</h1>
          <hr style={{ color: "white" }} />
          <WeatherGraph data={hourlyData} /> 
          
        </>
      )}
      <h1 className="mx-5" style={{ color: "white" }}>HOURLY FORECAST</h1>
      <hr style={{ color: "white" }} />
      {hourlyData && hourlyData.length > 0 && (
        <div className="hourly-forecast" style={{color:"red"}}>
          {hourlyData.map((hour, index) => (
            <div key={index} className="hour">
              <p>{hour.time}</p>
              <p>{hour.temp}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
