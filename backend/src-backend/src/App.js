const express = require("express");
const cors = require("cors");
const { pool } = require("./Model/dataBaseModel");
const bookRouter = require("./Routes/BookRoute");
const App = express();

const port = process.env.port || 3001;

App.use(express.json());
App.use(cors());
App.use("/api", bookRouter);

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Veritabani baglanti hatasi: ', err.stack);
	}
	console.log('Veritabani baglantisi basarili');
});

App.get("/", (req, res) => {
	console.log("test");
	res.send("Welcome our chatApp");
  });

App.listen(port, (req,res) => {
	console.log(`Server is running on port : ${port}`);
})