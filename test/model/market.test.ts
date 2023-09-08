import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { Card } from "../../model/card.ts";
import { Market } from "../../model/market.ts";

Deno.test("fill the market upon creating it", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
    ];

    // act
    const market = new Market(deck);

    // assert
    assertEquals(market.cards, deck);
    assertEquals(market.deck, []);
});

Deno.test("take a card from the market", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
    ];

    const market = new Market(deck);

    // act
    const card = market.takeAt(4);

    // assert
    assertEquals(market.cards, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
    ]);
    assertEquals(card.name, "b");
});