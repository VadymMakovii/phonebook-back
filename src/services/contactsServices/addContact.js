const { Contact } = require("../../../models");

const addContact = async (req) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  return newContact;
};

module.exports = {
  addContact,
};
