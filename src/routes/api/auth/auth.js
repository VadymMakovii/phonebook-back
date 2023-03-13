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
  updateAvatar,
} = require("../../../controllers");

const { authentication, upload } = require("../../../middlewares");

const router = express.Router();

router.post("/register", registerValidationSchema, registerUser);

router.post("/login", loginValidationSchema, loginUser);

router.get("/current", authentication, currentUser);

router.post("/logout", authentication, logoutUser);

router.patch("/", authentication, updateSubscriptionValidation, patchUser);

router.patch("/avatars", authentication, upload.single("avatar"), updateAvatar);


module.exports = router;
