import { RxJsonSchema } from 'rxdb'
import { ForecastDataType } from '../../types'

export const forecastSchema: RxJsonSchema<ForecastDataType> = {
  title: 'Forecast schema',
  version: 0,
  description: 'Schema for forecast weather data',
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
    },
    formated_date: {
      type: 'string'
    },
    date: {
      type: 'number',
    },
    weather: {
      type: 'string',
    },
    temp2m: {
      type: 'object',
      properties: {
        max: { type: 'number' },
        min: { type: 'number' },
      },
    },
    wind10m_max: {
      type: 'number',
    },
  },
  required: ['id', 'date', 'weather', 'temp2m', 'wind10m_max'],
}
