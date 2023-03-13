const sgMail = require("@sendgrid/mail");

const {SENDGRID_API_KEY, EMAIL_SENDER } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const msg = { ...data, from: EMAIL_SENDER };
  try {
    await sgMail.send(msg);
    console.log("Email sent");
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
