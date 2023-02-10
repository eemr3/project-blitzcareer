import { AddAccount } from '../../../domain/use-cases/add-account';
import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequest, serverError, success } from '../../helpers/http.helper';
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../../protocols';

export class SignUpController implements Controller {
  constructor(
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const fildsName = ['name', 'email', 'password', 'passwordConfirmation'];

      for (const field of fildsName) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const { name, email, password, passwordConfirmation } = httpRequest.body;
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'));
      }

      const isValied = this.emailValidator.isValid(email);
      if (!isValied) {
        return badRequest(new InvalidParamError('email'));
      }
      const { body } = httpRequest;
      const account = await this.addAccount.add(body);

      return success(account);
    } catch (error) {
      return serverError();
    }
  }
}
