function sortArray(array) {
    return array.sort((a, b) => b - a);
}

function getFirstFiveElements(array) {
    return array.slice(0, 5);
}

function getLastFiveElements(array) {
    return array.slice(0, 5);
}

function getSumEvenElements(array) {
    return array.filter((number) => number % 2 === 0)
        .reduce((a, b) => a + b);
}

function createArray(length) {
    var list = [];

    for (var i = 1; i <= length; i++) {
        list.push(i);
    }

    return list;
}

function powArray(list) {
    return list.map((number) => Math.pow(number, 2));
}

var array1 = [6, 25, 72, 4, 2, 56, 23, 3, 6, 94, 23];

var arraySorted = sortArray(array1);

console.log(arraySorted);
console.log(getFirstFiveElements(arraySorted));
console.log(getLastFiveElements(arraySorted));
console.log(getSumEvenElements(arraySorted));

var array2 = createArray(100);

console.log(array2);
console.log(powArray(array2));
