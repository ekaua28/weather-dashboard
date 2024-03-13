
import React, { useState } from "react";
import {
  Result, OtherResults, OtherResultValue, CurrentWeatherContainer,
  WeatherIcon, OtherResult, SecondaryResults, Temperature,
  SecondaryResult, SecondaryResultIcon, SecondaryResultText,
} from './CurrentWeather.styles'
import { RiDropFill } from "react-icons/ri";
import { WiStrongWind, WiCloudy } from "react-icons/wi";
import StorageService from "../../services/storageService";
import { useSubscription } from "observable-hooks";
import { RxDocument } from "rxdb";
import { WeatherMethodsType } from "../../db/weather/methods";
import { ForecastDataType, WeatherDataType } from "../../types";
import { getCloudCover, getPrecipitation, getWeatherIcon } from "../../utils"
import { ForecastMethodsType } from "../../db/forecast/methods";


interface CurrentWeatherProps {
  storageService?: StorageService
}

export const CurrentWeather = ({ storageService = new StorageService() }: CurrentWeatherProps) => {
  const [weather, setWether] = useState<RxDocument<WeatherDataType, WeatherMethodsType> | null>(null);
  const [forecast, setForecast] = useState<RxDocument<ForecastDataType, ForecastMethodsType> | null>(null);
  useSubscription(storageService.getCurrentWeatherData(), setWether)
  useSubscription(storageService.getCurrentForecastData(), setForecast)
  return (
    <CurrentWeatherContainer>
      <Result>
        <WeatherIcon src={getWeatherIcon(forecast?.weather)} alt="icon" />
        <Temperature>
          {weather?.temp2m}
          <span>ºC</span>
        </Temperature>
      </Result>
      <OtherResults>
        <OtherResult>
          Precipitation:
          <br />
          <OtherResultValue>{getPrecipitation(weather?.prec_amount)}</OtherResultValue>
        </OtherResult>
        <OtherResult>
          Min Temp:
          <br />
          <OtherResultValue>{forecast?.temp2m.min} ºC</OtherResultValue>
        </OtherResult>
        <OtherResult>
          Max Temp:
          <br />
          <OtherResultValue>{forecast?.temp2m.max} ºC</OtherResultValue>
        </OtherResult>
      </OtherResults>
      <OtherResults>
        <SecondaryResults>
          <SecondaryResult>
            <SecondaryResultIcon>
              <RiDropFill />
            </SecondaryResultIcon>
            <SecondaryResultText>
              Moisture:
              <br />
              {weather?.rh2m}
            </SecondaryResultText>
          </SecondaryResult>
          <SecondaryResult>
            <SecondaryResultIcon>
              <WiStrongWind />
            </SecondaryResultIcon>
            <SecondaryResultText>
              Wind:
              <br />
              {weather?.getWind()}
            </SecondaryResultText>
          </SecondaryResult>
          <SecondaryResult>
            <SecondaryResultIcon>
              <WiCloudy />
            </SecondaryResultIcon>
            <SecondaryResultText>
              Clouds: <br />
              {getCloudCover(weather?.cloudcover)}
            </SecondaryResultText>
          </SecondaryResult>
        </SecondaryResults>
      </OtherResults>
    </CurrentWeatherContainer>
  )
};