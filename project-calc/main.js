const btn = document.querySelectorAll(".btn");
const textArea = document.querySelector("textarea");

const btnArr = Array.from(btn);

const [ac, plus_minus, percent, delitor, seven, eight, nine, multiple, four, five, six, minus, one, two, three, plus, zero, coma, equal] = btn;

zero.addEventListener('click', (event) => {
    textArea.textContent += "0";
})

one.addEventListener('click', (event) => {
    textArea.textContent += "1";
})
two.addEventListener('click', (event) => {
    textArea.textContent += "2";
})
three.addEventListener('click', (event) => {
    textArea.textContent += "3";
})
four.addEventListener('click', (event) => {
    textArea.textContent += "4";
})
five.addEventListener('click', (event) => {
    textArea.textContent += "5";
})
six.addEventListener('click', (event) => {
    textArea.textContent += "6";
})
seven.addEventListener('click', (event) => {
    textArea.textContent += "7";
})
eight.addEventListener('click', (event) => {
    textArea.textContent += "8";
})
nine.addEventListener('click', (event) => {
    textArea.textContent += "9";
})
plus_minus.addEventListener('click', (event) => {
    textArea.textContent += "-";
})
// percent
// percent.addEventListener('click', (event) => {
//     textArea.textContent += "9";
// })
delitor.addEventListener('click', (event) => {
    textArea.textContent += "/";
})
multiple.addEventListener('click', (event) => {
    textArea.textContent += "*";
})
minus.addEventListener('click', (event) => {
    textArea.textContent += "-";
})
plus.addEventListener('click', (event) => {
    textArea.textContent += "+";
})
coma.addEventListener('click', ()=> {
    textArea.textContent += '.'
})
ac.addEventListener('click', (event) => {
    textArea.innerHTML = "";
})



// function operate(operator, valA, valB) {
//     valA = parseFloat(valA);
//     valB = parseFloat(valB);
    
//     switch (operator) {
//       case '+': return valA + valB;
//       case '-': return valA - valB;
//       case '*': return valA * valB;
//       case '/': return valA / valB;
//     }
//   }
  
//   function operateExpr(operators, expr) {
//     for (var i = 0, l = expr.length; i < l; i++) {
//       if (operators.indexOf(expr[i]) > -1) {
//         var evaluated = operate(expr[i], expr[i - 1], expr[i + 1]);
//         expr.splice(i - 1, 3, evaluated);
//         return operateExpr(operators, expr);
//       }
//     }
//     return expr;
//   }
  
//   function evalExpr(expr) {
//     expr = expr.split(/\s+/);
//     expr = operateExpr(['*', '/'], expr);
//     expr = operateExpr(['+', '-'], expr);
//     return parseFloat(expr[0]);
//   }
  
//   equal.addEventListener('click', (event) => {
//     // textArea.textContent = eval(textArea.textContent);
//     textArea.textContent = evalExpr(textArea.textContent);
//     btn.forEach((item) => {
//         item.addEventListener('click', (item) =>textArea.textContent = '');
//     })
// })

