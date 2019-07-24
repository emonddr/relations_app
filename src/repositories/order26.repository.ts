import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order26, Order26Relations, Customer26} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer26Repository} from './customer26.repository';

export class Order26Repository extends DefaultCrudRepository<
  Order26,
  typeof Order26.prototype.id,
  Order26Relations
> {
  public readonly customer26: BelongsToAccessor<Customer26, typeof Order26.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer26Repository') protected customer26RepositoryGetter: Getter<Customer26Repository>,
  ) {
    super(Order26, dataSource);
    this.customer26 = this.createBelongsToAccessorFor('customer26', customer26RepositoryGetter,);
  }
}