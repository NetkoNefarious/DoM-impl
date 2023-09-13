import { Card } from "../../../model/card.ts";
import { Hand } from "../../../model/hand.ts";

export function createHandWithNames(names: string[]) {
    return new Hand(
        names.map((n) => new Card(n, "Technique", "Effect", true, 2))
    );
}