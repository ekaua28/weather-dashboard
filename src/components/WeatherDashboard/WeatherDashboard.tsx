import React from 'react';
import StorageService from '../../services/storageService'
import { MotionBox } from '../MotionBox/MotionBox';
import { ContentContainer, MainContainer } from "./WeatherDashboard.styles";
import { CurrentWeather } from '../CurrentWeather/CurrentWeather';
import { WeatherForecast } from '../WeatherForecast/WeatherForecast';
import { Background } from '../Background/Background';

export const WeatherDashboard = () => {
  return (
    <MainContainer id="main">
      <Background />
      <MotionBox>
        <ContentContainer>
          <CurrentWeather />
          <WeatherForecast />
        </ContentContainer>
      </MotionBox>
    </MainContainer>
  );

};
