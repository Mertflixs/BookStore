const express = require("express");
const cors = require("cors");
const {Pool} = require("pg");

const App = express();

const port = process.env.port || 3001;

const pool = new Pool({
	user: 'postgres',
	host: 'postgres',
	database: 'book',
	password: '123',
	port: 5432,
});

const getBooks = async () => {
	try {
		const res = await pool.query('SELECT * FROM books');
		console.log('Books: ', res.rowCount);
	} catch (err) {
		console.log(err);
	}
}

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Veritabani baglanti hatasi: ', err.stack);
	}
	console.log('Veritabani baglantisi basarili');
});

App.listen(port, (req,res) => {
	console.log(`Server is running on port : ${port}`);
	getBooks();
})