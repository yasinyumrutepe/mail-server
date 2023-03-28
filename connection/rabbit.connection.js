require("dotenv").config();
const amqp = require("amqplib");
const rabbit_url = process.env.RABBIT_URL || "amqp://localhost:5672";
const return_message = {
  status: 200,
  message: "Rabbit connect successfully",
  body: "",
};
const connection_rabbit = async () => {
  try {
    const connection = await amqp.connect(rabbit_url);
    const channel = await connection.createChannel();
    await channel.assertQueue("mail");
    return_message.status = 200;
    return_message.message = "Rabbit connect successfully";
    return_message.body = channel;
    return return_message;
  } catch (err) {
    return_message.status = 500;
    return_message.message = "Rabbit not connect";
    return_message.body = err;
    return return_message;
  }
};

module.exports = {
  connection_rabbit,
};
