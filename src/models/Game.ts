import { Card, GameState } from './types';
import { Player } from './Player';
import { HumanPlayer } from './HumanPlayer';
import { ComputerPlayer } from './ComputerPlayer';
import { CARD_DISTRIBUTION } from '../utils/constants';
import { debugLog, shuffleCards, getRowColFromIndex, getIndexFromRowCol } from '../utils/GameUtils';
import { ROWS, COLS, CARDS_PER_PLAYER, WIN_THRESHOLD, INITIAL_CARDS_TO_REVEAL, ANIMATION_SPEEDS } from './types';

export class Game {
    // Game state
    private state: GameState;
    
    // DOM Elements
    private domElements: Record<string, HTMLElement>;
    
    constructor() {
        this.state = {
            deck: [],
            discardPile: [],
            players: [],
            currentPlayerIndex: 0,
            currentRound: 1,
            maxRounds: 3,
            isGameOver: false,
            currentDrawnCard: null,
            selectedCardIndex: null,
            animationSpeed: ANIMATION_SPEEDS.medium,
            roundHistory: [],
            seenCards: {},
            moveInProgress: false,
            initialCardSelectionPhase: true,
            cardsToRevealCount: INITIAL_CARDS_TO_REVEAL,
            roundFinisher: null
        };
        
        // Initialize DOM elements
        this.domElements = {};
    }
    
    /**
     * Initialize the game with players and settings
     */
    public initGame(playerName: string, maxRounds: number, animationSpeed: number, 
                    computer1Difficulty: 'casual' | 'skilled' | 'expert', 
                    computer2Difficulty: 'casual' | 'skilled' | 'expert'): void {
        // Reset state
        this.state.deck = [];
        this.state.discardPile = [];
        this.state.players = [];
        this.state.currentPlayerIndex = 0;
        this.state.currentRound = 1;
        this.state.maxRounds = maxRounds;
        this.state.isGameOver = false;
        this.state.currentDrawnCard = null;
        this.state.selectedCardIndex = null;
        this.state.roundHistory = [];
        this.state.seenCards = {};
        this.state.moveInProgress = false;
        this.state.initialCardSelectionPhase = true;
        this.state.cardsToRevealCount = INITIAL_CARDS_TO_REVEAL;
        this.state.roundFinisher = null;
        
        // Set animation speed
        this.state.animationSpeed = animationSpeed;
        
        // Create players
        const humanPlayer = new HumanPlayer(playerName || 'You');
        
        const computer1 = new ComputerPlayer(
            'computer1',
            `Computer 1 (${computer1Difficulty.charAt(0).toUpperCase() + computer1Difficulty.slice(1)})`,
            computer1Difficulty,
            'var(--computer1-color)'
        );
        
        const computer2 = new ComputerPlayer(
            'computer2',
            `Computer 2 (${computer2Difficulty.charAt(0).toUpperCase() + computer2Difficulty.slice(1)})`,
            computer2Difficulty,
            'var(--computer2-color)'
        );
        
        this.state.players = [humanPlayer, computer1, computer2];
        
        // Create the deck
        this.createDeck();
        
        // Deal cards
        this.dealCards();
        
        // Start the discard pile
        if (this.state.deck.length > 0) {
            const card = this.state.deck.pop();
            if (card) {
                this.state.discardPile.push(card);
                this.trackCardSeen(card.value);
            }
        }
    }
    
    /**
     * Create the deck with the appropriate distribution of cards
     */
    private createDeck(): void {
        this.state.deck = [];
        
        // Add cards based on distribution
        CARD_DISTRIBUTION.forEach(cardType => {
            for (let i = 0; i < cardType.count; i++) {
                this.state.deck.push({
                    value: cardType.value,
                    colorClass: cardType.color,
                    revealed: false
                });
            }
        });
        
        // Shuffle the deck
        this.state.deck = shuffleCards(this.state.deck);
    }
    
    /**
     * Deal initial cards to players
     */
    private dealCards(): void {
        this.state.players.forEach(player => {
            player.cards = [];
            for (let i = 0; i < CARDS_PER_PLAYER; i++) {
                if (this.state.deck.length > 0) {
                    const card = this.state.deck.pop();
                    if (card) {
                        player.cards.push(card);
                    }
                }
            }
        });
    }
    
    /**
     * Track cards that have been seen (for AI memory)
     */
    private trackCardSeen(value: number): void {
        if (!this.state.seenCards[value]) {
            this.state.seenCards[value] = 0;
        }
        this.state.seenCards[value]++;
    }
    
    /**
     * Get the current game state
     */
    public getState(): GameState {
        return this.state;
    }
    
    /**
     * Get a player by index
     */
    public getPlayer(index: number): Player {
        return this.state.players[index];
    }
    
    /**
     * Get the current player
     */
    public getCurrentPlayer(): Player {
        return this.state.players[this.state.currentPlayerIndex];
    }
    
    /**
     * Check if the round should end (all cards revealed)
     */
    public checkForRoundEnd(): boolean {
        const player = this.getCurrentPlayer();
        
        // Check if all cards are revealed
        const allRevealed = player.cards.every(card => card.revealed);
        
        if (allRevealed) {
            // End the round with this player as finisher
            this.state.roundFinisher = this.state.currentPlayerIndex;
            return true;
        }
        
        return false;
    }
    
    /**
     * End the current round
     */
    public endRound(): void {
        // Calculate scores for this round
        const roundFinisher = this.state.roundFinisher !== null ? this.state.roundFinisher : this.state.currentPlayerIndex;
        
        debugLog(`Round ending! Player ${roundFinisher} (${this.state.players[roundFinisher].name}) finished first`);
        
        // Reveal all cards and calculate scores
        this.state.players.forEach((player, index) => {
            // Reveal all cards if not already revealed
            player.revealAllCards();
            
            // Calculate round score
            player.calculateRoundScore();
            
            // Mark this player as having finished this round (if they were the finisher)
            if (index === roundFinisher) {
                player.markRoundFinished(this.state.currentRound);
            }
            
            debugLog(`Player ${index} (${player.name}) initial round score: ${player.roundScore}`);
        });
        
        // Check if player who ended the round has the lowest score
        const lowestScorePlayer = [...this.state.players].sort((a, b) => a.roundScore - b.roundScore)[0];
        let doubledScore = false;
        
        debugLog(`Lowest score player is ${lowestScorePlayer.name} with ${lowestScorePlayer.roundScore} points`);
        
        // If the player who finished the round doesn't have the lowest score, double their round score
        const finisher = this.state.players[roundFinisher];
        if (finisher.roundScore > lowestScorePlayer.roundScore && finisher.roundScore > 0) {
            const originalScore = finisher.roundScore;
            finisher.doubleRoundScore();
            
            doubledScore = true;
            debugLog(`${finisher.name}'s score DOUBLED from ${originalScore} to ${finisher.roundScore}!`);
        } else {
            debugLog(`${finisher.name} finished first WITH the lowest score - no penalty!`);
        }
        
        // Add round score to total score
        this.state.players.forEach(player => {
            player.updateTotalScore();
        });
    }
    
    /**
     * Start a new round
     */
    public startNewRound(): boolean {
        // Check if game is over
        if (this.state.players.some(player => player.totalScore >= WIN_THRESHOLD)) {
            return false; // Game is over
        }
        
        // Reset round variables
        this.state.currentRound++;
        this.state.deck = [];
        this.state.discardPile = [];
        this.state.currentDrawnCard = null;
        this.state.selectedCardIndex = null;
        this.state.seenCards = {};
        this.state.moveInProgress = false;
        this.state.initialCardSelectionPhase = true;
        this.state.cardsToRevealCount = INITIAL_CARDS_TO_REVEAL;
        this.state.roundFinisher = null;
        
        // Create new deck
        this.createDeck();
        
        // Reset player cards
        this.state.players.forEach(player => {
            player.resetForNewRound();
        });
        
        // Deal new cards
        this.dealCards();
        
        // Start the discard pile
        if (this.state.deck.length > 0) {
            const card = this.state.deck.pop();
            if (card) {
                this.state.discardPile.push(card);
                this.trackCardSeen(card.value);
            }
        }
        
        return true; // Round started successfully
    }
    
    /**
     * Check if the game is over
     */
    public isGameOver(): boolean {
        return this.state.isGameOver || 
               (this.state.maxRounds > 0 && this.state.currentRound > this.state.maxRounds) ||
               this.state.players.some(player => player.totalScore >= WIN_THRESHOLD);
    }
    
    /**
     * Get the winner of the game
     */
    public getWinner(): Player | null {
        if (!this.isGameOver()) {
            return null;
        }
        
        // Lowest total score wins
        return [...this.state.players].sort((a, b) => a.totalScore - b.totalScore)[0];
    }
} 