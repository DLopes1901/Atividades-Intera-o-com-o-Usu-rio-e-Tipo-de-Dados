let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");

num1 = Number(num1);
num2 = Number(num2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num2 !== 0 ? num1 / num2 : "Indefinido (divisão por zero)";

alert(`Resultados: Soma ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`);