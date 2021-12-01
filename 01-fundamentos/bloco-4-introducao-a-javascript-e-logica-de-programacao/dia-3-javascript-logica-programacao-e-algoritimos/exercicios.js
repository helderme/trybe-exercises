/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */

n = 5

/* asterisks = ""

for(let i = 0; i < 5; i += 1){
    asterisks = asterisks + "*"
}
for(let i = 0; i < 5; i++){
    console.log(asterisks)
} */

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
retângulo com 5 asteriscos de base. */

/* asterisks = ""

for(let i = 0; i < 5; i += 1){
    asterisks = asterisks + "*"
    console.log(asterisks)
} */

/* 3- Agora inverta o lado do triângulo.  */

/* let groupSpace = ""
let arraySpace = []
let space = " "
let caracter = ""

for(i = 0; i < n-1; i += 1){
    groupSpace = groupSpace + space
    arraySpace.push(groupSpace)
}
for(j = 0; j < n; j += 1){
    if(caracter.length < n-1){
    caracter = caracter + "*";
    console.log(arraySpace[arraySpace.length - caracter.length]+ caracter)
    }
    else{
    caracter = caracter + "*";
    console.log(caracter)
    }
} */

/* 4- Depois, faça uma pirâmide com n asteriscos de base: */

let n=5
let lineWrite = 1
let caracter = "*"
let sideSpace = n/2
let space = ""

for(let i = 0; caracter.length <= n; i += 1){
    for(j = 1; j <= sideSpace; j += 1){
    space = space + " "
    }
    sideSpace = sideSpace - 1
    console.log(space+caracter)
    space = ""
    lineWrite = lineWrite + 1
    caracter = caracter + "**"
}

