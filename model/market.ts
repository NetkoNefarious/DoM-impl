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
}