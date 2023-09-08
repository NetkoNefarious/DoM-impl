import { Either, right } from "https://deno.land/x/fun@v2.0.0-alpha.14/either.ts";
import { Hand } from "./hand.ts";
import { left } from "https://deno.land/x/fun@v2.0.0-alpha.14/either.ts";

export class PlayingArea {
    hand: Hand;

    constructor(hand: Hand) {
        this.hand = hand;
    }

    discard(cardIndexes: number[]): Either<string, undefined> {
        const sortedIndexes = cardIndexes.sort().reverse();

        if (this.hand.isEmpty() ||
            sortedIndexes[0] < 0 ||
            sortedIndexes[sortedIndexes.length] > sortedIndexes.length
        ) {
            return left("Not allowed to discard non-existing cards");
        }

        sortedIndexes.forEach((x) => {
            this.hand.discard(x);
        });

        return right(undefined);
    }
}