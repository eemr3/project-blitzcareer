'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ToDos',
      [
        {
          title: 'Supermercado',
          description: 'Ir ao supermercado realizar as compras do mês.',
          status: 'Pendente',
          userId: 1,
          createdAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Banco',
          description:
            'Ir ao banco conversaro como gerente sobre o imprestimo.',
          status: 'Em andamento',
          userId: 1,
          createdAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Carro',
          description: 'Levar o carro para lavar.',
          status: 'Pronto',
          userId: 1,
          createdAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt:  Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('ToDos', null, {});
  },
};
