const {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact 
} = require("./contactsServices");

const { addUser, signIn } = require('./authServices');

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
  addUser,
  signIn
};
