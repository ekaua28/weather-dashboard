import { RxCollection } from 'rxdb'
import { forecastSchema } from './schema'
import {
  forecastCollectionMethods,
  ForecastMethodsType,
  ForecastCollectionMethodsType,
  forecastMethods,
} from './methods'
import { ForecastDataType } from '../../types'

export type ForecastCollectionType = RxCollection<
  ForecastDataType,
  ForecastMethodsType,
  ForecastCollectionMethodsType
>

export default {
  forecast: {
    schema: forecastSchema,
    methods: forecastMethods,
    statics: forecastCollectionMethods,
  },
}
