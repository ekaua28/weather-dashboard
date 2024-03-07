import axios from 'axios'
import { Coordinate, IWeatherData } from '../types'

export const fetchWeatherData = async (
  coordinate: Coordinate,
): Promise<IWeatherData[]> => {
  try {
    const response = await axios.get<{ dataseries: IWeatherData[] }>(
      `http://www.7timer.info/bin/api.pl?lon=${coordinate.longitude}&lat=${coordinate.latitude}&product=civillight&output=json`,
    )
    return response.data.dataseries
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
