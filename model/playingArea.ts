import { Hand } from "./hand.ts";

export class PlayingArea {
    hand: Hand;

    constructor(hand: Hand) {
        this.hand = hand;
    }

    discard(cardIndexes: number[]) {
        cardIndexes.sort().reverse().forEach((x) => {
            this.hand.discard(x);
        });
    }
}