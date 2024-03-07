import { v4 as uuid } from 'uuid'
import { Database } from '../db'
import { IWeatherData } from '../types'

export const setWeatherData = (weather: IWeatherData[]) => {
  const db = new Database().get()
  db.weather.addWeather(weather.map((w) => ({ ...w, id: uuid() })))
}

export const getWeatherDataObservable = () => {
  const db = new Database().get()
  return db.weather.find().$
}
