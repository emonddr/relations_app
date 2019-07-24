import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order32, Order32Relations, Customer32} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer32Repository} from './customer32.repository';

export class Order32Repository extends DefaultCrudRepository<
  Order32,
  typeof Order32.prototype.id,
  Order32Relations
> {
  public readonly customer32: BelongsToAccessor<Customer32, typeof Order32.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer32Repository') protected customer32RepositoryGetter: Getter<Customer32Repository>,
  ) {
    super(Order32, dataSource);
    this.customer32 = this.createBelongsToAccessorFor('customer32', customer32RepositoryGetter,);
  }
}