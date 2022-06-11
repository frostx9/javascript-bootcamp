const make = {
  deck: [],
  drawCard: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  intial() {
    const { deck, suits, values } = this;
    for (let value of values.split(",")) {
      for (let suit of suits) {
        deck.push({
          value,
          suit,
        });
      }
    }
  },

  draw() {
    const draw = this.deck.pop();
    this.drawCard.push(draw);
    return draw;
  },

  drwmulti(num) {
    const cards = [];
    for (i = 0; i < num; i++) {
      cards.push(this.draw());
    }
    return cards;
  },
};
