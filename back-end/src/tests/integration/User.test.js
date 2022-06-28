const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const Response = require('superagent');

chai.use(chaiHttp);

const { expect } = chai;
const connection = require('../../database/models');
const app = require('../../api/app');
const { createUserMock } = require('../mocks/User');

describe('User', () => {
  describe('rota "/users"', () => {
    let chaiHttpResponse = Response;

    describe('metodo "POST"', () => {
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
    describe('rota "/users"', () => {
      it('busca todos os usuários cadastrados', async () => {
        chaiHttpResponse = await chai.request(app).get('/users');

        expect(chaiHttpResponse.status).to.be.equal(200);
        for (let index = 0; index < chaiHttpResponse.body.length; index += 1) {
          expect(chaiHttpResponse.body[index]).to.have.property('id');
          expect(chaiHttpResponse.body[index]).to.have.property('name');
          expect(chaiHttpResponse.body[index]).to.have.property('email');
          expect(chaiHttpResponse.body[index]).to.not.have.property('password');
        }
      });
    });

    describe('rota "/users/:id"', () => {
      it('busca todos os usuários cadastrados', async () => {
        chaiHttpResponse = await chai.request(app).get('/users/1');

        expect(chaiHttpResponse.status).to.be.equal(200);

        expect(chaiHttpResponse.body).to.have.property('id');
        expect(chaiHttpResponse.body).to.have.property('name');
        expect(chaiHttpResponse.body).to.have.property('email');
        expect(chaiHttpResponse.body).to.not.have.property('password');
      });
    });
  });
});