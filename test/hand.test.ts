import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import { Card } from "../model/card.ts";
import { Hand } from "../model/hand.ts";

Deno.test("fill hand up to limit", () => {
    // arrange
    const deck = [
        new Card("a", "Technique", "Effect", true, 2),
        new Card("b", "Technique", "Effect", true, 2),
        new Card("c", "Technique", "Effect", true, 2),
        new Card("d", "Technique", "Effect", true, 2),
        new Card("e", "Technique", "Effect", true, 2),
    ];

    const hand = new Hand([
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
    ]);

    // act
    hand.addCardsFromDeck(deck);

    // assert
    assertEquals(hand.cards, [
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("a", "Technique", "Effect", true, 2),
        new Card("b", "Technique", "Effect", true, 2),
    ]);
});