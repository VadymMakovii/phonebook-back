const express = require("express");

const {
  registerValidationSchema,
  loginValidationSchema
} = require("../../../../models");

const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateAvatar
} = require("../../../controllers");

const { authentication, upload } = require("../../../middlewares");

const router = express.Router();

router.post("/register", registerValidationSchema, registerUser);

router.post("/login", loginValidationSchema, loginUser);

router.get("/current", authentication, currentUser);

router.post("/logout", authentication, logoutUser);

router.patch("/avatars", authentication, upload.single("avatar"), updateAvatar);


module.exports = router;
