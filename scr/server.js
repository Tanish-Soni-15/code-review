import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { router } from "./routes/ai.router.js";
import cors from 'cors'
const server = express();
server.use(cors());
server.use(express.json());
server.use("/", router);
server.use(express.static(path.join(__dirname, "build")));
server.get("/", (req, res) => {
  res.send("hello");
});

export { server };
