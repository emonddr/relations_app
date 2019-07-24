import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Order6, Order6Relations, Customer6} from '../models';
import {MyPostgresqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {Customer6Repository} from './customer6.repository';

export class Order6Repository extends DefaultCrudRepository<
  Order6,
  typeof Order6.prototype.id,
  Order6Relations
> {
  public readonly customer6: BelongsToAccessor<Customer6, typeof Order6.prototype.id>;

   constructor(
    @inject('datasources.my_postgresql') dataSource: MyPostgresqlDataSource, @repository.getter('Customer6Repository') protected customer6RepositoryGetter: Getter<Customer6Repository>,
  ) {
    super(Order6, dataSource);
    this.customer6 = this.createBelongsToAccessorFor('customer6', customer6RepositoryGetter,);
  }
}