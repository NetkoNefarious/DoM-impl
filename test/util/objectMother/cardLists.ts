import { Card } from "../../../model/card.ts";

export function createDeckWithNames(names: string[]) {
    return names.map((n) => new Card(n, "Squirrel", "Technique", "Effect", true, 2));
}