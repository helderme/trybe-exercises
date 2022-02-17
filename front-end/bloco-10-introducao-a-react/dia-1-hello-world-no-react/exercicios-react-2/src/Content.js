import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const showContents = (element) => {
  return <div className="content">
  <p> O conteúdo é: {element.conteudo}</p>
  <p> Status: {element.status}</p>
  <p> Bloco: {element.bloco}</p>
  </div>
}

class Content extends React.Component {
  render() {
    return conteudos.map((element) => showContents(element))
  }
}

export default Content