const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Por motivo didático e do desafio, o senha secreta do para o gerar e decodifiar
 * o token ficar explicita nesse arquivo, e também por motivo dos testes serem de integração
 * haja visto que colocando em uma váriavel de ambiente teira que passa junto e esse não
 * é o proposito da variável de ambiente.
 */

const JWT_SECRET = 'projetoblitzcarreira';

const createToken = (user) => {
  const token = jwt.sign({ user }, JWT_SECRET, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });

  return token;
};

const decodeToken = (token) => {
  try {
    const decoder = jwt.verify(token, JWT_SECRET);
    return decoder;
  } catch (error) {
    return false;
  }
};

module.exports = {
  createToken,
  decodeToken,
};
