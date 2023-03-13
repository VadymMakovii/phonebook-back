const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const  {v4: uuidv4}  = require("uuid");
const { User } = require("../../../models");
const { HttpError } = require("../../helpers");
const {sendEmail} = require('../../helpers');

const addUser = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = uuidv4();

  const msg = {
  to: email,
  subject: 'Verification email',
  text: 'Please follow the link to confirm your email address',
  html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm email</a>`,
  }
  await sendEmail(msg);

  const newUser = await User.create({
    ...body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  return newUser;
};

module.exports = {
  addUser,
};
