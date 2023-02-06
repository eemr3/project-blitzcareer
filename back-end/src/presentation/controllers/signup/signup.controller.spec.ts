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
  });
});