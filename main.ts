import { Card } from "./model/card.ts";
import { Hand } from "./model/hand.ts";
import { showHand } from "./view/showHand.ts";

if (import.meta.main) {
  // Game loop
  while (true) {
    const hand = new Hand([
      new Card('Acorn', "Technique", '', true, 4),
      new Card('Cookies', "Passive", '', true, 2),
    ])

    console.log("Hand:");
    console.log(showHand(hand));

    const input = prompt("Please write a command:")

    if (input === "q") {
      break;
    }

    console.log()
  }
}
