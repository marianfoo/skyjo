import { Game } from './models/Game';
import { ANIMATION_SPEEDS, INITIAL_CARDS_TO_REVEAL } from './models/types';
import { debugLog } from './utils/GameUtils';
import { ComputerPlayer } from './models/ComputerPlayer';

// Import CSS
import '../skyjo-styles.css';

// Initialize the game
const game = new Game();

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen') as HTMLElement;
const gameScreen = document.getElementById('game-screen') as HTMLElement;
const roundEndScreen = document.getElementById('round-end-screen') as HTMLElement;
const gameEndScreen = document.getElementById('game-end-screen') as HTMLElement;
const playerNameInput = document.getElementById('player-name') as HTMLInputElement;
const startGameBtn = document.getElementById('start-game-btn') as HTMLButtonElement;
const nextRoundBtn = document.getElementById('next-round-btn') as HTMLButtonElement;
const newGameBtn = document.getElementById('new-game-btn') as HTMLButtonElement;
const keepCardBtn = document.getElementById('keep-card-btn') as HTMLButtonElement;
const discardCardBtn = document.getElementById('discard-card-btn') as HTMLButtonElement;
const cancelDrawBtn = document.getElementById('cancel-draw-btn') as HTMLButtonElement;
const cardSelectionArea = document.getElementById('card-selection-area') as HTMLElement;
const computerCardAnimation = document.getElementById('computer-card-animation') as HTMLElement;
const currentTurnIndicator = document.getElementById('current-turn-indicator') as HTMLElement;
const turnIndicatorText = document.getElementById('turn-indicator-text') as HTMLElement;
const playerNameDisplay = document.getElementById('player-name-display') as HTMLElement;
const currentPlayerDisplay = document.querySelector('#current-player span') as HTMLElement;
const roundInfoDisplay = document.querySelector('#round-info span') as HTMLElement;
const playerCardsContainer = document.querySelector('.player-cards') as HTMLElement;
const computer1CardsContainer = document.querySelector('#computer1 .mini-cards') as HTMLElement;
const computer2CardsContainer = document.querySelector('#computer2 .mini-cards') as HTMLElement;
const drawPile = document.getElementById('draw-pile') as HTMLElement;
const discardPileEl = document.getElementById('discard-pile') as HTMLElement;
const messageContainer = document.getElementById('message-container') as HTMLElement;
const messageEl = document.getElementById('message') as HTMLElement;
const animationSpeedSelect = document.getElementById('animation-speed') as HTMLSelectElement;
const maxRoundsSelect = document.getElementById('max-rounds') as HTMLSelectElement;
const computer1DifficultySelect = document.getElementById('computer1-difficulty') as HTMLSelectElement;
const computer2DifficultySelect = document.getElementById('computer2-difficulty') as HTMLSelectElement;
const roundScoreboardTable = document.getElementById('round-scoreboard-table') as HTMLTableElement;
const playerFinalGrid = document.querySelector('.player-final-grid') as HTMLElement;
const computer1FinalGrid = document.querySelector('.computer1-final-grid') as HTMLElement;
const computer2FinalGrid = document.querySelector('.computer2-final-grid') as HTMLElement;

// Debug panel setup
const debugToggle = document.getElementById('debug-toggle') as HTMLButtonElement;
const debugPanel = document.getElementById('debug-panel') as HTMLElement;

// Debug panel functionality
debugToggle.addEventListener('click', function() {
    if (debugPanel.style.display === 'none' || !debugPanel.style.display) {
        debugPanel.style.display = 'block';
    } else {
        debugPanel.style.display = 'none';
    }
});

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Show an alert to confirm JS changes are being applied
    alert("NEW VERSION! JS changes applied successfully! Version: " + new Date().toISOString());
    
    // Set initial animation speeds
    updateAnimationSpeeds(ANIMATION_SPEEDS.medium);
    
    // Add direct event delegation for player cards
    playerCardsContainer.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const cardEl = target.closest('.card') as HTMLElement;
        
        if (!cardEl) return;
        
        const index = parseInt(cardEl.dataset.index || '-1');
        if (index === -1) return;
        
        debugLog(`Card clicked via delegation: ${index}`);
        const state = game.getState();
        const card = state.players[0].cards[index];
        
        if (!card) return;
        
        if (state.initialCardSelectionPhase && !card.revealed) {
            // During initial selection, clicking reveals the card
            handleInitialCardSelection(index);
        } else if (state.currentPlayerIndex === 0 && state.currentDrawnCard !== null) {
            // During normal gameplay, clicking replaces the card
            handleCardClick(index);
        } else if (state.currentPlayerIndex === 0 && !card.revealed) {
            // Or reveals a face-down card
            revealCard(0, index);
        }
    });
    
    // Start game button
    startGameBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        gameScreen.classList.add('active');
        
        // Initialize the game with settings
        const playerName = playerNameInput.value.trim() || 'You';
        const maxRounds = parseInt(maxRoundsSelect.value) || 3;
        const animationSpeed = ANIMATION_SPEEDS[animationSpeedSelect.value as keyof typeof ANIMATION_SPEEDS];
        const computer1Difficulty = computer1DifficultySelect.value as 'casual' | 'skilled' | 'expert';
        const computer2Difficulty = computer2DifficultySelect.value as 'casual' | 'skilled' | 'expert';
        
        // Update animation speeds in CSS
        updateAnimationSpeeds(animationSpeed);
        
        game.initGame(playerName, maxRounds, animationSpeed, computer1Difficulty, computer2Difficulty);
        
        // Update UI
        updateUI();
    });
    
    // Next round button
    nextRoundBtn.addEventListener('click', () => {
        if (game.isGameOver()) {
            // Show game end screen
            roundEndScreen.classList.remove('active');
            gameEndScreen.classList.add('active');
        } else {
            // Start a new round
            game.startNewRound();
            
            // Hide round end screen, show game screen
            roundEndScreen.classList.remove('active');
            gameScreen.classList.add('active');
            
            // Update UI
            updateUI();
        }
    });
    
    // New game button
    newGameBtn.addEventListener('click', () => {
        gameEndScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
    });
    
    // Draw and discard pile clicks
    drawPile.addEventListener('click', handleDrawPileClick);
    discardPileEl.addEventListener('click', handleDiscardPileClick);
    
    // Card action buttons
    keepCardBtn.addEventListener('click', handleKeepCard);
    discardCardBtn.addEventListener('click', handleDiscardCard);
    cancelDrawBtn.addEventListener('click', handleCancelDraw);
});

// Update the UI based on the current game state
function updateUI(): void {
    const state = game.getState();
    
    // Update player name
    playerNameDisplay.textContent = state.players[0].name;
    
    // Update current player display
    if (state.initialCardSelectionPhase) {
        currentPlayerDisplay.textContent = "Initial Selection";
    } else {
        currentPlayerDisplay.textContent = state.players[state.currentPlayerIndex].name;
    }
    
    // Update round info
    roundInfoDisplay.textContent = state.currentRound.toString();
    
    // Update player cards
    updatePlayerCards();
    
    // Update computer cards
    updateComputerCards();
    
    // Update discard pile
    updateDiscardPile();
    
    // Update draw pile
    updateDrawPile();
    
    // Update scores
    updateScores();
    
    // Highlight current player
    highlightCurrentPlayer();
}

// Update player cards display
function updatePlayerCards(): void {
    const state = game.getState();
    playerCardsContainer.innerHTML = '';
    
    // Calculate the current number of columns based on player cards
    const currentCols = Math.ceil(state.players[0].cards.length / 3); // Assuming ROWS = 3
    
    // Set the grid template columns
    playerCardsContainer.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    
    for (let i = 0; i < state.players[0].cards.length; i++) {
        const card = state.players[0].cards[i];
        const cardEl = document.createElement('div');
        cardEl.className = `card ${card.revealed ? 'flipped' : ''}`;
        cardEl.dataset.index = i.toString();
        
        // Calculate the proper position in the grid
        const row = Math.floor(i / currentCols);
        const col = i % currentCols;
        
        // Position the card using grid
        cardEl.style.gridRow = `${row + 1}`;
        cardEl.style.gridColumn = `${col + 1}`;
        
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        
        const cardFront = document.createElement('div');
        cardFront.className = `card-front ${card.colorClass}`;
        cardFront.textContent = card.value.toString();
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardEl.appendChild(cardInner);
        
        // Add click event for player's turn - use closure to capture the current index
        const cardIndex = i; // Capture the current index in a closure
        cardEl.addEventListener('click', () => {
            debugLog(`Card clicked with index ${cardIndex}`);
            const currentState = game.getState();
            
            if (currentState.initialCardSelectionPhase && !card.revealed) {
                // During initial selection, clicking reveals the card
                handleInitialCardSelection(cardIndex);
            } else if (currentState.currentPlayerIndex === 0 && currentState.currentDrawnCard !== null) {
                // During normal gameplay, clicking replaces the card
                handleCardClick(cardIndex);
            } else if (currentState.currentPlayerIndex === 0 && !card.revealed) {
                // Or reveals a face-down card
                revealCard(0, cardIndex);
            }
        });
        
        playerCardsContainer.appendChild(cardEl);
    }
}

// Update computer cards display
function updateComputerCards(): void {
    const state = game.getState();
    
    // Computer 1
    updateMiniCards(computer1CardsContainer, state.players[1].cards);
    
    // Computer 2
    updateMiniCards(computer2CardsContainer, state.players[2].cards);
}

// Update mini cards for a computer player
function updateMiniCards(container: HTMLElement, cards: any[]): void {
    container.innerHTML = '';
    
    // Calculate the current number of columns based on cards
    const currentCols = Math.ceil(cards.length / 3); // Assuming ROWS = 3
    
    // Set the grid template columns
    container.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const miniCard = document.createElement('div');
        miniCard.className = `mini-card ${card.revealed ? 'revealed ' + card.colorClass : ''}`;
        
        // Calculate the proper position in the grid
        const row = Math.floor(i / currentCols);
        const col = i % currentCols;
        
        // Position the card using grid
        miniCard.style.gridRow = `${row + 1}`;
        miniCard.style.gridColumn = `${col + 1}`;
        
        if (card.revealed) {
            miniCard.textContent = card.value.toString();
        }
        
        container.appendChild(miniCard);
    }
}

// Update the discard pile display
function updateDiscardPile(): void {
    const state = game.getState();
    const cardEl = discardPileEl.querySelector('.card') as HTMLElement;
    cardEl.className = 'card';
    cardEl.innerHTML = '';
    
    if (state.discardPile.length > 0) {
        const topCard = state.discardPile[state.discardPile.length - 1];
        cardEl.classList.add('flipped');
        
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        
        const cardFront = document.createElement('div');
        cardFront.className = `card-front ${topCard.colorClass}`;
        cardFront.textContent = topCard.value.toString();
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardEl.appendChild(cardInner);
    } else {
        cardEl.classList.add('empty');
    }
}

// Update the draw pile display
function updateDrawPile(): void {
    const state = game.getState();
    const cardEl = drawPile.querySelector('.card') as HTMLElement;
    
    if (state.deck.length === 0) {
        cardEl.classList.add('empty');
        cardEl.classList.remove('back');
    } else {
        cardEl.classList.remove('empty');
        cardEl.classList.add('back');
    }
}

// Update score displays
function updateScores(): void {
    const state = game.getState();
    
    // Update total scores
    document.querySelector('#player-area .score span')!.textContent = state.players[0].totalScore.toString();
    document.querySelector('#computer1 .score span')!.textContent = state.players[1].totalScore.toString();
    document.querySelector('#computer2 .score span')!.textContent = state.players[2].totalScore.toString();
    
    // Update live scores
    state.players.forEach((player, index) => {
        player.calculateLiveScore();
        const scoreElement = document.querySelector(`#${player.id === 'player' ? 'player-area' : player.id} .live-score span`);
        if (scoreElement) {
            scoreElement.textContent = player.liveScore.toString();
        }
    });
}

// Highlight the current player's area
function highlightCurrentPlayer(): void {
    const state = game.getState();
    
    // Reset all highlights
    document.querySelectorAll('.opponent, .player-area').forEach(el => {
        (el as HTMLElement).style.borderColor = 'var(--border-color)';
        (el as HTMLElement).style.boxShadow = 'none';
    });
    
    // Skip highlighting during initial selection
    if (state.initialCardSelectionPhase) return;
    
    // Highlight current player
    const currentPlayer = state.players[state.currentPlayerIndex];
    const currentPlayerEl = currentPlayer.id === 'player' 
        ? document.querySelector('.player-area') as HTMLElement
        : document.getElementById(currentPlayer.id) as HTMLElement;
    
    if (currentPlayerEl) {
        currentPlayerEl.style.borderColor = currentPlayer.color;
        currentPlayerEl.style.boxShadow = `0 0 10px ${currentPlayer.color}`;
    }
    
    // Update turn indicator
    turnIndicatorText.textContent = `Current Turn: ${currentPlayer.name}`;
    currentTurnIndicator.style.backgroundColor = currentPlayer.color;
    currentTurnIndicator.classList.remove('hidden');
}

// Show a message to the player
function showMessage(msg: string, duration: number = 3000): void {
    messageEl.textContent = msg;
    messageContainer.classList.remove('hidden');
    
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, duration);
}

// Handle player clicking on draw pile
function handleDrawPileClick(): void {
    const state = game.getState();
    
    // Prevent drawing during initial card selection phase
    if (state.initialCardSelectionPhase) {
        showMessage('Please select your initial cards first', 2000);
        return;
    }
    
    // Only allow the current player to draw
    if (state.currentPlayerIndex === 0 && state.currentDrawnCard === null && !state.moveInProgress) {
        drawCard(true);
    }
}

// Handle player clicking on discard pile
function handleDiscardPileClick(): void {
    const state = game.getState();
    
    // Prevent drawing during initial card selection phase
    if (state.initialCardSelectionPhase) {
        showMessage('Please select your initial cards first', 2000);
        return;
    }
    
    // Only allow the current player to draw
    if (state.currentPlayerIndex === 0 && state.currentDrawnCard === null && 
        state.discardPile.length > 0 && !state.moveInProgress) {
        drawCard(false);
    }
}

// Draw a card (from draw pile or discard pile)
function drawCard(fromDrawPile: boolean): void {
    const state = game.getState();
    state.moveInProgress = true;
    
    let drawnCard;
    
    if (fromDrawPile) {
        // Draw from the deck
        if (state.deck.length === 0) {
            showMessage('Draw pile is empty!');
            state.moveInProgress = false;
            return;
        }
        
        drawnCard = state.deck.pop();
    } else {
        // Draw from discard pile
        if (state.discardPile.length === 0) {
            showMessage('Discard pile is empty!');
            state.moveInProgress = false;
            return;
        }
        
        drawnCard = state.discardPile.pop();
    }
    
    if (!drawnCard) {
        state.moveInProgress = false;
        return;
    }
    
    // Set the current drawn card
    state.currentDrawnCard = drawnCard;
    
    // Show the card selection area
    const cardElement = cardSelectionArea.querySelector('.card') as HTMLElement;
    cardElement.className = `card flipped`;
    cardElement.innerHTML = '';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = `card-front ${drawnCard.colorClass}`;
    cardFront.textContent = drawnCard.value.toString();
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardElement.appendChild(cardInner);
    
    // Show the card selection area
    cardSelectionArea.classList.remove('hidden');
    
    // Track the card as seen
    if (drawnCard.value in state.seenCards) {
        state.seenCards[drawnCard.value]++;
    } else {
        state.seenCards[drawnCard.value] = 1;
    }
    
    debugLog(`Player drew a ${drawnCard.value} from ${fromDrawPile ? 'draw pile' : 'discard pile'}`);
}

// Handle player deciding to keep the drawn card
function handleKeepCard(): void {
    const state = game.getState();
    
    if (state.currentDrawnCard === null) {
        debugLog("Error: No drawn card to keep");
        return;
    }
    
    debugLog("Player chose to keep card: " + state.currentDrawnCard.value);
    
    // Hide the card selection area
    cardSelectionArea.classList.add('hidden');
    
    // Let player click on a card to replace
    showMessage('Select a card to replace');
    
    // Add a temporary overlay to highlight that cards are clickable
    const cards = playerCardsContainer.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.add('clickable-highlight');
        
        // Add a direct click handler to this specific card
        (card as HTMLElement).onclick = function() {
            debugLog(`Direct card click on index ${index}`);
            handleCardClick(index);
            
            // Remove all temporary click handlers
            cards.forEach(c => {
                (c as HTMLElement).onclick = null;
                c.classList.remove('clickable-highlight');
            });
        };
    });
}

// Handle player deciding to discard the drawn card
function handleDiscardCard(): void {
    const state = game.getState();
    
    if (state.currentDrawnCard === null) {
        state.moveInProgress = false;
        return;
    }
    
    // Add the card to the discard pile
    state.discardPile.push(state.currentDrawnCard);
    
    // Hide the card selection area
    cardSelectionArea.classList.add('hidden');
    
    // Clear the current drawn card
    state.currentDrawnCard = null;
    
    // Update the UI
    updateDiscardPile();
    
    // If it's the human player's turn, they need to reveal a card next
    if (state.currentPlayerIndex === 0) {
        showMessage('Select a face-down card to reveal');
    } else {
        // For computer players, automatically select a card to reveal
        const computerPlayer = game.getPlayer(state.currentPlayerIndex) as ComputerPlayer;
        const cardIndex = computerPlayer.selectCardToReveal();
        
        // Reveal the selected card
        setTimeout(() => {
            revealCard(state.currentPlayerIndex, cardIndex);
        }, state.animationSpeed);
    }
}

// Handle player canceling the draw
function handleCancelDraw(): void {
    const state = game.getState();
    
    if (state.currentDrawnCard === null) {
        return;
    }
    
    // Put the card back in the appropriate pile
    // For simplicity, we'll always put it back in the draw pile
    state.deck.push(state.currentDrawnCard);
    
    // Clear the current drawn card
    state.currentDrawnCard = null;
    
    // Hide the card selection area
    cardSelectionArea.classList.add('hidden');
    
    // Reset the move in progress flag
    state.moveInProgress = false;
    
    // Update the UI
    updateDrawPile();
}

// Handle player clicking on a card
function handleCardClick(index: number): void {
    const state = game.getState();
    
    debugLog(`Card clicked at index ${index}, currentDrawnCard: ${state.currentDrawnCard ? state.currentDrawnCard.value : 'none'}`);
    
    if (state.currentDrawnCard === null || state.currentPlayerIndex !== 0) {
        debugLog("Cannot handle card click: no drawn card or not player's turn");
        return;
    }
    
    // Replace the selected card with the drawn card
    const selectedCard = state.players[0].cards[index];
    
    // If replacing a face-down card, reveal it first
    if (!selectedCard.revealed) {
        selectedCard.revealed = true;
    }
    
    // Add the replaced card to the discard pile
    state.discardPile.push({
        value: selectedCard.value,
        colorClass: selectedCard.colorClass,
        revealed: true
    });
    
    // Replace the card with the drawn card
    state.players[0].cards[index] = state.currentDrawnCard;
    
    // Clear the current drawn card
    state.currentDrawnCard = null;
    
    // Hide the card selection area
    cardSelectionArea.classList.add('hidden');
    
    // Update UI
    updatePlayerCards();
    updateDiscardPile();
    updateScores();
    
    debugLog(`Card replaced at index ${index}`);
    
    // Check if the round should end
    if (game.checkForRoundEnd()) {
        endRound();
        return;
    }
    
    // Move to the next player's turn
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    state.moveInProgress = false;
    
    // Update UI to show next player
    highlightCurrentPlayer();
    
    // If it's a computer's turn, handle it automatically
    if (state.currentPlayerIndex !== 0) {
        setTimeout(handleComputerTurn, state.animationSpeed);
    }
}

// Handle initial card selection
function handleInitialCardSelection(cardIndex: number): void {
    const state = game.getState();
    
    if (!state.initialCardSelectionPhase) {
        return;
    }
    
    // Reveal the selected card
    state.players[0].cards[cardIndex].revealed = true;
    
    // Track the card as seen
    const cardValue = state.players[0].cards[cardIndex].value;
    if (cardValue in state.seenCards) {
        state.seenCards[cardValue]++;
    } else {
        state.seenCards[cardValue] = 1;
    }
    
    // Decrement cards to reveal count
    state.cardsToRevealCount--;
    
    // Update UI
    updatePlayerCards();
    updateScores();
    
    // Check if initial selection is complete
    if (state.cardsToRevealCount <= 0) {
        // Initial selection phase is complete
        state.initialCardSelectionPhase = false;
        
        // Also reveal initial cards for computer players
        revealInitialComputerCards();
        
        // Start first player's turn
        state.currentPlayerIndex = 0;
        highlightCurrentPlayer();
        
        showMessage('Your turn! Draw a card from the deck or discard pile.');
    } else {
        showMessage(`Select ${state.cardsToRevealCount} more card(s) to reveal.`);
    }
}

// Reveal initial cards for computer players
function revealInitialComputerCards(): void {
    const state = game.getState();
    
    // For each computer player
    for (let playerIndex = 1; playerIndex < state.players.length; playerIndex++) {
        const computerPlayer = state.players[playerIndex] as ComputerPlayer;
        
        // Simple AI for initial card selection
        // Just pick the first two cards - in a real implementation, we'd use the AI's strategy
        for (let i = 0; i < INITIAL_CARDS_TO_REVEAL; i++) {
            // Random index for initial reveal
            const randomIndex = Math.floor(Math.random() * computerPlayer.cards.length);
            
            // Skip already revealed cards
            if (computerPlayer.cards[randomIndex].revealed) {
                i--; // Try again
                continue;
            }
            
            // Reveal the card
            computerPlayer.cards[randomIndex].revealed = true;
            
            // Track the card as seen
            const cardValue = computerPlayer.cards[randomIndex].value;
            if (cardValue in state.seenCards) {
                state.seenCards[cardValue]++;
            } else {
                state.seenCards[cardValue] = 1;
            }
        }
    }
    
    // Update UI
    updateComputerCards();
    updateScores();
}

// Reveal a face-down card
function revealCard(playerIndex: number, cardIndex: number): void {
    const state = game.getState();
    const player = state.players[playerIndex];
    
    // Check if the card is already revealed
    if (player.cards[cardIndex].revealed) {
        if (playerIndex === 0) {
            showMessage('This card is already revealed. Select a face-down card.');
        }
        return;
    }
    
    // Reveal the card
    player.cards[cardIndex].revealed = true;
    
    // Track the card as seen
    const cardValue = player.cards[cardIndex].value;
    if (cardValue in state.seenCards) {
        state.seenCards[cardValue]++;
    } else {
        state.seenCards[cardValue] = 1;
    }
    
    // Update UI
    if (playerIndex === 0) {
        updatePlayerCards();
    } else {
        updateComputerCards();
    }
    
    updateScores();
    
    // Check if the round should end
    if (game.checkForRoundEnd()) {
        setTimeout(() => {
            endRound();
        }, state.animationSpeed);
        return;
    }
    
    // Move to the next player's turn
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    state.moveInProgress = false;
    
    // Update UI to show next player
    highlightCurrentPlayer();
    
    // If it's a computer's turn, handle it automatically
    if (state.currentPlayerIndex !== 0) {
        setTimeout(handleComputerTurn, state.animationSpeed);
    }
}

// End the current round and show the round end screen
function endRound(): void {
    const state = game.getState();
    
    // End the round in the game logic
    game.endRound();
    
    // Update the scoreboard
    updateRoundScoreboard();
    
    // Show the round end screen
    gameScreen.classList.remove('active');
    roundEndScreen.classList.add('active');
    
    // Update the round end screen with results
    updateRoundEndScreen();
}

// Handle a computer player's turn
function handleComputerTurn(): void {
    const state = game.getState();
    
    if (state.currentPlayerIndex === 0 || state.moveInProgress) {
        return; // Not a computer's turn
    }
    
    state.moveInProgress = true;
    
    // Get the current computer player
    const computerPlayer = game.getPlayer(state.currentPlayerIndex) as ComputerPlayer;
    
    // Decide whether to draw from deck or discard pile
    const topDiscardCard = state.discardPile.length > 0 ? state.discardPile[state.discardPile.length - 1] : undefined;
    const drawFromDeck = computerPlayer.decideDrawSource(topDiscardCard);
    
    // Animate the computer's decision
    showMessage(`${computerPlayer.name} is thinking...`, state.animationSpeed);
    
    setTimeout(() => {
        // Draw a card
        let drawnCard;
        
        if (drawFromDeck) {
            // Draw from deck
            if (state.deck.length === 0) {
                // If deck is empty, draw from discard pile
                if (state.discardPile.length === 0) {
                    // Both piles empty, end turn
                    state.moveInProgress = false;
                    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
                    highlightCurrentPlayer();
                    return;
                }
                drawnCard = state.discardPile.pop();
            } else {
                drawnCard = state.deck.pop();
            }
            
            showMessage(`${computerPlayer.name} draws from the deck`, state.animationSpeed);
        } else {
            // Draw from discard pile
            if (state.discardPile.length === 0) {
                // If discard pile is empty, draw from deck
                if (state.deck.length === 0) {
                    // Both piles empty, end turn
                    state.moveInProgress = false;
                    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
                    highlightCurrentPlayer();
                    return;
                }
                drawnCard = state.deck.pop();
            } else {
                drawnCard = state.discardPile.pop();
            }
            
            showMessage(`${computerPlayer.name} draws from the discard pile`, state.animationSpeed);
        }
        
        if (!drawnCard) {
            state.moveInProgress = false;
            return;
        }
        
        // Track the card as seen
        if (drawnCard.value in state.seenCards) {
            state.seenCards[drawnCard.value]++;
        } else {
            state.seenCards[drawnCard.value] = 1;
        }
        
        // Animate the drawn card
        const cardElement = computerCardAnimation.querySelector('.card') as HTMLElement;
        cardElement.className = 'card flipped';
        cardElement.innerHTML = '';
        
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        
        const cardFront = document.createElement('div');
        cardFront.className = `card-front ${drawnCard.colorClass}`;
        cardFront.textContent = drawnCard.value.toString();
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        
        computerCardAnimation.classList.remove('hidden');
        
        // Decide whether to keep or discard the card
        const keepCard = computerPlayer.decideKeepOrDiscard(drawnCard.value);
        
        setTimeout(() => {
            computerCardAnimation.classList.add('hidden');
            
            if (keepCard) {
                // Keep the card, select a card to replace
                const targetIndex = computerPlayer.selectCardToReplace(drawnCard.value);
                
                // Replace the card
                const replacedCard = computerPlayer.cards[targetIndex];
                
                // If replacing a face-down card, reveal it
                if (!replacedCard.revealed) {
                    replacedCard.revealed = true;
                }
                
                // Add the replaced card to the discard pile
                state.discardPile.push({
                    value: replacedCard.value,
                    colorClass: replacedCard.colorClass,
                    revealed: true
                });
                
                // Replace with the drawn card
                computerPlayer.cards[targetIndex] = drawnCard;
                
                showMessage(`${computerPlayer.name} keeps the card`, state.animationSpeed);
                
                // Update UI
                updateComputerCards();
                updateDiscardPile();
                updateScores();
                
                // Check if the round should end
                if (game.checkForRoundEnd()) {
                    setTimeout(() => {
                        endRound();
                    }, state.animationSpeed);
                    return;
                }
                
                // Move to next player
                state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
                state.moveInProgress = false;
                
                // Update UI
                highlightCurrentPlayer();
                
                // If next player is a computer, handle their turn
                if (state.currentPlayerIndex !== 0) {
                    setTimeout(handleComputerTurn, state.animationSpeed);
                }
            } else {
                // Discard the card
                state.discardPile.push(drawnCard);
                
                showMessage(`${computerPlayer.name} discards the card`, state.animationSpeed);
                
                // Update UI
                updateDiscardPile();
                
                // Select a card to reveal
                const cardIndex = computerPlayer.selectCardToReveal();
                
                // Reveal the selected card
                setTimeout(() => {
                    revealCard(state.currentPlayerIndex, cardIndex);
                }, state.animationSpeed);
            }
        }, state.animationSpeed * 1.5);
        
    }, state.animationSpeed);
}

// Update the round scoreboard table
function updateRoundScoreboard(): void {
    const state = game.getState();
    const tbody = roundScoreboardTable.querySelector('tbody');
    
    if (!tbody) return;
    
    // Clear existing rows
    tbody.innerHTML = '';
    
    // Add a row for each round played
    for (let i = 0; i < state.currentRound; i++) {
        const row = document.createElement('tr');
        
        // Round number
        const roundCell = document.createElement('td');
        roundCell.textContent = (i + 1).toString();
        row.appendChild(roundCell);
        
        // Player scores
        state.players.forEach(player => {
            const scoreCell = document.createElement('td');
            if (i < player.roundScores.length) {
                scoreCell.textContent = player.roundScores[i].toString();
            } else {
                scoreCell.textContent = '-';
            }
            row.appendChild(scoreCell);
        });
        
        tbody.appendChild(row);
    }
    
    // Add a total row
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    
    const totalCell = document.createElement('td');
    totalCell.textContent = 'Total';
    totalRow.appendChild(totalCell);
    
    state.players.forEach(player => {
        const totalScoreCell = document.createElement('td');
        totalScoreCell.textContent = player.totalScore.toString();
        totalRow.appendChild(totalScoreCell);
    });
    
    tbody.appendChild(totalRow);
}

// Update the round end screen with results
function updateRoundEndScreen(): void {
    const state = game.getState();
    
    // Update round scores
    document.querySelector('.round-results .player-score').textContent = state.players[0].roundScores[state.currentRound - 1].toString();
    document.querySelector('.round-results .comp1-score').textContent = state.players[1].roundScores[state.currentRound - 1].toString();
    document.querySelector('.round-results .comp2-score').textContent = state.players[2].roundScores[state.currentRound - 1].toString();
    
    // Update total scores
    document.querySelector('.round-results .player-total').textContent = state.players[0].totalScore.toString();
    document.querySelector('.round-results .comp1-total').textContent = state.players[1].totalScore.toString();
    document.querySelector('.round-results .comp2-total').textContent = state.players[2].totalScore.toString();
    
    // Update final cards display
    updateFinalCardsDisplay();
    
    // Update next round button text
    const nextRoundBtn = document.getElementById('next-round-btn') as HTMLButtonElement;
    if (game.isGameOver()) {
        nextRoundBtn.textContent = 'See Final Results';
    } else {
        nextRoundBtn.textContent = 'Next Round';
    }
}

// Update the final cards display on the round end screen
function updateFinalCardsDisplay(): void {
    const state = game.getState();
    
    // Clear existing displays
    playerFinalGrid.innerHTML = '';
    computer1FinalGrid.innerHTML = '';
    computer2FinalGrid.innerHTML = '';
    
    // Update player cards
    updateFinalCardGrid(playerFinalGrid, state.players[0].cards);
    
    // Update computer cards
    updateFinalCardGrid(computer1FinalGrid, state.players[1].cards);
    updateFinalCardGrid(computer2FinalGrid, state.players[2].cards);
}

// Update a final card grid with cards
function updateFinalCardGrid(container: HTMLElement, cards: any[]): void {
    // Calculate the current number of columns based on cards
    const currentCols = Math.ceil(cards.length / 3); // Assuming ROWS = 3
    
    // Set the grid template columns
    container.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const finalCard = document.createElement('div');
        finalCard.className = `final-card ${card.colorClass}`;
        finalCard.textContent = card.value.toString();
        
        // Calculate the proper position in the grid
        const row = Math.floor(i / currentCols);
        const col = i % currentCols;
        
        // Position the card using grid
        finalCard.style.gridRow = `${row + 1}`;
        finalCard.style.gridColumn = `${col + 1}`;
        
        container.appendChild(finalCard);
    }
}

// Update animation speeds based on game settings
function updateAnimationSpeeds(speed: number): void {
    const animationDuration = speed / 1000; // Convert ms to seconds
    
    // Update CSS variables directly
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
    
    // Add debug log
    debugLog(`Animation speed set to ${animationDuration}s`);
}

// These are placeholder functions that would need to be implemented
// to complete the game functionality 