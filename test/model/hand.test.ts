import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { createHandWithNames } from "../util/objectMother/hands.ts";
import { createDeckWithNames } from "../util/objectMother/cardLists.ts";

Deno.test("fill hand up to limit", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'b', 'c', 'd', 'e']);
    const hand = createHandWithNames(['a', 'a', 'a']);

    // act
    hand.addCardsFromDeck(deck);

    // assert
    assertEquals(hand.cards, createDeckWithNames(['a', 'a', 'a', 'e', 'd']));
});