import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order30, Order30Relations, Customer30} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer30Repository} from './customer30.repository';

export class Order30Repository extends DefaultCrudRepository<
  Order30,
  typeof Order30.prototype.id,
  Order30Relations
> {
  public readonly customer30: BelongsToAccessor<Customer30, typeof Order30.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer30Repository') protected customer30RepositoryGetter: Getter<Customer30Repository>,
  ) {
    super(Order30, dataSource);
    this.customer30 = this.createBelongsToAccessorFor('customer30', customer30RepositoryGetter,);
  }
}