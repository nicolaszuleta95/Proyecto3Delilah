const Sequelize = require("sequelize");

const { DB_HOST, DB_DATABASE, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
});

module.exports = sequelize;
