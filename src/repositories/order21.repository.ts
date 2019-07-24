import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order21, Order21Relations, Customer21} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer21Repository} from './customer21.repository';

export class Order21Repository extends DefaultCrudRepository<
  Order21,
  typeof Order21.prototype.id,
  Order21Relations
> {
  public readonly customer21: BelongsToAccessor<Customer21, typeof Order21.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer21Repository') protected customer21RepositoryGetter: Getter<Customer21Repository>,
  ) {
    super(Order21, dataSource);
    this.customer21 = this.createBelongsToAccessorFor('customer21', customer21RepositoryGetter,);
  }
}