const { updateContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

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
  putContact: asyncHandler(putContact),
};
