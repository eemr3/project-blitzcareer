'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Ichigo',
          email: 'ichigo@gmail.com',
          password:
            '$2a$10$jAgEfROGhBUfFoyZ3zJFW.LREbApvhvxX9Ze61M8VUek/ouG5CDI6', //senha: 123456
        },
        {
          id: 2,
          name: 'John Doe',
          email: 'johndoe@email.com',
          password:
            '$2a$10$/pKyugGo0HQBuWvQbmV6ee5vy3ehnrvjPzQA4ZTljSGYl.8J/YGN6', //senha: jd123456
        },
        {
          id: 3,
          name: 'Naruto',
          email: 'naruto@email.com',
          password:
            '$2a$10$x.M1asA5xkq01zVpTKOZ.OvRwk2AQaRzUCtmWev5S.cjIKdHPzAlm', //senha 123456
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
