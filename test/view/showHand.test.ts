import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { createHandWithNames } from "../util/objectMother/hands.ts";
import { showHand } from "../../view/showHand.ts";

Deno.test('show an empty hand', () => {
    // arrange
    const hand = createHandWithNames([]);

    // act
    const text = showHand(hand);

    // assert
    assertEquals(text, "No cards in hand");
});

Deno.test('show a hand with controls', () => {
    // arrange
    const hand = createHandWithNames(["Acorn", "Cookies"]);

    // act
    const text = showHand(hand);

    // assert
    assertEquals(text, "1 - Acorn\n2 - Cookies");
});