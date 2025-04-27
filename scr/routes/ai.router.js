import express from "express";
import { getresponse } from "../controllers/ai.controller.js";
const router=express.Router();

router.post('/get-response',getresponse);

export {router}