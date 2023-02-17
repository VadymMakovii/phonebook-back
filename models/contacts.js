const fs = require("fs").promises;
const path = require("path");
const { uid } = require("uid");
const contactsPath = path.join(__dirname, "contacts.json");

const getListContacts = async () => {
  const contactsList = await fs.readFile(contactsPath);
  return JSON.parse(contactsList);
};

const getContactById = async (contactId) => {
  try {
    const data = await getListContacts();
    const [contact] = data.filter((item) => item.id === contactId.toString());
    return contact;
  } catch (error) {
    console.warn(`Something went wrong! Error message:${error.message}`);
  }
};

const addContact = async (body) => {
  try {
    const id = uid();
    const newContact = { id, ...body };
    const data = await getListContacts();
    data.push(newContact);
    const newData = JSON.stringify(data, null, 2);
    await fs.writeFile(contactsPath, newData);
    return newContact;
  } catch (error) {
    console.warn(`Something went wrong! Error message:${error.message}`);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await getListContacts();
    const contact = data.find((item) => item.id === contactId.toString());
    if (!contact) {
      return;
    }
    const filtredList = data.filter((item) => item.id !== contactId.toString());
    const newData = JSON.stringify(filtredList, null, 2);
    await fs.writeFile(contactsPath, newData);
    return contact;
  } catch (error) {
    console.warn(`Something went wrong! Error message:${error.message}`);
  }
};

const updateContact = async (contactId, body) => {
  try {
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
  } catch (error) {
    console.warn(`Something went wrong! Error message:${error.message}`);
  }
};

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
