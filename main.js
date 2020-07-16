'use strict';
// math.evaluate('1.2 * (2 + 4.5)')


let inputValueForCalc = document.querySelector('.visual-inputValue');//инпут в который попадают значения для рассчёта

inputValueForCalc.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {

        calc(inputValueForCalc.value);

    }


})





let result = document.querySelector('.result');//отображение результата
result.innerHTM = '';





//функция отслеживания изменений в инпуте для ввода значений
inputValueForCalc.addEventListener('change', function (event) {
    getEnteredValue(event);
})

//функция которая берёт полученную строку и передаёт её в функцию для рассчёта выражения
function getEnteredValue(event) {
    let target = event.target;
    let entriesValues = target.value;

    console.log(target, target.value)
    calc(entriesValues);
}


let areaButtons = document.querySelector('.area-buttons');

areaButtons.addEventListener('click', function (event) {
    let target = event.target;
    if (target !== target.closest('.val')) {
        console.log(target)
        if (target.matches('.calcAction')) {
            console.log(1)
            calc(inputValueForCalc.value);
        }
    if (target.matches('.resetValue')) {
        inputValueForCalc.value = '';
        result.innerHTML = '';
        inputValueForCalc.focus();
    }
        if (target.matches('.del')) {
            let upgradeVal = inputValueForCalc.value;

            inputValueForCalc.value = inputValueForCalc.value.substring(0, upgradeVal.length - 1)
            result.innerHTML = '';
            inputValueForCalc.focus();

        }
    return;
    }



    let clickValue = target.innerHTML;

    let currentValue = inputValueForCalc.value;

    let gluing = currentValue + clickValue;

    inputValueForCalc.value = gluing;
    inputValueForCalc.focus();

    console.log(inputValueForCalc.value)


})




//функция для рассчёта выражения
function calc(val) {


    if (val) {

        try {

            let expresionForCalc = math.evaluate(val);
            outputResult(expresionForCalc);
            inputValueForCalc.focus();


        } catch {


            inputValueForCalc.focus();

            /*let newValue = 'недопустимое выражение';*/

            /*outputResult(newValue)*/

            setTimeout(() => {

                result.innerHTML = '';
                inputValueForCalc.focus();
            }, 1500)
        }






}

//функция присваивания и вывода результата вычислений
function outputResult(resultCalc) {
    result.innerHTML = resultCalc;
}
}



