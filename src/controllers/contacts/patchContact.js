const { updateStatusContact } = require("../../services");
const {HttpError} = require('../../helpers');

const { asyncHandler } = require("../../helpers");

const patchContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
   throw HttpError(400, "missing field favorite");
  }
  const newData = await updateStatusContact(req.params.contactId, req.body);
  if (newData) {
    res.status(200).json(newData);
  } else {
    throw HttpError(404, "Not found");
  }
};

module.exports = {
  patchContact: asyncHandler(patchContact),
};
