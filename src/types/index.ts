export type ForecastDataType = {
  id: string
  date: number
  formated_date: string
  weather: string
  temp2m: {
    max: number
    min: number
  }
  wind10m_max: number
}

type WindDataType = {
  direction: string
  speed: number
}

export type WeatherDataType = {
  id: string
  cloudcover: number
  lifted_index: number
  prec_amount: number
  prec_type: string
  rh2m: string
  temp2m: number
  timepoint: number
  weather: string
  wind10m: WindDataType
}

export type Coordinate = {
  latitude: number
  longitude: number
}

export type ResponceData<T> = { dataseries: T[] }
