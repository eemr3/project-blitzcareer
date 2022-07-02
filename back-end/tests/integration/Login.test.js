const request = require('supertest');
const app = require('../../src/api/app');

describe('Loging', () => {
  it('é possível realizar login', async () => {
    const response = await request(app).post('/login').send({
      email: 'ichigo@gmail.com',
      password: '123456',
    });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });
});

