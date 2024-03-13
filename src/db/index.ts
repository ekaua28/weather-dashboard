import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb'
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory'
import WeatherCollection, { WeatherCollectionType } from './weather'
import ForecastCollection, { ForecastCollectionType } from './forecast'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { RxDBUpdatePlugin } from 'rxdb/plugins/update'
import { preInsert } from './common/hooks'
import { ForecastDataType, WeatherDataType } from '../types'
import { DEFAULT_WEATHER, getFormatedDate } from '../utils'

addRxPlugin(RxDBUpdatePlugin)
addRxPlugin(RxDBDevModePlugin)

type DatabaseCollectionsType = {
  weather: WeatherCollectionType
  forecast: ForecastCollectionType
}

export type DatabaseType = RxDatabase<DatabaseCollectionsType>

export const initDataBase = async () => {
  const database: DatabaseType = await createRxDatabase({
    name: 'weatherdb',
    storage: getRxStorageMemory(),
  })

  const collections = await database.addCollections({
    ...WeatherCollection,
    ...ForecastCollection,
  })
  preInsert<WeatherCollectionType, WeatherDataType>(
    collections.weather as WeatherCollectionType,
  )
  preInsert<ForecastCollectionType, ForecastDataType>(
    collections.forecast as ForecastCollectionType,
    (data) => {
      const formated_date = getFormatedDate(data.date)
      data.formated_date = formated_date
      data.weather = Number(data.weather) === -9999 ? DEFAULT_WEATHER : data.weather
      data.date = new Date(formated_date).getTime()
    },
  )
  return database
}
