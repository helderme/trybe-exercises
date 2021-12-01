let n=11
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
