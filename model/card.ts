export class Card {
    name: string;
    type: string;
    effectText: string;
    isFinal: boolean;
    value: number;

    constructor(name: string, type: string, effectText: string, isFinal: boolean, value: number) {
        this.name = name;
        this.type = type;
        this.effectText = effectText;
        this.isFinal = isFinal;
        this.value = value;
    }
}