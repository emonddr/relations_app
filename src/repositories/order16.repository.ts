import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order16, Order16Relations, Customer16} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer16Repository} from './customer16.repository';

export class Order16Repository extends DefaultCrudRepository<
  Order16,
  typeof Order16.prototype.id,
  Order16Relations
> {
  public readonly customer16: BelongsToAccessor<Customer16, typeof Order16.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer16Repository') protected customer16RepositoryGetter: Getter<Customer16Repository>,
  ) {
    super(Order16, dataSource);
    this.customer16 = this.createBelongsToAccessorFor('customer16', customer16RepositoryGetter,);
  }
}