/* console.log(document.getElementById('elementoOndeVoceEsta'));

console.log(document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red');

document.getElementById('primeiroFilhoDoFilho').innerText = "acho que lembro sim dos vídeos anteriores"

console.log(document.getElementById('pai').firstElementChild)

console.log(document.getElementById('elementoOndeVoceEsta').parentNode.firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling); */

let pai = document.querySelector('#pai');
let section1 = document.createElement('section');
section1.id = 'irmao'
pai.appendChild(section1);

let section2 = document.createElement('section');
let ondeVc = document.getElementById('elementoOndeVoceEsta');
section2.id = 'filho'
ondeVc.appendChild(section2);

let section3 = document.createElement('section');
let filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
section3.id = 'filhoMaximo'
filhoDoFilho.appendChild(section3);

console.log(document.getElementById('filhoMaximo').parentNode.parentNode.nextSibling.nextSibling);

let primeiroFilho = document.querySelector('#primeiroFilho')
pai.removeChild(primeiroFilho)

let terceiroFilho = document.querySelector('#terceiroFilho')
pai.removeChild(terceiroFilho)

let quartoFilho = document.querySelector('#quartoEUltimoFilho')
pai.removeChild(quartoFilho)

let irmao = document.querySelector('#irmao')
pai.removeChild(irmao)

ondeVc.removeChild(section2)

let segundoUltimo = document.querySelector('#segundoEUltimoFilhoDoFilho')
ondeVc.removeChild(segundoUltimo)


let filhoMaximo = document.querySelector('#filhoMaximo')
filhoDoFilho.removeChild(filhoMaximo)







