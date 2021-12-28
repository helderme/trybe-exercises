window.onload = function () {

  let temaAtual = localStorage.getItem('tema')
  let corDoTexto = localStorage.getItem('corDoTexto')

  

  firstParagraph = document.querySelector('#first-paragraph')
  title = document.querySelector('#title')
  subtitle = document.querySelector('#subtitle')
  main = document.querySelector('main')
  article = document.querySelector('article')
  body = document.querySelector('body')
  section = document.querySelector('section')
  colorButtons = document.querySelector('#color-buttons')

  body.style.color = corDoTexto

  if (temaAtual === 'dark') {
    body.style.backgroundColor = 'black';
  }

  firstParagraph.innerText = 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker incluindo versões de Lorem Ipsum.';
  title.innerText = 'Lorem Ipsun';
  subtitle.innerText = 'What is Lorem Ipsum?'

  putDarkMode = document.createElement('input');
  putDarkMode.type = 'button'
  putDarkMode.value = 'DarkMode'

  putLightMode = document.createElement('input');
  putLightMode.type = 'button'
  putLightMode.value = 'LightMode'

  typeColor = document.createElement('input');
  typeColor.value = 'Escreva a cor do texto'


section.appendChild(putLightMode)
section.appendChild(putDarkMode)
section.appendChild(typeColor)

  function darkMode(){
    body.style.backgroundColor = 'black';
    
    localStorage.setItem('tema', 'dark')
  }
  function lightMode(){
    body.style.backgroundColor = 'white';
    
    localStorage.setItem('tema', 'white')
  }
  function changeTextColor(e){
    body.style.color = typeColor.value
    localStorage.setItem('corDoTexto', typeColor.value)
  }

  putDarkMode.addEventListener('click', darkMode)
  putLightMode.addEventListener('click', lightMode)
  typeColor.addEventListener('keyup', changeTextColor)

  colors = ['blue', 'red', 'white', 'black', 'green', 'purple']

  for (i = 0; i < colors.length; i += 1){
    boxColor = document.createElement('li');
    boxColor.className = 'box'
    boxColor.style.backgroundColor = colors[i]
    colorButtons.appendChild(boxColor)
  }

  let boxes = document.getElementsByClassName('box')
  for(i = 0; i < boxes.length; i += 1){
      boxes[i].addEventListener('click', clickedBox)
  }
  function clickedBox(e){
    body.style.color = e.target.style.backgroundColor
  }

  //boxes[1].style.backgroundColor




}