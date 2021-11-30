let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let number of numbers){
    console.log(number)
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (index = 0; index < numbers.length; index++){
    soma = soma + numbers[index]
}
console.log("A soma de todos os números é " + soma)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

mediaNumbers = soma / numbers.length


//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaNumbers > 20){
    console.log("valor maior que 20")
}
else{
    console.log("valor menor ou igual a 20")
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numeroMaior = 0;
    for(let index=0; index < numbers.length; index++)
        if(numbers[index] > numeroMaior)
        numeroMaior = numbers[index]
        else{
        }
console.log(numeroMaior)


//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddQuantity = 0

for(let number of numbers){
    if(number % 2 != 0){
    oddQuantity++
    }
}
console.log(oddQuantity)


//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numeroMenor = numbers[0];
    for(index=0; index < numbers.length; index++)
        if(numbers[index] < numeroMenor)
        numeroMenor = numbers[index]
        else{
        }
console.log(numeroMenor)




//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let twenthFive = []
for(let i=1; i < 26; i+=1){
    twenthFive.push(i)
}
console.log(twenthFive)
    
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for(let division of twenthFive){
    console.log(division / 2)
}

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)