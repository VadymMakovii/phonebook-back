const Jimp = require("jimp");
const { User } = require("../../../models");
const path = require("path");
const fs = require("fs/promises");
const {HttpError} = require("../../helpers");

const avatarsDir = path.join(__dirname, "..", "..", "..", "public", "avatars");

const overwriteAvatar = async (req) => {
  if (!req.file) {
    throw HttpError(400, "Avatar is required")
  }
  
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const fileName = `${_id}_${originalname}`;
  
  try {
    const resultUpload = path.join(avatarsDir, fileName);

    await Jimp.read(tempUpload).then((image) => image.resize(250, 250).writeAsync(tempUpload));

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("public", "avatars", fileName);
    
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { avatarURL },
      { new: true }
    ).select("-_id email avatarURL");

    return updatedUser;
    
  } catch (err) {
    await fs.unlink(tempUpload);
    throw HttpError(400, err.message);
  }
};

module.exports = {
  overwriteAvatar,
};
