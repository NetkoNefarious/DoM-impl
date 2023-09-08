import { Card } from "./card.ts";

export class Hand {    
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

    discard(x: number): Card {
        return this.cards.splice(x, 1)[0];
    }

    isEmpty(): boolean {
        return this.cards.length === 0;
    }
}