const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const Response = require('superagent');

chai.use(chaiHttp);

const { expect } = chai;
const { User } = require('../../database/models');
const app = require('../../api/app');
const { createUserMock, findAllUserMOck } = require('../mocks/User');

describe('User', () => {
  describe('rota "/users"', () => {
    let chaiHttpResponse = Response;

    describe('metodo "POST"', () => {
      before(() => {
        sinon.stub(User, 'create').resolves(createUserMock);
      });

      after(() => {
        User.create.restore();
      });

      it('cria novo usuário com sucesso', async () => {
        chaiHttpResponse = await chai
          .request(app)
          .post('/users')
          .send(createUserMock);
        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body).to.have.property('name');
        expect(chaiHttpResponse.body).to.have.property('email');
        expect(chaiHttpResponse.body).to.have.property('password');
      });
    });
  });

  describe('metodo "GET"', () => {
    before(() => {
      sinon.stub(User, 'findAll').resolves(findAllUserMOck);
    });

    after(() => {
      User.findAll.restore();
    });

    it('busca todos os usuários cadastrados', async () => {
      chaiHttpResponse = await await chai.request(app).get('/users');

      expect(chaiHttpResponse.status).to.be.equal(200);
    });
  });
});
