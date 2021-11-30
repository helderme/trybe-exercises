let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* for (let segundoNumero=1; segundoNumero < numbers.length; segundoNumero++){

    for(let primeiroNumero=0; primeiroNumero < segundoNumero; primeiroNumero++){
        if(numbers[segundoNumero] < numbers[primeiroNumero]){
            let memoria = numbers[primeiroNumero];
            numbers[primeiroNumero] = numbers[segundoNumero];
            numbers[segundoNumero] = memoria;
        }
    }
}
console.log(numbers) */



let newNumbers = []
let n = 1
for (let i=0; i < numbers.length; i++){
    if(n > numbers.length){
    newNumbers.push(numbers[i]*2)
    }
    newNumbers.push(numbers[i]*numbers[n])
    n++
}
console.log(newNumbers)
