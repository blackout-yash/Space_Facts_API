import dotenv from "dotenv";
import express from "express";
import getAll from "./routes/getAll.js";
import notFound from "./routes/notFound.js";
import rangeQueries from "./routes/rangeQueries.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

dotenv.config({
    path: "./config/.env"
})

app.use("/blackout_yash/space-facts/api", getAll);
app.use("/blackout_yash/space-facts/api", rangeQueries);
app.use("/blackout_yash/space-facts/api", notFound);

const PORT = process.env.PORT || 9000;
app.listen(PORT, (err) => {
    if (err) {
        console.log('Error in running server.');
    } else {
        console.log(`Port is running on http://localhost:${PORT}`);
    }
})

app.use(errorMiddleware)