import { Card } from "../../../model/card.ts";

export function createTakenCardWithName(name: string) {
    return new Card(name, "Technique", "Effect", true, 2, true);
}