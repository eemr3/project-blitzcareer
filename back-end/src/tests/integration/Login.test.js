const chai = require('chai');
const chaiHttp = require('chai-http');
const { timeout } = require('frisby');
const Response = require('superagent');

chai.use(chaiHttp);

const { expect } = chai;
const app = require('../../api/app');
const connection = require('../../database/models');
const { loginUserMock } = require('../mocks/User');
// const truncate = require('./truncate');

describe('Login', () => {
  let chaiHttpResponse = Response;

  describe('rota "/login"', () => {
    beforeEach(async (done) => {
      timeout(10000)
      done();
    });

    it('ao efetuar o login com sucesso', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(loginUserMock);

      expect(chaiHttpResponse.status).to.be.equal(200);
      expect(chaiHttpResponse.body).to.have.property('token');
      
    });
  });
});
