const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "navruz",
  password: "1111",
  port: 1234,
});

module.exports = pool;