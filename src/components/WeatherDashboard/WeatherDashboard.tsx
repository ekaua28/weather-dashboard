import React from "react";
import { getWeatherDataObservable } from '../../services/storageService'

import { IWeatherData } from '../../types'
import { WeatherDashboardContainer, WeatherSection, Heading2, UnorderedList, ListItem } from "./WeatherDashboard.styles";
import { useObservableState } from "observable-hooks";

const WeatherDashboard = () => {
  const weatherData: IWeatherData[] | undefined = useObservableState(getWeatherDataObservable());
  return (
    <WeatherDashboardContainer>
      {weatherData && (
        <>
          <WeatherSection className="current-weather">
            <Heading2>Current Weather</Heading2>
            <div>
              <p>Date: {weatherData[0].date}</p>
              <p>Weather: {weatherData[0].weather}</p>
              <p>Temperature: Min: {weatherData[0].temp2m.min}°C, Max: {weatherData[0].temp2m.max}°C</p>
              <p>Max Wind Speed: {weatherData[0].wind10m_max} m/s</p>
            </div>
          </WeatherSection>

          <WeatherSection className="daily-forecast">
            <Heading2>7 Day Forecast</Heading2>
            <UnorderedList>
              {weatherData.slice(1).map(day => (
                <ListItem key={day.date}>
                  <p>Date: {day.date}</p>
                  <p>Weather: {day.weather}</p>
                  <p>Temperature: Min: {day.temp2m.min}°C, Max: {day.temp2m.max}°C</p>
                  <p>Max Wind Speed: {day.wind10m_max} m/s</p>
                </ListItem>
              ))}
            </UnorderedList>
          </WeatherSection>
        </>
      )}
    </WeatherDashboardContainer>
  );
};

export default WeatherDashboard;