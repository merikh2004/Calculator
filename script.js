let display = document.getElementById("answer");
let prevNum = '';
let prevOp = '';
let prevEval = '';

function append_Display_Op(input){
    prevOp = input;
    display.value += input;
}

function append_Display(input){
    if(display.value.length < 12) {
        prevNum = input;
        display.value += input;
    }
}

function clear_Display(){
    display.value = "";
    prevNum = '';
    prevOp = '';
    prevEval = '';
}

/*
function calculate(){
    try {
        let result = eval(display.value);

        if (prevEval !== '' && result === prevEval) {
            // If it's the same, append previous operator and number
            display.value += prevModu + prevNum;
            result = eval(display.value);
        }
        prevNum = result;
        prevEval = result;
        display.value = result;
    } catch (error) {
        alert('Invalid input');
    }
}
*/
function calculate(){
    try {
        if (eval(display.value) == eval(prevEval)){
            display.value += prevOp + prevNum;
            display.value = eval(display.value);
        } else {
            display.value = eval(display.value);
            prevEval = display.value;
        }
    } catch (error) {
        alert('Invalid input');
    }
}

function delete_Display(){
    display.value = display.value.slice(0, -1);
}
