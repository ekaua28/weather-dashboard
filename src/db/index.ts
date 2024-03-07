import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb'
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory'
import WeatherCollection, { WeatherCollectionType } from './weather'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { RxDBUpdatePlugin } from 'rxdb/plugins/update'

addRxPlugin(RxDBUpdatePlugin)
addRxPlugin(RxDBDevModePlugin)

type DatabaseCollectionsType = {
  weather: WeatherCollectionType
}

export type DatabaseType = RxDatabase<DatabaseCollectionsType>

interface IDatabase {
  create(): Promise<DatabaseType>
  get(): DatabaseType
}

export class Database implements IDatabase {
  private static instance: Database;
  constructor() {
      if (Database.instance) {
          return Database.instance;
      }

      Database.instance = this;
  }

  db: DatabaseType | undefined

  async create() {
    if (!this.db) {
      const database: DatabaseType = await createRxDatabase({
        name: 'weatherdb',
        storage: getRxStorageMemory(),
      })

      await database.addCollections({ ...WeatherCollection })
      this.db = database
      return this.db
    } else {
      return Promise.resolve(this.db)
    }
  }

  get() {
    if (!this.db) {
      throw new Error('Database not initialize!')
    }
    return this.db
  }
} 
