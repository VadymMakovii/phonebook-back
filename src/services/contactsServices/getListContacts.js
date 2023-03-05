const { Contact } = require("../../../models");

const getListContacts = async (req) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, ...rest } = req.query;

  const skip = (page - 1) * limit;

  const contactsList = await Contact.find(
    { owner, ...rest },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  return contactsList;
};

module.exports = {
  getListContacts,
};
