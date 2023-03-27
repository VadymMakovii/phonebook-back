const { updateContact } = require("../../services");

const { asyncHandler, HttpError } = require("../../helpers");

const putContact = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing fields");
  }

  const newData = await updateContact(req.params.contactId, req.body);
  if (newData) {
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        id: newData.id,
        name: newData.name,
        phone: newData.phone
      },
    });
  } else {
    throw HttpError(404, "Not found");
  }
};

module.exports = {
  putContact: asyncHandler(putContact),
};
