import { IMessage } from "./src/interface/IMessage";
import express from "express";
import http from "http";
import cors from "cors";
import configuration from "./src/configuration";
import smsController from "./src/controller/smsController";
import { generateOTP } from "./src/utilities";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));

server.listen(configuration.port, () => {
  console.log(`Server Running on http://localhost:${configuration.port}`);
});
