import express from "express";
import cors from "cors";
import ip from "ip";
import bodyParser from "body-parser";
import "dotenv/config";
import { login } from "./src/login.js";
import { register } from "./src/register.js";

const app = express();
app.use(cors({ origin: "*" }));
// app.use(bodyParser.json());
const jsonParser = bodyParser.json();

const port = process.env.PORT || 18908;

app.post("/api/login", jsonParser, login);
app.post("/api/register", jsonParser, register);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`http://${ip.address()}:${port}`);
});
