const createUserMock = {
  name: 'Emerson Moreira',
  email: 'eemr3@email.com',
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

const loginUserMock = {
  email: 'eemr3@email.com',
  password: '123456', //123456
};

const loginUserErrorMock = {
  email: 'eeeeeee@email.com',
  password: 'errosenha123',
};

module.exports = {
  createUserMock,
  findAllUserMOck,
  findOneUserMock,
  loginUserMock,
  loginUserErrorMock,
};
