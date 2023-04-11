import facts_dataset from "../utils/dataset.js";

export const getAll = (req, res) => {
    let result = [];
    for (let index = 0; index < facts_dataset.length; index++) {
        const element = facts_dataset[index];
        const obj = {
            fact: element
        }
        result.push(obj);
    }
    return res.send(result);
}