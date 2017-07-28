// Find Sum 1

var numbers = [65, 44, 12, 4, 55];

function findSum(total, num) {
    return total + num;
}
findSum();
console.log(numbers.reduce(findSum)); // returns 180


// Find Sum 2

function sum() {
    var total = Array.prototype.slice.call(arguments).reduce(function (a, b) {
        return a + b;
    }, 0);
    return total;
}
console.log(sum(1, 2, 9, 15, 21)); // returns 48
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // returns 55