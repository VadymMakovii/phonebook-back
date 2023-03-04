const express = require("express");
const {
  addContactValidation,
  updateContactValidation,
  updateFavoriteValidation,
} = require("../../../../models");
const { isValidId, authentication } = require("../../../middlewares");
const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact,
} = require("../../../controllers");

const router = express.Router();

router.get("/", authentication, getAllContact);

router.get("/:contactId", authentication, isValidId, getById);

router.post("/", authentication, addContactValidation, postContact);

router.delete("/:contactId", authentication, isValidId, deleteContact);

router.put(
  "/:contactId",
  isValidId,
  authentication,
  updateContactValidation,
  putContact
);

router.patch(
  "/:contactId/favorite",
  authentication,
  isValidId,
  updateFavoriteValidation,
  patchContact
);

module.exports = router;
