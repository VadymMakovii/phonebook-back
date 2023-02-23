const fs = require("fs").promises;
const path = require("path");
const { uid } = require("uid");
const contactsPath = path.join(__dirname, "contacts.json");

const getListContacts = async () => {
  const contactsList = JSON.parse(await fs.readFile(contactsPath));
  return contactsList;
};

const getContactById = async (contactId) => {
  const data = await getListContacts();
  const [contact] = data.filter((item) => item.id === contactId.toString());
  return contact;
};

const addContact = async (body) => {
  const id = uid();
  const newContact = { id, ...body };
  const data = await getListContacts();
  data.push(newContact);
  const newData = JSON.stringify(data, null, 2);
  await fs.writeFile(contactsPath, newData);
  return newContact;
};

const removeContact = async (contactId) => {
  const data = await getListContacts();
  const contact = data.find((item) => item.id === contactId.toString());
  if (!contact) {
    return;
  }
  const filtredList = data.filter((item) => item.id !== contactId.toString());
  const newData = JSON.stringify(filtredList, null, 2);
  await fs.writeFile(contactsPath, newData);
  return contact;
};

const updateContact = async (contactId, body) => {
  let updatedContact = null;
  const data = await getListContacts();
  const updateData = data.map((item) => {
    if (item.id === contactId) {
      item = { ...item, ...body };
      updatedContact = item;
    }
    return item;
  });
  if (!updatedContact) {
    return;
  }
  const newData = JSON.stringify(updateData, null, 2);
  await fs.writeFile(contactsPath, newData);
  return updatedContact;
};

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
