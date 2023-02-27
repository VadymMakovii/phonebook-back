const { Contact } = require("../../../models");

const updateContact = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return contact;
};

module.exports = {
  updateContact,
};
