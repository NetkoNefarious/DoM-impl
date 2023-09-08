import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { Card } from "../../model/card.ts";
import { Stack } from "../../model/stack.ts";
import { Stall } from "../../model/stall.ts";

Deno.test("add a stack", () => {
    // arrange
    const stall = new Stall();

    // act
    const isAdded = stall.add(new Stack([
        new Card("a", "b", "c", false, 1),
    ]));

    // assert
    assertEquals(isAdded, true);
});