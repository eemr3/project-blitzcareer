const request = require('supertest');
const app = require('../../src/api/app');
const { createUserMock } = require('../mocks/User');

describe('User', () => {
  describe('rota "/users"', () => {
    describe('metodo "POST"', () => {
      it('cria novo usuário com sucesso', async () => {
        response = await request(app)
          .post('/users')
          .send(createUserMock);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('password');
      });
    });
  });

  describe('metodo "GET"', () => {
    describe('rota "/users"', () => {
      it('busca todos os usuários cadastrados', async () => {
        response = await request(app)
          .get('/users')
          .set(
            'authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
          );

        expect(response.status).toBe(200);
        for (let index = 0; index < response.body.length; index += 1) {
          expect(response.body[index]).toHaveProperty('id');
          expect(response.body[index]).toHaveProperty('name');
          expect(response.body[index]).toHaveProperty('email');
          expect(response.body[index]).not.toHaveProperty('password');
        }
      });
    });

    describe('rota "/users/userid"', () => {
      it('busca todos os usuários cadastrados', async () => {
        response = await request(app)
          .get('/users/userid')
          .set(
            'authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
          );

        expect(response.status).toBe(200);

        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('toDos');
        expect(response.body).not.toHaveProperty('password');
      });
    });
  });
});
