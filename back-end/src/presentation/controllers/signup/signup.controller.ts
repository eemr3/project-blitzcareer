import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequest, serverError } from '../../helpers/http.helper';
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../../protocols';

export class SignUpController implements Controller {
  constructor(private readonly emailValidator: EmailValidator) {}

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const fildsName = ['name', 'email', 'password', 'passwordConfirmation'];

      for (const field of fildsName) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isValied = this.emailValidator.isValid(httpRequest.body.email);
      if (!isValied) {
        return badRequest(new InvalidParamError('email'));
      }
    } catch (error) {
      return serverError();
    }
  }
}
