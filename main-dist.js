"use strict";let inputEnteredSignsNumbers=document.querySelector(".areaSignsNumbers");inputEnteredSignsNumbers.focus(),inputEnteredSignsNumbers.addEventListener("keydown",(function(e){"Enter"===e.key&&calcMathExpression(inputEnteredSignsNumbers.value)}));let result=document.querySelector(".result");function getEnteredValue(e){calcMathExpression(e.target.value)}result.innerHTM="",inputEnteredSignsNumbers.addEventListener("change",(function(e){getEnteredValue(e)}));let areaButtons=document.querySelector(".area-buttons");function calcMathExpression(e){if(e)try{let n=math.evaluate(e);t=n,result.innerHTML=t,inputEnteredSignsNumbers.focus()}catch{inputEnteredSignsNumbers.focus(),setTimeout(()=>{result.innerHTML="",inputEnteredSignsNumbers.focus()},1500)}var t}areaButtons.addEventListener("click",(function(e){let t=e.target;if(t!==t.closest(".symbolInner")){if(t.matches(".calcResult")&&calcMathExpression(inputEnteredSignsNumbers.value),t.matches(".resetValue")&&(inputEnteredSignsNumbers.value="",result.innerHTML="",inputEnteredSignsNumbers.focus()),t.matches(".deleteSymbol")||t.closest(".deleteSymbol")){let e=inputEnteredSignsNumbers.value;inputEnteredSignsNumbers.value=inputEnteredSignsNumbers.value.substring(0,e.length-1),result.innerHTML="",inputEnteredSignsNumbers.focus()}if(t.matches(".brackets")){let e=inputEnteredSignsNumbers.value,t=0,n=0;for(let u of e)40===u.codePointAt(0)&&t++,41===u.codePointAt(0)&&n++;t>n?(inputEnteredSignsNumbers.value=e+String.fromCodePoint(41),inputEnteredSignsNumbers.focus()):inputEnteredSignsNumbers.value=e+String.fromCodePoint(40),inputEnteredSignsNumbers.focus()}return}let n=t.innerHTML,u=inputEnteredSignsNumbers.value+n;inputEnteredSignsNumbers.value=u,inputEnteredSignsNumbers.focus()}));