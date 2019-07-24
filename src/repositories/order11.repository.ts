import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order11, Order11Relations, Customer11} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer11Repository} from './customer11.repository';

export class Order11Repository extends DefaultCrudRepository<
  Order11,
  typeof Order11.prototype.id,
  Order11Relations
> {
  public readonly customer11: BelongsToAccessor<Customer11, typeof Order11.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer11Repository') protected customer11RepositoryGetter: Getter<Customer11Repository>,
  ) {
    super(Order11, dataSource);
    this.customer11 = this.createBelongsToAccessorFor('customer11', customer11RepositoryGetter,);
  }
}