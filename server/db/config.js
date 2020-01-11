const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST, DB_PASS } = process.env;

const localMariaConfig = {
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'nodela',
  dialect: 'mariadb',
  dialectOptions: {
    connectionTimeout: 1000
  }
};

const sqlConfig = {
  user: 'root',
  host: DB_HOST,
  password: DB_PASS,
  dialect: 'mysql',
  database: 'nodela'
};

module.exports = {
  localMariaConfig: localMariaConfig,
  sqlConfig: sqlConfig,
}
