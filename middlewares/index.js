import facts_dataset from "../utils/dataset.js";
import errorHandler from "../config/errorHandler.js";

export const index = (req, res, next) => {
    let result = [];
    const query = req.query;
    const ind = parseInt(query.index);
    const length = facts_dataset.length;

    if (isNaN(ind) || ind < 0) {
        return next(new errorHandler("Invalid Index", 400));
    } else if (ind >= length) {
        return next(new errorHandler("Query out of range", 400));
    } else {
        const element = facts_dataset[ind];
        const obj = {
            fact: element
        }
        result.push(obj);
    }
    return res.send(result);
}