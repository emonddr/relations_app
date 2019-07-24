import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order20, Order20Relations, Customer20} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer20Repository} from './customer20.repository';

export class Order20Repository extends DefaultCrudRepository<
  Order20,
  typeof Order20.prototype.id,
  Order20Relations
> {
  public readonly customer20: BelongsToAccessor<Customer20, typeof Order20.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer20Repository') protected customer20RepositoryGetter: Getter<Customer20Repository>,
  ) {
    super(Order20, dataSource);
    this.customer20 = this.createBelongsToAccessorFor('customer20', customer20RepositoryGetter,);
  }
}