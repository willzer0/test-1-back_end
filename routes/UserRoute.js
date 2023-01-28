const express = require("express");
const getUsers = require("../controllers/UserController.js");
const router = express.Router();

router.get("users", getUsers);

export default router;
