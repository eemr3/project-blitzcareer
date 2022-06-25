const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const ToDoModel = require('../../database/models/todo');

describe('O model de ToDo', () => {
  const ToDo = ToDoModel(sequelize, dataTypes);
  const toDo = new ToDo();

  describe('possui o nme "ToDo"', () => {
    checkModelName(ToDo)('ToDo');
  });

  describe('possui as propriedades "title", "description", "status", "userId"', () => {
    ['title', 'description', 'status', 'userId'].forEach(
      checkPropertyExists(toDo),
    );
  });
});
