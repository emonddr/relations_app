import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order3, Order3Relations, Customer3} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer3Repository} from './customer3.repository';

export class Order3Repository extends DefaultCrudRepository<
  Order3,
  typeof Order3.prototype.id,
  Order3Relations
> {
  public readonly customer3: BelongsToAccessor<Customer3, typeof Order3.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer3Repository') protected customer3RepositoryGetter: Getter<Customer3Repository>,
  ) {
    super(Order3, dataSource);
    this.customer3 = this.createBelongsToAccessorFor('customer3', customer3RepositoryGetter,);
  }
}