const { addContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

const postContact = async (req, res) => {
  const newContact = await addContact(req);
  res.status(201).json(newContact);
};
module.exports = {
  postContact: asyncHandler(postContact),
};
