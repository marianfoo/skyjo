import { DifficultySettings, CardDistribution } from '../models/types';

// Difficulty Presets
export const DIFFICULTY_PRESETS: Record<string, DifficultySettings> = {
    casual: { 
        lookback: 0, 
        keepThresholds: { low: 4, mid: 7 }, 
        keepProbabilities: { low: 0.8, mid: 0.5, high: 0.2 },
        noise: 0.25,
        endRoundAwareness: false,
        bluffProbability: 0,
        columnValueThreshold: 3,
        simulationBudget: 0,
        highVarianceWhenBehind: false,
        lowVarianceWhenAhead: false,
        deckMemory: false,
        drawDiscardBaseProb: 0.25,  // Base probability to draw from discard pile
        riskTolerance: 0.0,         // Low risk tolerance
        description: "Makes random decisions with basic thresholds."
    },
    skilled: { 
        lookback: 1, 
        keepThresholds: { low: 5, mid: 8 }, 
        keepProbabilities: { low: 0.85, mid: 0.6, high: 0.3 },
        noise: 0.08,
        endRoundAwareness: true,
        bluffProbability: 0.05,     // 5% chance to bluff by discarding good cards
        columnValueThreshold: 6,    // Will pursue triplets up to value 6
        simulationBudget: 10,       // Limited simulation budget
        highVarianceWhenBehind: true,
        lowVarianceWhenAhead: true,
        deckMemory: false,          // Doesn't remember across rounds
        drawDiscardBaseProb: 0.5,   // Higher chance to evaluate discard
        riskTolerance: 0.4,         // Medium risk tolerance
        description: "Evaluates options using simple heuristics and some tactical awareness."
    },
    expert: { 
        lookback: Infinity, 
        keepThresholds: { low: 6, mid: 9 }, 
        keepProbabilities: { low: 0.9, mid: 0.7, high: 0.4 },
        noise: 0,
        endRoundAwareness: true,
        bluffProbability: 0.15,     // 15% chance to bluff with good cards
        columnValueThreshold: 12,   // Will pursue triplets at any value
        simulationBudget: 30,       // Higher simulation budget
        highVarianceWhenBehind: true,
        lowVarianceWhenAhead: true,
        deckMemory: true,           // Remembers cards across rounds
        drawDiscardBaseProb: 0.7,   // Much higher baseline for discard evaluation
        riskTolerance: 0.7,         // High risk tolerance
        description: "Uses advanced simulation, card counting, and strategic planning."
    }
};

// Card Values and Distribution
export const CARD_DISTRIBUTION: CardDistribution[] = [
    { value: -2, count: 5, color: 'card-m2' },
    { value: -1, count: 10, color: 'card-m1' },
    { value: 0, count: 15, color: 'card-0' },
    { value: 1, count: 10, color: 'card-1' },
    { value: 2, count: 10, color: 'card-2' },
    { value: 3, count: 10, color: 'card-3' },
    { value: 4, count: 10, color: 'card-4' },
    { value: 5, count: 10, color: 'card-5' },
    { value: 6, count: 10, color: 'card-6' },
    { value: 7, count: 10, color: 'card-7' },
    { value: 8, count: 10, color: 'card-8' },
    { value: 9, count: 10, color: 'card-9' },
    { value: 10, count: 10, color: 'card-10' },
    { value: 11, count: 10, color: 'card-11' },
    { value: 12, count: 10, color: 'card-12' }
]; 