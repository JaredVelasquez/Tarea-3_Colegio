import {DefaultCrudRepository} from '@loopback/repository';
import {DatosEstudiantes, DatosEstudiantesRelations} from '../models';
import {DbDatosEstudiantesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DatosEstudiantesRepository extends DefaultCrudRepository<
  DatosEstudiantes,
  typeof DatosEstudiantes.prototype.idEstudiante,
  DatosEstudiantesRelations
> {
  constructor(
    @inject('datasources.db_DatosEstudiantes') dataSource: DbDatosEstudiantesDataSource,
  ) {
    super(DatosEstudiantes, dataSource);
  }
}
