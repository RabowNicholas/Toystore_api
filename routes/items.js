import express from "express";
import Toy from "../models/Toy.js";
const router = express.Router();

let items = [new Toy("Car", 1.99), new Toy("Barbie", 5.99)];

router.get("/", (_, res) => {
  res.send("Successful Deploy");
});

router.get("/item/:name", (req, res) => {
  const { name } = req.params;
  let item = items.filter((item) => item.name === name)[0];
  res.json({ ok: true, item });
});

export default router;
