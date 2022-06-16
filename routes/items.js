const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send("Successful Deploy");
});

module.exports = router;
