require("dotenv").config();
const nodemailer = require("nodemailer");

const connection = async () => {
  return new Promise((resolve, reject) => {
    var transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    resolve(transport);
  });
};

const is_connect_mail = async () => {
  return new Promise((resolve, reject) => {
    connection().then((mail) => {
      mail.verify(function (error, success) {
        if (error) {
          console.log("Mail connection error", error);
          reject(mail);
        }
        resolve(mail);
      });
    });
  });
};

module.exports = {
  is_connect_mail,
};
