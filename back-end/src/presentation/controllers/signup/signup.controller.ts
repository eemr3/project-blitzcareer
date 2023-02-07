import { MissingParamError } from '../../errors/missing-param.error';
import { badRequest } from '../../helpers/http.helper';
import { Controller } from '../../protocols/controller';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const fildsName = ['name', 'email', 'password', 'passwordConfirmation'];

    for (const field of fildsName) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
