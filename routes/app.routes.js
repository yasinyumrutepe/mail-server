var express = require("express");
var router = express.Router();
const add_mail_queue = require("../controllers/mail.controller").add_mail_queue;

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/mail", add_mail_queue);

module.exports = router;
