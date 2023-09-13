import shuffle from "https://deno.land/x/lodash@4.17.15-es/shuffle.js";
import { Hand } from "./model/hand.ts";
import { showHand } from "./view/showHand.ts";
import { availableCards } from "./domain/availableCards.ts";

if (import.meta.main) {
  // Game loop
  while (true) {
    const deck = shuffle(availableCards);
    const hand = new Hand(deck.slice(0, 5));

    console.log("Hand:");
    console.log(showHand(hand));

    const input = prompt("Please write a command:")

    if (input === "q") {
      break;
    }

    console.log()
  }
}
