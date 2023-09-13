import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import { Stall } from "../../model/stall.ts";
import { createStackWithCardValues } from "../util/objectMother/stacks.ts";
import { assertFalse } from "https://deno.land/std@0.201.0/assert/assert_false.ts";

Deno.test("add a stack", () => {
    // arrange
    const stall = new Stall();

    // act
    const isAdded = stall.add(createStackWithCardValues([1]));

    // assert
    assertEquals(isAdded, true);
});

Deno.test("do not add an invalid stack", () => {
    // arrange
    const stall = new Stall();

    // act
    const isAdded = stall.add(createStackWithCardValues([2]));

    // assert
    assertFalse(isAdded);
    assertEquals(stall.stacks.length, 0);
});