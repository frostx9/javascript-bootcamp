const myDeck = {
  deck: [],  // Add all combiantio card
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const {
      suits,
      values,
      deck
    } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    // return deck;
  },
  drawCard() {
    const card = this.deck.pop(); // remvove combination card one by one from deck array
    this.drawnCards.push(card); // add removed combination card in to drawnCards array
    return card;
  },
  drawMultiple(numCards) {  // drwan multpiale cards by how much want 
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard()); // add removed combination card in to drawnCards array
    }
    return cards;
  },
  //Fisher Yatee Shuffle
  shuffle() {
    const {
      deck
    } = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) { // this for loop start form backward
      //pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      //swap
      [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap bewtwwn random index and start from last index
    }
  }
}

// Much cleaner!!
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

// Creating Deck Factory
/* 
Creating Function Factory
A function return function and save to a variable...and then variable alse retrun a function

const myDeck = deck()
myDeck.shuffle()

*/