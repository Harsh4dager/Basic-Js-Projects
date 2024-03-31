const inputField = document.querySelector("#screen input");
const controls = document.querySelector("#controls");

// we'll put event on controls and we'll stop the propagtion for other seletive buttons
controls.addEventListener('click', e => {
    const inputValue = inputField.value;
    const buttonText = e.target.textContent;
    
    // Check if the current input field value ends with 'sq()'
    if (inputValue.endsWith('sq()')) {
        inputField.value = buttonText + '*' + buttonText;
    }else if(inputValue.endsWith("cube()")){
        // Check if the current input field value ends with 'cube()'
        inputField.value = buttonText + '*' + buttonText + '*' + buttonText;
    } else {
        // Otherwise, just append the button text to the input field value
        inputField.value += buttonText;
    }
});

// definition the functionality of clr
const clrBtn = document.querySelector(".btn-24");
clrBtn.addEventListener('click', function(event){
    event.stopPropagation(); // Stop event propagation
    inputField.value = "";
})

// Definition of the functionality of del
const delBtn = document.querySelector(".btn-28");
delBtn.addEventListener('click', function(event){
    event.stopPropagation(); // Stop event propagation
    let initialExp = inputField.value;

    // Remove the last character from the input value
    inputField.value = initialExp.slice(0, -1); 
});

// let's see the functionality of  x²  button
const sq = document.querySelector(".btn-1");
sq.addEventListener('click', function(event){
    event.stopPropagation(); // Stop event propagation
    inputField.value = "sq()";
})
// let's see the functionality of  y3  button
const cube = document.querySelector(".btn-2");
cube.addEventListener('click', function(event){
    event.stopPropagation(); // Stop event propagation
    inputField.value = "cube()";
})

// let's now see the functionality of pi
const pi = document.querySelector(".btn-6");
pi.addEventListener('click', function(event) {
    event.stopPropagation(); // Stop event propagation

    if (inputField.value === "") {
        inputField.value = '3.14';
    } else {
        inputField.value += '*' + '3.14';
    }
});


// let's now evaluate
const evaluate = document.querySelector(".btn-29");
evaluate.addEventListener('click', function(event){
    event.stopPropagation(); // Stop event propagation

    const exprssion = inputField.value;
    inputField.value = math.evaluate(exprssion)
})