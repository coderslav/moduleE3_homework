/*
Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
элемент, то он учитывается и выводится отдельно.

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки,
null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию,
проанализируйте синтаксис.
*/
function evenZeroOrOdd (someArray){
let quantityOfEvenNumbers = 0;
let quantityOfOddNumbers = 0;
let quantityOfZeroNumbers = 0;
let quantityOfNaNs = 0;
someArray.forEach(function (value){
    if (value === 0){
quantityOfZeroNumbers++;
    }else if (typeof value !== 'number' || !value) {
quantityOfNaNs++;
    } else {
if (value % 2 === 0){
quantityOfEvenNumbers++;
} else {
quantityOfOddNumbers++;
}}})
    return `В вашем массиве:
Количество нечетных чисел = ${quantityOfOddNumbers};
Количество четных чисел = ${quantityOfEvenNumbers};
Количество нулей = ${quantityOfZeroNumbers};
Количество всяких других данных = ${quantityOfNaNs}`
}
let someNumbers = [1, 6, 7, 5, null, NaN, 9, 0, 'текст', false, 2.4, [1,2,3], -4];
console.log(evenZeroOrOdd(someNumbers));
