import { assertStrictEquals } from "https://deno.land/std@0.201.0/assert/assert_strict_equals.ts";
import { FullStall } from "../util/fullStall.ts";
import { checkVictory } from "../../domain/checkVictory.ts";

Deno.test('for 8 stacks, declare victory', () => {
    // arrange
    const stall = new FullStall();

    // act
    const result = checkVictory(stall);

    // assert
    assertStrictEquals(result, true)
})
