
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.magicthegathering.io/v1/cards?name='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        document.querySelector('h2').innerText = data.cards[0].name
        document.querySelector('img').src = data.cards[0].imageUrl
        document.getElementById('flavorText').innerText = data.cards[0].flavor
        document.getElementById('manaCost').innerText = data.cards[0].manaCost
        document.getElementById('powerToughness').innerText = `${data.cards[0].power} / ${data.cards[0].toughness}`
        document.getElementById('cardText').innerText = `${data.cards[0].originalText}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}