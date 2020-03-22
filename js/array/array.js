function sortArray(array) {
    return array.sort(function (a, b) {
        return b - a;
    });
}

function getFirstFiveElements(array) {
    return array.slice(0, 5);
}

function getLastFiveElements(array) {
    return array.slice(array.length - 5);
}

function getSumEvenElements(array) {
    return array
        .filter(function (number) {
            return (number % 2) === 0;
        })
        .reduce(function (a, b) {
            return a + b;
        }, 0);
}

function createArray(length) {
    var list = [];

    for (var i = 1; i <= length; i++) {
        list.push(i);
    }

    return list;
}

function calculatePowEvenNumbers(number) {
    return number
        .filter(function (number) {
            return (number % 2) === 0;
        })
        .map(function (number) {
            return Math.pow(number, 2);
        });
}

function main() {
    var array1 = [6, 25, 72, 4, 2, 56, 23, 3, 6, 94, 23];

    var arraySorted = sortArray(array1);

    console.log("Отсортированный массив: " + arraySorted);
    console.log("Первые пять элементов, отсортированного массива: ", getFirstFiveElements(arraySorted));
    console.log("Последние пять элементов, отсортированного массива: ", getLastFiveElements(arraySorted));
    console.log("Сумма четных чисел, отсортированного массива: ",  getSumEvenElements(arraySorted));

    var array2 = createArray(100);

    console.log("Созданный массив от 1 до 100: ", array2);
    console.log("Возведения в квадра четных чисел, в созданном массиве: ",  calculatePowEvenNumbers(array2));
}

main();
