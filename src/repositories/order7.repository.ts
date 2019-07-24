import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order7, Order7Relations, Customer7} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer7Repository} from './customer7.repository';

export class Order7Repository extends DefaultCrudRepository<
  Order7,
  typeof Order7.prototype.id,
  Order7Relations
> {
  public readonly customer7: BelongsToAccessor<Customer7, typeof Order7.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer7Repository') protected customer7RepositoryGetter: Getter<Customer7Repository>,
  ) {
    super(Order7, dataSource);
    this.customer7 = this.createBelongsToAccessorFor('customer7', customer7RepositoryGetter,);
  }
}