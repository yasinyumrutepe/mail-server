const is_connect_mail =
  require("../connection/mail.connection").is_connect_mail;

const send = async (data) => {
  is_connect_mail()
    .then((mail) => {
      mail.sendMail(data, (err, info) => {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = {
  send,
};
