const express = require("express");

const {
  registerValidationSchema,
  loginValidationSchema,
  updateSubscriptionValidation,
} = require("../../../../models");

const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  patchUser,
} = require("../../../controllers");

const { authentication } = require("../../../middlewares");

const router = express.Router();

router.post("/register", registerValidationSchema, registerUser);

router.post("/login", loginValidationSchema, loginUser);

router.get("/current", authentication, currentUser);

router.post("/logout", authentication, logoutUser);

router.patch("/", authentication, updateSubscriptionValidation, patchUser);

module.exports = router;
