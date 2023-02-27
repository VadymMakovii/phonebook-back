const { getListContacts } = require("../../services");

const { asyncHandler } = require("../../helpers");

const getAllContact = async (__, res) => {
  const contacts = await getListContacts();
  return res.status(200).json(contacts);
};

module.exports = {
  getAllContact: asyncHandler(getAllContact),
};
