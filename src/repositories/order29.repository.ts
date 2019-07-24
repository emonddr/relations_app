import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order29, Order29Relations, Customer29} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer29Repository} from './customer29.repository';

export class Order29Repository extends DefaultCrudRepository<
  Order29,
  typeof Order29.prototype.id,
  Order29Relations
> {
  public readonly customer29: BelongsToAccessor<Customer29, typeof Order29.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer29Repository') protected customer29RepositoryGetter: Getter<Customer29Repository>,
  ) {
    super(Order29, dataSource);
    this.customer29 = this.createBelongsToAccessorFor('customer29', customer29RepositoryGetter,);
  }
}