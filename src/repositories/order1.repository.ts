import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order1, Order1Relations, Customer1} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer1Repository} from './customer1.repository';

export class Order1Repository extends DefaultCrudRepository<
  Order1,
  typeof Order1.prototype.id,
  Order1Relations
> {
  public readonly customer1: BelongsToAccessor<Customer1, typeof Order1.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer1Repository') protected customer1RepositoryGetter: Getter<Customer1Repository>,
  ) {
    super(Order1, dataSource);
    this.customer1 = this.createBelongsToAccessorFor('customer1', customer1RepositoryGetter,);
  }
}