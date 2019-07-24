import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order2, Order2Relations, Customer2} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer2Repository} from './customer2.repository';

export class Order2Repository extends DefaultCrudRepository<
  Order2,
  typeof Order2.prototype.id,
  Order2Relations
> {
  public readonly customer2: BelongsToAccessor<Customer2, typeof Order2.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer2Repository') protected customer2RepositoryGetter: Getter<Customer2Repository>,
  ) {
    super(Order2, dataSource);
    this.customer2 = this.createBelongsToAccessorFor('customer2', customer2RepositoryGetter,);
  }
}