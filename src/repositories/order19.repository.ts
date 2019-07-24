import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order19, Order19Relations, Customer19} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer19Repository} from './customer19.repository';

export class Order19Repository extends DefaultCrudRepository<
  Order19,
  typeof Order19.prototype.id,
  Order19Relations
> {
  public readonly customer19: BelongsToAccessor<Customer19, typeof Order19.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer19Repository') protected customer19RepositoryGetter: Getter<Customer19Repository>,
  ) {
    super(Order19, dataSource);
    this.customer19 = this.createBelongsToAccessorFor('customer19', customer19RepositoryGetter,);
  }
}