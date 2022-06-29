const chai = require('chai');
const chaiHttp = require('chai-http');
const Response = require('superagent');

chai.use(chaiHttp);

const { expect } = chai;
const app = require('../../api/app');
const connection = require('../../database/models');
const { loginUserMock, loginUserErrorMock } = require('../mocks/User');
const truncate = require('./truncate');

describe('Login', () => {
  let chaiHttpResponse = Response;

  describe('rota "/login"', () => {
    it('ao efetuar o login com sucesso', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginUserMock);

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
    });

    // it('ao efetuar o login sem sucesso', async () => {
    //   chaiHttpResponse = await chai
    //     .request(app)
    //     .post('/login')
    //     .send(loginUserErrorMock);

    //   expect(chaiHttpResponse.status).to.be.equal(401);
    //   expect(chaiHttpResponse.body.message).to.be.equal(
    //     'Incorrect email or password',
    //   );
    // });
  });
});
