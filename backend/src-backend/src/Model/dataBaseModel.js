const {Pool} = require("pg");

const pool = new Pool({
	user: 'postgres',
	host: 'postgres', //postgres olucak
	database: 'book',
	password: '123',
	port: 5432,
});

module.exports = { pool };