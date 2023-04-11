import express from "express";
import { rangeQueries } from "../controllers/rangeQueries.js";

const route = express.Router();

route.get('/', rangeQueries);

export default route;