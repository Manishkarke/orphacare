const nodemailer = require("nodemailer");
const MAIL_SETTINGS = {
  service: "gmail",
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(MAIL_SETTINGS);

module.exports.sendMail = async (email, childName) => {
  try {
    let info = await transporter.sendMail({
      from: MAIL_SETTINGS.auth.user,
      to: email,
      subject: "Adoption of a child",
      html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome from orphacare.</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">We have recieved your adoption request of ${childName}. Please visit orphacare center.</p>

     </div>
      `,
    });
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};
