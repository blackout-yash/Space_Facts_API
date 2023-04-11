import facts_dataset from "../utils/dataset.js";
import errorHandler from "../config/errorHandler.js";
import { randomIndex } from "./randomIndex.js";

export const length = (req, res, next) => {
    let result = [];
    const query = req.query;
    const n = parseInt(query.length);
    const length = facts_dataset.length;

    if (isNaN(n) || n < 0) {
        return next(new errorHandler("Invalid Length", 400));
    } else if (n > length) {
        return next(new errorHandler("Query out of range", 400));
    } else {
        const ind = randomIndex(n, 0, length - 1);
        for (const i of ind) {
            const obj = {
                fact: facts_dataset[i]
            }
            result.push(obj);
        }
    }
    return (res.send(result));
}