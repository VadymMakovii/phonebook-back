const {
  getContactById,
} = require("../../services");

const { asyncHandler } = require('../../helpers');

const getById = async (req, res) => {
  const contact = await getContactById(req.params.contactId);
  if (contact) {
    return res.status(200).json(contact);
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getById: asyncHandler(getById)
};