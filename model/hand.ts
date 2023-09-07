import { Card } from "./card.ts";

export class Hand {
    isEmpty(): boolean {
        return this.cards.length === 0;
    }
    
    cards: Card[];
    limit = 5;

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    addCardsFromDeck(deck: Card[]): void {
        while (deck.length > 0 && this.cards.length < this.limit) {
            this.cards[this.cards.length] = deck.pop()!;
        }
    }

    discard(x: number): void {
        this.cards.splice(x, 1);
    }
}