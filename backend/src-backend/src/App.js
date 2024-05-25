const express = require("express");
const cors = require("cors");
const { pool } = require("./Model/dataBaseModel");
const bookRouter = require("./Routes/BookRoute");
const userRouter = require("./Routes/UserRoute");
const App = express();

const port = process.env.port || 3001;

App.use(express.json());
App.use(cors());
App.use("/api", bookRouter);
App.use("/api/user", userRouter);

pool.connect((err, client, release) => {
	if (err) {
		return console.error('Veritabani baglanti hatasi: ', err.stack);
	}
	console.log('Veritabani baglantisi basarili');
});

App.listen(port, (req,res) => {
	console.log(`Server is running on port : ${port}`);
})