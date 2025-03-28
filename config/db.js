// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "navruz",
//   password: "1111",
//   port: 1234,
// });

// module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: 'postgresql://eshmat:i4A1s4mGmmpYtZuCGyqwIgGVvqjOGJZp@dpg-cv4k0r8fnakc73botpjg-a.oregon-postgres.render.com/navruz_hs1n',
  ssl: {
    rejectUnauthorized: false, // Required for Render PostgreSQL
  },
});

module.exports = pool;