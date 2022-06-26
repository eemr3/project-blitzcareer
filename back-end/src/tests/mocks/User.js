const createUserMock = {
  name: 'Emerson',
  email: 'email@test.com',
  password: '123456',
};

const findAllUserMOck = [
  {
    id: 1,
    name: 'Emerson',
    email: 'email@test.com',
  },
  {
    id: 2,
    name: 'Pedro',
    email: 'pedro@test.com',
  },
];

const findOneUserMock = {
  id: 1,
  name: 'Emerson',
  email: 'email@test.com',
};

module.exports = {
  createUserMock,
  findAllUserMOck,
  findOneUserMock,
};
