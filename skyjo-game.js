// SKYJO Game Implementation

// Game Constants
const ROWS = 3;
const COLS = 4;
const CARDS_PER_PLAYER = ROWS * COLS;
const WIN_THRESHOLD = 100;
const INITIAL_CARDS_TO_REVEAL = 2;

// Animation Speed Constants (in milliseconds)
const ANIMATION_SPEEDS = {
    slow: 1000,
    medium: 500,
    fast: 200
};

// Difficulty Presets
const DIFFICULTY_PRESETS = {
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
const CARD_DISTRIBUTION = [
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

// Game State Variables
let deck = [];
let discardPile = [];
let players = [];
let currentPlayerIndex = 0;
let currentRound = 1;
let maxRounds = 3;
let isGameOver = false;
let currentDrawnCard = null;
let selectedCardIndex = null;
let animationSpeed = ANIMATION_SPEEDS.medium;
let roundHistory = [];
let seenCards = {};
let moveInProgress = false;
let initialCardSelectionPhase = false;
let cardsToRevealCount = 0;
let roundFinisher = null;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const roundEndScreen = document.getElementById('round-end-screen');
const gameEndScreen = document.getElementById('game-end-screen');
const playerNameInput = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const nextRoundBtn = document.getElementById('next-round-btn');
const newGameBtn = document.getElementById('new-game-btn');
const keepCardBtn = document.getElementById('keep-card-btn');
const discardCardBtn = document.getElementById('discard-card-btn');
const cancelDrawBtn = document.getElementById('cancel-draw-btn');
const cardSelectionArea = document.getElementById('card-selection-area');
const computerCardAnimation = document.getElementById('computer-card-animation');
const currentTurnIndicator = document.getElementById('current-turn-indicator');
const turnIndicatorText = document.getElementById('turn-indicator-text');
const playerNameDisplay = document.getElementById('player-name-display');
const currentPlayerDisplay = document.querySelector('#current-player span');
const roundInfoDisplay = document.querySelector('#round-info span');
const playerCardsContainer = document.querySelector('.player-cards');
const computer1CardsContainer = document.querySelector('#computer1 .mini-cards');
const computer2CardsContainer = document.querySelector('#computer2 .mini-cards');
const drawPile = document.getElementById('draw-pile');
const discardPileEl = document.getElementById('discard-pile');
const messageContainer = document.getElementById('message-container');
const messageEl = document.getElementById('message');
const animationSpeedSelect = document.getElementById('animation-speed');
const maxRoundsSelect = document.getElementById('max-rounds');
const computer1DifficultySelect = document.getElementById('computer1-difficulty');
const computer2DifficultySelect = document.getElementById('computer2-difficulty');
const roundScoreboardTable = document.getElementById('round-scoreboard-table');
const playerFinalGrid = document.querySelector('.player-final-grid');
const computer1FinalGrid = document.querySelector('.computer1-final-grid');
const computer2FinalGrid = document.querySelector('.computer2-final-grid');

// Add this debug logging function at the top after constants
function debugLog(message, obj = null) {
    const timestamp = new Date().toISOString().substr(11, 8);
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    if (obj) {
        console.log(obj);
    }
}

// Initialize the Game
function initGame() {
    // Reset variables
    deck = [];
    discardPile = [];
    players = [];
    currentPlayerIndex = 0;
    currentRound = 1;
    maxRounds = parseInt(maxRoundsSelect.value) || 0;
    isGameOver = false;
    currentDrawnCard = null;
    selectedCardIndex = null;
    roundHistory = [];
    seenCards = {};
    moveInProgress = false;
    initialCardSelectionPhase = true;
    cardsToRevealCount = INITIAL_CARDS_TO_REVEAL;
    roundFinisher = null;
    
    // Set animation speed
    animationSpeed = ANIMATION_SPEEDS[animationSpeedSelect.value];
    document.documentElement.style.setProperty('--animation-duration', `${animationSpeed / 1000}s`);
    
    // Create the deck
    createDeck();
    
    // Create players
    const playerName = playerNameInput.value.trim() || 'You';
    players = [
        { 
            id: 'player', 
            name: playerName, 
            cards: [], 
            totalScore: 0, 
            roundScore: 0, 
            isHuman: true, 
            color: 'var(--player-color)',
            roundScores: [],
            finishedRounds: []
        },
        { 
            id: 'computer1', 
            name: `Computer 1 (${computer1DifficultySelect.value.charAt(0).toUpperCase() + computer1DifficultySelect.value.slice(1)})`, 
            cards: [], 
            totalScore: 0, 
            roundScore: 0, 
            isHuman: false, 
            color: 'var(--computer1-color)',
            difficulty: computer1DifficultySelect.value,
            cardMemory: [],
            roundScores: [],
            finishedRounds: []
        },
        { 
            id: 'computer2', 
            name: `Computer 2 (${computer2DifficultySelect.value.charAt(0).toUpperCase() + computer2DifficultySelect.value.slice(1)})`, 
            cards: [], 
            totalScore: 0, 
            roundScore: 0, 
            isHuman: false, 
            color: 'var(--computer2-color)',
            difficulty: computer2DifficultySelect.value,
            cardMemory: [],
            roundScores: [],
            finishedRounds: []
        }
    ];
    
    // Deal cards
    dealCards();
    
    // Start the discard pile
    discardPile.push(deck.pop());
    
    // Add card to seen cards
    const topCard = discardPile[discardPile.length - 1];
    trackCardSeen(topCard.value);
    
    // Initialize scoreboard
    initScoreboard();
    
    // Show the current turn indicator
    updateTurnIndicator();
    currentTurnIndicator.classList.remove('hidden');
    
    // Update UI
    updateUI();
    
    // Show message for initial card selection
    if (initialCardSelectionPhase) {
        showMessage(`Select ${INITIAL_CARDS_TO_REVEAL} cards to reveal`, 5000);
    }
    
    // For computer players, auto-select cards
    if (!players[0].isHuman) {
        // If AI is player 1 (should never happen, but just in case)
        autoSelectInitialCards(0);
    }
    
    // Select cards for computer players
    autoSelectInitialCards(1);
    autoSelectInitialCards(2);
}

// Track cards that have been seen (for AI memory)
function trackCardSeen(value) {
    if (!seenCards[value]) {
        seenCards[value] = 0;
    }
    seenCards[value]++;
}

// Initialize the scoreboard table
function initScoreboard() {
    const tbody = roundScoreboardTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    // Create the "Total" row
    const tr = document.createElement('tr');
    
    const thRound = document.createElement('th');
    thRound.textContent = 'Total';
    
    const tdPlayer = document.createElement('td');
    tdPlayer.textContent = '0';
    tdPlayer.className = 'player-total-score';
    
    const tdComp1 = document.createElement('td');
    tdComp1.textContent = '0';
    tdComp1.className = 'comp1-total-score';
    
    const tdComp2 = document.createElement('td');
    tdComp2.textContent = '0';
    tdComp2.className = 'comp2-total-score';
    
    tr.appendChild(thRound);
    tr.appendChild(tdPlayer);
    tr.appendChild(tdComp1);
    tr.appendChild(tdComp2);
    
    tbody.appendChild(tr);
}

// Create the deck with the appropriate distribution of cards
function createDeck() {
    deck = [];
    
    // Add cards based on distribution
    CARD_DISTRIBUTION.forEach(cardType => {
        for (let i = 0; i < cardType.count; i++) {
            deck.push({
                value: cardType.value,
                colorClass: cardType.color,
                revealed: false
            });
        }
    });
    
    // Shuffle the deck
    shuffleDeck();
}

// Fisher-Yates shuffle algorithm
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Deal initial cards to players
function dealCards() {
    players.forEach(player => {
        player.cards = [];
        for (let i = 0; i < CARDS_PER_PLAYER; i++) {
            if (deck.length > 0) {
                const card = deck.pop();
                player.cards.push(card);
            }
        }
        
        // Don't reveal any cards automatically - we'll let players choose
    });
}

// Auto-select initial cards for computer players
function autoSelectInitialCards(playerIndex) {
    const player = players[playerIndex];
    if (player.isHuman) return;
    
    // Get difficulty settings
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    
    // For casual difficulty, select random cards
    if (player.difficulty === 'casual') {
        revealRandomCards(player, INITIAL_CARDS_TO_REVEAL);
        return;
    }
    
    // For skilled and expert, try to select low value cards if possible
    const cardIndices = [];
    
    // First, peek at all cards (AI is cheating a bit, but it's ok for initialization)
    const cardValues = player.cards.map((card, index) => ({ value: card.value, index }));
    
    // Sort by value and pick the lowest
    cardValues.sort((a, b) => a.value - b.value);
    
    // Select the lowest values
    for (let i = 0; i < Math.min(INITIAL_CARDS_TO_REVEAL, cardValues.length); i++) {
        const index = cardValues[i].index;
        player.cards[index].revealed = true;
    }
    
    // Update UI to reflect computer's choice
    updateUI();
}

// Reveal random cards for a player
function revealRandomCards(player, count) {
    const unrevealedIndices = player.cards
        .map((card, index) => ({ card, index }))
        .filter(item => !item.card.revealed)
        .map(item => item.index);
    
    // Shuffle indices
    for (let i = unrevealedIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unrevealedIndices[i], unrevealedIndices[j]] = [unrevealedIndices[j], unrevealedIndices[i]];
    }
    
    // Reveal the first 'count' cards
    for (let i = 0; i < Math.min(count, unrevealedIndices.length); i++) {
        player.cards[unrevealedIndices[i]].revealed = true;
    }
}

// Calculate and update live scores for the current round
function updateLiveScores() {
    // Calculate live scores
    players.forEach((player, index) => {
        let liveScore = 0;
        
        // Sum up values of revealed cards
        player.cards.forEach(card => {
            if (card.revealed) {
                liveScore += card.value;
            }
        });
        
        player.liveScore = liveScore;
        
        // Update UI
        const scoreElement = document.querySelector(`#${player.id === 'player' ? 'player-area' : player.id} .live-score span`);
        if (scoreElement) {
            scoreElement.textContent = liveScore;
        }
    });
}

// Update the round scoreboard with new scores
function updateScoreboard() {
    const tbody = roundScoreboardTable.querySelector('tbody');
    
    // Add the current round scores
    const tr = document.createElement('tr');
    
    const tdRound = document.createElement('td');
    tdRound.textContent = `Round ${currentRound}`;
    
    const tdPlayer = document.createElement('td');
    tdPlayer.textContent = players[0].roundScore;
    if (players[0].finishedRounds.includes(currentRound)) {
        tdPlayer.innerHTML += ' ★';
        if (players[0].roundScore > 0 && players[0].roundScores[players[0].roundScores.length - 1] === players[0].roundScore * 2) {
            tdPlayer.classList.add('doubled-score');
        }
    }
    
    const tdComp1 = document.createElement('td');
    tdComp1.textContent = players[1].roundScore;
    if (players[1].finishedRounds.includes(currentRound)) {
        tdComp1.innerHTML += ' ★';
        if (players[1].roundScore > 0 && players[1].roundScores[players[1].roundScores.length - 1] === players[1].roundScore * 2) {
            tdComp1.classList.add('doubled-score');
        }
    }
    
    const tdComp2 = document.createElement('td');
    tdComp2.textContent = players[2].roundScore;
    if (players[2].finishedRounds.includes(currentRound)) {
        tdComp2.innerHTML += ' ★';
        if (players[2].roundScore > 0 && players[2].roundScores[players[2].roundScores.length - 1] === players[2].roundScore * 2) {
            tdComp2.classList.add('doubled-score');
        }
    }
    
    tr.appendChild(tdRound);
    tr.appendChild(tdPlayer);
    tr.appendChild(tdComp1);
    tr.appendChild(tdComp2);
    
    // Insert before the total row (which is the last row)
    tbody.insertBefore(tr, tbody.lastElementChild);
    
    // Update the totals
    document.querySelector('.player-total-score').textContent = players[0].totalScore;
    document.querySelector('.comp1-total-score').textContent = players[1].totalScore;
    document.querySelector('.comp2-total-score').textContent = players[2].totalScore;
}

// Add card animation
function animateCard(cardElement, animationType) {
    debugLog(`Starting ${animationType} animation`);
    
    // Remove any existing animation classes
    cardElement.classList.remove('card-animated', 'card-moved', 'card-discarded');
    
    // Force a reflow to restart animation
    void cardElement.offsetWidth;
    
    // Add the animation class
    cardElement.classList.add(animationType);
    
    // Remove the class after animation completes
    const animationTimeout = setTimeout(() => {
        debugLog(`Animation ${animationType} completed`);
        cardElement.classList.remove(animationType);
        
        // Update the last action time to prevent false stuck detection
        window.lastActionTime = Date.now();
    }, animationSpeed + 100); // Add a small buffer
    
    // Store the timeout so it can be cleared if needed
    if (!window.animationTimeouts) {
        window.animationTimeouts = [];
    }
    window.animationTimeouts.push(animationTimeout);
}

// Clear any hanging animations
function clearAllAnimations() {
    debugLog("Clearing all animations");
    
    // Clear all animation timeouts
    if (window.animationTimeouts && window.animationTimeouts.length > 0) {
        window.animationTimeouts.forEach(timeout => clearTimeout(timeout));
        window.animationTimeouts = [];
    }
    
    // Remove animation classes from all card elements
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('card-animated', 'card-moved', 'card-discarded');
    });
}

// Update the game UI
function updateUI() {
    // Update player name
    playerNameDisplay.textContent = players[0].name;
    
    // If in initial selection phase, show special message
    if (initialCardSelectionPhase) {
        currentPlayerDisplay.textContent = "Initial Selection";
    } else {
        // Update current player display
        currentPlayerDisplay.textContent = players[currentPlayerIndex].name;
    }
    
    // Update round info
    roundInfoDisplay.textContent = currentRound;
    
    // Update player cards
    updatePlayerCards();
    
    // Update computer cards (mini-view)
    updateComputerCards();
    
    // Update discard pile
    updateDiscardPile();
    
    // Update draw pile (just visual)
    if (deck.length === 0) {
        drawPile.querySelector('.card').classList.add('empty');
        drawPile.querySelector('.card').classList.remove('back');
    } else {
        drawPile.querySelector('.card').classList.remove('empty');
        drawPile.querySelector('.card').classList.add('back');
    }
    
    // Update score displays
    document.querySelector('#player-area .score span').textContent = players[0].totalScore;
    document.querySelector('#computer1 .score span').textContent = players[1].totalScore;
    document.querySelector('#computer2 .score span').textContent = players[2].totalScore;
    
    // Update live scores
    updateLiveScores();
    
    // Highlight current player's area (except during initial selection)
    document.querySelectorAll('.opponent, .player-area').forEach(el => {
        el.style.borderColor = 'var(--border-color)';
        el.style.boxShadow = 'none';
    });
    
    if (!initialCardSelectionPhase) {
        const currentPlayerEl = players[currentPlayerIndex].id === 'player' 
            ? document.querySelector('.player-area')
            : document.getElementById(players[currentPlayerIndex].id);
        
        if (currentPlayerEl) {
            currentPlayerEl.style.borderColor = players[currentPlayerIndex].color;
            currentPlayerEl.style.boxShadow = `0 0 10px ${players[currentPlayerIndex].color}`;
        }
    }
}

// Update player cards display
function updatePlayerCards() {
    playerCardsContainer.innerHTML = '';
    
    // Calculate the current number of columns based on player cards
    const currentCols = Math.ceil(players[0].cards.length / ROWS);
    debugLog(`Rendering player grid with ${currentCols} columns`);
    
    // Set the grid template columns based on current column count
    playerCardsContainer.style.gridTemplateColumns = `repeat(${currentCols}, 1fr)`;
    
    for (let i = 0; i < players[0].cards.length; i++) {
        const card = players[0].cards[i];
        const cardEl = document.createElement('div');
        cardEl.className = `card ${card.revealed ? 'flipped' : ''}`;
        cardEl.dataset.index = i;
        
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
        cardFront.textContent = card.value;
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardEl.appendChild(cardInner);
        
        // Add click event for player's turn
        cardEl.addEventListener('click', () => {
            if (initialCardSelectionPhase && !card.revealed) {
                // During initial selection, clicking reveals the card
                handleInitialCardSelection(i);
            } else if (currentPlayerIndex === 0 && currentDrawnCard !== null) {
                // During normal gameplay, clicking replaces the card
                handleCardClick(i);
            } else if (currentPlayerIndex === 0 && !card.revealed) {
                // Or reveals a face-down card
                revealCard(0, i);
            }
        });
        
        playerCardsContainer.appendChild(cardEl);
    }
}

// Update computer cards display (mini version)
function updateComputerCards() {
    // Computer 1
    updateMiniCards(computer1CardsContainer, players[1].cards);
    
    // Computer 2
    updateMiniCards(computer2CardsContainer, players[2].cards);
}

// Update mini cards for a computer player
function updateMiniCards(container, cards) {
    container.innerHTML = '';
    
    // Calculate the current number of columns based on cards
    const currentCols = Math.ceil(cards.length / ROWS);
    
    // Set the grid template columns based on current column count
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
            miniCard.textContent = card.value;
        }
        
        container.appendChild(miniCard);
    }
}

// Handle player canceling the draw
function handleCancelDraw() {
    // Put the card back on the appropriate pile
    if (currentDrawnCard) {
        // If from discard pile, put it back on discard
        discardPile.push(currentDrawnCard);
        currentDrawnCard = null;
        updateDiscardPile();
    }
    
    // Hide the selection area
    cardSelectionArea.classList.add('hidden');
    
    // Reset move in progress
    moveInProgress = false;
}

// Computer turn logic
function computerTurn() {
    // Don't allow new moves while one is in progress
    if (moveInProgress) {
        debugLog(`Computer turn blocked: moveInProgress is true for player ${currentPlayerIndex} (${players[currentPlayerIndex].name})`);
        return;
    }
    
    moveInProgress = true;
    
    // Update turn indicator
    updateTurnIndicator();
    
    // Get computer's difficulty settings
    const player = players[currentPlayerIndex];
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    
    // Log computer state
    debugLog(`Starting turn for ${player.name} (index: ${currentPlayerIndex})`, {
        difficulty: player.difficulty,
        faceDownCards: player.cards.filter(c => !c.revealed).length,
        totalCards: player.cards.length,
        deckSize: deck.length,
        discardSize: discardPile.length
    });
    
    // Indicate whose turn it is with a message
    showMessage(`${player.name}'s turn`);
    
    // Start with a mandatory card draw
    debugLog(`Computer MUST draw a card to start its turn`);
    
    // Wait a moment to simulate thinking
    setTimeout(() => {
        let drawFromDeck = true;
        
        // Different strategies based on difficulty level
        if (player.difficulty === 'casual') {
            // Casual: Simple random choice with fixed probability
            drawFromDeck = Math.random() > difficulty.drawDiscardBaseProb || discardPile.length === 0;
            debugLog(`Casual computer random choice: draw from deck = ${drawFromDeck}`);
        } 
        else if (player.difficulty === 'skilled' || player.difficulty === 'expert') {
            if (discardPile.length > 0) {
                const topDiscard = discardPile[discardPile.length - 1];
                debugLog(`Computer considering discard pile. Top card: ${topDiscard.value}`);
                
                // Check if the discard value is below threshold or can complete a column
                if (topDiscard.value <= difficulty.keepThresholds.low) {
                    drawFromDeck = false;
                    debugLog(`Computer decided to take low-value card (${topDiscard.value}) from discard pile`);
                } 
                else if (canCompleteColumn(player, topDiscard.value)) {
                    drawFromDeck = false;
                    debugLog(`Computer decided to take card that can complete column from discard pile`);
                }
                // Expert adds more considerations
                else if (player.difficulty === 'expert') {
                    // Expert considers deck exhaustion strategy
                    if (deck.length < 20 && topDiscard.value <= difficulty.keepThresholds.mid) {
                        drawFromDeck = false;
                        debugLog(`Expert computer taking discard to thin uncertainty (deck low)`);
                    }
                    
                    // High variance strategy - take bigger risks when behind
                    if (shouldPlayHighVariance(player) && topDiscard.value <= difficulty.keepThresholds.mid + 2) {
                        drawFromDeck = false;
                        debugLog(`Expert computer taking moderate-value discard due to high variance strategy`);
                    }
                    
                    // Low variance strategy - play conservatively when ahead
                    if (shouldPlayLowVariance(player) && topDiscard.value > difficulty.keepThresholds.low - 2) {
                        drawFromDeck = true;
                        debugLog(`Expert computer avoiding discard due to low variance strategy`);
                    }
                }
            } else {
                drawFromDeck = true;
                debugLog(`No cards in discard pile, must draw from deck`);
            }
        }
        
        // Apply noise to the decision based on difficulty
        if (Math.random() < difficulty.noise) {
            drawFromDeck = !drawFromDeck;
            debugLog(`Applied noise to decision, flipped to: draw from deck = ${drawFromDeck}`);
        }
        
        // Draw a card with animation
        debugLog(`Computer drawing card from ${drawFromDeck ? 'deck' : 'discard pile'}`);
        drawCard(drawFromDeck);
    }, animationSpeed);
}

// Computer decision logic for drawn card
function computerDecideOnDrawnCard() {
    debugLog("computerDecideOnDrawnCard started");
    
    // Hide the computer card animation
    computerCardAnimation.classList.add('hidden');
    
    const player = players[currentPlayerIndex];
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    
    // Add card to seen cards
    trackCardSeen(currentDrawnCard.value);
    
    // Determine whether to keep or discard based on card value and difficulty
    let keepCard = false;
    
    // Different strategies based on AI level
    if (player.difficulty === 'casual') {
        // Casual AI uses simple probability thresholds
        if (currentDrawnCard.value <= difficulty.keepThresholds.low) {
            keepCard = Math.random() < difficulty.keepProbabilities.low;
        } else if (currentDrawnCard.value <= difficulty.keepThresholds.mid) {
            keepCard = Math.random() < difficulty.keepProbabilities.mid;
        } else {
            keepCard = Math.random() < difficulty.keepProbabilities.high;
        }
        
        // Basic column matching for casual
        if (canCompleteColumn(player, currentDrawnCard.value) && currentDrawnCard.value <= difficulty.columnValueThreshold) {
            keepCard = true;
            debugLog("Casual AI completing low-value column");
        }
    } 
    else if (player.difficulty === 'skilled') {
        // Skilled AI evaluates expected value
        // Find best card to replace if we were to keep
        let bestReplaceIndex = -1;
        let bestReplaceScore = -Infinity;
        
        player.cards.forEach((card, index) => {
            // Calculate potential gain
            let expectedGain;
            if (card.revealed) {
                expectedGain = card.value - currentDrawnCard.value;
            } else {
                // Estimate hidden card value
                expectedGain = 5 - currentDrawnCard.value; // Skilled uses fixed estimate of 5
            }
            
            // Add bonus for column match potential
            const colIndex = index % COLS;
            const sameValuesInCol = player.cards.filter((c, i) => 
                i % COLS === colIndex && 
                c.revealed && 
                i !== index && 
                c.value === currentDrawnCard.value
            ).length;
            
            if (sameValuesInCol === 2) {
                // Completing a column is very valuable
                if (currentDrawnCard.value <= difficulty.columnValueThreshold) {
                    expectedGain += 100; // Huge bonus for triplets under threshold
                }
            } else if (sameValuesInCol === 1) {
                // Building a potential column
                expectedGain += 4; // Modest bonus for doublets
            }
            
            if (expectedGain > bestReplaceScore) {
                bestReplaceScore = expectedGain;
                bestReplaceIndex = index;
            }
        });
        
        // Decide based on best replacement score
        keepCard = bestReplaceScore > 0;
        
        // Override for column completion
        if (canCompleteColumn(player, currentDrawnCard.value) && 
            currentDrawnCard.value <= difficulty.columnValueThreshold) {
            keepCard = true;
            debugLog("Skilled AI keeping to complete column");
        }
        
        // End-game strategy
        const unrevealedCards = player.cards.filter(c => !c.revealed).length;
        if (unrevealedCards === 1 && keepCard) {
            // This would finish the round
            const shouldFinish = shouldFinishRound(player);
            if (!shouldFinish) {
                keepCard = false;
                debugLog("Skilled AI avoids finishing round due to score position");
            }
        }
    }
    else if (player.difficulty === 'expert') {
        // Expert AI uses advanced simulation and strategy
        
        // First, check for column completion as it's almost always the best move
        if (canCompleteColumn(player, currentDrawnCard.value)) {
            // Even with high values, column completion is usually worth it for Expert
            if (currentDrawnCard.value <= difficulty.columnValueThreshold) {
                keepCard = true;
                debugLog("Expert AI keeping to complete column");
            } else {
                // For very high values, do quick EV calculation
                const columnValue = currentDrawnCard.value;
                // Column completion removes 3x the value
                const gainFromCompletion = columnValue * 3;
                // Compare to keeping worst revealed card
                const worstRevealedCard = [...player.cards]
                    .filter(c => c.revealed)
                    .sort((a, b) => b.value - a.value)[0]; // Highest value card
                
                if (worstRevealedCard && gainFromCompletion > worstRevealedCard.value) {
                    keepCard = true;
                    debugLog(`Expert AI completing high-value column (${columnValue}) for net gain`);
                }
            }
        } else {
            // Calculate detailed expected value for keeping vs discarding
            // Consider all possible slots for placement
            
            // Find best replacement target with advanced heuristics
            let bestTargetIndex = -1;
            let bestActionValue = -Infinity;
            
            // Evaluate keeping the card (check all possible slots)
            player.cards.forEach((card, index) => {
                const action = { type: 'keep', targetIndex: index };
                const actionValue = calculateExpectedValue(player, action, currentDrawnCard.value);
                
                if (actionValue > bestActionValue) {
                    bestActionValue = actionValue;
                    bestTargetIndex = index;
                }
            });
            
            // Evaluate discarding
            const discardAction = { type: 'discard' };
            const discardValue = calculateExpectedValue(player, discardAction, currentDrawnCard.value);
            
            // Compare best keep option with discard option
            keepCard = bestActionValue > discardValue;
            
            // Store best target for later use
            player.bestTargetIndex = bestTargetIndex;
            
            // End-game strategy - more nuanced for expert
            const unrevealedCards = player.cards.filter(c => !c.revealed).length;
            if (unrevealedCards === 1 && keepCard) {
                // This would finish the round - use advanced finishing strategy
                const shouldFinish = shouldFinishRound(player);
                if (!shouldFinish) {
                    keepCard = false;
                    debugLog("Expert AI strategically avoiding round finish");
                } else {
                    debugLog("Expert AI strategically finishing round from position of strength");
                }
            }
            
            // Variance-based strategies
            if (shouldPlayHighVariance(player)) {
                // When behind, be more willing to keep risky cards
                if (!keepCard && currentDrawnCard.value < 7) {
                    keepCard = true;
                    debugLog("Expert AI taking calculated risk due to score deficit");
                }
            }
            
            if (shouldPlayLowVariance(player)) {
                // When ahead, be more conservative
                if (keepCard && currentDrawnCard.value > 4) {
                    // Only keep if it's really good
                    if (bestActionValue < 2) {
                        keepCard = false;
                        debugLog("Expert AI playing conservatively to protect lead");
                    }
                }
            }
        }
        
        // Bluffing strategy: occasionally discard good cards to bait opponents
        if (keepCard && currentDrawnCard.value <= difficulty.keepThresholds.low) {
            // Only bluff with good cards (low values)
            if (Math.random() < difficulty.bluffProbability) {
                keepCard = false;
                debugLog(`Expert AI BLUFFING by discarding good card (${currentDrawnCard.value})`);
            }
        }
    }
    
    // Apply randomness based on difficulty
    if (Math.random() < difficulty.noise) {
        keepCard = !keepCard; // Randomly flip decision to simulate mistake
        debugLog("Applied noise to decision, flipped keep/discard choice");
    }
    
    debugLog(`Computer ${player.name} decided to ${keepCard ? 'keep' : 'discard'} card with value ${currentDrawnCard.value}`);
    
    setTimeout(() => {
        if (keepCard) {
            debugLog("Computer will replace a card");
            computerSelectCardToReplace();
        } else {
            // Discard the card and flip a random face-down card
            debugLog("Computer will discard the card");
            
            // Animate the discarding
            const discardPosition = discardPileEl.getBoundingClientRect();
            computerCardAnimation.style.position = 'fixed';
            computerCardAnimation.style.left = `${discardPosition.left}px`;
            computerCardAnimation.style.top = `${discardPosition.top}px`;
            computerCardAnimation.classList.remove('hidden');
            
            const cardEl = computerCardAnimation.querySelector('.card');
            animateCard(cardEl, 'card-discarded');
            
            setTimeout(() => {
                debugLog("Computer finished discard animation");
                computerCardAnimation.classList.add('hidden');
                
                // Add to discard pile
                discardPile.push(currentDrawnCard);
                currentDrawnCard = null;
                
                // Update discard pile visual
                updateDiscardPile();
                
                // Find face-down cards
                const facedownCards = player.cards
                    .map((card, index) => ({ card, index }))
                    .filter(item => !item.card.revealed);
                
                debugLog(`Computer has ${facedownCards.length} face-down cards remaining`);
                
                if (facedownCards.length > 0) {
                    // Choose which card to reveal based on difficulty
                    let selectedIndex;
                    
                    if (player.difficulty === 'casual') {
                        // Casual just picks randomly
                        const randomIndex = Math.floor(Math.random() * facedownCards.length);
                        selectedIndex = facedownCards[randomIndex].index;
                    }
                    else if (player.difficulty === 'skilled' || player.difficulty === 'expert') {
                        // Strategic revealing based on column information
                        
                        // If only one card left to reveal, consider end-game strategy
                        if (facedownCards.length === 1) {
                            const lastCardIndex = facedownCards[0].index;
                            
                            // Check if revealing would make player lose
                            const shouldFinish = shouldFinishRound(player);
                            
                            if (!shouldFinish && facedownCards.length > 1) {
                                // Try to find a card in a column that already has high values
                                const columnScores = {};
                                
                                // Calculate score for each column
                                player.cards.forEach((card, idx) => {
                                    if (card.revealed) {
                                        const col = idx % COLS;
                                        if (!columnScores[col]) columnScores[col] = 0;
                                        columnScores[col] += card.value;
                                    }
                                });
                                
                                // Find hidden cards in "bad" columns (high scores)
                                const badColumnCards = facedownCards.filter(item => {
                                    const col = item.index % COLS;
                                    return columnScores[col] && columnScores[col] >= 8;
                                });
                                
                                if (badColumnCards.length > 0) {
                                    // Reveal a card in an already bad column
                                    const randomBadCard = Math.floor(Math.random() * badColumnCards.length);
                                    selectedIndex = badColumnCards[randomBadCard].index;
                                    debugLog("Revealing card in already bad column");
                                } else {
                                    // Fall back to random
                                    const randomIndex = Math.floor(Math.random() * facedownCards.length);
                                    selectedIndex = facedownCards[randomIndex].index;
                                }
                            } else {
                                // Default to revealing the last card
                                selectedIndex = lastCardIndex;
                            }
                        } else {
                            // More than one card left, be strategic about column choice
                            if (player.difficulty === 'expert') {
                                // Expert is more strategic about which card to reveal
                                
                                // Try to find a card that might complete a column if lucky
                                const potentialCols = [];
                                
                                // Check each column for matching pairs that are already revealed
                                for (let col = 0; col < COLS; col++) {
                                    const colValues = {};
                                    
                                    // Count values in this column
                                    for (let row = 0; row < ROWS; row++) {
                                        const idx = getIndexFromRowCol(row, col, COLS);
                                        if (idx < player.cards.length && player.cards[idx].revealed) {
                                            const val = player.cards[idx].value;
                                            colValues[val] = (colValues[val] || 0) + 1;
                                        }
                                    }
                                    
                                    // Find pairs (values that appear twice)
                                    for (const [value, count] of Object.entries(colValues)) {
                                        if (count === 2) {
                                            // Found a pair, check if there's a hidden card in this column
                                            potentialCols.push(col);
                                            break;
                                        }
                                    }
                                }
                                
                                // If we found potential columns, prioritize those
                                if (potentialCols.length > 0) {
                                    // Find hidden cards in these columns
                                    const candidateCards = facedownCards.filter(item => {
                                        const col = item.index % COLS;
                                        return potentialCols.includes(col);
                                    });
                                    
                                    if (candidateCards.length > 0) {
                                        const randomCandidate = Math.floor(Math.random() * candidateCards.length);
                                        selectedIndex = candidateCards[randomCandidate].index;
                                        debugLog("Expert revealing card in column with potential match");
                                    } else {
                                        // Fall back to random
                                        const randomIndex = Math.floor(Math.random() * facedownCards.length);
                                        selectedIndex = facedownCards[randomIndex].index;
                                    }
                                } else {
                                    // No potential columns, pick randomly
                                    const randomIndex = Math.floor(Math.random() * facedownCards.length);
                                    selectedIndex = facedownCards[randomIndex].index;
                                }
                            } else {
                                // Skilled just picks randomly
                                const randomIndex = Math.floor(Math.random() * facedownCards.length);
                                selectedIndex = facedownCards[randomIndex].index;
                            }
                        }
                    }
                    
                    debugLog(`Computer will reveal card at index ${selectedIndex}`);
                    
                    setTimeout(() => {
                        revealCard(currentPlayerIndex, selectedIndex);
                    }, animationSpeed);
                } else {
                    // If all cards are revealed, end the turn
                    debugLog("Computer has no more cards to reveal, ending turn");
                    
                    setTimeout(() => {
                        endTurn();
                    }, animationSpeed);
                }
            }, animationSpeed);
        }
    }, animationSpeed);
}

// Computer logic to select a card to replace
function computerSelectCardToReplace() {
    debugLog("computerSelectCardToReplace started");
    
    // Hide the computer card animation first
    computerCardAnimation.classList.add('hidden');
    
    const player = players[currentPlayerIndex];
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    
    setTimeout(() => {
        let bestCardIndex = -1;
        let bestScore = -Infinity;
        
        // If Expert already calculated the best target in previous step, use it
        if (player.difficulty === 'expert' && player.bestTargetIndex !== undefined) {
            bestCardIndex = player.bestTargetIndex;
            debugLog(`Expert AI using pre-calculated best target index: ${bestCardIndex}`);
            // Clear for next time
            player.bestTargetIndex = undefined;
        }
        else {
            // Different replacement strategies based on difficulty
            if (player.difficulty === 'casual') {
                // Casual AI prefers to replace highest revealed card, else random hidden
                
                // First check for revealed cards
                const revealedCards = player.cards
                    .map((card, index) => ({ card, index }))
                    .filter(item => item.card.revealed);
                
                if (revealedCards.length > 0) {
                    // Sort by value (highest first)
                    revealedCards.sort((a, b) => b.card.value - a.card.value);
                    
                    // Check if there are any high enough values worth replacing
                    if (revealedCards[0].card.value > currentDrawnCard.value) {
                        bestCardIndex = revealedCards[0].index;
                        debugLog(`Casual AI replacing highest revealed card (${revealedCards[0].card.value})`);
                    } else {
                        // Choose a random hidden card
                        const hiddenCards = player.cards
                            .map((card, index) => ({ card, index }))
                            .filter(item => !item.card.revealed);
                        
                        if (hiddenCards.length > 0) {
                            const randomHidden = Math.floor(Math.random() * hiddenCards.length);
                            bestCardIndex = hiddenCards[randomHidden].index;
                            debugLog("Casual AI choosing random hidden card");
                        } else {
                            // Fallback to highest revealed
                            bestCardIndex = revealedCards[0].index;
                        }
                    }
                } else {
                    // All cards are hidden, choose randomly
                    bestCardIndex = Math.floor(Math.random() * player.cards.length);
                    debugLog("Casual AI choosing random card (all hidden)");
                }
                
                // Special case: check for low-value column completion
                player.cards.forEach((card, index) => {
                    const colIndex = index % COLS;
                    const sameValuesInCol = player.cards.filter((c, i) => 
                        i % COLS === colIndex && 
                        c.revealed && 
                        i !== index && 
                        c.value === currentDrawnCard.value
                    ).length;
                    
                    if (sameValuesInCol === 2 && currentDrawnCard.value <= difficulty.columnValueThreshold) {
                        // Found a column match with low enough value - take it
                        bestCardIndex = index;
                        debugLog(`Casual AI found column completion opportunity for ${currentDrawnCard.value}`);
                    }
                });
            }
            else if (player.difficulty === 'skilled' || player.difficulty === 'expert') {
                // Both skilled and expert AIs evaluate all slots systematically
                
                player.cards.forEach((card, index) => {
                    let score = 0;
                    
                    // Calculate expected value based on difficulty level
                    if (player.difficulty === 'skilled') {
                        if (card.revealed) {
                            // Simple value differential for revealed cards
                            score = card.value - currentDrawnCard.value;
                        } else {
                            // Use fixed estimate of 5 for skilled AI
                            score = 5 - currentDrawnCard.value;
                        }
                        
                        // Add column match bonus for skilled
                        const colIndex = index % COLS;
                        const sameValuesInCol = player.cards.filter((c, i) => 
                            i % COLS === colIndex && 
                            c.revealed && 
                            i !== index && 
                            c.value === currentDrawnCard.value
                        ).length;
                        
                        if (sameValuesInCol === 2) {
                            // Completing a column is best move if value <= threshold
                            if (currentDrawnCard.value <= difficulty.columnValueThreshold) {
                                score += 100; // Almost guaranteed to pick this
                            } else {
                                // For higher values, scale bonus down
                                score += 30;
                            }
                        } else if (sameValuesInCol === 1) {
                            // Building a potential column
                            score += 4;
                        }
                    }
                    else if (player.difficulty === 'expert') {
                        // Expert uses more advanced scoring
                        const action = { type: 'keep', targetIndex: index };
                        score = calculateExpectedValue(player, action, currentDrawnCard.value);
                        
                        // Apply variance adjustments
                        if (shouldPlayHighVariance(player) && !card.revealed) {
                            score += 2; // Bonus for replacing hidden cards when behind
                        }
                        
                        if (shouldPlayLowVariance(player) && card.revealed && card.value > currentDrawnCard.value) {
                            score += 1; // Bonus for safer plays when ahead
                        }
                    }
                    
                    // Apply some randomness based on difficulty
                    if (Math.random() < difficulty.noise) {
                        score += (Math.random() * 10) - 5; // Add noise [-5, 5]
                    }
                    
                    // Update the best choice if this one is better
                    if (score > bestScore) {
                        bestScore = score;
                        bestCardIndex = index;
                    }
                });
                
                debugLog(`${player.difficulty.charAt(0).toUpperCase() + player.difficulty.slice(1)} AI selected card at index ${bestCardIndex} with score ${bestScore}`);
            }
        }
        
        debugLog(`Computer selected card at index ${bestCardIndex} to replace with drawn card ${currentDrawnCard.value}`);
        
        // Show animation for the card that is being replaced
        if (bestCardIndex !== -1) {
            // Get position of the card to replace
            const cardElements = player.id === 'computer1' 
                ? computer1CardsContainer.children 
                : computer2CardsContainer.children;
                
            if (cardElements && cardElements[bestCardIndex]) {
                const cardRect = cardElements[bestCardIndex].getBoundingClientRect();
                
                computerCardAnimation.style.position = 'fixed';
                computerCardAnimation.style.left = `${cardRect.left}px`;
                computerCardAnimation.style.top = `${cardRect.top}px`;
                computerCardAnimation.style.width = `${cardRect.width}px`;
                computerCardAnimation.style.height = `${cardRect.height}px`;
                computerCardAnimation.classList.remove('hidden');
                
                const cardEl = computerCardAnimation.querySelector('.card');
                animateCard(cardEl, 'card-moved');
                
                setTimeout(() => {
                    debugLog("Computer finished card replacement animation");
                    computerCardAnimation.classList.add('hidden');
                    
                    // Actually replace the card
                    setTimeout(() => {
                        replaceCard(bestCardIndex);
                    }, animationSpeed);
                }, animationSpeed);
            } else {
                // Fallback if element not found
                debugLog("Card element not found for animation, using fallback");
                replaceCard(bestCardIndex);
            }
        } else {
            // Should never happen, but just in case, pick a random card
            debugLog("WARNING: No best card found, using random fallback");
            replaceCard(Math.floor(Math.random() * player.cards.length));
        }
    }, animationSpeed);
}

// Handle player clicking on a card
function handleCardClick(index) {
    const player = players[currentPlayerIndex];
    
    if (currentDrawnCard !== null) {
        // If we have a drawn card, replace the clicked card
        replaceCard(index);
    } else if (!player.cards[index].revealed) {
        // If we need to reveal a card
        revealCard(currentPlayerIndex, index);
    }
}

// End the current player's turn
function endTurn() {
    debugLog(`endTurn called for player ${currentPlayerIndex} (${players[currentPlayerIndex].name})`);
    
    // Reset drawn card
    currentDrawnCard = null;
    selectedCardIndex = null;
    
    // Hide any card selection
    cardSelectionArea.classList.add('hidden');
    computerCardAnimation.classList.add('hidden');
    
    // Reset move in progress flag
    moveInProgress = false;
    
    // Move to next player
    const previousPlayer = currentPlayerIndex;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    
    // Update last action time
    window.lastActionTime = Date.now();
    
    debugLog(`Turn ended for player ${previousPlayer}, next player is ${currentPlayerIndex} (${players[currentPlayerIndex].name})`);
    
    // Update turn indicator
    updateTurnIndicator();
    
    // Update UI
    updateUI();
    
    // If next player is a computer, start its turn
    if (!players[currentPlayerIndex].isHuman) {
        debugLog(`Scheduling computer turn for player ${currentPlayerIndex} (${players[currentPlayerIndex].name})`);
        setTimeout(() => computerTurn(), animationSpeed);
    } else {
        debugLog(`Waiting for human player ${currentPlayerIndex} (${players[currentPlayerIndex].name}) to take action`);
    }
}

// Show a message to the player
function showMessage(msg, duration = 3000) {
    messageEl.textContent = msg;
    messageContainer.classList.remove('hidden');
    
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, duration);
}

// End the current round
function endRound() {
    // Calculate scores for this round
    roundFinisher = currentPlayerIndex;
    
    debugLog(`Round ending! Player ${roundFinisher} (${players[roundFinisher].name}) finished first`);
    
    // Reveal all cards and calculate scores
    players.forEach((player, index) => {
        let roundScore = 0;
        
        // Reveal all cards if not already revealed
        player.cards.forEach(card => card.revealed = true);
        
        // Sum up the card values
        player.cards.forEach(card => {
            roundScore += card.value;
        });
        
        player.roundScore = roundScore;
        player.roundScores.push(roundScore);
        
        // Mark this player as having finished this round (if they were the finisher)
        if (index === roundFinisher) {
            player.finishedRounds.push(currentRound);
        }
        
        debugLog(`Player ${index} (${player.name}) initial round score: ${roundScore}`);
    });
    
    // Check if player who ended the round has the lowest score
    const lowestScorePlayer = [...players].sort((a, b) => a.roundScore - b.roundScore)[0];
    let doubledScore = false;
    
    debugLog(`Lowest score player is ${lowestScorePlayer.name} with ${lowestScorePlayer.roundScore} points`);
    
    // If the player who finished the round doesn't have the lowest score, double their round score
    if (players[roundFinisher].roundScore > lowestScorePlayer.roundScore && players[roundFinisher].roundScore > 0) {
        const originalScore = players[roundFinisher].roundScore;
        players[roundFinisher].roundScore *= 2;
        players[roundFinisher].roundScores[players[roundFinisher].roundScores.length - 1] = players[roundFinisher].roundScore;
        
        doubledScore = true;
        debugLog(`${players[roundFinisher].name}'s score DOUBLED from ${originalScore} to ${players[roundFinisher].roundScore}!`);
        
        showMessage(`${players[roundFinisher].name} finished first but didn't have the lowest score - score doubled to ${players[roundFinisher].roundScore}!`, 5000);
    } else {
        debugLog(`${players[roundFinisher].name} finished first WITH the lowest score - no penalty!`);
        showMessage(`${players[roundFinisher].name} finished first with the lowest score!`, 3000);
    }
    
    // Add round score to total score
    players.forEach(player => {
        player.totalScore += player.roundScore;
    });
    
    // Update the round end screen with scores
    document.querySelector('.player-score').textContent = players[0].roundScore;
    document.querySelector('.comp1-score').textContent = players[1].roundScore;
    document.querySelector('.comp2-score').textContent = players[2].roundScore;
    
    // Add visual indicator for who finished first and if they got double points
    const playerElements = document.querySelectorAll('.round-results .player-name');
    playerElements.forEach((el, i) => {
        // Remove previous classes
        el.classList.remove('completed-first');
        document.querySelectorAll('.round-results .result-row span')[i * 2 + 1].classList.remove('doubled-score');
        
        // Add for current round finisher
        if (i === roundFinisher) {
            el.classList.add('completed-first');
            
            // Mark doubled score
            if (doubledScore) {
                const scoreElement = document.querySelectorAll('.round-results .result-row span')[i * 2 + 1];
                scoreElement.classList.add('doubled-score');
                scoreElement.innerHTML = players[i].roundScore + ' <small>(doubled from ' + (players[i].roundScore/2) + ')</small>';
            }
        }
    });
    
    document.querySelector('.player-total').textContent = players[0].totalScore;
    document.querySelector('.comp1-total').textContent = players[1].totalScore;
    document.querySelector('.comp2-total').textContent = players[2].totalScore;
    
    // Update the final cards display
    updateFinalCardsDisplay();
    
    // Update the scoreboard
    updateScoreboard();
    
    // Show round end screen
    gameScreen.classList.remove('active');
    roundEndScreen.classList.add('active');
    
    // Check if game is over based on max rounds or points threshold
    if ((maxRounds > 0 && currentRound >= maxRounds) || 
        players.some(player => player.totalScore >= WIN_THRESHOLD)) {
        nextRoundBtn.textContent = 'See Final Results';
    }
    
    // Reset move in progress flag
    moveInProgress = false;
}

// Start a new round
function startNewRound() {
    // Check if game is over
    if (players.some(player => player.totalScore >= WIN_THRESHOLD)) {
        endGame();
        return;
    }
    
    // Reset round variables
    currentRound++;
    deck = [];
    discardPile = [];
    currentDrawnCard = null;
    selectedCardIndex = null;
    seenCards = {};
    moveInProgress = false;
    initialCardSelectionPhase = true;
    cardsToRevealCount = INITIAL_CARDS_TO_REVEAL;
    
    // Create new deck
    createDeck();
    
    // Reset player cards
    players.forEach(player => {
        player.cards = [];
        player.roundScore = 0;
        player.liveScore = 0;
        
        // Clear card memory for AI
        if (!player.isHuman) {
            player.cardMemory = [];
        }
    });
    
    // Deal new cards
    dealCards();
    
    // Start the discard pile
    discardPile.push(deck.pop());
    
    // Hide round end screen, show game screen
    roundEndScreen.classList.remove('active');
    gameScreen.classList.add('active');
    
    // Update UI
    updateUI();
    
    // Show message for initial card selection
    if (initialCardSelectionPhase) {
        showMessage(`Select ${INITIAL_CARDS_TO_REVEAL} cards to reveal`, 5000);
    }
    
    // Select cards for computer players
    autoSelectInitialCards(1);
    autoSelectInitialCards(2);
}

// End the game and show final results
function endGame() {
    // Populate the game end screen with scores
    document.querySelector('.player-final').textContent = players[0].totalScore;
    document.querySelector('.comp1-final').textContent = players[1].totalScore;
    document.querySelector('.comp2-final').textContent = players[2].totalScore;
    
    // Determine the winner
    const winner = [...players].sort((a, b) => a.totalScore - b.totalScore)[0];
    document.querySelector('.winner-name').textContent = winner.name;
    
    // Set the winner color
    document.querySelector('.winner-name').style.color = winner.color;
    
    // Hide round end screen, show game end screen
    roundEndScreen.classList.remove('active');
    gameEndScreen.classList.add('active');
    
    // Save score to localStorage for human players
    if (players[0].name !== 'You') {
        saveScore(players[0].name, players[0].totalScore);
    }
}

// Save score to database
function saveScore(playerName, score) {
    // Use localStorage instead of server API
    try {
        // Get existing scores or initialize empty array
        const scores = JSON.parse(localStorage.getItem('skyjoScores')) || [];
        
        // Add new score
        scores.push({
            playerName,
            score,
            date: new Date().toISOString()
        });
        
        // Save back to localStorage
        localStorage.setItem('skyjoScores', JSON.stringify(scores));
        console.log('Score saved to localStorage');
    } catch (error) {
        console.error('Error saving score to localStorage:', error);
    }
}

// Function to update and display the leaderboard
function updateLeaderboard() {
    const leaderboardTableBody = document.getElementById('leaderboard-table').querySelector('tbody');
    leaderboardTableBody.innerHTML = '';

    try {
        // Get scores from localStorage
        const scores = JSON.parse(localStorage.getItem('skyjoScores')) || [];
        
        // Sort scores (lowest is best)
        scores.sort((a, b) => a.score - b.score);
        
        // Add to table
        scores.forEach((score, index) => {
            const row = document.createElement('tr');
            
            const rankCell = document.createElement('td');
            rankCell.textContent = index + 1;
            
            const nameCell = document.createElement('td');
            nameCell.textContent = score.playerName;
            
            const scoreCell = document.createElement('td');
            scoreCell.textContent = score.score;
            
            const dateCell = document.createElement('td');
            dateCell.textContent = new Date(score.date).toLocaleDateString();
            
            row.appendChild(rankCell);
            row.appendChild(nameCell);
            row.appendChild(scoreCell);
            row.appendChild(dateCell);
            
            leaderboardTableBody.appendChild(row);
        });
        
        // If no scores yet
        if (scores.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 4;
            cell.textContent = 'No scores yet. Be the first to play!';
            cell.style.textAlign = 'center';
            row.appendChild(cell);
            leaderboardTableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Error loading leaderboard:', error);
    }
}

// Estimate a player's total score
function estimatePlayerScore(player) {
    let visibleScore = 0;
    let hiddenCardCount = 0;
    
    player.cards.forEach(card => {
        if (card.revealed) {
            visibleScore += card.value;
        } else {
            hiddenCardCount++;
        }
    });
    
    // Estimate hidden cards at avg value 5
    return visibleScore + (hiddenCardCount * 5);
}

// Estimate a card value based on what we've seen
function estimateCardValue() {
    // Default estimate
    return 5;
}

// Handle initial card selection
function handleInitialCardSelection(cardIndex) {
    if (!initialCardSelectionPhase) return;
    
    const player = players[0];
    const card = player.cards[cardIndex];
    
    if (!card.revealed && cardsToRevealCount > 0) {
        card.revealed = true;
        cardsToRevealCount--;
        
        // Update UI
        updateUI();
        
        // Check if initial selection is complete
        if (cardsToRevealCount === 0) {
            finishInitialCardSelection();
        } else {
            showMessage(`Select ${cardsToRevealCount} more card${cardsToRevealCount > 1 ? 's' : ''}`, 3000);
        }
    }
}

// Finish initial card selection phase
function finishInitialCardSelection() {
    initialCardSelectionPhase = false;
    
    // Randomly determine starting player
    currentPlayerIndex = Math.floor(Math.random() * players.length);
    
    // Update UI
    updateUI();
    
    showMessage(`${players[currentPlayerIndex].name} goes first!`, 2000);
    
    // If computer starts, begin its turn
    if (!players[currentPlayerIndex].isHuman) {
        setTimeout(() => computerTurn(), animationSpeed);
    }
}

// Update the turn indicator at the top of the screen
function updateTurnIndicator() {
    const currentPlayer = players[currentPlayerIndex];
    
    // Set the indicator text
    turnIndicatorText.textContent = `Current Turn: ${currentPlayer.name}`;
    
    // Set the indicator color to match the player's color
    currentTurnIndicator.style.backgroundColor = currentPlayer.color;
}

// Update the final cards display in round end screen
function updateFinalCardsDisplay() {
    playerFinalGrid.innerHTML = '';
    computer1FinalGrid.innerHTML = '';
    computer2FinalGrid.innerHTML = '';
    
    // Add player cards
    players[0].cards.forEach(card => {
        addFinalCard(playerFinalGrid, card);
    });
    
    // Add computer1 cards
    players[1].cards.forEach(card => {
        addFinalCard(computer1FinalGrid, card);
    });
    
    // Add computer2 cards
    players[2].cards.forEach(card => {
        addFinalCard(computer2FinalGrid, card);
    });
}

// Add a final card to the grid
function addFinalCard(grid, card) {
    const finalCard = document.createElement('div');
    finalCard.className = `final-card ${card.colorClass}`;
    finalCard.textContent = card.value;
    grid.appendChild(finalCard);
}

// Replace a card with the currently drawn card
function replaceCard(index) {
    debugLog(`replaceCard called for index ${index} by player ${currentPlayerIndex} (${players[currentPlayerIndex].name})`);
    
    const player = players[currentPlayerIndex];
    
    // Get the old card to put in the discard pile
    const oldCard = player.cards[index];
    
    // Put the old card on the discard pile
    discardPile.push(oldCard);
    
    // Replace the card with the drawn card
    player.cards[index] = currentDrawnCard;
    
    // Make sure the new card is revealed
    player.cards[index].revealed = true;
    
    // Add card to seen cards (for AI)
    trackCardSeen(currentDrawnCard.value);
    
    // Reset drawn card
    currentDrawnCard = null;
    
    // Update the UI
    updateUI();
    updateDiscardPile();
    
    // Check for column match after replacing a card
    checkForColumnMatch(currentPlayerIndex, index);
    
    // Check if the player just replaced a card and completed all cards
    checkForRoundEnd();
    
    // End the turn
    endTurn();
}

// Reveal a face-down card
function revealCard(playerIndex, cardIndex) {
    debugLog(`revealCard called for player ${playerIndex} (${players[playerIndex].name}), card index ${cardIndex}`);
    
    const player = players[playerIndex];
    
    if (!player.cards[cardIndex].revealed) {
        // Reveal the card
        player.cards[cardIndex].revealed = true;
        
        // Add to seen cards (for AI)
        trackCardSeen(player.cards[cardIndex].value);
        
        // Update UI
        updateUI();
        
        // Check for 3 matching cards in a column to remove them
        checkForColumnMatch(playerIndex, cardIndex);
        
        // Check if the player just revealed their last card
        checkForRoundEnd();
        
        // End the turn
        endTurn();
    } else {
        debugLog(`WARNING: Attempted to reveal already revealed card at index ${cardIndex}`);
    }
}

// Check if the player has completed a column of matching cards
function checkForColumnMatch(playerIndex, cardIndex) {
    const player = players[playerIndex];
    
    // Calculate current column count
    const currentCols = player.cards.length / ROWS;
    
    // Get position in current grid
    const { row, col } = getRowColFromIndex(cardIndex, currentCols);
    const cardValue = player.cards[cardIndex].value;
    
    debugLog(`Checking column match for player ${playerIndex}, column ${col}, value ${cardValue}`);
    
    // Get all cards in the same column
    const cardsInCol = [];
    for (let r = 0; r < ROWS; r++) {
        const idx = getIndexFromRowCol(r, col, currentCols);
        if (idx < player.cards.length) {
            cardsInCol.push({ card: player.cards[idx], index: idx });
        }
    }
    
    debugLog(`Found ${cardsInCol.length} cards in column ${col}`);
    
    // List the cards in the column for debugging
    cardsInCol.forEach((item, i) => {
        debugLog(`  Column card ${i}: value=${item.card.value}, revealed=${item.card.revealed}, index=${item.index}`);
    });
    
    // Check if all cards in column are revealed and have the same value
    const matchingCards = cardsInCol.filter(c => c.card.revealed && c.card.value === cardValue);
    
    debugLog(`${matchingCards.length} of them match value ${cardValue}`);
    
    if (matchingCards.length === ROWS) {
        // We have a complete column match!
        debugLog(`Complete column match found in column ${col} with value ${cardValue}!`);
        showMessage('Column match! Column removed.');
        
        // Actually remove the cards by rearranging the player's cards array
        // First, sort indices in descending order to avoid shifting issues
        const indicesToRemove = matchingCards.map(c => c.index).sort((a, b) => b - a);
        debugLog(`Removing cards at indices: ${indicesToRemove.join(', ')}`);
        
        // Function to rearrange the grid after removal
        removeColumn(playerIndex, col);
    }
}

// Function to remove a column and rearrange cards
function removeColumn(playerIndex, colToRemove) {
    const player = players[playerIndex];
    
    // Calculate current column count
    const currentCols = player.cards.length / ROWS;
    
    debugLog(`Removing column ${colToRemove} for player ${playerIndex} (current grid: ${ROWS}x${currentCols})`);
    
    // Create a new array without the removed column
    const newCards = [];
    
    // Loop through existing cards in row-major order
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < currentCols; col++) {
            // Skip the column we're removing
            if (col !== colToRemove) {
                const oldIndex = getIndexFromRowCol(row, col, currentCols);
                if (oldIndex < player.cards.length) {
                    newCards.push(player.cards[oldIndex]);
                    debugLog(`  Keeping card at row=${row}, col=${col}, index=${oldIndex}, value=${player.cards[oldIndex].value}`);
                }
            } else {
                const oldIndex = getIndexFromRowCol(row, col, currentCols);
                if (oldIndex < player.cards.length) {
                    debugLog(`  REMOVING card at row=${row}, col=${colToRemove}, index=${oldIndex}, value=${player.cards[oldIndex].value}`);
                }
            }
        }
    }
    
    debugLog(`Original card count: ${player.cards.length}, New card count: ${newCards.length}`);
    
    // Get the player's card container
    const cardContainer = playerIndex === 0 
        ? playerCardsContainer 
        : playerIndex === 1 
            ? computer1CardsContainer 
            : computer2CardsContainer;
    
    // Mark the column cards for visual effect
    const colCards = [];
    for (let row = 0; row < ROWS; row++) {
        const idx = getIndexFromRowCol(row, colToRemove, currentCols);
        if (idx < player.cards.length) {
            const cardEl = cardContainer.children[idx];
            if (cardEl) {
                colCards.push(cardEl);
                // Add highlight animation
                cardEl.classList.add('column-match-highlight');
            }
        }
    }
    
    // Wait for highlight animation, then fade out
    setTimeout(() => {
        colCards.forEach(cardEl => {
            cardEl.classList.remove('column-match-highlight');
            cardEl.classList.add('column-fade-out');
        });
        
        // Replace player's cards with the new arrangement after animation
        setTimeout(() => {
            // First update the player's cards array
            player.cards = newCards;
            
            // Then update the UI completely
            updateUI();
            
            // Provide visual feedback
            showMessage(`Column removed! Cards remaining: ${player.cards.length}`);
        }, animationSpeed);
    }, animationSpeed / 2);
}

// This function has been replaced with direct calls to updatePlayerCards and updateComputerCards

// These functions have been replaced with improved grid-based layout in updatePlayerCards and updateMiniCards

// Check if the round should end (all cards revealed)
function checkForRoundEnd() {
    const player = players[currentPlayerIndex];
    
    // Check if all cards are revealed
    const allRevealed = player.cards.every(card => card.revealed);
    
    if (allRevealed) {
        // End the round with this player as finisher
        roundFinisher = currentPlayerIndex;
        
        // Show message
        showMessage(`${player.name} has revealed all cards! Round ending...`);
        
        // Wait a moment before showing round end screen
        setTimeout(() => {
            endRound();
        }, 2000);
    }
}

// Add helper function to check for column match potential
function canCompleteColumn(player, cardValue) {
    debugLog(`Checking if value ${cardValue} can complete a column`);
    
    // Calculate current column count
    const currentCols = player.cards.length / ROWS;
    
    // Check each column
    for (let col = 0; col < currentCols; col++) {
        // Count cards in this column with matching value
        let matchCount = 0;
        
        for (let row = 0; row < ROWS; row++) {
            const index = getIndexFromRowCol(row, col, currentCols);
            if (index < player.cards.length) {
                const card = player.cards[index];
                if (card.revealed && card.value === cardValue) {
                    matchCount++;
                }
            }
        }
        
        // If we have 2 matching cards, we could complete with this one
        if (matchCount === 2) {
            debugLog(`Found potential column match in column ${col}`);
            return true;
        }
    }
    
    return false;
}

// Add safety mechanism to detect and reset stuck states
function checkForStuckState() {
    const currentTime = Date.now();
    
    // Initialize lastActionTime if it doesn't exist
    if (!window.lastActionTime) {
        window.lastActionTime = currentTime;
        return;
    }
    
    // If more than 10 seconds have passed with no action, consider it stuck
    if (currentTime - window.lastActionTime > 10000) {
        debugLog("STUCK STATE DETECTED! Resetting move state");
        
        // Clear any hanging animations
        clearAllAnimations();
        
        // Reset key game state variables
        moveInProgress = false;
        currentDrawnCard = null;
        
        // Hide UI elements that might be stuck
        cardSelectionArea.classList.add('hidden');
        computerCardAnimation.classList.add('hidden');
        
        // Move to next player if needed
        if (!players[currentPlayerIndex].isHuman) {
            debugLog("Forcing turn advance due to stuck state");
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            updateTurnIndicator();
            updateUI();
            
            // If next player is a computer, start its turn
            if (!players[currentPlayerIndex].isHuman) {
                setTimeout(() => computerTurn(), animationSpeed);
            }
        }
    }
    
    // Reset the timer
    window.lastActionTime = currentTime;
}

// Setup a periodic check for stuck state
setInterval(checkForStuckState, 5000);

// Handle player clicking on a draw pile
function handleDrawPileClick() {
    // Prevent drawing during initial card selection phase
    if (initialCardSelectionPhase) {
        showMessage('Please select your initial cards first', 2000);
        return;
    }
    
    // Only allow the current player to draw
    if (currentPlayerIndex === 0 && currentDrawnCard === null && !moveInProgress) {
        drawCard(true);
    }
}

// Handle player clicking on a discard pile
function handleDiscardPileClick() {
    // Prevent drawing during initial card selection phase
    if (initialCardSelectionPhase) {
        showMessage('Please select your initial cards first', 2000);
        return;
    }
    
    // Only allow the current player to draw
    if (currentPlayerIndex === 0 && currentDrawnCard === null && discardPile.length > 0 && !moveInProgress) {
        drawCard(false);
    }
}

// Draw a card (from draw pile or discard pile)
function drawCard(fromDrawPile) {
    debugLog(`drawCard called - fromDrawPile: ${fromDrawPile}, player: ${players[currentPlayerIndex].name}`);
    
    if (moveInProgress && players[currentPlayerIndex].isHuman) {
        debugLog("drawCard blocked: moveInProgress is true for human player");
        return;
    }
    
    moveInProgress = true;
    
    // Update the action timestamp
    window.lastActionTime = Date.now();
    
    try {
        if (fromDrawPile) {
            // Drawing from the deck
            if (deck.length === 0) {
                // Reshuffle discard pile if draw pile is empty
                if (discardPile.length > 1) {
                    debugLog("Reshuffling discard pile into draw pile");
                    const topCard = discardPile.pop();
                    deck = [...discardPile];
                    discardPile = [topCard];
                    shuffleDeck();
                    showMessage('Draw pile reshuffled');
                } else {
                    debugLog("No cards left to draw");
                    showMessage('No cards left to draw');
                    moveInProgress = false;
                    return;
                }
            }
            
            debugLog("Drawing card from deck");
            currentDrawnCard = deck.pop();
            
            // If player is human, show the card and wait for decision
            if (players[currentPlayerIndex].isHuman) {
                debugLog("Human player drew card, showing selection", currentDrawnCard);
                showCardSelection(currentDrawnCard, fromDrawPile);
                
                // Animate the card being drawn
                const cardEl = cardSelectionArea.querySelector('.card');
                animateCard(cardEl, 'card-animated');
                
            } else {
                // For computer, show animation of card being drawn
                debugLog("Computer drew card, showing animation", currentDrawnCard);
                showComputerCardDraw(currentDrawnCard);
                
                // After animation, make decision
                setTimeout(() => {
                    debugLog("Computer making decision on drawn card");
                    computerDecideOnDrawnCard();
                }, animationSpeed * 2);
            }
        } else {
            // Drawing from discard pile
            if (discardPile.length === 0) {
                debugLog("Error: Tried to draw from empty discard pile");
                showMessage('No cards in discard pile');
                moveInProgress = false;
                return;
            }
            
            debugLog("Drawing card from discard pile");
            currentDrawnCard = discardPile.pop();
            
            if (players[currentPlayerIndex].isHuman) {
                // For human players, allow discard from discard pile too
                debugLog("Human player took from discard pile, showing selection", currentDrawnCard);
                showCardSelection(currentDrawnCard, fromDrawPile);
                
                // Animate the card being drawn
                const cardEl = cardSelectionArea.querySelector('.card');
                animateCard(cardEl, 'card-animated');
                
            } else {
                // For computer, show animation of card being drawn from discard pile
                debugLog("Computer took from discard pile, showing animation", currentDrawnCard);
                showComputerCardDraw(currentDrawnCard);
                
                // After animation, computer always keeps a card from discard pile
                setTimeout(() => {
                    debugLog("Computer selecting card to replace after taking from discard");
                    computerSelectCardToReplace();
                }, animationSpeed * 2);
            }
        }
        
        updateUI();
    } catch (error) {
        debugLog("ERROR in drawCard function:", error);
        // Safety mechanism to prevent game from freezing
        moveInProgress = false;
        endTurn();
    }
}

// Show the card selection area for human players
function showCardSelection(card, fromDrawPile) {
    // Set up the card display
    const cardEl = cardSelectionArea.querySelector('.card');
    cardEl.className = 'card flipped';
    cardEl.innerHTML = '';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = `card-front ${card.colorClass}`;
    cardFront.textContent = card.value;
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardEl.appendChild(cardInner);
    
    // Set up button actions
    keepCardBtn.onclick = () => handleKeepCard();
    discardCardBtn.onclick = () => handleDiscardCard();
    cancelDrawBtn.onclick = () => handleCancelDraw();
    
    // Always allow discard option
    discardCardBtn.disabled = false;
    
    // Only allow cancel when drawing from discard pile
    cancelDrawBtn.disabled = fromDrawPile;
    cancelDrawBtn.style.display = fromDrawPile ? 'none' : 'block';
    
    // If drawn from draw pile, players can directly select a card to replace (skipping keep button)
    if (fromDrawPile) {
        showMessage('Select a card to replace or discard drawn card');
        keepCardBtn.style.display = 'none';
    } else {
        keepCardBtn.style.display = 'block';
    }
    
    // Show the selection area
    cardSelectionArea.classList.remove('hidden');
}

// Show animation of computer drawing a card
function showComputerCardDraw(card) {
    // Set up the animation element
    const cardEl = computerCardAnimation.querySelector('.card');
    cardEl.className = 'card flipped';
    cardEl.innerHTML = '';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = `card-front ${card.colorClass}`;
    cardFront.textContent = card.value;
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    cardEl.appendChild(cardInner);
    
    // Position the animation element over the draw pile
    const drawPileRect = drawPile.getBoundingClientRect();
    computerCardAnimation.style.position = 'fixed';
    computerCardAnimation.style.left = `${drawPileRect.left}px`;
    computerCardAnimation.style.top = `${drawPileRect.top}px`;
    computerCardAnimation.style.width = `${drawPileRect.width}px`;
    computerCardAnimation.style.height = `${drawPileRect.height}px`;
    computerCardAnimation.style.zIndex = '150';
    
    // Show the animation element
    computerCardAnimation.classList.remove('hidden');
    
    // Animate the card being drawn
    animateCard(cardEl, 'card-animated');
}

// Handle player deciding to keep the drawn card
function handleKeepCard() {
    cardSelectionArea.classList.add('hidden');
    
    // Let player click on a card to replace
    showMessage('Select a card to replace');
}

// Handle player deciding to discard the drawn card
function handleDiscardCard() {
    cardSelectionArea.classList.add('hidden');
    
    // Discard the drawn card
    discardPile.push(currentDrawnCard);
    
    // Animate the discard
    const discardEl = discardPileEl.querySelector('.card');
    animateCard(discardEl, 'card-animated');
    
    currentDrawnCard = null;
    
    // Player must reveal a face-down card
    const facedownCards = players[currentPlayerIndex].cards
        .map((card, index) => ({ card, index }))
        .filter(item => !item.card.revealed);
    
    if (facedownCards.length > 0) {
        showMessage('Select a card to reveal');
    } else {
        // If all cards are revealed, end the turn
        endTurn();
    }
    
    updateDiscardPile();
}

// Update the discard pile display
function updateDiscardPile() {
    const cardEl = discardPileEl.querySelector('.card');
    cardEl.className = 'card';
    cardEl.innerHTML = '';
    
    if (discardPile.length > 0) {
        const topCard = discardPile[discardPile.length - 1];
        cardEl.classList.add('flipped');
        
        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        
        const cardFront = document.createElement('div');
        cardFront.className = `card-front ${topCard.colorClass}`;
        cardFront.textContent = topCard.value;
        
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardEl.appendChild(cardInner);
    } else {
        cardEl.classList.add('empty');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Start game button
    startGameBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        gameScreen.classList.add('active');
        initGame();
    });
    
    // Next round button
    nextRoundBtn.addEventListener('click', startNewRound);
    
    // New game button
    newGameBtn.addEventListener('click', () => {
        gameEndScreen.classList.remove('active');
        welcomeScreen.classList.add('active');
    });
    
    // Draw and discard pile clicks
    drawPile.addEventListener('click', handleDrawPileClick);
    discardPileEl.addEventListener('click', handleDiscardPileClick);
    
    // Animation speed selector
    animationSpeedSelect.addEventListener('change', () => {
        animationSpeed = ANIMATION_SPEEDS[animationSpeedSelect.value];
        document.documentElement.style.setProperty('--animation-duration', `${animationSpeed / 1000}s`);
    });
    
    // Leaderboard buttons
    const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
    if (showLeaderboardBtn) {
        showLeaderboardBtn.addEventListener('click', () => {
            updateLeaderboard();
            gameEndScreen.classList.remove('active');
            document.getElementById('leaderboard-screen').classList.add('active');
        });
    }
    
    // Back to game button
    const backToGameBtn = document.getElementById('back-to-game-btn');
    if (backToGameBtn) {
        backToGameBtn.addEventListener('click', () => {
            document.getElementById('leaderboard-screen').classList.remove('active');
            gameEndScreen.classList.add('active');
        });
    }
});

// Helper function to get row/col from index based on current grid
function getRowColFromIndex(index, columnCount) {
    const row = Math.floor(index / columnCount);
    const col = index % columnCount;
    return { row, col };
}

// Helper function to get index from row/col based on current grid
function getIndexFromRowCol(row, col, columnCount) {
    return row * columnCount + col;
}

// Add helper functions for improved AI strategy

// Estimate the value of a hidden card based on difficulty and card counting
function estimateHiddenValue(player, cardIndex) {
    // Default estimate (average-ish card value)
    let estimate = 5;
    
    if (player.difficulty === 'casual') {
        // Casual difficulty: random guess between 5-8
        estimate = Math.floor(Math.random() * 4) + 5;
    } else if (player.difficulty === 'skilled') {
        // Skilled difficulty: constant estimate of 5
        estimate = 5;
    } else if (player.difficulty === 'expert') {
        // Expert difficulty: Bayesian estimate based on seen cards
        // Start with a weighted average based on remaining cards
        let totalSeenValues = 0;
        let totalSeenCards = 0;
        
        // Count cards in seen cards object
        for (const [value, count] of Object.entries(seenCards)) {
            totalSeenValues += Number(value) * count;
            totalSeenCards += count;
        }
        
        // Calculate remaining card average
        const remainingCards = CARD_DISTRIBUTION.reduce((sum, card) => sum + card.count, 0) - totalSeenCards;
        const remainingValues = CARD_DISTRIBUTION.reduce((sum, card) => sum + (card.value * card.count), 0) - totalSeenValues;
        
        if (remainingCards > 0) {
            estimate = remainingValues / remainingCards;
        } else {
            estimate = 5; // Default if something went wrong
        }
        
        // Add some randomness within ±1.5 of the estimate
        estimate += (Math.random() * 3 - 1.5);
        
        // Round to nearest 0.5
        estimate = Math.round(estimate * 2) / 2;
    }
    
    return estimate;
}

// Calculate the expected value change for an action
function calculateExpectedValue(player, action, drawnCardValue) {
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    let ev = 0;
    
    if (action.type === 'keep') {
        const targetCardIndex = action.targetIndex;
        const targetCard = player.cards[targetCardIndex];
        
        if (targetCard.revealed) {
            // If replacing a revealed card, gain is straightforward
            ev = targetCard.value - drawnCardValue;
        } else {
            // If replacing a hidden card, estimate its value
            const estimatedValue = estimateHiddenValue(player, targetCardIndex);
            ev = estimatedValue - drawnCardValue;
        }
        
        // Add bonus for column match potential
        const colIdx = targetCardIndex % COLS;
        const columnMatchBonus = calculateColumnMatchBonus(player, colIdx, drawnCardValue);
        ev += columnMatchBonus;
        
    } else if (action.type === 'discard') {
        // For discard, the EV is harder to calculate
        // It depends on the expected value of the card we'll flip
        let avgHiddenValue = 0;
        let hiddenCount = 0;
        
        // Find unrevealed cards and estimate their values
        player.cards.forEach((card, idx) => {
            if (!card.revealed) {
                avgHiddenValue += estimateHiddenValue(player, idx);
                hiddenCount++;
            }
        });
        
        if (hiddenCount > 0) {
            avgHiddenValue /= hiddenCount;
        } else {
            avgHiddenValue = 5; // Default if something went wrong
        }
        
        // The EV of discarding is negative avg value (since we're keeping it)
        ev = -avgHiddenValue;
    }
    
    return ev;
}

// Calculate bonus for column matching potential
function calculateColumnMatchBonus(player, colIdx, cardValue) {
    const difficulty = DIFFICULTY_PRESETS[player.difficulty];
    let bonus = 0;
    
    // Count cards in this column with the same value
    const sameValueCount = player.cards.filter((card, idx) => {
        return idx % COLS === colIdx && card.revealed && card.value === cardValue;
    }).length;
    
    if (sameValueCount === 2) {
        // For a potential triplet, the bonus is huge
        if (cardValue <= difficulty.columnValueThreshold) {
            bonus = 1000; // Virtually guarantee this move
        } else {
            // For higher values, still give a bonus but scale it down
            const valueExcess = cardValue - difficulty.columnValueThreshold;
            bonus = 1000 - (valueExcess * 100);
            
            // Even for expert, ensure completing a column is better than not
            bonus = Math.max(bonus, 50);
        }
    } else if (sameValueCount === 1) {
        // For a potential doublet, smaller bonus
        if (player.difficulty === 'expert') {
            bonus = 10;
        } else if (player.difficulty === 'skilled') {
            bonus = 4;
        } else {
            bonus = 2;
        }
    }
    
    return bonus;
}

// Decide whether the player should finish the round based on relative scores
function shouldFinishRound(player) {
    if (player.difficulty === 'casual') {
        // Casual players don't strategically avoid finishing
        return true;
    }
    
    // Calculate projected scores for all players
    const projectedScores = players.map((p, idx) => {
        let score = 0;
        
        // Sum up revealed cards
        p.cards.forEach(card => {
            if (card.revealed) {
                score += card.value;
            } else if (idx === players.indexOf(player)) {
                // For current player, assume current drawn card for last hidden card
                score += currentDrawnCard ? currentDrawnCard.value : estimateHiddenValue(player, 0);
            } else {
                // For other players, use estimate
                score += estimateHiddenValue(p, 0);
            }
        });
        
        return { player: p, projectedScore: score };
    });
    
    // Sort by projected score (lowest is best)
    projectedScores.sort((a, b) => a.projectedScore - b.projectedScore);
    
    // Check if current player is in first place
    const currentPlayerRank = projectedScores.findIndex(entry => entry.player === player);
    
    if (currentPlayerRank === 0) {
        // In first place, so finishing is good
        return true;
    } else {
        // Not in first place, so finishing would double score
        // Skilled has 75% chance to avoid finishing
        if (player.difficulty === 'skilled') {
            return Math.random() > 0.75;
        } else {
            // Expert deterministically avoids finishing if not in first
            return false;
        }
    }
}

// Determine if player should play high variance (risky) strategy
function shouldPlayHighVariance(player) {
    if (!DIFFICULTY_PRESETS[player.difficulty].highVarianceWhenBehind) {
        return false;
    }
    
    // Calculate current visible scores
    const visibleScores = players.map((p, idx) => {
        let score = 0;
        
        // Sum up revealed cards
        p.cards.forEach(card => {
            if (card.revealed) {
                score += card.value;
            }
        });
        
        return { player: p, visibleScore: score };
    });
    
    // Sort by visible score (lowest is best)
    visibleScores.sort((a, b) => a.visibleScore - b.visibleScore);
    
    // Check if current player is behind by a significant amount
    const currentPlayerScore = visibleScores.find(entry => entry.player === player).visibleScore;
    const leadingScore = visibleScores[0].visibleScore;
    
    // If player is more than 10 points behind, play high variance
    return (currentPlayerScore - leadingScore) >= 10;
}

// Determine if player should play low variance (safe) strategy
function shouldPlayLowVariance(player) {
    if (!DIFFICULTY_PRESETS[player.difficulty].lowVarianceWhenAhead) {
        return false;
    }
    
    // Calculate current visible scores
    const visibleScores = players.map((p, idx) => {
        let score = 0;
        
        // Sum up revealed cards
        p.cards.forEach(card => {
            if (card.revealed) {
                score += card.value;
            }
        });
        
        return { player: p, visibleScore: score };
    });
    
    // Sort by visible score (lowest is best)
    visibleScores.sort((a, b) => a.visibleScore - b.visibleScore);
    
    // Check if current player is ahead by a significant amount
    const currentPlayerEntry = visibleScores.find(entry => entry.player === player);
    const currentPlayerRank = visibleScores.indexOf(currentPlayerEntry);
    
    // If player is in first place and ahead by 15+ points, play low variance
    if (currentPlayerRank === 0) {
        const secondPlaceScore = visibleScores[1].visibleScore;
        return (secondPlaceScore - currentPlayerEntry.visibleScore) >= 15;
    }
    
    return false;
} 