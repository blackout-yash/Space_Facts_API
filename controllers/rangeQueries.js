import errorHandler from "../config/errorHandler.js";
import { index } from "../middlewares/index.js";
import { length } from "../middlewares/length.js";

export const rangeQueries = (req, res, next) => {
    const query = req.query;
    const size = Object.keys(query).length;

    if (size != 1) {
        return next(new errorHandler("Invalid number of queries", 400));
    } else {
        if (typeof (query.index) !== "undefined") {
            return index(req, res, next);
        } else if (typeof (query.length) !== "undefined") {
            return length(req, res, next);
        } else {
            return next(new errorHandler("Invalid query type", 400));
        }
    }

    return next(res.send([]));
}