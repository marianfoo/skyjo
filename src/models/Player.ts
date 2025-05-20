import { Card, Player as PlayerInterface } from './types';

export abstract class Player implements PlayerInterface {
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

    constructor(id: string, name: string, isHuman: boolean, color: string) {
        this.id = id;
        this.name = name;
        this.cards = [];
        this.totalScore = 0;
        this.roundScore = 0;
        this.liveScore = 0;
        this.isHuman = isHuman;
        this.color = color;
        this.roundScores = [];
        this.finishedRounds = [];
    }

    /**
     * Reset the player's state for a new round
     */
    resetForNewRound(): void {
        this.cards = [];
        this.roundScore = 0;
        this.liveScore = 0;
    }

    /**
     * Calculate the live score based on revealed cards
     */
    calculateLiveScore(): number {
        this.liveScore = this.cards.reduce((sum, card) => {
            return card.revealed ? sum + card.value : sum;
        }, 0);
        return this.liveScore;
    }

    /**
     * Calculate the round score (sum of all card values)
     */
    calculateRoundScore(): number {
        this.roundScore = this.cards.reduce((sum, card) => sum + card.value, 0);
        this.roundScores.push(this.roundScore);
        return this.roundScore;
    }

    /**
     * Add the round score to the total score
     */
    updateTotalScore(): void {
        this.totalScore += this.roundScore;
    }

    /**
     * Record that this player finished a round
     * @param roundNumber The round number finished
     */
    markRoundFinished(roundNumber: number): void {
        this.finishedRounds.push(roundNumber);
    }

    /**
     * Double the player's round score (for scoring rules)
     */
    doubleRoundScore(): void {
        const originalScore = this.roundScore;
        this.roundScore *= 2;
        // Update the last round score in the array
        if (this.roundScores.length > 0) {
            this.roundScores[this.roundScores.length - 1] = this.roundScore;
        }
        return;
    }

    /**
     * Check if all cards are revealed
     */
    areAllCardsRevealed(): boolean {
        return this.cards.every(card => card.revealed);
    }

    /**
     * Reveal all cards
     */
    revealAllCards(): void {
        this.cards.forEach(card => {
            card.revealed = true;
        });
    }
} 