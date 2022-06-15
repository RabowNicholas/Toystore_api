const express = require("express");
const router = express.Router();

const items = [
  { name: "Car", price: 1.99 },
  { name: "Barbie", price: 5.99 },
];

router.get("/", (_, res) => {
  res.send("Successful Deploy");
});

router.get("/item", (_, res) => {
  res.json({ ok: true, items });
});

router.get("/item/:name", (req, res) => {
  const { name } = req.params;
  const item = items.filter((item) => item.name === name)[0];
  res.json({ ok: true, item });
});

router.post("/item", (req, res) => {
  const { name, price } = req.body;
  if (name && price) {
    items.push({ name, price });
    res.json({ ok: true, items });
  }
});

module.exports = router;
