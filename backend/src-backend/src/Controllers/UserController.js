const { pool } = require("../Model/dataBaseModel");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


const registerUser = async(req, res) => {
	const {email, password} = req.body;

	if (!email || !password) {
		return res.status(400).send("Email and Password are required.")
	}

	try {
		const hashedPass = await bcrypt.hash(password, 10);
		const result = await pool.query(
			"INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
			[email, hashedPass]
		);
		res.status(201).json(result.rows[0]);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
}

const loginUser = async(req,res) => {
	const {email, password} = req.body;
	
	if (!email || !password) {
		return res.status(400).send("Email and password are required.");
	}

	try {
		const result = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email]
		);

		if (result.rows.length === 0) {
			return res.status(400).send("Invalid email or password");
		}

		const user = result.rows[0];
		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res.status(400).send("Invalid email or password");
		}

		res.status(200).json({ message: "Login Success", user});
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error.");
	}
}

module.exports = {registerUser, loginUser};