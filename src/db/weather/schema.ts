import { RxJsonSchema } from 'rxdb'
import { WeatherDataType } from '../../types'

/*
    wind10m: WindDataType;
    */
export const weatherSchema: RxJsonSchema<WeatherDataType> = {
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
    cloudcover: {
      type: 'number',
    },
    lifted_index: {
      type: 'number',
    },
    prec_amount: {
      type: 'number',
    },
    prec_type: {
      type: 'string',
    },
    rh2m: {
      type: 'string',
    },
    temp2m: {
      type: 'string',
    },
    timepoint: {
      type: 'string',
    },
    weather: {
      type: 'string',
    },
    wind10m: {
      type: 'object',
      properties: {
        max: { type: 'number' },
        min: { type: 'number' },
      },
    },
  },
  required: [
    'id',
    'cloudcover',
    'lifted_index',
    'prec_amount',
    'prec_type',
    'rh2m',
    'temp2m',
    'timepoint',
    'weather',
    'wind10m',
  ],
}
