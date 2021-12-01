let posicaoLinhaRainha = 4
let posicaoColunaRainha = 4

let posicaoLinhaPeca = 1
let posicaoColunaPeca = 7

let ataqueRealizado = false

if (posicaoLinhaRainha === posicaoLinhaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na linha")
}

if (posicaoColunaRainha === posicaoColunaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na coluna")
}

let verificadorLinha = posicaoLinhaRainha
let verificadorColuna = posicaoColunaRainha

for(let i = 0; i < 7; i++){
    
    verificadorColuna =  verificadorColuna - 1
    verificadorLinha =  verificadorLinha - 1
    if (verificadorLinha === posicaoLinhaPeca && verificadorColuna === posicaoColunaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na diagonal inferior esquerda")
    }
}

verificadorLinha = posicaoLinhaRainha
verificadorColuna = posicaoColunaRainha

for(let i = 0; i < 7; i++){
    
    verificadorColuna =  verificadorColuna + 1
    verificadorLinha =  verificadorLinha + 1
    if (verificadorLinha === posicaoLinhaPeca && verificadorColuna === posicaoColunaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na diagonal superior direita")
    }
}

verificadorLinha = posicaoLinhaRainha
verificadorColuna = posicaoColunaRainha

for(let i = 0; i < 7; i++){
    
    verificadorColuna =  verificadorColuna - 1
    verificadorLinha =  verificadorLinha + 1
    if (verificadorLinha === posicaoLinhaPeca && verificadorColuna === posicaoColunaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na diagonal superior esquerda")
    }
}

verificadorLinha = posicaoLinhaRainha
verificadorColuna = posicaoColunaRainha

for(let i = 0; i < 7; i++){
    
    verificadorColuna =  verificadorColuna + 1
    verificadorLinha =  verificadorLinha - 1
    if (verificadorLinha === posicaoLinhaPeca && verificadorColuna === posicaoColunaPeca){
    ataqueRealizado = true
    console.log("ataque realizado na diagonal inferior direita")
    }
}

if (!ataqueRealizado)
    (console.log("Ataque mal sucedido"))


    