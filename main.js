// function display(value){
//     document.querySelector(".display").value += value;
// }

// function clearAll(){
//     document.querySelector(".display").value = "";
// }

// function calculate(){
//     let displayValue = document.querySelector(".display").value;
//     let result = eval(displayValue);

//     document.querySelector(".display").value = result;
// }


let displayResult = document.getElementById('inputText');

let display = (Number) => {
    displayResult.value += Number;
}

let clearAll = () => {
    displayResult.value = " ";
}

let deleteLastElement = () => {
    displayResult.value = displayResult.value.slice(0, -1);
}

let calculate = () => {
    displayResult.value = eval(displayResult.value)
}