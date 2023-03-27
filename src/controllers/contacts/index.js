const { getAllContact } = require("./getAllContact");

const { getById } = require("./getById");

const { postContact } = require("./postContact");

const { deleteContact } = require("./deleteContact");

const { putContact } = require("./putContact");


module.exports = {
  getAllContact,
  getById,
  postContact,
  deleteContact,
  putContact
};
