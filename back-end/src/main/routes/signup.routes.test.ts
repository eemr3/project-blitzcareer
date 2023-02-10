import * as request from 'supertest';
import app from '../config/app';

describe('Signup Routes', () => {
  it('should return an account success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Emerson',
        email: 'eemr3@yahoo.com.br',
        password: '123456',
        passwordConfirmation: '123456',
      })
      .expect(200);
  });
});
