const send_mail_queue =
  require("./controllers/mail.controller").send_mail_queue;
const connection_rabbit =
  require("./connection/rabbit.connection").connection_rabbit;

const return_message = {
  status: 200,
  message: "",
  body: "",
};
connect();
async function connect() {
  try {
    connection_rabbit().then((connection) => {
      if (connection.status === 500) {
        return_message.status = 500;
        return_message.message = connection.message;
        return_message.body = connection.body;
        return return_message;
      }
      connection.body.consume("mail", (data) => {
        connection.body.ack(data);
        let mail_data = JSON.parse(data.content.toString());
        send_mail_queue(mail_data);
      });
    });
  } catch (err) {
    console.log("Error", err);
  }
}
