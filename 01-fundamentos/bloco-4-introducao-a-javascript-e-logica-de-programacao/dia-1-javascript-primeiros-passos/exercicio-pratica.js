const a = 5;
const b = 3;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log("A soma: ", a, " + ", b, " é: ", adicao);
console.log("A subtracão: ", a, " - ", b, " é: ", subtracao);
console.log("A multiplicacao: ", a, " * ", b, " é: ", multiplicacao);
console.log("A divisão: ", a, " / ", b, " é: ", divisao);
console.log("O módulo: ", a, " % ", b, " é: ", modulo);


const valor1 = 5;
const valor2 = 7;
if(valor1 > valor2) {
    console.log(valor1, " é maior que ", valor2);
}
else{
    console.log(valor2, " é maior que ", valor1);
}

const valor3 = 15;
const valor4 = 9;
const valor5 = 7;
if(valor3 > valor4 && valor3 > valor5) {
    console.log(valor3, " é maior que ", valor4, " e ", valor5);
}
else if(valor4 > valor3 && valor4 > valor5) {
    console.log(valor4, " é maior que ", valor3, " e ", valor5);
}
else{
    console.log(valor5, " é maior que ", valor3, " e ", valor4);
}

const valor6 = -6;
if(valor6 > 0) {
    console.log(valor6, " é um valor positivo.");
}
else if(valor6 < 0) {
    console.log(valor6, "é um valor negativo.");
}
else{
    console.log("zero, não é positivo nem negativo, mas sim neutro.");
}

const anguloA = 60;
const anguloB = 60;
const anguloC = -1;

if( ( anguloA < 0 || anguloB < 0 || anguloC < 0 ) ){
    console.log("Erro, Ângulo inválido!")
}
else if( (anguloA + anguloB + anguloC) == 180 ){
    console.log(true)
}
else{
    console.log(false)
}

let peca = "biSpo"
console.log(peca.toLowerCase()); /* https://www.w3schools.com/jsref/jsref_tolowercase.asp */

switch(peca){
    case bispo
}






