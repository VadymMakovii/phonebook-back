const {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("./contactsServices");

const { addUser, signIn } = require("./authServices");

const { updateSubscription, overwriteAvatar } = require("./userServices");

const { verifyUserEmail, resendEmail } = require("./emailServices");

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
