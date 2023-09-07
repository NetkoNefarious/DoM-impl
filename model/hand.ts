import { Card } from "./card.ts";

export class Hand {
    addCardsFromDeck(deck: Card[]): void {
      this.cards = [
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("b", "Technique", "Effect", true, 2),
      ];
    }

    cards: Card[];
    limit = 5;

    constructor(cards: Card[]) {
        this.cards = cards;
    }
}