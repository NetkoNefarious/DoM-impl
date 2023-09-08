import { Card } from "./card.ts";

export class Stack {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }
}