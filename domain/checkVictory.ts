import { Stall } from "../model/stall.ts";

export function checkVictory(stall: Stall): boolean {
    return stall.stackCount() === 8;
}