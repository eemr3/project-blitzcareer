const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const Response = require('superagent');

chai.use(chaiHttp);

const { expect } = chai;
const UserModel = require('../../database/models');
const app = require('../../api/app');
const { createUserMock } = require('../mocks/User');

describe('User', () => {
  describe('rota "/users"', () => {
    const chaiHttpResponse = Response;

    describe('metodo "POST"', () => {
      before(async () => {
        stub(UserModel, 'create').resolves(createUserMock);
      });

      before(async () => {
        UserModel.create.restore();
      });

      it('cria novo usuário com sucesso', async () => {
        chaiHttpResponse = await chai.request(app).post('/users').send({
          name: 'Emerson',
          email: 'teste@email.com',
          password: '123456',
        });
        expect(chaiHttpResponse.status).to.be.equal(201);
      });
    });
  });
});
