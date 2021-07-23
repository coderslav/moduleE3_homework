/*
Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и
выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание
на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/
function primeNumber(number){
    if (number <= 1000 && number !== 1 && number !== 0){
        let i = 2;
        let resultsArray = [];
        while (i < number){
            resultsArray.push(number % i);
            i++;
        }
        if (resultsArray.includes(0)){
            return `Число ${number} - сложное :)`;
        } else {
            return `Число ${number} - простое`;
        }
    } else if (number > 1000){
        return 'Данные неверны';
    } else {
        return `Число ${number} - сложное :)`;
    }
}

let x = primeNumber(990)
console.log(x)
