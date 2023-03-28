const { is_connect_mail } = require("../connection/mail.connection");

const send_ampq = require("../helpers/rabbit.service").send_ampq;
const send = require("../helpers/mail.service").send;
require("dotenv").config();

const add_mail_queue = (req, res) => {
  const { from, to, subject, html } = req.body;

  if (!from || !to || !subject || !html) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  if (to.length < 1) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }
  let send_mail_data = {
    from: `${from.name} <${from.email}>`,
    to: to,
    subject: subject,
    html: html,
  };

  send_ampq(send_mail_data)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log("catch", err);
      return res.status(500).json(err);
    });
};

const send_mail_queue = (data) => {
  send(data);
};

module.exports = {
  add_mail_queue,
  send_mail_queue,
};
