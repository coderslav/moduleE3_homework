/*
Задание 3.

Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент
и возвращает сумму этих двух чисел. Выведите в консоль результат.
 */
function externalFunc(eNum){
    return function internalFunc(iNum){
        return eNum + iNum;
    }
}
let x = externalFunc(5);
resultX = x(4);
console.log(resultX);
let y = externalFunc(2);
resultY = y(2);
console.log(resultY);
