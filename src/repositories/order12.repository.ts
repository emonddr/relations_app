import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order12, Order12Relations, Customer12} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer12Repository} from './customer12.repository';

export class Order12Repository extends DefaultCrudRepository<
  Order12,
  typeof Order12.prototype.id,
  Order12Relations
> {
  public readonly customer12: BelongsToAccessor<Customer12, typeof Order12.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer12Repository') protected customer12RepositoryGetter: Getter<Customer12Repository>,
  ) {
    super(Order12, dataSource);
    this.customer12 = this.createBelongsToAccessorFor('customer12', customer12RepositoryGetter,);
  }
}