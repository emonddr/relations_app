import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order5, Order5Relations, Customer5} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer5Repository} from './customer5.repository';

export class Order5Repository extends DefaultCrudRepository<
  Order5,
  typeof Order5.prototype.id,
  Order5Relations
> {
  public readonly customer5: BelongsToAccessor<Customer5, typeof Order5.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer5Repository') protected customer5RepositoryGetter: Getter<Customer5Repository>,
  ) {
    super(Order5, dataSource);
    this.customer5 = this.createBelongsToAccessorFor('customer5', customer5RepositoryGetter,);
  }
}