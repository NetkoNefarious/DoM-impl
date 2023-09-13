import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { Market } from "../../model/market.ts";
import { createDeckWithNames } from "../util/objectMother/cardLists.ts";
import { assertStrictEquals } from "https://deno.land/std@0.201.0/assert/assert_strict_equals.ts";
import { createTakenCardWithName } from "../util/objectMother/cards.ts";

Deno.test("fill the market upon creating it", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b']);

    // act
    const market = new Market(deck);

    // assert
    assertEquals(market.cards, deck);
    assertEquals(market.deck, []);
});

Deno.test("take a card", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b']);
    const market = new Market(deck);

    // act
    const card = market.takeAt(4);

    // assert
    assertEquals(market.cards, createDeckWithNames(['a', 'a', 'a', 'a']));
    assertEquals(card?.name, "b");
});

Deno.test("disable taking a taken card", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'c', 'a', 'b']);
    const market = new Market(deck);
    market.takeNoReplace(2);

    // act
    const card = market.takeAt(2);

    // assert
    assertStrictEquals(card?.name, undefined);
});

Deno.test("take a card without replacing it", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b']);

    const market = new Market(deck);

    // act
    market.takeNoReplace(4);

    // assert
    assertEquals(market.cards, [
        ...createDeckWithNames(['a', 'a', 'a', 'a']),
        createTakenCardWithName('b'),
    ]);
});

Deno.test("fill up the market and replace taken cards", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b', 'c']);
    const market = new Market(deck);
    market.takeNoReplace(4);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, createDeckWithNames(['a', 'a', 'a', 'a', 'c']));
});

Deno.test("fill up the market to limit", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b', 'd', 'c']);
    const market = new Market(deck);
    market.takeAt(4);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, createDeckWithNames(['a', 'a', 'a', 'a', 'c']));
});

Deno.test("don't fill up the market if already at capacity", () => {
    // arrange
    const deck = createDeckWithNames(['a', 'a', 'a', 'a', 'b', 'c']);
    const market = new Market(deck);

    // act
    market.fillUp();

    // assert
    assertEquals(market.cards, createDeckWithNames(['a', 'a', 'a', 'a', 'b']));
});