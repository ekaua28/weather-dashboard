import { RxDocument, RxStorageWriteError } from 'rxdb'
import { ForecastDataType } from '../../types'
import { ForecastCollectionType } from './index'

export type ForecastMethodsType = {
  getDate(): string
}

export const forecastMethods: ForecastMethodsType = {
  getDate: function (this: ForecastDataType) {
    return new Date(this.date).toLocaleDateString()
  },
}

export type ForecastCollectionMethodsType = {
  addForecast: (forecast: ForecastDataType[]) => Promise<{
    success: RxDocument<ForecastDataType, ForecastMethodsType>[]
    error: RxStorageWriteError<ForecastDataType>[]
  }>
}

export const forecastCollectionMethods: ForecastCollectionMethodsType = {
  addForecast: async function (
    this: ForecastCollectionType,
    forecast: ForecastDataType[],
  ) {
    return this.bulkInsert(forecast)
  },
}
