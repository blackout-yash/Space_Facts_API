import express from "express";
import { getAll } from "../controllers/getAll.js";

const route = express.Router();

route.get('/all', getAll);

export default route;