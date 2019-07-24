import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order25, Order25Relations, Customer25} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer25Repository} from './customer25.repository';

export class Order25Repository extends DefaultCrudRepository<
  Order25,
  typeof Order25.prototype.id,
  Order25Relations
> {
  public readonly customer25: BelongsToAccessor<Customer25, typeof Order25.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer25Repository') protected customer25RepositoryGetter: Getter<Customer25Repository>,
  ) {
    super(Order25, dataSource);
    this.customer25 = this.createBelongsToAccessorFor('customer25', customer25RepositoryGetter,);
  }
}