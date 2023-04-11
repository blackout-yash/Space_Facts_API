import express from "express";
import { getAll } from "../controllers/getAll.js";

const route = express.Router();

route.get('*', (req, res) => {
    res.status(404).json("Invalid URL")
});

export default route;