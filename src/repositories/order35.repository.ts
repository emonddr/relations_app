import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order35, Order35Relations, Customer35} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer35Repository} from './customer35.repository';

export class Order35Repository extends DefaultCrudRepository<
  Order35,
  typeof Order35.prototype.id,
  Order35Relations
> {
  public readonly customer35: BelongsToAccessor<Customer35, typeof Order35.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer35Repository') protected customer35RepositoryGetter: Getter<Customer35Repository>,
  ) {
    super(Order35, dataSource);
    this.customer35 = this.createBelongsToAccessorFor('customer35', customer35RepositoryGetter,);
  }
}