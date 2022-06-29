require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PWD,
    database: process.env.NODE_ENV === 'development' && 'todo_list_db',
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PWD,
    database: process.env.NODE_ENV === 'test' && 'todo_list_db_test',
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
