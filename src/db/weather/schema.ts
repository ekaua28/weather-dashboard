import { RxJsonSchema } from 'rxdb'
import { IWeatherData } from '../../types'

export const weatherSchema: RxJsonSchema<IWeatherData> = {
  title: 'weather schema',
  version: 0,
  description: 'Schema for weather data',
  type: 'object',
  primaryKey: 'id',
  properties: {
    id: {
      type: 'string',
      maxLength: 100,
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
  required: ['date', 'weather', 'temp2m', 'wind10m_max'],
}
