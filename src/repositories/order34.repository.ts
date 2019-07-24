import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order34, Order34Relations, Customer34} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer34Repository} from './customer34.repository';

export class Order34Repository extends DefaultCrudRepository<
  Order34,
  typeof Order34.prototype.id,
  Order34Relations
> {
  public readonly customer34: BelongsToAccessor<Customer34, typeof Order34.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer34Repository') protected customer34RepositoryGetter: Getter<Customer34Repository>,
  ) {
    super(Order34, dataSource);
    this.customer34 = this.createBelongsToAccessorFor('customer34', customer34RepositoryGetter,);
  }
}