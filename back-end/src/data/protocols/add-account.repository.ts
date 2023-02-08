import { AccountModel } from '../../domain/models/account';
import { AddAccountModel } from '../../domain/use-cases/add-account';

export interface AddAccountRepoistory {
  add(account: AddAccountModel): Promise<AccountModel>;
}
