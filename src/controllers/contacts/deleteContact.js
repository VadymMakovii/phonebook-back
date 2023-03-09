const { removeContact } = require("../../services");

const { asyncHandler, HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const contact = await removeContact(req.params.contactId);
  if (contact) {
    res.status(200).json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  } else {
    throw HttpError(404, "Not found");
  }
};

module.exports = {
  deleteContact: asyncHandler(deleteContact),
};
