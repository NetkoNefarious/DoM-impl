import { Card } from "./card.ts";

export class Market {
    deck: Card[];
    cards: Card[];

    constructor(deck: Card[]) {
        this.deck = [...deck];
        this.cards = this.deck.splice(0, 5);
    }

    takeAt(i: number): Card {
      return this.cards.splice(i, 1)[0];
    }

    fillUp() {
      while (this.cards.length < 5 && this.deck.length > 0) {
        this.cards[this.cards.length] = this.deck.pop()!;
      }
    }

    takeNoReplace(i: number) {
      const card = this.cards.at(i);
      this.cards[i].isTaken = true;

      return card;
    }
}