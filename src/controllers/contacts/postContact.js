const { addContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

const postContact = async (req, res) => {
  const newContact = await addContact(req);
  res.status(201).json({
    status: "success",
    code: 200,
    data: newContact,
  });
};
module.exports = {
  postContact: asyncHandler(postContact),
};
