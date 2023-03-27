const { addContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

const postContact = async (req, res) => {
  const newContact = await addContact(req);
  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      id: newContact._id,
      name: newContact.name,
      phone: newContact.phone
    },
  });
};
module.exports = {
  postContact: asyncHandler(postContact),
};
