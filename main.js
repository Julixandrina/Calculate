'use strict';
// math.evaluate('1.2 * (2 + 4.5)')


let inputValueForCalc = document.querySelector('.visual-inputValue');//инпут в который попадают значения для рассчёта




let result = document.querySelector('.result');//отображение результата
result.innerHTM = '';



//функция отслеживания изменений в инпуте для ввода значений
inputValueForCalc.addEventListener('change', function (event) {
    getEnteredValue(event);

})
//функция которая берёт полученную строку и передаёт её в функцию для рассчёта выражения
function getEnteredValue(event) {
    let target = event.target;

    let strValueForExpression = target.value;
    console.log(strValueForExpression);
    calc(strValueForExpression);

}

//функция для рассчёта выражения
function calc(val) {
    let expresionForCalc = math.evaluate(val);
    let resultExpression = expresionForCalc;
    outputResult(resultExpression)
}

//функция присваивания и вывода результата вычислений
function outputResult(resultCalc) {
    result.innerHTML = resultCalc;
}


