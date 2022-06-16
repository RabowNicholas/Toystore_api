import express from "express";
import bodyParser from "body-parser";
import Toy from "../models/Toy.js";
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

export default router;
