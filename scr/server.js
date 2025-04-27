import express from "express";
import { router } from "./routes/ai.router.js";
import cors from 'cors'
const server = express();
server.use(cors());
server.use(express.json());
server.use("/", router);
server.use(express.static('build'));
server.get("/", (req, res) => {
  res.send("hello");
});

export { server };
