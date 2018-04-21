var operatorCounter = 0;
var outcome;

function add (num1, num2){
    operatorCounter++;
    value2Array = [];

    outcome = num1+num2;
    outcome = Math.round(outcome * 1000000) / 1000000;
    return outcome;
}
function subtract (num1, num2) {
    operatorCounter++;
    value2Array = [];

    outcome = num1-num2;
    outcome = Math.round(outcome * 1000000) / 1000000;
    return outcome;
}
function multiply (num1, num2) {
    operatorCounter++;
    value2Array = [];

    outcome = num1*num2;
    outcome = Math.round(outcome * 1000000) / 1000000;
    return outcome;
}
function divide (num1,num2) {
    operatorCounter++;
    value2Array = [];
    if (num2==0) {
        document.getElementById("result_display").value = "Plz no divide by 0";
        return;
    }
    outcome = num1/num2;
    outcome = Math.round(outcome * 1000000) / 1000000;
    return outcome;
}


function operate(operator,num1,num2) {
    if (value1 === undefined) {
        return;
    }
    else if (value2===undefined){
         document.getElementById("result_display").value = value1;
         return;
    }
    if (operator==="+") {
        document.getElementById("result_display").value = add(num1,num2);
        return add(num1,num2);
    }
    else if (operator ==="-") {
        document.getElementById("result_display").value = subtract(num1,num2);
        return subtract(num1,num2);
    }
    else if (operator === "*") {
        document.getElementById("result_display").value = multiply(num1,num2);
        return multiply(num1,num2);
    }
    else {
        document.getElementById("result_display").value = divide(num1,num2);
        return divide(num1,num2);
    }

}

var buttonArea = document.createElement("div");
document.getElementById("buttons").appendChild(buttonArea);
for (let i=0;i<10;i++) {
    var numberButtons = document.createElement("button");
    buttonArea.appendChild(numberButtons);
    numberButtons.id  = ("button" + i);
    numberButtons.innerHTML = i;
    numberButtons.onclick = function () {displayValue(i)};
    }


for (let i=1;i<5;i++) {
    var operatorButtons = document.createElement("button");
    buttonArea.appendChild(operatorButtons);
    operatorButtons.id = ("operator"+i);
    document.getElementById("operator" + i).className ="operator";
    if (i==1) {
        operatorButtons.innerHTML = ("+");
    }
    else if (i==2) {
        operatorButtons.innerHTML = ("-");
    }
    else if (i==3) {
        operatorButtons.innerHTML = ("*");
    }
    else {
        operatorButtons.innerHTML = ("/");
    }
    
    if (document.getElementById("result_display").value >=0) {
        operatorButtons.onclick = function () {displayOperator(i)};
    }
}



var value1;
var value1Array = [];

var value2;
var value2Array = [];

var operator;


var equalsButton = document.createElement("button");
buttonArea.appendChild (equalsButton);
equalsButton.id = ("equals_button");
equalsButton.onclick = function () {operate(operator,value1,value2)};
equalsButton.innerHTML = "=";

var clearButton = document.createElement("button");
buttonArea.appendChild(clearButton);
clearButton.id = ("clear_button");
clearButton.onclick = function () {clear()};
clearButton.innerHTML = "clear";

var decimalButton = document.createElement("button");
buttonArea.appendChild(decimalButton);
decimalButton.id = ("decimal_button");
decimalButton.onclick = function () {addDecimal()};
decimalButton.innerHTML = ".";

var backButton = document.createElement("button");
buttonArea.appendChild(backButton);
backButton.id = ("back_button");
backButton.onclick = function () {backspace()};
backButton.innerHTML= "<-";

function displayValue (i) {
    if (typeof value1 === "number" && typeof operator === "string" && operatorCounter==0) {
        value2Array.push(i);
        if (value2Array.indexOf(".")>-1) {
        value2 = value2Array.join('');
        document.getElementById("result_display").value = value2;
        return;
    }
        value2 = parseInt(value2Array.join(''))+0;
        document.getElementById("result_display").value = value2;
    }
    else if (typeof value1 === "number" && typeof operator === "string" && operatorCounter>0) {
        
        value1 = outcome;
        value2Array.push(i);
        if (value2Array.indexOf(".")>-1) {
        value2 = value2Array.join('');
        value2 = parseFloat(value2);
        document.getElementById("result_display").value = value2;
        return;
    }
        value2 = parseInt(value2Array.join(''))+0;
        document.getElementById("result_display").value = value2;
    }
    else {
    value1Array.push(i);
    if (value1Array.indexOf(".")>-1) {
        value1 = value1Array.join('');
        value1 = parseFloat(value1);
        document.getElementById("result_display").value = value1;
        return;
    }
    value1 = parseInt(value1Array.join(''))+0;
    document.getElementById("result_display").value = value1;
    return;
}
}


function displayOperator (i) {
    
    if (i==1) {
        document.getElementById("result_display").value = "+";
        if (typeof value1 === "number" && typeof value2 === "number") {
         outcome = (operate(operator,value1,value2));   
        }
        operator = "+";
        return operator;
    }
    else if (i==2) {
        document.getElementById("result_display").value = "-";
        if (typeof value1 === "number" && typeof value2 === "number") {
         outcome = (operate(operator,value1,value2));   
        }
        operator = "-";
        return operator;
    }
    else if (i==3) {
        document.getElementById("result_display").value = "*";
        if (typeof value1 === "number" && typeof value2 === "number") {
         outcome = (operate(operator,value1,value2));   
        }
        operator = "*";
        return operator;
    }
    else {
        document.getElementById("result_display").value = "/";
        if (typeof value1 === "number" && typeof value2 === "number") {
         outcome = (operate(operator,value1,value2));   
        }
        operator = "/";
        return operator;
    }

}

function clear () {
    location.reload();
    return;
}
 function addDecimal () {

    if (value2Array.length===0) {
        if (value1Array.indexOf(".")>-1) {
            return;
        }
        value1Array.push(".");
        let tempValue1 = value1 + ".";
        document.getElementById("result_display").value = tempValue1;
    }
    else {
         if (value2Array.indexOf(".")>-1) {
            return;
        }
     value2Array.push(".");
     let tempValue2 = value2 + ".";
     document.getElementById("result_display").value = tempValue2;
   
    }
    return;
 }

 function backspace () {
    if (value1==undefined) {
        return;
    }
    if (value2Array.length===0) {
        if (value1Array.length==1) {
            value1Array = [];
            value1 = undefined;
            document.getElementById("result_display").value = "";
            return;
        }
        if (value1Array.indexOf(".")>-1) {
        value1Array.pop();
        value1 = value1Array.join('');
        value1 = parseFloat(value1);
        document.getElementById("result_display").value = value1;
        return;
    }
        value1Array.pop();
        value1 = parseInt(value1Array.join(''))+0;
        document.getElementById("result_display").value = value1;
    }


    else {
        if (value2Array.length==1) {
            value2Array = [];
            value2 = undefined;
            document.getElementById("result_display").value = "";
            return;
        }
      if (value2Array.indexOf(".")>-1) {
        value2Array.pop();
        value2 = value2Array.join('');
        value2 = parseFloat(value2);
        document.getElementById("result_display").value = value2;
        return;
    }
        value2Array.pop();
        value2 = parseInt(value2Array.join(''))+0;
        document.getElementById("result_display").value = value2;
     
    }
    return;
 }
 