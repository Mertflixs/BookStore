const { pool } = require("../Model/dataBaseModel");
const jwt = require("jsonwebtoken");

const getBooks = async(req, res) => {
	try {
		const response = await pool.query('SELECT * FROM books');
		res.status(200).json(response);
	} catch (err) {
		res.status(500).json(err);
	}
}

module.exports = {getBooks};