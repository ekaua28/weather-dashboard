import { RxDocument, RxStorageWriteError } from 'rxdb'
import { WeatherDataType } from '../../types'
import { WeatherCollectionType } from './index'

export type WeatherMethodsType = {
  getWind(): string
}

export const weatherMethods: WeatherMethodsType = {
  getWind: function (this: WeatherDataType) {
    return `${this.wind10m.direction} ${this.wind10m.speed} m/s`
  },
}

export type WeatherCollectionMethodsType = {
  addWeather: (weather: WeatherDataType[]) => Promise<{
    success: RxDocument<WeatherDataType, WeatherMethodsType>[]
    error: RxStorageWriteError<WeatherDataType>[]
  }>
}

export const weatherCollectionMethods: WeatherCollectionMethodsType = {
  addWeather: async function (
    this: WeatherCollectionType,
    weather: WeatherDataType[],
  ) {
    return this.bulkInsert(weather)
  },
}
