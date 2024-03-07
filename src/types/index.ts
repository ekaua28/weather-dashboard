export interface IWeatherData {
  id: string
  date: string
  weather: string
  temp2m: {
    max: number
    min: number
  }
  wind10m_max: number
}

export type Coordinate = {
  latitude: number
  longitude: number
}
