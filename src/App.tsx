import React, { useEffect, useState } from "react";
import { WeatherDashboard } from "./components/WeatherDashboard/WeatherDashboard";
import { AppContainer } from "./App.styles";
import { initDataBase } from './db'
import { getLocation } from './services/locationService'
import StorageService from './services/storageService'
import ApiService from './services/apiService'
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const db = await initDataBase()
        const location = await getLocation()
        const api = new ApiService(location)
        const storage = new StorageService()
        storage.initDataBase(db)
        const responceData = await Promise.all([
          api.fetchWeatherData(),
          api.fetchForecastData()
        ])
        console.log(responceData[1].dataseries)
        storage.setWeatherData(responceData[0].dataseries)
        storage.setForecastData(responceData[1].dataseries)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <AppContainer>
      {!isLoading && <WeatherDashboard />}
      {isLoading && <LoadingScreen />}
    </AppContainer>
  );
}

export default App;