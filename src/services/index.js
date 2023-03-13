const {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("./contactsServices");

const { addUser, signIn } = require("./authServices");

const {
  updateSubscription,
  overwriteAvatar,
  verifyUserEmail,
  resendEmail,
} = require("./userServices");

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
  addUser,
  signIn,
  updateSubscription,
  overwriteAvatar,
  verifyUserEmail,
  resendEmail,
};
