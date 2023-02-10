import { DbAddAccount } from '../../data/use-cases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';
import { SignUpController } from '../../presentation/controllers/signup/signup.controller';
import { EmailValidatorAdapter } from '../../util/email-validator.adapter';

const SALT = 12;

export const makeSignUpController = (): SignUpController => {
  const bcriptAdapter = new BcryptAdapter(SALT);
  const accountMongoRepository = new AccountMongoRepository();
  const emailValidatorAdapter = new EmailValidatorAdapter();
  const dbAddAccount = new DbAddAccount(bcriptAdapter, accountMongoRepository);
  const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount);

  return signUpController;
};
