import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { Hand } from "../../model/hand.ts";
import { PlayingArea } from "../../model/playingArea.ts";
import { isLeft } from "https://deno.land/x/fun@v2.0.0-alpha.14/either.ts";
import { createDeckWithNames } from "../util/objectMother/cardLists.ts";

Deno.test("discard cards from hand", () => {
    // arrange
    const hand = new Hand(createDeckWithNames(['a', 'b', 'c']))
    const playingArea = new PlayingArea(hand)

    // act
    playingArea.discard([0, 1]);

    // assert
    assertEquals(playingArea.hand.cards, createDeckWithNames(['c']));
});

Deno.test("show cards in the discard pile", () => {
    // arrange
    const hand = new Hand(createDeckWithNames(['a', 'b']))
    const playingArea = new PlayingArea(hand)

    // act
    playingArea.discard([0]);

    // assert
    assertEquals(playingArea.discardPile, createDeckWithNames(['a']));
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