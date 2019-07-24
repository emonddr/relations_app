import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order4, Order4Relations, Customer4} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer4Repository} from './customer4.repository';

export class Order4Repository extends DefaultCrudRepository<
  Order4,
  typeof Order4.prototype.id,
  Order4Relations
> {
  public readonly customer4: BelongsToAccessor<Customer4, typeof Order4.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer4Repository') protected customer4RepositoryGetter: Getter<Customer4Repository>,
  ) {
    super(Order4, dataSource);
    this.customer4 = this.createBelongsToAccessorFor('customer4', customer4RepositoryGetter,);
  }
}