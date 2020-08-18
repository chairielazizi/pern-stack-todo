const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "0193311001",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;