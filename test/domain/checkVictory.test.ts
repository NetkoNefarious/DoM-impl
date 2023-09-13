import { assertStrictEquals } from "https://deno.land/std@0.201.0/assert/assert_strict_equals.ts";
import { FullStall } from "../util/fullStall.ts";
import { checkVictory } from "../../domain/checkVictory.ts";
import { Stall } from "../../model/stall.ts";
import { assertFalse } from "https://deno.land/std@0.201.0/assert/assert_false.ts";

Deno.test('for 8 stacks, declare victory', () => {
    // arrange
    const stall = new FullStall();

    // act
    const result = checkVictory(stall);

    // assert
    assertStrictEquals(result, true)
})

Deno.test('for less than 8 stacks, no victory', () => {
    // arrange
    const stall = new Stall();

    // act
    const result = checkVictory(stall);

    // assert
    assertFalse(result)
})