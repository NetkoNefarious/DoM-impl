import { Stack } from "../../model/stack.ts";
import { Stall } from "../../model/stall.ts";

export class FullStall extends Stall {
    constructor() {
        super();
        
        const stack = new Stack([]);
        this.stacks = Array(8).fill(stack);
    }
}