import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { Hand } from "../../model/hand.ts";
import { Card } from "../../model/card.ts";
import { PlayingArea } from "../../model/playingArea.ts";
import { isLeft } from "https://deno.land/x/fun@v2.0.0-alpha.14/either.ts";

Deno.test("discard cards from hand", () => {
    // arrange
    const hand = new Hand([
        new Card("a", "Technique", "Effect", true, 2),
        new Card("b", "Technique", "Effect", true, 2),
        new Card("c", "Technique", "Effect", true, 2),
    ])

    const playingArea = new PlayingArea(hand)

    // act
    playingArea.discard([0, 1]);

    // assert
    assertEquals(playingArea.hand.cards, [
        new Card("c", "Technique", "Effect", true, 2),
    ]);
});

Deno.test("disallow discarding non-existent cards", () => {
    // arrange
    const hand = new Hand([]);
    const playingArea = new PlayingArea(hand);

    // act
    const result = playingArea.discard([0]);

    // assert
    assertEquals(isLeft(result), true);
})