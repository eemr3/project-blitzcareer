import { AddAccountRepoistory } from '../../../../data/protocols/add-account.repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/use-cases/add-account';
import { MongoHelper } from '../../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepoistory {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts');
    const result = await accountCollection.insertOne(accountData);
    const account = await accountCollection.findOne(result.insertedId);
    const { _id, name, email, password } = account;
    const newAccount = {
      id: _id.toJSON(),
      name: name,
      email: email,
      password: password,
    };

    return newAccount;
  }
}
