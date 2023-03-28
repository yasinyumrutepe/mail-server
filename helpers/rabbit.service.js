const connection_rabbit =
  require("../connection/rabbit.connection").connection_rabbit;
const return_message = {
  status: 200,
  message: "Mail sent successfully",
  body: "",
};

const send_ampq = async (data) => {
  return new Promise((resolve, reject) => {
    connection_rabbit()
      .then((connection) => {
        if (connection.status === 500) {
          return_message.status = 500;
          return_message.message = connection.message;
          return_message.body = connection.body;
          reject(return_message);
        }
        connection.body.sendToQueue("mail", Buffer.from(JSON.stringify(data)));
        return_message.status = 200;
        return_message.message = "Rabbit Connection Success";
        return_message.body = data;
        resolve(return_message);
      })
      .catch((err) => {
        return_message.status = 500;
        return_message.message = "Rabbit Connection Error";
        return_message.body = err;
        reject(return_message);
      });
  });
};

module.exports = {
  send_ampq,
};
