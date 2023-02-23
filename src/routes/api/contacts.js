const express = require("express");
const { addContactValidation, updateContactValidation } = require("../../middlewares");
const {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact
} = require("../../controllers");
const router = express.Router();

router.get("/", getAllContact);
router.get("/:contactId", getById);
router.post("/", addContactValidation, postContact);
router.delete("/:contactId", deleteContact);
router.put("/:contactId", updateContactValidation, putContact);

module.exports = router;
