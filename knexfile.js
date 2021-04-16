require("dotenv").config();
var parse = require("pg-connection-string").parse;

let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PW,
      database: process.env.DB_DEV_NAME,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
