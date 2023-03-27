const { Contact } = require("../../../models");

const getListContacts = async (req) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, ...rest } = req.query;

  const skip = (page - 1) * limit;

  const contactsList = await Contact.find(
    { owner, ...rest },
    "-createdAt -updatedAt -owner",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  const data = contactsList.map(({ _id, name, phone }) => {
    return { id: _id, name, phone };
  });

  return data;
};

module.exports = {
  getListContacts,
};
