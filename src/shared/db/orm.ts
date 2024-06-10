import { MikroORM } from '@mikro-orm/core'
import { SqlHighlighter } from '@mikro-orm/sql-highlighter'

export const orm = await MikroORM.init({
  entities: ['dist/models/**/*.entity.js'],
  entitiesTs: ['src/models/**/*.entity.ts'],
  dbName: 'Bdproducts_fullexact', // el nombre del db
  type: 'mysql',
  clientUrl: 'mysql://Bdproducts_fullexact:82b624cdac1a3d8d0f50be375fd8ecebef363f56@617.h.filess.io:3307/Bdproducts_fullexact', // falta agregar el url correspondiente
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

  //await generator.dropSchema()
  await generator.createSchema() // correrlo por primera ves para que cargue las tablas

  //await generator.updateSchema()
}