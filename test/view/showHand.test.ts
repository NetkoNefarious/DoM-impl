import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { Hand } from "../../model/hand.ts";
import { createHandWithNames } from "../util/objectMother/hands.ts";

Deno.test('show an empty hand', () => {
    // arrange
    const hand = createHandWithNames([]);

    // act
    const text = showHand(hand);

    // assert
    assertEquals(text, "No cards in hand");
});

export function showHand(hand: Hand): string {
    return "No cards in hand";
}