import { Hand } from "../model/hand.ts";

export function showHand(hand: Hand): string {
    if (hand.isEmpty()) {
        return "No cards in hand";
    }

    return hand.cards.map((c, i) => `${i + 1} - ${c.name}`).join('\n');
}