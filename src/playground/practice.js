const array = {
    numbers: [2,4,6],
    printSquares () {
        return this.numbers.map((number) => number * number);
    }
};

console.log(array.printSquares());

const obj = {
    nums: [1,2,3,4,5,6,7,8,9],
    printOdds () {
        return this.nums.map((num) => (num % 2 != 0) ? num : "not odd");
    }
};

console.log(obj.printOdds());