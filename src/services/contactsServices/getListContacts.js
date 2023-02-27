const { Contact } = require("../../../models");

const getListContacts = async () => {
  const contactsList = await Contact.find();
  return contactsList;
};

module.exports = {
  getListContacts
};