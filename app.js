import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/items.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/", routes);

export default app;
