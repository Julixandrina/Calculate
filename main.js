'use strict';

//инпут в который попадают значения для рассчёта
let inputEnteredSymbols = document.querySelector('.areaSymbols');

let areaButtons = document.querySelector('.areaButtons');

//отображение результата
let result = document.querySelector('.result');

inputEnteredSymbols.focus();

inputEnteredSymbols.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calcMathExpression(inputEnteredSymbols.value);
    }
});

//функция отслеживания изменений в инпуте для ввода значений
inputEnteredSymbols.addEventListener('change', function (event) {
    getEnteredValue(event);
});

areaButtons.addEventListener('click', function (event) {
    let target = event.target;
    if (target !== target.closest('.symbolInner')) {

        if (target.matches('.calcResult')) {
            calcMathExpression(inputEnteredSymbols.value);
        }
        if (target.matches('.resetValue')) {
            inputEnteredSymbols.value = '';
            result.innerHTML = '';
            inputEnteredSymbols.focus();
        }
        if (target.matches('.deleteSymbol') || target.closest('.deleteSymbol')) {
            let currentSignsNumbers = inputEnteredSymbols.value;
            inputEnteredSymbols.value = inputEnteredSymbols.value.substring(0, currentSignsNumbers.length - 1)
            result.innerHTML = '';
            inputEnteredSymbols.focus();
        }
        if (target.matches('.brackets')) {
            let currentSignsNumbers = inputEnteredSymbols.value;
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
                inputEnteredSymbols.value = currentSignsNumbers + String.fromCodePoint(41);
                inputEnteredSymbols.focus();
            } else
                inputEnteredSymbols.value = currentSignsNumbers + String.fromCodePoint(40);
            inputEnteredSymbols.focus();
        }
        return;
    }

    let valueOnClick = target.innerHTML;

    let currentValue = inputEnteredSymbols.value;

    let resultGluingValues = currentValue + valueOnClick;

    inputEnteredSymbols.value = resultGluingValues;
    inputEnteredSymbols.focus();

});

//функция для рассчёта математического выражения
function calcMathExpression(stringWithEnteredSignsNumbers) {
    if (stringWithEnteredSignsNumbers) {
        try {
            let resultValueBeforeMathCalc = math.evaluate(stringWithEnteredSignsNumbers);
            outputResult(resultValueBeforeMathCalc);
            inputEnteredSymbols.focus();

        } catch {

            inputEnteredSymbols.focus();

            setTimeout(() => {
                result.innerHTML = '';
                inputEnteredSymbols.focus();
            }, 1500);
        }
    }

//функция присваивания и вывода результата вычислений
    function outputResult(resultCalc) {
        result.innerHTML = resultCalc;
    }
}

//функция которая берёт полученную строку и передаёт её в функцию для рассчёта выражения
function getEnteredValue(event) {
    let target = event.target;
    let enteredValues = target.value;
    calcMathExpression(enteredValues);
}

