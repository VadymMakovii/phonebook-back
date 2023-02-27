const { updateStatusContact } = require("../../services");

const { asyncHandler } = require("../../helpers");

const patchContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  const newData = await updateStatusContact(req.params.contactId, req.body);
  if (newData) {
    res.status(200).json(newData);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  patchContact: asyncHandler(patchContact),
};
