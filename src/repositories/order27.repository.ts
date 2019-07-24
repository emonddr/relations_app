import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order27, Order27Relations, Customer27} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer27Repository} from './customer27.repository';

export class Order27Repository extends DefaultCrudRepository<
  Order27,
  typeof Order27.prototype.id,
  Order27Relations
> {
  public readonly customer27: BelongsToAccessor<Customer27, typeof Order27.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer27Repository') protected customer27RepositoryGetter: Getter<Customer27Repository>,
  ) {
    super(Order27, dataSource);
    this.customer27 = this.createBelongsToAccessorFor('customer27', customer27RepositoryGetter,);
  }
}