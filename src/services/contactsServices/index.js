const { getListContacts } = require("./getListContacts");

const { getContactById } = require("./getContactById");

const { addContact } = require("./addContact");

const { updateContact } = require("./updateContact");

const { removeContact } = require("./removeContact");

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
