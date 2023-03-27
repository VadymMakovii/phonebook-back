const express = require("express");
const {
  addContactValidation,
  updateContactValidation,
} = require("../../../../models");
const { isValidId, authentication } = require("../../../middlewares");
const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact
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


module.exports = router;
