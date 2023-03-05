const { updateSubscription } = require("../../services");

const { asyncHandler } = require("../../helpers");

const patchUser = async (req, res) => {
  const result = await updateSubscription(req);
  res.status(200).json(result);
};

module.exports = {
  patchUser: asyncHandler(patchUser),
};
