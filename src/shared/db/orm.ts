import { MikroORM } from '@mikro-orm/core'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'

export const orm = await MikroORM.init({
  entities: ['dist/models/**/*.entity.js'],
  entitiesTs: ['src/models/**/*.entity.ts'],
  dbName: 'database-1', // el nombre del db
  type: 'mysql',
  clientUrl: 'mysql://dsw:dsw@localhost:3306/database-1', // falta agregar el url correspondiente
  highlighter: new SqlHighlighter(),
  debug: true,
  schemaGenerator: {
    //never in production
    disableForeignKeys: true,
    createForeignKeyConstraints: true,
    ignoreSchema: [],
  },
})

export const syncSchema = async () => {
  const generator = orm.getSchemaGenerator()
  /*   
  await generator.dropSchema()
  await generator.createSchema() // correrlo por primera ves para que cargue las tablas
  */
  await generator.updateSchema()
}