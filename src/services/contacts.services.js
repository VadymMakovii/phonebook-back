const { Contact } = require("../../models");

const getListContacts = async () => {
  const contactsList = await Contact.find();
  return contactsList;
};

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

const addContact = async (body) => {
  const newContact = await Contact.create(body);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return contact;
};

const updateStatusContact = async (contactId, body) => {
  const contact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return contact;
};

const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove(contactId);
  return contact;
};

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
};
