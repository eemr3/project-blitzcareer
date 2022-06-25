const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const UserModel = require('../../database/models/user');

describe('O model de User', () => {
  const User = UserModel(sequelize, dataTypes);
  const user = new User();

  describe('possui o nme "User"', () => {
    checkModelName(User)('User');
  });

  describe('possui as propriedades "name", "email", "password"', () => {
    ['name', 'email', 'password'].forEach(checkPropertyExists(user));
  });
});
