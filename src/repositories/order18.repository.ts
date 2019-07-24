import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order18, Order18Relations, Customer18} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer18Repository} from './customer18.repository';

export class Order18Repository extends DefaultCrudRepository<
  Order18,
  typeof Order18.prototype.id,
  Order18Relations
> {
  public readonly customer18: BelongsToAccessor<Customer18, typeof Order18.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer18Repository') protected customer18RepositoryGetter: Getter<Customer18Repository>,
  ) {
    super(Order18, dataSource);
    this.customer18 = this.createBelongsToAccessorFor('customer18', customer18RepositoryGetter,);
  }
}