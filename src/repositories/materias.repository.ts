import {DefaultCrudRepository} from '@loopback/repository';
import {Materias, MateriasRelations} from '../models';
import {DbDatosEstudiantesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriasRepository extends DefaultCrudRepository<
  Materias,
  typeof Materias.prototype.idMaterias,
  MateriasRelations
> {
  constructor(
    @inject('datasources.db_DatosEstudiantes') dataSource: DbDatosEstudiantesDataSource,
  ) {
    super(Materias, dataSource);
  }
}
