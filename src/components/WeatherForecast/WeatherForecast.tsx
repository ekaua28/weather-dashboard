import { useSubscription } from "observable-hooks";
import React, { useState } from "react";
import { RxDocument } from "rxdb";
import { ForecastContainer, ForecastResult, ForecastResultValue, ForecastResults, WeatherIcon } from "./WeatherForecast.styles";
import { ForecastMethodsType } from "../../db/forecast/methods";
import StorageService from "../../services/storageService"
import { ForecastDataType } from "../../types";
import { getWeatherIcon } from "../../utils";

interface WeatherForecastProps {
    storageService?: StorageService
}

export const WeatherForecast = ({ storageService = new StorageService() }: WeatherForecastProps) => {
    const [forecast, setForecast] = useState<RxDocument<ForecastDataType, ForecastMethodsType>[] | null>(null);
    useSubscription(storageService.getForecastDataObservable(), setForecast)

    return (
        <ForecastContainer>
            {forecast?.map(item => (
                <ForecastResults key={item.id}>
                    <ForecastResult>
                        <WeatherIcon src={getWeatherIcon(item?.weather)} alt="icon" />
                    </ForecastResult>
                    <ForecastResult>
                        <ForecastResultValue>{item.getDate()}</ForecastResultValue>
                    </ForecastResult>
                    <ForecastResult>
                        <ForecastResultValue>{item.temp2m.min} ºC</ForecastResultValue>
                    </ForecastResult>
                    <ForecastResult>
                        <ForecastResultValue>{item.temp2m.max} ºC</ForecastResultValue>
                    </ForecastResult>

                </ForecastResults>
            ))}
        </ForecastContainer>)
}