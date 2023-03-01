const express = require("express");
const { registerValidationSchema, loginValidationSchema } = require("../../../../models");
const {registerUser, loginUser} = require("../../../controllers");

const router = express.Router();

router.post("/register", registerValidationSchema, registerUser);

router.post("/login", loginValidationSchema, loginUser);

module.exports = router;
