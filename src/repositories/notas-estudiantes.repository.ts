import {DefaultCrudRepository} from '@loopback/repository';
import {NotasEstudiantes, NotasEstudiantesRelations} from '../models';
import {DbDatosEstudiantesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotasEstudiantesRepository extends DefaultCrudRepository<
  NotasEstudiantes,
  typeof NotasEstudiantes.prototype.idNotasEstudiantes,
  NotasEstudiantesRelations
> {
  constructor(
    @inject('datasources.db_DatosEstudiantes') dataSource: DbDatosEstudiantesDataSource,
  ) {
    super(NotasEstudiantes, dataSource);
  }
}
