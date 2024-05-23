const express = require("express");
const {getBooks} = require("../Controllers/BookController");

const router = express.Router();

router.get("/getBook", getBooks);

module.exports = router;