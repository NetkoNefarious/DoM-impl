import { Card } from "../../../model/card.ts";
import { Stack } from "../../../model/stack.ts";

export function createStackWithCardValues(values: number[]) {
    const cards = values.map((v) => new Card("a", "Squirrel", "Technique", "c", true, v));

    return new Stack(cards);
}