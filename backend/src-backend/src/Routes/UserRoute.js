const express = require("express");
const {registerUser, loginUser} = require("../Controllers/UserController");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;