import { RxCollection } from 'rxdb'
import { weatherSchema } from './schema'
import {
  weatherCollectionMethods,
  WeatherMethodsType,
  WeatherCollectionMethodsType,
  weatherMethods,
} from './methods'
import { WeatherDataType } from '../../types'

export type WeatherCollectionType = RxCollection<
  WeatherDataType,
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
