const {
  getContactById,
} = require("../../services");

const { asyncHandler, HttpError } = require('../../helpers');

const getById = async (req, res) => {
  const contact = await getContactById(req.params.contactId);
  if (contact) {
    return res.status(200).json(contact);
  } else {
    throw HttpError(404, "Not found");
  }
};

module.exports = {
  getById: asyncHandler(getById)
};