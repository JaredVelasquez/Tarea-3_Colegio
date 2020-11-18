import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db_DatosEstudiantes',
  connector: 'mssql',
  url: 'mssql://Jared:123soleado@DESKTOP-K9PGG23/Colegio',
  host: 'DESKTOP-K9PGG23',
  port: 1433,
  user: 'Jared',
  password: '123soleado',
  database: 'Colegio'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDatosEstudiantesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db_DatosEstudiantes';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db_DatosEstudiantes', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
