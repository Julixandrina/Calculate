'use strict';


let inputEnteredSignsNumbers = document.querySelector('.areaSignsNumbers');//инпут в который попадают значения для рассчёта
inputEnteredSignsNumbers.focus();
inputEnteredSignsNumbers.addEventListener('keydown', function (event) {

    if (event.key === 'Enter') {
        calcMathExpression(inputEnteredSignsNumbers.value);
    }
})

let result = document.querySelector('.result');//отображение результата
result.innerHTM = '';

//функция отслеживания изменений в инпуте для ввода значений
inputEnteredSignsNumbers.addEventListener('change', function (event) {
    getEnteredValue(event);
})

//функция которая берёт полученную строку и передаёт её в функцию для рассчёта выражения
function getEnteredValue(event) {
    let target = event.target;
    let enteredValues = target.value;
    calcMathExpression(enteredValues);
}

let areaButtons = document.querySelector('.area-buttons');
areaButtons.addEventListener('click', function (event) {
    let target = event.target;
    if (target !== target.closest('.symbolInner')) {

        if (target.matches('.calcResult')) {
            calcMathExpression(inputEnteredSignsNumbers.value);
        }
        if (target.matches('.resetValue')) {
            inputEnteredSignsNumbers.value = '';
            result.innerHTML = '';
            inputEnteredSignsNumbers.focus();
        }
        if (target.matches('.deleteSymbol') || target.closest('.deleteSymbol')) {
            let currentSignsNumbers = inputEnteredSignsNumbers.value;
            inputEnteredSignsNumbers.value = inputEnteredSignsNumbers.value.substring(0, currentSignsNumbers.length - 1)
            result.innerHTML = '';
            inputEnteredSignsNumbers.focus();
        }
        if (target.matches('.brackets')) {
            let currentSignsNumbers = inputEnteredSignsNumbers.value;
            let numBracketOpen = 0;
            let numBracketClose = 0;

            for (let char of currentSignsNumbers) {

                if (char.codePointAt(0) === 40) {
                    numBracketOpen++;
                }
                if (char.codePointAt(0) === 41) {
                    numBracketClose++;
                }
            }
            if (numBracketOpen > numBracketClose) {
                inputEnteredSignsNumbers.value = currentSignsNumbers + String.fromCodePoint(41);
                inputEnteredSignsNumbers.focus();
            } else
                inputEnteredSignsNumbers.value = currentSignsNumbers + String.fromCodePoint(40);
                inputEnteredSignsNumbers.focus();
        }
        return;
    }

    let valueOnClick = target.innerHTML;

    let currentValue = inputEnteredSignsNumbers.value;

    let resultGluingValues = currentValue + valueOnClick;

    inputEnteredSignsNumbers.value = resultGluingValues;
    inputEnteredSignsNumbers.focus();

})

//функция для рассчёта математического выражения
function calcMathExpression(stringWithEnteredSignsNumbers) {
    if (stringWithEnteredSignsNumbers) {
        try {
            let resultValueBeforeMathCalc = math.evaluate(stringWithEnteredSignsNumbers);
            outputResult(resultValueBeforeMathCalc);
            inputEnteredSignsNumbers.focus();

        } catch {

            inputEnteredSignsNumbers.focus();

            setTimeout(() => {
                result.innerHTML = '';
                inputEnteredSignsNumbers.focus();
            }, 1500);
        }
    }

//функция присваивания и вывода результата вычислений
function outputResult(resultCalc) {
    result.innerHTML = resultCalc;
}
}



