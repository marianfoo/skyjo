import { Player } from './Player';

export class HumanPlayer extends Player {
    constructor(name: string) {
        super('player', name, true, 'var(--player-color)');
    }

    // Human players don't need special AI logic methods
    // But we could add methods for handling UI interactions specific to human players
} 