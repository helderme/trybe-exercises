const { question, questionFloat, questionInt } = require('readline-sync')

const altura = questionInt('Qual sua altura em cm: ')
const peso = questionFloat('Qual seu peso: ')

const resultado = peso / (altura/100 * altura/100)

if(resultado < 18.5) console.log(`${resultado.toFixed(2)}, Classificação:Magreza`)
if(resultado >= 18.5 && resultado <= 24.9) console.log(`${resultado.toFixed(2)}, Classificação: Normal`)
if(resultado > 24.9 && resultado < 30) console.log(`${resultado.toFixed(2)}, Classificação: Sobrepeso`)
if(resultado >= 30 && resultado < 40) console.log(`${resultado.toFixed(2)}, Classificação: Obesidade`)
if(resultado >= 40) console.log(`${resultado.toFixed(2)}, Classificação: Obesidade grave`)

