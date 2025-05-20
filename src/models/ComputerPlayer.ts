import { Card, Difficulty, DifficultySettings, Action } from './types';
import { Player } from './Player';
import { DIFFICULTY_PRESETS } from '../utils/constants';

export class ComputerPlayer extends Player {
    difficulty: Difficulty;
    cardMemory: Card[];
    bestTargetIndex?: number;
    difficultySettings: DifficultySettings;

    constructor(id: string, name: string, difficulty: Difficulty, color: string) {
        super(id, name, false, color);
        this.difficulty = difficulty;
        this.cardMemory = [];
        this.difficultySettings = DIFFICULTY_PRESETS[difficulty];
    }

    resetForNewRound(): void {
        super.resetForNewRound();
        this.cardMemory = [];
        this.bestTargetIndex = undefined;
    }

    /**
     * Decide whether to draw from deck or discard pile
     * @param topDiscardCard The top card of the discard pile
     * @returns True if drawing from deck, false if drawing from discard pile
     */
    decideDrawSource(topDiscardCard: Card | undefined): boolean {
        if (!topDiscardCard) {
            return true; // Must draw from deck if discard pile is empty
        }

        const settings = this.difficultySettings;
        let drawFromDeck = true;

        // Different strategies based on difficulty level
        if (this.difficulty === 'casual') {
            // Casual: Simple random choice with fixed probability
            drawFromDeck = Math.random() > settings.drawDiscardBaseProb;
        } 
        else if (this.difficulty === 'skilled' || this.difficulty === 'expert') {
            // Check if the discard value is below threshold or can complete a column
            if (topDiscardCard.value <= settings.keepThresholds.low) {
                drawFromDeck = false;
            } 
            else if (this.canCompleteColumn(topDiscardCard.value)) {
                drawFromDeck = false;
            }
            // Expert adds more considerations
            else if (this.difficulty === 'expert') {
                // Expert considers deck exhaustion strategy
                // Additional expert logic would go here
            }
        }

        // Apply noise to the decision based on difficulty
        if (Math.random() < settings.noise) {
            drawFromDeck = !drawFromDeck;
        }

        return drawFromDeck;
    }

    /**
     * Decide whether to keep or discard a drawn card
     * @param cardValue The value of the drawn card
     * @returns True if keeping, false if discarding
     */
    decideKeepOrDiscard(cardValue: number): boolean {
        const settings = this.difficultySettings;
        let keepCard = false;
        
        // Different strategies based on AI level
        if (this.difficulty === 'casual') {
            // Casual AI uses simple probability thresholds
            if (cardValue <= settings.keepThresholds.low) {
                keepCard = Math.random() < settings.keepProbabilities.low;
            } else if (cardValue <= settings.keepThresholds.mid) {
                keepCard = Math.random() < settings.keepProbabilities.mid;
            } else {
                keepCard = Math.random() < settings.keepProbabilities.high;
            }
            
            // Basic column matching for casual
            if (this.canCompleteColumn(cardValue) && cardValue <= settings.columnValueThreshold) {
                keepCard = true;
            }
        } 
        else if (this.difficulty === 'skilled' || this.difficulty === 'expert') {
            // Advanced selection logic would go here
            // For brevity we're simplifying the skilled/expert logic
            keepCard = cardValue <= settings.keepThresholds.mid;
        }
        
        // Apply randomness based on difficulty
        if (Math.random() < settings.noise) {
            keepCard = !keepCard; // Randomly flip decision to simulate mistake
        }
        
        return keepCard;
    }

    /**
     * Select a card to replace with the drawn card
     * @param drawnCardValue The value of the drawn card
     * @returns Index of the card to replace
     */
    selectCardToReplace(drawnCardValue: number): number {
        const settings = this.difficultySettings;
        let bestCardIndex = -1;
        
        // Different replacement strategies based on difficulty
        if (this.difficulty === 'casual') {
            // Casual AI prefers to replace highest revealed card, else random hidden
            
            // First check for revealed cards
            const revealedCards = this.cards
                .map((card, index) => ({ card, index }))
                .filter(item => item.card.revealed);
            
            if (revealedCards.length > 0) {
                // Sort by value (highest first)
                revealedCards.sort((a, b) => b.card.value - a.card.value);
                
                // Check if there are any high enough values worth replacing
                if (revealedCards[0].card.value > drawnCardValue) {
                    bestCardIndex = revealedCards[0].index;
                } else {
                    // Choose a random hidden card
                    const hiddenCards = this.cards
                        .map((card, index) => ({ card, index }))
                        .filter(item => !item.card.revealed);
                    
                    if (hiddenCards.length > 0) {
                        const randomHidden = Math.floor(Math.random() * hiddenCards.length);
                        bestCardIndex = hiddenCards[randomHidden].index;
                    } else {
                        // Fallback to highest revealed
                        bestCardIndex = revealedCards[0].index;
                    }
                }
            } else {
                // All cards are hidden, choose randomly
                bestCardIndex = Math.floor(Math.random() * this.cards.length);
            }
        }
        else if (this.difficulty === 'skilled' || this.difficulty === 'expert') {
            // More advanced logic would be here
            // For brevity, we'll use a simplified version
            const revealedCards = this.cards
                .map((card, index) => ({ card, index }))
                .filter(item => item.card.revealed)
                .sort((a, b) => b.card.value - a.card.value);
                
            if (revealedCards.length > 0 && revealedCards[0].card.value > drawnCardValue) {
                bestCardIndex = revealedCards[0].index;
            } else {
                // Choose a random card
                bestCardIndex = Math.floor(Math.random() * this.cards.length);
            }
        }
        
        // If the index is still invalid, pick a random card as fallback
        if (bestCardIndex === -1 || bestCardIndex >= this.cards.length) {
            bestCardIndex = Math.floor(Math.random() * this.cards.length);
        }
        
        return bestCardIndex;
    }

    /**
     * Select a face-down card to reveal after discarding
     * @returns Index of the card to reveal
     */
    selectCardToReveal(): number {
        // Get all face-down cards
        const facedownCards = this.cards
            .map((card, index) => ({ card, index }))
            .filter(item => !item.card.revealed);
        
        if (facedownCards.length === 0) {
            throw new Error('No face-down cards to reveal');
        }
        
        // For casual, just pick randomly
        if (this.difficulty === 'casual') {
            const randomIndex = Math.floor(Math.random() * facedownCards.length);
            return facedownCards[randomIndex].index;
        }
        
        // For skilled and expert, use more advanced logic
        // For brevity, we'll just use random for now
        const randomIndex = Math.floor(Math.random() * facedownCards.length);
        return facedownCards[randomIndex].index;
    }

    /**
     * Check if we can complete a column with the given value
     * @param cardValue The value to check
     * @returns True if we can complete a column
     */
    canCompleteColumn(cardValue: number): boolean {
        // Calculate current column count
        const currentCols = this.cards.length / 3; // Assuming ROWS = 3
        
        // Check each column
        for (let col = 0; col < currentCols; col++) {
            // Count cards in this column with matching value
            let matchCount = 0;
            
            for (let row = 0; row < 3; row++) { // Assuming ROWS = 3
                const index = row * currentCols + col;
                if (index < this.cards.length) {
                    const card = this.cards[index];
                    if (card.revealed && card.value === cardValue) {
                        matchCount++;
                    }
                }
            }
            
            // If we have 2 matching cards, we could complete with this one
            if (matchCount === 2) {
                return true;
            }
        }
        
        return false;
    }
} 