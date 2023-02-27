const { Contact } = require("../../../models");

const addContact = async (body) => {
  const newContact = await Contact.create(body);
  return newContact;
};

module.exports = {
  addContact,
};
