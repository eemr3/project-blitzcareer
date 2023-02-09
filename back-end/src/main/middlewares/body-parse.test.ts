import * as request from 'supertest';
import app from '../config/app';

describe('Body parse middleware', () => {
  it('should parse body as json', async () => {
    app.post('/test_body_parse', (req, res) => res.status(201).send(req.body));

    const response = await request(app)
      .post('/test_body_parse')
      .send({ name: 'Emerson' })
      .expect({ name: 'Emerson' });

    expect(response.status).toBe(201);
  });
});
