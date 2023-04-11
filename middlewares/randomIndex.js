export const randomIndex = (n, min, max) => {
    var numbers = [];
    while (numbers.length < n) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;

        if (numbers.indexOf(number) === -1) {
            numbers.push(number);
        }
    }
    return numbers;
}