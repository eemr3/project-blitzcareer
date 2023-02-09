import * as request from 'supertest';
import app from '../config/app';

describe('CORS Middleware', () => {
  it('should enables CORS', async () => {
    app.post('/test_cors', (req, res) => res.status(200).send());

    const response = await request(app)
      .post('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*');

    expect(response.status).toBe(200);
  });
});
