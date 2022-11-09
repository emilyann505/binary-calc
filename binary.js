// binary calculator
// create elements by ID
// create functions for each button
// create clear button function
// create operators button functions

window.onload = () => {
    let inputs = [];
    let operator = '';

const displayResult = () => {
    const res = document.getElementbyId('res');

    let value1 = inputs[0];
    let value2 = inputs[1] === undefined ? '' : inputs[1];

    res.innerText = `${value1} ${operator} ${value2}`;
};

const setOperator = op => {
    if (inputs[1] === undefined) {
    operator = op;
}
    
displayResult();
};

const setValues = num => {
    if (inputs.length === 0) {
        inputs[0] = num;
    } else if (inputs.length === 1 && operator.length === 0) {
        inputs[0] += num;
    } else if (inputs.length === 1 && operator.length > 0) {
        inputs[1] = num;
    } else if (inputs.length === 2 && operator.length > 0) {
        inputs[1] += num;
    }
    
    displayResult();
};

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
    setValues('0');
});
    
const btn1 = document.getElementbyId('btn1');    
btn1.addEventListener('click', () => {
    setValues('1');
});
       
const btnSum = document.getElementbyId('btnSum');
btnSum.addEventListener('click', () => {
    setOperator('+');
});
    
const btnSub = document.getElementbyId('btnSub');
btnSub.addEventListener('click', () => {
    setOperator('-');
});
    
const btnMul = document.getElementbyId('btnMul');
btnMul.addEventListener('click', () => {
    setOperator('*');
});
    
const btnDiv = document.getElementbyId('btnDiv');
btnDiv.addEventListener('click', () => {
    setOperator('/');
});
    
const btnClr = document.getElementbyId('btnClr');
btnClr.addEventListener('click', () => {
   inputs = [''];
   operator = '';

    displayResult();
});
    
const btnEql = document.getElementbyId('btnEql');
btnEql.addEventListener('click', () => {
    if (inputs.length === 2 && operator.length > 0) {
        let value1 = parseInt(inputs[0], 2);
        let value2 = parseInt(inputs[1], 2);

        switch (operator) {
            case '+':
                inputs = [(value1 + value2).toString(2)];
                break;
            case '-':
                inputs = [(value1 - value2).toString(2)];
                break;
            case '*':
                inputs = [parseInt(value1 * value2, 0).toString(2)];
                break;
            case '/':
                inputs = [parseInt(value1 / value2, 0).toString(2)];
                break;
        }

        operator = '';

        displayResult();
    }
  });
};