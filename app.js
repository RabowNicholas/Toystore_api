import express from "express";
import routes from "./routes/items.js";
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/", routes);

export default app;
