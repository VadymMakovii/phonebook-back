const { getListContacts } = require("../../services");

const { asyncHandler } = require("../../helpers");

const getAllContact = async (req, res) => {
  const contacts = await getListContacts(req);
  return res.status(200).json(contacts);
};

module.exports = {
  getAllContact: asyncHandler(getAllContact),
};
