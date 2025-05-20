// Game Constants
export const ROWS = 3;
export const COLS = 4;
export const CARDS_PER_PLAYER = ROWS * COLS;
export const WIN_THRESHOLD = 100;
export const INITIAL_CARDS_TO_REVEAL = 2;

// Animation Speed Constants (in milliseconds)
export const ANIMATION_SPEEDS = {
    slow: 1000,
    medium: 500,
    fast: 200
};

// Types for game elements
export interface Card {
    value: number;
    colorClass: string;
    revealed: boolean;
}

export interface DifficultySettings {
    lookback: number;
    keepThresholds: { low: number; mid: number };
    keepProbabilities: { low: number; mid: number; high: number };
    noise: number;
    endRoundAwareness: boolean;
    bluffProbability: number;
    columnValueThreshold: number;
    simulationBudget: number;
    highVarianceWhenBehind: boolean;
    lowVarianceWhenAhead: boolean;
    deckMemory: boolean;
    drawDiscardBaseProb: number;
    riskTolerance: number;
    description: string;
}

export type Difficulty = 'casual' | 'skilled' | 'expert';

export interface CardDistribution {
    value: number;
    count: number;
    color: string;
}

export interface Player {
    id: string;
    name: string;
    cards: Card[];
    totalScore: number;
    roundScore: number;
    liveScore: number;
    isHuman: boolean;
    color: string;
    roundScores: number[];
    finishedRounds: number[];
    difficulty?: Difficulty;
    cardMemory?: Card[];
    bestTargetIndex?: number;
    
    // Methods
    resetForNewRound(): void;
    calculateLiveScore(): number;
    calculateRoundScore(): number;
    updateTotalScore(): void;
    markRoundFinished(roundNumber: number): void;
    doubleRoundScore(): void;
    areAllCardsRevealed(): boolean;
    revealAllCards(): void;
}

export interface Action {
    type: 'keep' | 'discard';
    targetIndex?: number;
}

export interface GameState {
    deck: Card[];
    discardPile: Card[];
    players: Player[];
    currentPlayerIndex: number;
    currentRound: number;
    maxRounds: number;
    isGameOver: boolean;
    currentDrawnCard: Card | null;
    selectedCardIndex: number | null;
    animationSpeed: number;
    roundHistory: any[]; // Define better type if needed
    seenCards: Record<number, number>;
    moveInProgress: boolean;
    initialCardSelectionPhase: boolean;
    cardsToRevealCount: number;
    roundFinisher: number | null;
} 