import axios from 'axios'
import {
  Coordinate,
  ForecastDataType,
  ResponceData,
  WeatherDataType,
} from '../types'

interface IApiService {
  fetchWeatherData(): void
  fetchForecastData(): void
}

export default class ApiService implements IApiService {
  coordinate: Coordinate
  constructor(coordinate: Coordinate) {
    this.coordinate = coordinate
  }
  private async fetch<T>(url: string) {
    try {
      const response = await axios.get<T>(url)
      return response.data
    } catch (error) {
      console.error('Error fetching weather data:', error)
      throw error
    }
  }

  async fetchWeatherData() {
    return this.fetch<ResponceData<WeatherDataType>>(
      `http://www.7timer.info/bin/api.pl?lon=${this.coordinate.longitude}&lat=${this.coordinate.latitude}&product=civil&output=json`,
    )
  }

  async fetchForecastData() {
    return this.fetch<ResponceData<ForecastDataType>>(
      `http://www.7timer.info/bin/api.pl?lon=${this.coordinate.longitude}&lat=${this.coordinate.latitude}&product=civillight&output=json`,
    )
  }
}
