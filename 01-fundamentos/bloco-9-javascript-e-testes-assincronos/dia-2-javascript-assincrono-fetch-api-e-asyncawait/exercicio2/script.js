const rateUsd = document.querySelector('#rate-usd')
const buttonSearch = document.querySelector('#search')
const coinName = document.querySelector('#coin-name')
const text = document.querySelector('#text')

const ratesUrl = 'https://api.coincap.io/v2/rates/'

async function crypto() {
  const input = text.value.toLowerCase()
  const response = await fetch(ratesUrl + input);
  const coin = await response.json()
  coinName.innerText = `${coin.data.id.toUpperCase()} (${coin.data.symbol})`
  rateUsd.innerText = `$ ${coin.data.rateUsd}`
}

buttonSearch.addEventListener('click', crypto);