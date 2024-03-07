import React, { useEffect, useState } from "react";
import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import { AppContainer, AppHeader } from "./App.styles";
import { Database } from './db'
import { getLocation } from './services/locationService'
import { setWeatherData } from './services/storageService'
import { fetchWeatherData } from './services/apiService'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("CALL!")
        setIsLoading(true);
        const db = new Database();
        await db.create()
        const location = await getLocation();
        const weatherData = await fetchWeatherData(location);
        setWeatherData(weatherData)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        console.log("Finaly!")
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <AppContainer>
      <AppHeader>
        <h1>Weather Dashboard</h1>
      </AppHeader>
      {!isLoading && <WeatherDashboard />}
      {isLoading && <h1>Loading</h1>}
    </AppContainer>
  );
}

export default App;