import { DatabaseType } from '../db'
import { ForecastDataType, WeatherDataType } from '../types'
import { BehaviorSubject } from 'rxjs'
import { WeatherMethodsType } from '../db/weather/methods'
import { RxDocument } from 'rxdb'

interface IStorageService {
  initDataBase(db: DatabaseType): void
  getWeatherDataObservable(): BehaviorSubject<
    RxDocument<WeatherDataType, WeatherMethodsType>[]
  >
  setWeatherData(weather: WeatherDataType[]): void
}

export default class StorageService implements IStorageService {
  private static instance: StorageService
  private _db: DatabaseType | undefined

  constructor() {
    if (StorageService.instance) {
      return StorageService.instance
    }

    StorageService.instance = this
  }

  private db() {
    if (this._db) {
      return this._db
    }
    throw new Error('Database not initialized yet!')
  }

  private weather() {
    return this.db().weather
  }

  private forecast() {
    return this.db().forecast
  }

  initDataBase(db: DatabaseType) {
    this._db = db
  }

  getWeatherDataObservable() {
    return this.weather().find({
      selector: {},
      sort: [{ timepoint: 'asc' }],
    }).$
  }

  getCurrentWeatherDataObservable() {
    return this.weather().findOne({
      selector: {},
      sort: [{ timepoint: 'asc' }],
    }).$
  }

  setWeatherData(weather: WeatherDataType[]) {
    this.weather().addWeather(weather)
  }

  getForecastDataObservable() {
    return this.forecast().find({
      selector: {},
      sort: [{ date: 'asc' }],
    }).$
  }

  getCurrentForecastDataObservable() {
    return this.forecast().findOne({
      selector: {},
      sort: [{ date: 'asc' }],
    }).$
  }

  setForecastData(forecast: ForecastDataType[]) {
    this.forecast().addForecast(forecast)
  }
}
