import { Stack } from "./stack.ts";

export class Stall {
    stacks: Stack[];

    constructor() {
        this.stacks = [];
    }

    add(s: Stack): boolean {
      const stackValue = s.cards.reduce((acc, v) => acc + v.value, 0);
      const doesStackFit = stackValue === this.stacks.length + 1;

      if (doesStackFit) {
        this.stacks[this.stacks.length] = s;
      }

      return doesStackFit;
    }
}