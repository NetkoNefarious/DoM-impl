import { Card } from "./card.ts";

export class Market {
    deck: Card[];
    cards: Card[];

    constructor(deck: Card[]) {
        this.deck = [...deck];
        this.cards = this.deck.splice(0, 5);
    }

    takeAt(i: number): Card | undefined {
      const card = this.cards[i];

      return !card.isTaken ? this.cards.splice(i, 1)[0] : undefined;
    }

    fillUp() {
      this.cards = this.cards.filter((c) => !c.isTaken);

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