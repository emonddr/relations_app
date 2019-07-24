import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order22, Order22Relations, Customer22} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer22Repository} from './customer22.repository';

export class Order22Repository extends DefaultCrudRepository<
  Order22,
  typeof Order22.prototype.id,
  Order22Relations
> {
  public readonly customer22: BelongsToAccessor<Customer22, typeof Order22.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer22Repository') protected customer22RepositoryGetter: Getter<Customer22Repository>,
  ) {
    super(Order22, dataSource);
    this.customer22 = this.createBelongsToAccessorFor('customer22', customer22RepositoryGetter,);
  }
}