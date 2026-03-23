import path from "path";
import express from "express";
import { initializeDatabase } from "./database";
import { router } from "./routes";

const app = express();

initializeDatabase();
app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

  if (_req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(router);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
