const { Contact } = require("../../../models");

const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId);
  return contact;
};

module.exports = {
  removeContact,
};
