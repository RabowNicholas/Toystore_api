import express from "express";
import Toy from "../models/Toy.js";
const router = express.Router();

let items = [new Toy("Car", 1.99), new Toy("Barbie", 5.99)];

function checkAuthentication(token) {
  if (token == undefined || token.length < 20) {
    return 401; //unauthorized
  }
  return 200; //authorized
}

router.get("/", (_, res) => {
  res.send("Successful Deploy");
});

router.get("/item/:name", (req, res) => {
  let status, body;

  status = checkAuthentication(req.headers.authorization); //check bearer token authorized

  const { name } = req.params;
  let item = items.filter((item) => item.name === name)[0];
  if (status == 401) {
    body = { error: "User not authorized." };
  } else if (item == undefined) {
    status = 404;
    body = { error: "Item does not exist." };
  } else {
    status = 200;
    body = item;
  }
  res.status(status).json(body);
});

router.post("/item", (req, res) => {
  let status, body;

  status = checkAuthentication(req.headers.authorization); //check bearer token authorized

  let { name, price } = req.query;
  let filter = items.filter((item) => item.name === name)[0];

  if (status == 401) {
    body = { error: "User not authorized." };
  } else if (name && price && filter == undefined) {
    price = Number(price);
    let item = { name, price };
    items.push(item);
    body = item;
    status = 200;
  } else {
    body = { error: "Item already exists." };
    status = 400;
  }
  res.status(status).json(body);
});

router.delete("/item/:name", (req, res) => {
  let status, body;

  status = checkAuthentication(req.headers.authorization); //check bearer token authorized

  let new_items = items.filter((data) => data.name != req.params.name);
  if (status == 401) {
    body = { error: "User not authorized." };
  } else if (JSON.stringify(new_items) === JSON.stringify(items)) {
    status = 404;
    body = { error: "Item does not exist." };
  } else {
    status = 200;
    body = { "Item Deleted": req.params.name };
  }
  res.status(status).json(body);
});

export default router;
