import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './my-postgresql.datasource.json';

export class MyPostgresqlDataSource extends juggler.DataSource {
  static dataSourceName = 'my_postgresql';

  constructor(
    @inject('datasources.config.my_postgresql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
