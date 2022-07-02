const request = require('supertest');
const app = require('../../src/api/app');

describe('Tasks', () => {
  
  describe('rota "/tasks"', () => {
 
    it('é possível cadastar uma nova tarefa', async () => {
      const response = await request(app)
        .post('/tasks')
        .send({
          title: 'Ir ao banco',
          description: 'Realizar o deposito na conta da minha esposa',
          status: 'pendente',
        })
        .set({
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('updatedAt');
      expect(response.body).toHaveProperty('createdAt');
    });

    it('é possível listar todas as tarefa', async () => {
      const response = await request(app).get('/tasks').set({
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
      });

      expect(response.status).toBe(200);
      for (let index = 0; index < response.body.length; index++) {
        expect(response.body[index]).toHaveProperty('id');
        expect(response.body[index]).toHaveProperty('title');
        expect(response.body[index]).toHaveProperty('description');
        expect(response.body[index]).toHaveProperty('status');
        expect(response.body[index]).toHaveProperty('userId');
        expect(response.body[index]).toHaveProperty('createdAt');
        expect(response.body[index]).toHaveProperty('updatedAt');
      }
    });

    it('é possível listar uma tarefa pelo id', async () => {
      const response = await request(app).get('/tasks/1').set({
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
      });

      expect(response.status).toBe(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('userId');
      expect(response.body).toHaveProperty('createdAt');
      expect(response.body).toHaveProperty('updatedAt');
    });

    it('é possível atualizar uma tarefa pelo id', async () => {
      const response = await request(app)
        .put('/tasks/1')
        .send({
          title: 'Supermercado',
          description: 'Ir ao supermercado realizar as compras do mês.',
          status: 'Pronto',
        })
        .set({
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
        });

      expect(response.status).toBe(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('userId');
      expect(response.body).toHaveProperty('createdAt');
      expect(response.body).toHaveProperty('updatedAt');
    });

    it('é possível deletar uma tarefa pelo id', async () => {
      const response = await request(app)
        .delete('/tasks/1')
        .set({
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiRW1lcnNvbiBNb3JlaXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIifSwiaWF0IjoxNjU2NzEwMjQ3LCJleHAiOjE2NTkzMDIyNDd9.Q2Wmx_3Px-ADUb-5tC7HDYHs23WuZZDoWT-GNx3Q73U',
        });

      expect(response.status).toBe(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Task deleted successfully');
    });
  });
});
