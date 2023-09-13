export class Card {
    name: string;
    type: CardType;
    effectText: string;
    isFinal: boolean;
    value: number;
    isTaken: boolean;

    constructor(name: string, type: CardType, effectText: string, isFinal: boolean, value: number, taken?: boolean) {
        this.name = name;
        this.type = type;
        this.effectText = effectText;
        this.isFinal = isFinal;
        this.value = value;
        this.isTaken = taken ?? false;
    }
}

export type CardType = 'Technique' | 'Passive';