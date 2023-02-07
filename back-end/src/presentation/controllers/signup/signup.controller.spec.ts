import { MissingParamError } from '../../errors/missing-param.error';
import { SignUpController } from './signup.controller';

describe('Signup Controller', () => {
  it('should return 400 if no name it provider', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_amail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_passoerd',
      },
    };
    const response = sut.handle(httpRequest);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(new MissingParamError('name'));
  });

  it('should return 400 if no email it provider', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_passoerd',
      },
    };
    const response = sut.handle(httpRequest);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(new MissingParamError('email'));
  });

  it('should return 400 if no password it provider', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_amail@mail.com',
        passwordConfirmation: 'any_passoerd',
      },
    };

    const response = sut.handle(httpRequest);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(new MissingParamError('password'));
  });

  it('should return 400 if no passwordConfirmation it provider', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_amail@mail.com',
        password: 'any_passoerd',
      },
    };

    const response = sut.handle(httpRequest);
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual(new MissingParamError('passwordConfirmation'));
  });
});
