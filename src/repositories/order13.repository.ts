import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order13, Order13Relations, Customer13} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer13Repository} from './customer13.repository';

export class Order13Repository extends DefaultCrudRepository<
  Order13,
  typeof Order13.prototype.id,
  Order13Relations
> {
  public readonly customer13: BelongsToAccessor<Customer13, typeof Order13.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer13Repository') protected customer13RepositoryGetter: Getter<Customer13Repository>,
  ) {
    super(Order13, dataSource);
    this.customer13 = this.createBelongsToAccessorFor('customer13', customer13RepositoryGetter,);
  }
}