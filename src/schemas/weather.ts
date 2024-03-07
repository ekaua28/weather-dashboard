export default {
  title: 'weather schema',
  version: 0,
  description: 'Schema for weather data',
  type: 'object',
  primaryKey: 'date',
  properties: {
    date: {
      type: 'string',
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
