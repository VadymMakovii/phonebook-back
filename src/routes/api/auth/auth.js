const express = require("express");

const {
  registerValidationSchema,
  loginValidationSchema,
  updateSubscriptionValidation,
  resendEmailValidation
} = require("../../../../models");

const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  patchUser,
  updateAvatar,
  verifyEmail,
  resendVerificationEmail
} = require("../../../controllers");

const { authentication, upload } = require("../../../middlewares");

const router = express.Router();

router.post("/register", registerValidationSchema, registerUser);

router.post("/login", loginValidationSchema, loginUser);

router.post("/verify", resendEmailValidation, resendVerificationEmail);

router.get("/verify/:verificationToken", verifyEmail);

router.get("/current", authentication, currentUser);

router.post("/logout", authentication, logoutUser);

router.patch("/", authentication, updateSubscriptionValidation, patchUser);

router.patch("/avatars", authentication, upload.single("avatar"), updateAvatar);


module.exports = router;
