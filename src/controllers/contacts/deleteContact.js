const { removeContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

const deleteContact = async (req, res) => {
  const contact = await removeContact(req.params.contactId);
  if (contact) {
    res.status(200).json({ message: "contact deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  deleteContact: asyncHandler(deleteContact),
};
