document.addEventListener('DOMContentLoaded', () => {
///card options characters
  const cardsArray = [
    {
      name: 'bob',
      img: '/assets/bob.jpeg'
    },
    {
      name: 'bob',
      img: '/assets/bob.jpeg'
    },
    {
      name: 'gene',
      img: '/assets/gene.jpeg'
    },
    {
      name: 'gene',
      img: '/assets/gene.jpeg'
    },
    {
      name: 'linda',
      img: '/assets/linda.jpeg'
    },
    {
      name: 'linda',
      img: '/assets/linda.jpeg'
    },
    {
      name: 'louis',
      img: '/assets/louis.jpeg'
    },
    {
      name: 'louis',
      img: '/assets/louis.jpeg'
    },
    {
      name: 'teddy',
      img: '/assets/teddy.jpeg'
    },
    {
      name: 'teddy',
      img: '/assets/teddy.jpeg'
    },
    {
      name: 'tina',
      img: '/assets/tina.jpeg'
    },
    {
      name: 'tina',
      img: '/assets/tina.jpeg'
    },
  ]

  ///boardgame grid
  cardsArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const ResultDisplay = document.querySelector('#result')
  let cardSelected = []
  let cardSelectedId = []
  let winningCard = []


  function createBoard() {
    for (let index = 0; index < cardsArray.length; index++) {
      card = document.createElement('img')
      card.setAttribute('class', 'card-design');
      card.style.setProperty('width', '120px');
      card.style.setProperty('height', '120px');
      card.setAttribute('src', '/assets/frontCard.jpeg')
      card.setAttribute('data-id', index)
      card.addEventListener('click', (e) => flipcard(e.target))
      grid.appendChild(card)

    }
  }

  /////matching cards

  function checkForMatch() {
    cards = document.querySelectorAll('img')
    const firstOptionId = cardSelectedId[0]
    const secondOtionId = cardSelectedId[1]
    if (cardSelected[0] === cardSelected[1]) {
      alert('Yeihhh es un Match!!!')

      cards[firstOptionId].setAttribute('src', '/assets/matchCard.jpeg')
      cards[secondOtionId].setAttribute('src', '/assets/matchCard.jpeg')
      winningCard.push(cardSelected)

    } else {
      cards[firstOptionId].setAttribute('src', '/assets/frontCard.jpeg')
      cards[secondOtionId].setAttribute('src', '/assets/frontCard.jpeg')
      alert('Ooops, nice try...')
    }
    cardSelected = []
    cardSelectedId = []
    ResultDisplay.textcontent = winningCard.length
    if (winningCard.length === cardsArray.length/2) {
      ResultDisplay.textContent = 'WOHOOO!!! Great memory!!!'
    }
  }
  

  /////card flip
  function flipcard(card) {
    console.log(card)
    cardId = card.getAttribute('data-id')
    cardSelected.push(cardsArray[cardId].name)
    cardSelectedId.push(cardId)
    card.setAttribute('src', cardsArray[cardId].img)
    if (cardSelected.length === 2) {
      setTimeout(checkForMatch, 500)
      
    }
  }

  createBoard();

})
