import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order9, Order9Relations, Customer9} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer9Repository} from './customer9.repository';

export class Order9Repository extends DefaultCrudRepository<
  Order9,
  typeof Order9.prototype.id,
  Order9Relations
> {
  public readonly customer9: BelongsToAccessor<Customer9, typeof Order9.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer9Repository') protected customer9RepositoryGetter: Getter<Customer9Repository>,
  ) {
    super(Order9, dataSource);
    this.customer9 = this.createBelongsToAccessorFor('customer9', customer9RepositoryGetter,);
  }
}