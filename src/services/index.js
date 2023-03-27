const {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("./contactsServices");

const { addUser, signIn } = require("./authServices");

const { overwriteAvatar } = require("./userServices");

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  addUser,
  signIn,
  overwriteAvatar
};
