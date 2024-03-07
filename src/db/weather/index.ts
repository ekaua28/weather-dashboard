import { RxCollection } from 'rxdb'
import { weatherSchema } from './schema'
import {
  weatherCollectionMethods,
  WeatherMethodsType,
  WeatherCollectionMethodsType,
  weatherMethods,
} from './methods'
import { IWeatherData } from '../../types'

export type WeatherCollectionType = RxCollection<
  IWeatherData,
  WeatherMethodsType,
  WeatherCollectionMethodsType
>

export default {
  weather: {
    schema: weatherSchema,
    methods: weatherMethods,
    statics: weatherCollectionMethods,
  },
}
