const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../models/contacts");

const getAllContact = async (__, res) => {
  const contacts = await getListContacts();
  return res.status(200).json(contacts);
};

const getById = async (req, res) => {
  const contact = await getContactById(req.params.contactId);
  if (contact) {
    return res.status(200).json(contact);
  } else {
    return res.status(404).json({ message: "Not found" });
  }
};

const postContact = async (req, res) => {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};

const deleteContact = async (req, res) => {
  const contact = await removeContact(req.params.contactId);
  if (contact) {
    res.status(200).json({ message: "contact deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const putContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  const newData = await updateContact(req.params.contactId, req.body);
  if (newData) {
    res.status(200).json(newData);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact,
};
