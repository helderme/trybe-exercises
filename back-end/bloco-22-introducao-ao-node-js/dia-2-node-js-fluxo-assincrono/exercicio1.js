function calculo(value1, value2, value3) {
  const promise = new Promise((resolve, reject) => {
    const resultado = (value1 + value2) * value3
    if (typeof (resultado) != 'number') {
      reject(new Error('Informe apenas números'))
    } else if (resultado < 50) {
      reject(new Error('Valor muito baixo'))
    }
    resolve(resultado)
  })
  return promise;
}

calculo(5, 'a',10)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))

