import { MissingParamError } from '../../errors/missing-param.error';
import { badRequest } from '../../helpers/http.helper';
import { HttpRequest, HttpResponse } from '../../protocols/http';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const fildsName = ['name', 'email', 'password'];

    for (const field of fildsName) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
