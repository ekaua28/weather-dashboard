import { RxDocument, RxStorageWriteError } from 'rxdb'
import { IWeatherData } from '../../types'
import { WeatherCollectionType } from './index'

export type WeatherMethodsType = {}

export const weatherMethods: WeatherMethodsType = {}

export type WeatherCollectionMethodsType = {
  addWeather: (weather: IWeatherData[]) => Promise<{
    success: RxDocument<IWeatherData, WeatherMethodsType>[]
    error: RxStorageWriteError<IWeatherData>[]
  }>
}

export const weatherCollectionMethods: WeatherCollectionMethodsType = {
  addWeather: async function (
    this: WeatherCollectionType,
    weather: IWeatherData[],
  ) {
    return this.bulkInsert(weather)
  },
}
