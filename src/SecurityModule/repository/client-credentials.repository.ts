import { GrantTypeEnum } from './../enum/grant-type.enum';
import { EntityRepository, Repository } from 'typeorm';
import { ClientCredentials } from '../entity/client-credentials.entity';
import { ClientCredentialsEnum } from '../enum/client-credentials.enum';

@EntityRepository(ClientCredentials)
export class ClientCredentialsRepository extends Repository<ClientCredentials> {
  async findByNameAndSecret(
    name: ClientCredentialsEnum,
    secret: string,
    grantType: GrantTypeEnum,
  ) {
    return this.findOne({ name, secret, grantType }, { relations: ['role'] });
  }
}
