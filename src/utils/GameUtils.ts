import { Card } from '../models/types';
import { ROWS, COLS } from '../models/types';

/**
 * Debug logging function
 */
export function debugLog(message: string, obj: any = null): void {
    const timestamp = new Date().toISOString().substr(11, 8);
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    if (obj) {
        console.log(obj);
    }
}

/**
 * Fisher-Yates shuffle algorithm for cards
 */
export function shuffleCards(cards: Card[]): Card[] {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Get row/col from index based on current grid
 */
export function getRowColFromIndex(index: number, columnCount: number): { row: number; col: number } {
    const row = Math.floor(index / columnCount);
    const col = index % columnCount;
    return { row, col };
}

/**
 * Get index from row/col based on current grid
 */
export function getIndexFromRowCol(row: number, col: number, columnCount: number): number {
    return row * columnCount + col;
}

/**
 * Estimate the value of a hidden card based on seen cards
 * @param seenCards Record of seen card values and their counts
 */
export function estimateHiddenValue(seenCards: Record<number, number>): number {
    // Default estimate (average-ish card value)
    let estimate = 5;
    
    // Calculate based on seen cards
    let totalSeenValues = 0;
    let totalSeenCards = 0;
    
    // Count cards in seen cards object
    for (const [value, count] of Object.entries(seenCards)) {
        totalSeenValues += Number(value) * count;
        totalSeenCards += count;
    }
    
    // Add some randomness within ±1.5 of the estimate
    estimate += (Math.random() * 3 - 1.5);
    
    // Round to nearest 0.5
    estimate = Math.round(estimate * 2) / 2;
    
    return estimate;
}

/**
 * Check if a player should finish the round based on relative scores
 * @param playerScore Current player's score
 * @param otherScores Array of other players' scores
 */
export function shouldFinishRound(playerScore: number, otherScores: number[]): boolean {
    // Sort scores (lowest is best)
    const allScores = [playerScore, ...otherScores].sort((a, b) => a - b);
    
    // If player has lowest score, finishing is good
    return playerScore === allScores[0];
}

/**
 * Determine if player should play high variance (risky) strategy
 * @param playerScore Current player's visible score
 * @param otherScores Array of other players' visible scores
 */
export function shouldPlayHighVariance(playerScore: number, otherScores: number[]): boolean {
    // Sort scores (lowest is best)
    const allScores = [playerScore, ...otherScores].sort((a, b) => a - b);
    
    // If player is more than 10 points behind the leader, play high variance
    return playerScore - allScores[0] >= 10;
}

/**
 * Determine if player should play low variance (safe) strategy
 * @param playerScore Current player's visible score
 * @param otherScores Array of other players' visible scores
 */
export function shouldPlayLowVariance(playerScore: number, otherScores: number[]): boolean {
    // Sort scores (lowest is best)
    const allScores = [playerScore, ...otherScores].sort((a, b) => a - b);
    
    // If player is in first place and ahead by 15+ points, play low variance
    if (playerScore === allScores[0]) {
        const secondPlaceScore = allScores[1];
        return secondPlaceScore - playerScore >= 15;
    }
    
    return false;
} 