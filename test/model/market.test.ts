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

Deno.test("take a card", () => {
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

// Deno.test("ignore a taken card when taking other", () => {
//     // arrange
//     const deck = [
//         new Card("a", "b", "c", true, 2),
//         new Card("a", "b", "c", true, 2),
//         new Card("c", "b", "c", true, 2),
//         new Card("a", "b", "c", true, 2),
//         new Card("b", "b", "c", true, 2),
//     ];

//     const market = new Market(deck);
//     market.takeNoReplace(2);

//     // act
//     const card = market.takeAt(2);

//     // assert
//     assertEquals(card.name, "a");
// });

Deno.test("show non-taken cards", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
    ];

    const market = new Market(deck);
    market.takeNoReplace(2);

    // act
    const result = market.showAvailable();

    // assert
    assertEquals(result, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
    ]);
});

Deno.test("take a card without replacing it", () => {
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
    market.takeNoReplace(4);

    // assert
    assertEquals(market.cards, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2, true),
    ]);
});

Deno.test("fill up the market and replace taken cards", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
    ];

    const market = new Market(deck);
    market.takeNoReplace(4);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
    ]);
});

Deno.test("fill up the market to limit", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
        new Card("d", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
    ];

    const market = new Market(deck);
    market.takeAt(4);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
    ]);
});

Deno.test("don't fill up the market if already at capacity", () => {
    // arrange
    const deck = [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
        new Card("c", "b", "c", true, 2),
    ];

    const market = new Market(deck);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, [
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("a", "b", "c", true, 2),
        new Card("b", "b", "c", true, 2),
    ]);
});