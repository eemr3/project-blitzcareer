import * as request from 'supertest';
import { MongoHelper } from '../../infra/db/helpers/mongo-helper';
import app from '../config/app';

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__);
  });

  beforeEach(async () => {
    const accountCollections = await MongoHelper.getCollection('accounts');
    accountCollections.deleteMany({});
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  it('should return an account success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Emerson',
        email: 'eemr3@yahoo.com.br',
        password: '123456',
        passwordConfirmation: '123456',
      })
      .expect(201);
  });
});
