import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order17, Order17Relations, Customer17} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer17Repository} from './customer17.repository';

export class Order17Repository extends DefaultCrudRepository<
  Order17,
  typeof Order17.prototype.id,
  Order17Relations
> {
  public readonly customer17: BelongsToAccessor<Customer17, typeof Order17.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer17Repository') protected customer17RepositoryGetter: Getter<Customer17Repository>,
  ) {
    super(Order17, dataSource);
    this.customer17 = this.createBelongsToAccessorFor('customer17', customer17RepositoryGetter,);
  }
}