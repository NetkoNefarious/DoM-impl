export class Card {
    name: string;
    animal: AnimalType;
    type: CardType;
    effectText: string;
    isFinal: boolean;
    value: number;
    isTaken: boolean;

    constructor(name: string, animal: AnimalType, type: CardType, effectText: string, isFinal: boolean, value: number, taken?: boolean) {
        this.name = name;
        this.animal = animal;
        this.type = type;
        this.effectText = effectText;
        this.isFinal = isFinal;
        this.value = value;
        this.isTaken = taken ?? false;
    }
}

export type CardType = 'Technique' | 'Passive';
export type AnimalType = 'Macaw' | 'Panda' | 'Squirrel';