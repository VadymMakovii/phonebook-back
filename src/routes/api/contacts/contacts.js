const express = require("express");
const { addContactValidation, updateContactValidation, updateFavoriteValidation } = require("../../../../models");
const { isValidId } = require('../../../middlewares');
const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
  patchContact
} = require("../../../controllers");

const router = express.Router();

router.get("/", getAllContact);
router.get("/:contactId", isValidId, getById);
router.post("/", addContactValidation, postContact);
router.delete("/:contactId", isValidId, deleteContact);
router.put("/:contactId", isValidId, updateContactValidation, putContact);
router.patch("/:contactId/favorite", isValidId, updateFavoriteValidation, patchContact);

module.exports = router;
