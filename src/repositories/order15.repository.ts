import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order15, Order15Relations, Customer15} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer15Repository} from './customer15.repository';

export class Order15Repository extends DefaultCrudRepository<
  Order15,
  typeof Order15.prototype.id,
  Order15Relations
> {
  public readonly customer15: BelongsToAccessor<Customer15, typeof Order15.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer15Repository') protected customer15RepositoryGetter: Getter<Customer15Repository>,
  ) {
    super(Order15, dataSource);
    this.customer15 = this.createBelongsToAccessorFor('customer15', customer15RepositoryGetter,);
  }
}