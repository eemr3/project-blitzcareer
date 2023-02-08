import { AccountModel } from '../../../domain/models/account';
import { AddAccount, AddAccountModel } from '../../../domain/use-cases/add-account';
import { AddAccountRepoistory } from '../../protocols/add-account.repository';
import { Encrypter } from '../../protocols/encryper';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepoistory,
  ) {}

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    await this.addAccountRepository.add({ ...accountData, password: hashedPassword });
    return await null;
  }
}
