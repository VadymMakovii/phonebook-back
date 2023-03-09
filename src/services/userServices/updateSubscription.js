const { User } = require("../../../models");

const updateSubscription = async (req) => {
  const { _id } = req.user;
  const {subscription} = req.body;
 
  const result = await User.findByIdAndUpdate(_id, { subscription }, {new: true}).select(
    "-_id email subscription"
  );

  return result;
};

module.exports = {
  updateSubscription,
};
