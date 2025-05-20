/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./skyjo-styles.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./skyjo-styles.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General Styles */
:root {
    --player-color: #3498db;
    --computer1-color: #e74c3c;
    --computer2-color: #2ecc71;
    --bg-color: #f5f5f5;
    --card-bg: white;
    --card-back: #34495e;
    --text-color: #333;
    --border-color: #ddd;
    --animation-duration: 0.5s; /* Default, will be overridden by JS */
    --keep-btn-color: #27ae60;
    --discard-btn-color: #e74c3c;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #e0f7fa; /* Changed to light blue to confirm changes are applied */
    color: var(--text-color);
    line-height: 1.6;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

#game-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Button Styles */
.btn {
    background-color: var(--player-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.btn:hover {
    opacity: 0.9;
}

.btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

#keep-card-btn {
    background-color: var(--keep-btn-color);
}

#discard-card-btn {
    background-color: var(--discard-btn-color);
}

/* Screen Styles */
.screen {
    display: none;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10px;
    overflow-y: auto;
}

.screen.active {
    display: flex;
}

/* Welcome Screen */
.welcome-content {
    text-align: center;
    max-width: 500px;
    padding: 40px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.welcome-content h1 {
    color: var(--player-color);
    margin-bottom: 20px;
}

.player-input {
    margin: 30px 0 15px;
}

.player-input label {
    display: block;
    margin-bottom: 10px;
}

.player-input input {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-size: 16px;
}

/* Game Settings */
.game-settings {
    margin-bottom: 20px;
}

.setting {
    margin-bottom: 10px;
    text-align: left;
}

.setting label {
    display: block;
    margin-bottom: 5px;
}

.setting select {
    width: 100%;
    padding: 8px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: white;
}

/* Game Layout */
.game-layout {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 20px;
    flex: 1;
}

.left-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    max-height: calc(100vh - 40px);
}

.right-panel {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    max-height: calc(100vh - 40px);
}

/* Current Turn Indicator */
.current-turn-indicator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--player-color);
    color: white;
    text-align: center;
    padding: 5px;
    font-weight: bold;
    z-index: 90;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Game Screen */
.game-info {
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 30px; /* Add space for the turn indicator */
}

.player-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Opponent Area */
.opponents-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.opponent {
    padding: 15px 15px 25px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

#computer1 h3 {
    color: var(--computer1-color);
}

#computer2 h3 {
    color: var(--computer2-color);
}

.mini-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin: 10px 0;
}

.mini-card {
    width: 100%;
    aspect-ratio: 2/3;
    border-radius: 3px;
    background-color: var(--card-back);
    position: relative;
}

.mini-card.revealed {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
}

/* Card Piles */
.card-piles {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 20px 0;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.pile {
    text-align: center;
}

.pile .card {
    width: 120px;
    height: 180px;
    margin: 0 auto 10px;
}

/* Player Area */
.player-area {
    padding: 20px 20px 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.player-area h3 {
    color: var(--player-color);
    text-align: center;
    margin-bottom: 15px;
}

.player-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 15px;
}

.score {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
}

.live-score {
    text-align: center;
    margin-top: 5px;
    font-size: 16px;
    color: #666;
}

/* Card Selection Area */
.card-selection-area {
    position: fixed;
    top: 30px;
    right: 20px;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    z-index: 100;
    max-width: 180px;
    width: auto;
}

.card-selection-area .card {
    width: 100px;
    height: 150px;
    margin: 0 auto 10px;
}

.card-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* Card Styles */
.card {
    width: 100%;
    aspect-ratio: 2/3;
    perspective: 1000px;
    cursor: pointer;
    position: relative;
}

.card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform var(--animation-duration);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
}

.card-front {
    transform: rotateY(180deg);
}

.card-back {
    background-color: var(--card-back);
}

.card.empty .card-inner {
    background-color: #f0f0f0;
    border: 2px dashed #ccc;
}

.card.back .card-inner {
    background-color: var(--card-back);
}

/* Card Values and Colors */
.card-m2 { background-color: #1abc9c; color: white; } /* Dark Turquoise */
.card-m1 { background-color: #48c9b0; color: white; } /* Light Turquoise */
.card-0 { background-color: #95a5a6; color: white; } /* Gray */
.card-1 { background-color: #58d68d; color: white; } /* Light Green */
.card-2 { background-color: #2ecc71; color: white; } /* Green */
.card-3 { background-color: #2d9b58; color: white; } /* Olive Green */
.card-4 { background-color: #f1c40f; color: black; } /* Yellow */
.card-5 { background-color: #f39c12; color: white; } /* Orange */
.card-6 { background-color: #e67e22; color: white; } /* Coral */
.card-7 { background-color: #e74c3c; color: white; } /* Light Red */
.card-8 { background-color: #cb4335; color: white; } /* Red */
.card-9 { background-color: #a93226; color: white; } /* Dark Red */
.card-10 { background-color: #8e44ad; color: white; } /* Purple */
.card-11 { background-color: #9b59b6; color: white; } /* Magenta */
.card-12 { background-color: #d98cb3; color: white; } /* Pink */

/* Round End Screen */
.round-results {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    max-width: 800px;
    width: 90%;
}

.round-results h2 {
    text-align: center;
    margin-bottom: 20px;
    color: var(--player-color);
}

.results-container, .total-scores, .final-scores {
    margin-bottom: 30px;
}

.total-scores h3, .final-scores h3 {
    margin-bottom: 15px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 5px;
}

.result-row {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
}

.completed-first {
    position: relative;
}

.completed-first::after {
    content: "★";
    color: gold;
    margin-left: 10px;
}

.doubled-score {
    color: var(--discard-btn-color);
    font-weight: bold;
}

.doubled-score::after {
    content: " (doubled)";
    font-size: 80%;
}

.final-cards-display {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 30px;
}

.player-final-cards {
    text-align: center;
    padding: 15px;
    background-color: rgba(0,0,0,0.05);
    border-radius: 10px;
}

.player-final-cards h4 {
    margin-bottom: 10px;
    color: var(--player-color);
}

.player-final-cards.computer1 h4 {
    color: var(--computer1-color);
}

.player-final-cards.computer2 h4 {
    color: var(--computer2-color);
}

.final-cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

.final-card {
    width: 50px;
    height: 75px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 16px;
}

#next-round-btn, #new-game-btn {
    display: block;
    margin: 0 auto;
}

/* Game End Screen */
.game-results {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    max-width: 800px;
    width: 90%;
}

#winner-announcement {
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
}

.winner-name {
    font-weight: bold;
    color: var(--player-color);
}

/* Message Container */
#message-container {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 200;
}

/* Round Scoreboard */
.round-scoreboard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    overflow-x: auto;
}

.round-scoreboard h3 {
    text-align: center;
    margin-bottom: 10px;
    color: var(--player-color);
}

#round-scoreboard-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 300px;
}

#round-scoreboard-table th,
#round-scoreboard-table td {
    padding: 8px 12px;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
}

#round-scoreboard-table th {
    background-color: #f8f9fa;
}

#round-scoreboard-table th:first-child {
    text-align: left;
}

#round-scoreboard-table tr:last-child {
    font-weight: bold;
    background-color: #f8f9fa;
}

.hidden {
    display: none !important;
}

/* Card Animation */
@keyframes cardDraw {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}

@keyframes cardMove {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes cardDiscard {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(100px, 50px) scale(0.8); opacity: 0; }
}

.card-animated {
    animation: cardDraw var(--animation-duration) ease-out;
}

.card-moved {
    animation: cardMove var(--animation-duration) ease-in-out;
}

.card-discarded {
    animation: cardDiscard var(--animation-duration) ease-in-out;
}

/* Thinking Animation */
.thinking-indicator {
    display: flex;
    gap: 8px;
}

.thinking-dot {
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 50%;
    animation: thinking 1.4s infinite ease-in-out;
}

.thinking-dot:nth-child(1) {
    animation-delay: 0s;
}

.thinking-dot:nth-child(2) {
    animation-delay: 0.2s;
}

.thinking-dot:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes thinking {
    0%, 100% { transform: scale(0.6); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
}

/* Leaderboard Styles */
.leaderboard-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    max-width: 800px;
    width: 90%;
}

.leaderboard-content h2 {
    text-align: center;
    margin-bottom: 20px;
    color: var(--player-color);
}

.leaderboard-table-container {
    margin-bottom: 30px;
    max-height: 400px;
    overflow-y: auto;
}

#leaderboard-table {
    width: 100%;
    border-collapse: collapse;
}

#leaderboard-table th,
#leaderboard-table td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
}

#leaderboard-table th {
    background-color: #f8f9fa;
    position: sticky;
    top: 0;
}

#back-to-game-btn {
    display: block;
    margin: 0 auto;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .game-layout {
        flex-direction: column;
    }
    
    .right-panel {
        order: 1;
    }
    
    .left-panel {
        order: 2;
    }
    
    .pile .card {
        width: 80px;
        height: 120px;
    }
    
    .card-selection-area {
        max-width: 150px;
    }
    
    .card-selection-area .card {
        width: 70px;
        height: 105px;
    }
    
    .final-cards-display {
        flex-direction: column;
    }
}

/* Column match animations */
.column-match-highlight {
    animation: highlight-pulse 0.5s ease-in-out;
}

.column-fade-out {
    animation: fade-out 0.5s ease-in-out forwards;
    pointer-events: none;
}

@keyframes highlight-pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 215, 0, 0); }
    50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255, 215, 0, 0.8); }
    100% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 215, 0, 0); }
}

@keyframes fade-out {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.8); }
}

/* Placeholder cards to maintain grid structure */
.card.placeholder,
.mini-card.placeholder {
    visibility: hidden;
    pointer-events: none;
}

/* Player and Computer Cards Grid Layouts */
.player-cards, .mini-cards {
    display: grid;
    gap: 10px;
    width: 100%;
    grid-auto-flow: dense;
    margin: 0 auto 20px;
    max-width: 600px;
}

/* Specific styling for player cards */
.player-cards {
    grid-template-rows: repeat(3, 1fr);
    min-height: 350px;
}

/* Specific styling for computer cards */
.mini-cards {
    grid-template-rows: repeat(3, 1fr);
    min-height: 200px;
    gap: 5px;
}

/* Make sure cards stay in their assigned positions and keep consistent size */
.card, .mini-card {
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3;
    margin: 0;
    transition: all 0.3s ease-in-out;
    justify-self: center;
}

/* Ensure cards maintain fixed dimensions */
.card {
    min-width: 80px;
    max-width: 120px;
}

.mini-card {
    min-width: 50px;
    max-width: 80px;
}

/* Ensure parent containers don't expand/contract too much */
.player-area, .opponent {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

/* Column match highlight animation */
@keyframes highlight-column {
    0%, 100% { 
        opacity: 1; 
        transform: scale(1);
    }
    50% { 
        opacity: 0.8; 
        transform: scale(1.05);
        box-shadow: 0 0 15px gold;
    }
}

/* Apply animation to columns being removed */
.column-being-removed {
    animation: highlight-column 0.5s ease-in-out 3;
}

/* Responsive adjustments for card sizing */
@media (max-width: 768px) {
    .card {
        min-width: 70px;
    }
    
    .mini-card {
        min-width: 45px;
    }
}

/* Remove duplicated rules */

/* Card highlight for clickable cards */
.clickable-highlight {
    box-shadow: 0 0 15px var(--player-color);
    transform: scale(1.05);
    z-index: 10;
    position: relative;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 5px var(--player-color); }
    50% { box-shadow: 0 0 20px var(--player-color); }
    100% { box-shadow: 0 0 5px var(--player-color); }
}

/* Column match animations */ `, "",{"version":3,"sources":["webpack://./skyjo-styles.css"],"names":[],"mappings":"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","sourcesContent":["/* General Styles */\n:root {\n    --player-color: #3498db;\n    --computer1-color: #e74c3c;\n    --computer2-color: #2ecc71;\n    --bg-color: #f5f5f5;\n    --card-bg: white;\n    --card-back: #34495e;\n    --text-color: #333;\n    --border-color: #ddd;\n    --animation-duration: 0.5s; /* Default, will be overridden by JS */\n    --keep-btn-color: #27ae60;\n    --discard-btn-color: #e74c3c;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Arial', sans-serif;\n    background-color: #e0f7fa; /* Changed to light blue to confirm changes are applied */\n    color: var(--text-color);\n    line-height: 1.6;\n    min-height: 100vh;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n#game-container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 10px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Button Styles */\n.btn {\n    background-color: var(--player-color);\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 16px;\n    transition: background-color 0.3s;\n}\n\n.btn:hover {\n    opacity: 0.9;\n}\n\n.btn:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n}\n\n#keep-card-btn {\n    background-color: var(--keep-btn-color);\n}\n\n#discard-card-btn {\n    background-color: var(--discard-btn-color);\n}\n\n/* Screen Styles */\n.screen {\n    display: none;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 10px;\n    overflow-y: auto;\n}\n\n.screen.active {\n    display: flex;\n}\n\n/* Welcome Screen */\n.welcome-content {\n    text-align: center;\n    max-width: 500px;\n    padding: 40px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.welcome-content h1 {\n    color: var(--player-color);\n    margin-bottom: 20px;\n}\n\n.player-input {\n    margin: 30px 0 15px;\n}\n\n.player-input label {\n    display: block;\n    margin-bottom: 10px;\n}\n\n.player-input input {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid var(--border-color);\n    border-radius: 5px;\n    font-size: 16px;\n}\n\n/* Game Settings */\n.game-settings {\n    margin-bottom: 20px;\n}\n\n.setting {\n    margin-bottom: 10px;\n    text-align: left;\n}\n\n.setting label {\n    display: block;\n    margin-bottom: 5px;\n}\n\n.setting select {\n    width: 100%;\n    padding: 8px;\n    border: 1px solid var(--border-color);\n    border-radius: 5px;\n    background-color: white;\n}\n\n/* Game Layout */\n.game-layout {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    height: 100%;\n    gap: 20px;\n    flex: 1;\n}\n\n.left-panel {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow-y: auto;\n    max-height: calc(100vh - 40px);\n}\n\n.right-panel {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    overflow-y: auto;\n    max-height: calc(100vh - 40px);\n}\n\n/* Current Turn Indicator */\n.current-turn-indicator {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: var(--player-color);\n    color: white;\n    text-align: center;\n    padding: 5px;\n    font-weight: bold;\n    z-index: 90;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n/* Game Screen */\n.game-info {\n    padding: 10px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    margin-top: 30px; /* Add space for the turn indicator */\n}\n\n.player-info {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* Opponent Area */\n.opponents-area {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.opponent {\n    padding: 15px 15px 25px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n}\n\n#computer1 h3 {\n    color: var(--computer1-color);\n}\n\n#computer2 h3 {\n    color: var(--computer2-color);\n}\n\n.mini-cards {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 5px;\n    margin: 10px 0;\n}\n\n.mini-card {\n    width: 100%;\n    aspect-ratio: 2/3;\n    border-radius: 3px;\n    background-color: var(--card-back);\n    position: relative;\n}\n\n.mini-card.revealed {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: white;\n}\n\n/* Card Piles */\n.card-piles {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n    margin: 20px 0;\n    padding: 20px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.pile {\n    text-align: center;\n}\n\n.pile .card {\n    width: 120px;\n    height: 180px;\n    margin: 0 auto 10px;\n}\n\n/* Player Area */\n.player-area {\n    padding: 20px 20px 30px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.player-area h3 {\n    color: var(--player-color);\n    text-align: center;\n    margin-bottom: 15px;\n}\n\n.player-cards {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    margin-bottom: 15px;\n}\n\n.score {\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n}\n\n.live-score {\n    text-align: center;\n    margin-top: 5px;\n    font-size: 16px;\n    color: #666;\n}\n\n/* Card Selection Area */\n.card-selection-area {\n    position: fixed;\n    top: 30px;\n    right: 20px;\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);\n    z-index: 100;\n    max-width: 180px;\n    width: auto;\n}\n\n.card-selection-area .card {\n    width: 100px;\n    height: 150px;\n    margin: 0 auto 10px;\n}\n\n.card-actions {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* Card Styles */\n.card {\n    width: 100%;\n    aspect-ratio: 2/3;\n    perspective: 1000px;\n    cursor: pointer;\n    position: relative;\n}\n\n.card-inner {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform-style: preserve-3d;\n    transition: transform var(--animation-duration);\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.card.flipped .card-inner {\n    transform: rotateY(180deg);\n}\n\n.card-front, .card-back {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    backface-visibility: hidden;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.card-front {\n    transform: rotateY(180deg);\n}\n\n.card-back {\n    background-color: var(--card-back);\n}\n\n.card.empty .card-inner {\n    background-color: #f0f0f0;\n    border: 2px dashed #ccc;\n}\n\n.card.back .card-inner {\n    background-color: var(--card-back);\n}\n\n/* Card Values and Colors */\n.card-m2 { background-color: #1abc9c; color: white; } /* Dark Turquoise */\n.card-m1 { background-color: #48c9b0; color: white; } /* Light Turquoise */\n.card-0 { background-color: #95a5a6; color: white; } /* Gray */\n.card-1 { background-color: #58d68d; color: white; } /* Light Green */\n.card-2 { background-color: #2ecc71; color: white; } /* Green */\n.card-3 { background-color: #2d9b58; color: white; } /* Olive Green */\n.card-4 { background-color: #f1c40f; color: black; } /* Yellow */\n.card-5 { background-color: #f39c12; color: white; } /* Orange */\n.card-6 { background-color: #e67e22; color: white; } /* Coral */\n.card-7 { background-color: #e74c3c; color: white; } /* Light Red */\n.card-8 { background-color: #cb4335; color: white; } /* Red */\n.card-9 { background-color: #a93226; color: white; } /* Dark Red */\n.card-10 { background-color: #8e44ad; color: white; } /* Purple */\n.card-11 { background-color: #9b59b6; color: white; } /* Magenta */\n.card-12 { background-color: #d98cb3; color: white; } /* Pink */\n\n/* Round End Screen */\n.round-results {\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    max-width: 800px;\n    width: 90%;\n}\n\n.round-results h2 {\n    text-align: center;\n    margin-bottom: 20px;\n    color: var(--player-color);\n}\n\n.results-container, .total-scores, .final-scores {\n    margin-bottom: 30px;\n}\n\n.total-scores h3, .final-scores h3 {\n    margin-bottom: 15px;\n    border-bottom: 1px solid var(--border-color);\n    padding-bottom: 5px;\n}\n\n.result-row {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n}\n\n.completed-first {\n    position: relative;\n}\n\n.completed-first::after {\n    content: \"★\";\n    color: gold;\n    margin-left: 10px;\n}\n\n.doubled-score {\n    color: var(--discard-btn-color);\n    font-weight: bold;\n}\n\n.doubled-score::after {\n    content: \" (doubled)\";\n    font-size: 80%;\n}\n\n.final-cards-display {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n    margin-bottom: 30px;\n}\n\n.player-final-cards {\n    text-align: center;\n    padding: 15px;\n    background-color: rgba(0,0,0,0.05);\n    border-radius: 10px;\n}\n\n.player-final-cards h4 {\n    margin-bottom: 10px;\n    color: var(--player-color);\n}\n\n.player-final-cards.computer1 h4 {\n    color: var(--computer1-color);\n}\n\n.player-final-cards.computer2 h4 {\n    color: var(--computer2-color);\n}\n\n.final-cards-grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 5px;\n}\n\n.final-card {\n    width: 50px;\n    height: 75px;\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: white;\n    font-size: 16px;\n}\n\n#next-round-btn, #new-game-btn {\n    display: block;\n    margin: 0 auto;\n}\n\n/* Game End Screen */\n.game-results {\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    max-width: 800px;\n    width: 90%;\n}\n\n#winner-announcement {\n    text-align: center;\n    font-size: 24px;\n    margin: 20px 0;\n    padding: 10px;\n    background-color: #f8f9fa;\n    border-radius: 5px;\n}\n\n.winner-name {\n    font-weight: bold;\n    color: var(--player-color);\n}\n\n/* Message Container */\n#message-container {\n    position: fixed;\n    top: 30px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    padding: 10px 20px;\n    border-radius: 5px;\n    z-index: 200;\n}\n\n/* Round Scoreboard */\n.round-scoreboard {\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    padding: 15px;\n    overflow-x: auto;\n}\n\n.round-scoreboard h3 {\n    text-align: center;\n    margin-bottom: 10px;\n    color: var(--player-color);\n}\n\n#round-scoreboard-table {\n    width: 100%;\n    border-collapse: collapse;\n    min-width: 300px;\n}\n\n#round-scoreboard-table th,\n#round-scoreboard-table td {\n    padding: 8px 12px;\n    text-align: center;\n    border-bottom: 1px solid var(--border-color);\n}\n\n#round-scoreboard-table th {\n    background-color: #f8f9fa;\n}\n\n#round-scoreboard-table th:first-child {\n    text-align: left;\n}\n\n#round-scoreboard-table tr:last-child {\n    font-weight: bold;\n    background-color: #f8f9fa;\n}\n\n.hidden {\n    display: none !important;\n}\n\n/* Card Animation */\n@keyframes cardDraw {\n    0% { transform: translateY(-50px); opacity: 0; }\n    100% { transform: translateY(0); opacity: 1; }\n}\n\n@keyframes cardMove {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.1); }\n    100% { transform: scale(1); }\n}\n\n@keyframes cardDiscard {\n    0% { transform: translate(0, 0) scale(1); opacity: 1; }\n    100% { transform: translate(100px, 50px) scale(0.8); opacity: 0; }\n}\n\n.card-animated {\n    animation: cardDraw var(--animation-duration) ease-out;\n}\n\n.card-moved {\n    animation: cardMove var(--animation-duration) ease-in-out;\n}\n\n.card-discarded {\n    animation: cardDiscard var(--animation-duration) ease-in-out;\n}\n\n/* Thinking Animation */\n.thinking-indicator {\n    display: flex;\n    gap: 8px;\n}\n\n.thinking-dot {\n    width: 12px;\n    height: 12px;\n    background-color: white;\n    border-radius: 50%;\n    animation: thinking 1.4s infinite ease-in-out;\n}\n\n.thinking-dot:nth-child(1) {\n    animation-delay: 0s;\n}\n\n.thinking-dot:nth-child(2) {\n    animation-delay: 0.2s;\n}\n\n.thinking-dot:nth-child(3) {\n    animation-delay: 0.4s;\n}\n\n@keyframes thinking {\n    0%, 100% { transform: scale(0.6); opacity: 0.5; }\n    50% { transform: scale(1); opacity: 1; }\n}\n\n/* Leaderboard Styles */\n.leaderboard-content {\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n    max-width: 800px;\n    width: 90%;\n}\n\n.leaderboard-content h2 {\n    text-align: center;\n    margin-bottom: 20px;\n    color: var(--player-color);\n}\n\n.leaderboard-table-container {\n    margin-bottom: 30px;\n    max-height: 400px;\n    overflow-y: auto;\n}\n\n#leaderboard-table {\n    width: 100%;\n    border-collapse: collapse;\n}\n\n#leaderboard-table th,\n#leaderboard-table td {\n    padding: 8px 12px;\n    text-align: left;\n    border-bottom: 1px solid var(--border-color);\n}\n\n#leaderboard-table th {\n    background-color: #f8f9fa;\n    position: sticky;\n    top: 0;\n}\n\n#back-to-game-btn {\n    display: block;\n    margin: 0 auto;\n}\n\n/* Responsive Styles */\n@media (max-width: 768px) {\n    .game-layout {\n        flex-direction: column;\n    }\n    \n    .right-panel {\n        order: 1;\n    }\n    \n    .left-panel {\n        order: 2;\n    }\n    \n    .pile .card {\n        width: 80px;\n        height: 120px;\n    }\n    \n    .card-selection-area {\n        max-width: 150px;\n    }\n    \n    .card-selection-area .card {\n        width: 70px;\n        height: 105px;\n    }\n    \n    .final-cards-display {\n        flex-direction: column;\n    }\n}\n\n/* Column match animations */\n.column-match-highlight {\n    animation: highlight-pulse 0.5s ease-in-out;\n}\n\n.column-fade-out {\n    animation: fade-out 0.5s ease-in-out forwards;\n    pointer-events: none;\n}\n\n@keyframes highlight-pulse {\n    0% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 215, 0, 0); }\n    50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255, 215, 0, 0.8); }\n    100% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 215, 0, 0); }\n}\n\n@keyframes fade-out {\n    0% { opacity: 1; transform: scale(1); }\n    100% { opacity: 0; transform: scale(0.8); }\n}\n\n/* Placeholder cards to maintain grid structure */\n.card.placeholder,\n.mini-card.placeholder {\n    visibility: hidden;\n    pointer-events: none;\n}\n\n/* Player and Computer Cards Grid Layouts */\n.player-cards, .mini-cards {\n    display: grid;\n    gap: 10px;\n    width: 100%;\n    grid-auto-flow: dense;\n    margin: 0 auto 20px;\n    max-width: 600px;\n}\n\n/* Specific styling for player cards */\n.player-cards {\n    grid-template-rows: repeat(3, 1fr);\n    min-height: 350px;\n}\n\n/* Specific styling for computer cards */\n.mini-cards {\n    grid-template-rows: repeat(3, 1fr);\n    min-height: 200px;\n    gap: 5px;\n}\n\n/* Make sure cards stay in their assigned positions and keep consistent size */\n.card, .mini-card {\n    width: 100%;\n    height: 100%;\n    aspect-ratio: 2/3;\n    margin: 0;\n    transition: all 0.3s ease-in-out;\n    justify-self: center;\n}\n\n/* Ensure cards maintain fixed dimensions */\n.card {\n    min-width: 80px;\n    max-width: 120px;\n}\n\n.mini-card {\n    min-width: 50px;\n    max-width: 80px;\n}\n\n/* Ensure parent containers don't expand/contract too much */\n.player-area, .opponent {\n    width: 100%;\n    max-width: 600px;\n    margin: 0 auto;\n}\n\n/* Column match highlight animation */\n@keyframes highlight-column {\n    0%, 100% { \n        opacity: 1; \n        transform: scale(1);\n    }\n    50% { \n        opacity: 0.8; \n        transform: scale(1.05);\n        box-shadow: 0 0 15px gold;\n    }\n}\n\n/* Apply animation to columns being removed */\n.column-being-removed {\n    animation: highlight-column 0.5s ease-in-out 3;\n}\n\n/* Responsive adjustments for card sizing */\n@media (max-width: 768px) {\n    .card {\n        min-width: 70px;\n    }\n    \n    .mini-card {\n        min-width: 45px;\n    }\n}\n\n/* Remove duplicated rules */\n\n/* Card highlight for clickable cards */\n.clickable-highlight {\n    box-shadow: 0 0 15px var(--player-color);\n    transform: scale(1.05);\n    z-index: 10;\n    position: relative;\n    animation: pulse 1.5s infinite;\n}\n\n@keyframes pulse {\n    0% { box-shadow: 0 0 5px var(--player-color); }\n    50% { box-shadow: 0 0 20px var(--player-color); }\n    100% { box-shadow: 0 0 5px var(--player-color); }\n}\n\n/* Column match animations */ "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./skyjo-styles.css":
/*!**************************!*\
  !*** ./skyjo-styles.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skyjo_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./skyjo-styles.css */ "./node_modules/css-loader/dist/cjs.js!./skyjo-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skyjo_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skyjo_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_skyjo_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_skyjo_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/models/ComputerPlayer.ts":
/*!**************************************!*\
  !*** ./src/models/ComputerPlayer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputerPlayer: () => (/* binding */ ComputerPlayer)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/models/Player.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");


class ComputerPlayer extends _Player__WEBPACK_IMPORTED_MODULE_0__.Player {
    constructor(id, name, difficulty, color) {
        super(id, name, false, color);
        this.difficulty = difficulty;
        this.cardMemory = [];
        this.difficultySettings = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.DIFFICULTY_PRESETS[difficulty];
    }
    resetForNewRound() {
        super.resetForNewRound();
        this.cardMemory = [];
        this.bestTargetIndex = undefined;
    }
    /**
     * Decide whether to draw from deck or discard pile
     * @param topDiscardCard The top card of the discard pile
     * @returns True if drawing from deck, false if drawing from discard pile
     */
    decideDrawSource(topDiscardCard) {
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
    decideKeepOrDiscard(cardValue) {
        const settings = this.difficultySettings;
        let keepCard = false;
        // Different strategies based on AI level
        if (this.difficulty === 'casual') {
            // Casual AI uses simple probability thresholds
            if (cardValue <= settings.keepThresholds.low) {
                keepCard = Math.random() < settings.keepProbabilities.low;
            }
            else if (cardValue <= settings.keepThresholds.mid) {
                keepCard = Math.random() < settings.keepProbabilities.mid;
            }
            else {
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
    selectCardToReplace(drawnCardValue) {
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
                }
                else {
                    // Choose a random hidden card
                    const hiddenCards = this.cards
                        .map((card, index) => ({ card, index }))
                        .filter(item => !item.card.revealed);
                    if (hiddenCards.length > 0) {
                        const randomHidden = Math.floor(Math.random() * hiddenCards.length);
                        bestCardIndex = hiddenCards[randomHidden].index;
                    }
                    else {
                        // Fallback to highest revealed
                        bestCardIndex = revealedCards[0].index;
                    }
                }
            }
            else {
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
            }
            else {
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
    selectCardToReveal() {
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
    canCompleteColumn(cardValue) {
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


/***/ }),

/***/ "./src/models/Game.ts":
/*!****************************!*\
  !*** ./src/models/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _HumanPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HumanPlayer */ "./src/models/HumanPlayer.ts");
/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer */ "./src/models/ComputerPlayer.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GameUtils */ "./src/utils/GameUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/models/types.ts");





class Game {
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
            animationSpeed: _types__WEBPACK_IMPORTED_MODULE_4__.ANIMATION_SPEEDS.medium,
            roundHistory: [],
            seenCards: {},
            moveInProgress: false,
            initialCardSelectionPhase: true,
            cardsToRevealCount: _types__WEBPACK_IMPORTED_MODULE_4__.INITIAL_CARDS_TO_REVEAL,
            roundFinisher: null
        };
        // Initialize DOM elements
        this.domElements = {};
    }
    /**
     * Initialize the game with players and settings
     */
    initGame(playerName, maxRounds, animationSpeed, computer1Difficulty, computer2Difficulty) {
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
        this.state.cardsToRevealCount = _types__WEBPACK_IMPORTED_MODULE_4__.INITIAL_CARDS_TO_REVEAL;
        this.state.roundFinisher = null;
        // Set animation speed
        this.state.animationSpeed = animationSpeed;
        // Create players
        const humanPlayer = new _HumanPlayer__WEBPACK_IMPORTED_MODULE_0__.HumanPlayer(playerName || 'You');
        const computer1 = new _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__.ComputerPlayer('computer1', `Computer 1 (${computer1Difficulty.charAt(0).toUpperCase() + computer1Difficulty.slice(1)})`, computer1Difficulty, 'var(--computer1-color)');
        const computer2 = new _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__.ComputerPlayer('computer2', `Computer 2 (${computer2Difficulty.charAt(0).toUpperCase() + computer2Difficulty.slice(1)})`, computer2Difficulty, 'var(--computer2-color)');
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
    createDeck() {
        this.state.deck = [];
        // Add cards based on distribution
        _utils_constants__WEBPACK_IMPORTED_MODULE_2__.CARD_DISTRIBUTION.forEach(cardType => {
            for (let i = 0; i < cardType.count; i++) {
                this.state.deck.push({
                    value: cardType.value,
                    colorClass: cardType.color,
                    revealed: false
                });
            }
        });
        // Shuffle the deck
        this.state.deck = (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.shuffleCards)(this.state.deck);
    }
    /**
     * Deal initial cards to players
     */
    dealCards() {
        this.state.players.forEach(player => {
            player.cards = [];
            for (let i = 0; i < _types__WEBPACK_IMPORTED_MODULE_4__.CARDS_PER_PLAYER; i++) {
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
    trackCardSeen(value) {
        if (!this.state.seenCards[value]) {
            this.state.seenCards[value] = 0;
        }
        this.state.seenCards[value]++;
    }
    /**
     * Get the current game state
     */
    getState() {
        return this.state;
    }
    /**
     * Get a player by index
     */
    getPlayer(index) {
        return this.state.players[index];
    }
    /**
     * Get the current player
     */
    getCurrentPlayer() {
        return this.state.players[this.state.currentPlayerIndex];
    }
    /**
     * Check if the round should end (all cards revealed)
     */
    checkForRoundEnd() {
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
    endRound() {
        // Calculate scores for this round
        const roundFinisher = this.state.roundFinisher !== null ? this.state.roundFinisher : this.state.currentPlayerIndex;
        (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.debugLog)(`Round ending! Player ${roundFinisher} (${this.state.players[roundFinisher].name}) finished first`);
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
            (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.debugLog)(`Player ${index} (${player.name}) initial round score: ${player.roundScore}`);
        });
        // Check if player who ended the round has the lowest score
        const lowestScorePlayer = [...this.state.players].sort((a, b) => a.roundScore - b.roundScore)[0];
        let doubledScore = false;
        (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.debugLog)(`Lowest score player is ${lowestScorePlayer.name} with ${lowestScorePlayer.roundScore} points`);
        // If the player who finished the round doesn't have the lowest score, double their round score
        const finisher = this.state.players[roundFinisher];
        if (finisher.roundScore > lowestScorePlayer.roundScore && finisher.roundScore > 0) {
            const originalScore = finisher.roundScore;
            finisher.doubleRoundScore();
            doubledScore = true;
            (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.debugLog)(`${finisher.name}'s score DOUBLED from ${originalScore} to ${finisher.roundScore}!`);
        }
        else {
            (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_3__.debugLog)(`${finisher.name} finished first WITH the lowest score - no penalty!`);
        }
        // Add round score to total score
        this.state.players.forEach(player => {
            player.updateTotalScore();
        });
    }
    /**
     * Start a new round
     */
    startNewRound() {
        // Check if game is over
        if (this.state.players.some(player => player.totalScore >= _types__WEBPACK_IMPORTED_MODULE_4__.WIN_THRESHOLD)) {
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
        this.state.cardsToRevealCount = _types__WEBPACK_IMPORTED_MODULE_4__.INITIAL_CARDS_TO_REVEAL;
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
    isGameOver() {
        return this.state.isGameOver ||
            (this.state.maxRounds > 0 && this.state.currentRound > this.state.maxRounds) ||
            this.state.players.some(player => player.totalScore >= _types__WEBPACK_IMPORTED_MODULE_4__.WIN_THRESHOLD);
    }
    /**
     * Get the winner of the game
     */
    getWinner() {
        if (!this.isGameOver()) {
            return null;
        }
        // Lowest total score wins
        return [...this.state.players].sort((a, b) => a.totalScore - b.totalScore)[0];
    }
}


/***/ }),

/***/ "./src/models/HumanPlayer.ts":
/*!***********************************!*\
  !*** ./src/models/HumanPlayer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HumanPlayer: () => (/* binding */ HumanPlayer)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/models/Player.ts");

class HumanPlayer extends _Player__WEBPACK_IMPORTED_MODULE_0__.Player {
    constructor(name) {
        super('player', name, true, 'var(--player-color)');
    }
}


/***/ }),

/***/ "./src/models/Player.ts":
/*!******************************!*\
  !*** ./src/models/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player {
    constructor(id, name, isHuman, color) {
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
    resetForNewRound() {
        this.cards = [];
        this.roundScore = 0;
        this.liveScore = 0;
    }
    /**
     * Calculate the live score based on revealed cards
     */
    calculateLiveScore() {
        this.liveScore = this.cards.reduce((sum, card) => {
            return card.revealed ? sum + card.value : sum;
        }, 0);
        return this.liveScore;
    }
    /**
     * Calculate the round score (sum of all card values)
     */
    calculateRoundScore() {
        this.roundScore = this.cards.reduce((sum, card) => sum + card.value, 0);
        this.roundScores.push(this.roundScore);
        return this.roundScore;
    }
    /**
     * Add the round score to the total score
     */
    updateTotalScore() {
        this.totalScore += this.roundScore;
    }
    /**
     * Record that this player finished a round
     * @param roundNumber The round number finished
     */
    markRoundFinished(roundNumber) {
        this.finishedRounds.push(roundNumber);
    }
    /**
     * Double the player's round score (for scoring rules)
     */
    doubleRoundScore() {
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
    areAllCardsRevealed() {
        return this.cards.every(card => card.revealed);
    }
    /**
     * Reveal all cards
     */
    revealAllCards() {
        this.cards.forEach(card => {
            card.revealed = true;
        });
    }
}


/***/ }),

/***/ "./src/models/types.ts":
/*!*****************************!*\
  !*** ./src/models/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANIMATION_SPEEDS: () => (/* binding */ ANIMATION_SPEEDS),
/* harmony export */   CARDS_PER_PLAYER: () => (/* binding */ CARDS_PER_PLAYER),
/* harmony export */   COLS: () => (/* binding */ COLS),
/* harmony export */   INITIAL_CARDS_TO_REVEAL: () => (/* binding */ INITIAL_CARDS_TO_REVEAL),
/* harmony export */   ROWS: () => (/* binding */ ROWS),
/* harmony export */   WIN_THRESHOLD: () => (/* binding */ WIN_THRESHOLD)
/* harmony export */ });
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


/***/ }),

/***/ "./src/utils/GameUtils.ts":
/*!********************************!*\
  !*** ./src/utils/GameUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugLog: () => (/* binding */ debugLog),
/* harmony export */   estimateHiddenValue: () => (/* binding */ estimateHiddenValue),
/* harmony export */   getIndexFromRowCol: () => (/* binding */ getIndexFromRowCol),
/* harmony export */   getRowColFromIndex: () => (/* binding */ getRowColFromIndex),
/* harmony export */   shouldFinishRound: () => (/* binding */ shouldFinishRound),
/* harmony export */   shouldPlayHighVariance: () => (/* binding */ shouldPlayHighVariance),
/* harmony export */   shouldPlayLowVariance: () => (/* binding */ shouldPlayLowVariance),
/* harmony export */   shuffleCards: () => (/* binding */ shuffleCards)
/* harmony export */ });
/**
 * Debug logging function
 */
function debugLog(message, obj = null) {
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
function shuffleCards(cards) {
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
function getRowColFromIndex(index, columnCount) {
    const row = Math.floor(index / columnCount);
    const col = index % columnCount;
    return { row, col };
}
/**
 * Get index from row/col based on current grid
 */
function getIndexFromRowCol(row, col, columnCount) {
    return row * columnCount + col;
}
/**
 * Estimate the value of a hidden card based on seen cards
 * @param seenCards Record of seen card values and their counts
 */
function estimateHiddenValue(seenCards) {
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
function shouldFinishRound(playerScore, otherScores) {
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
function shouldPlayHighVariance(playerScore, otherScores) {
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
function shouldPlayLowVariance(playerScore, otherScores) {
    // Sort scores (lowest is best)
    const allScores = [playerScore, ...otherScores].sort((a, b) => a - b);
    // If player is in first place and ahead by 15+ points, play low variance
    if (playerScore === allScores[0]) {
        const secondPlaceScore = allScores[1];
        return secondPlaceScore - playerScore >= 15;
    }
    return false;
}


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CARD_DISTRIBUTION: () => (/* binding */ CARD_DISTRIBUTION),
/* harmony export */   DIFFICULTY_PRESETS: () => (/* binding */ DIFFICULTY_PRESETS)
/* harmony export */ });
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
        drawDiscardBaseProb: 0.25, // Base probability to draw from discard pile
        riskTolerance: 0.0, // Low risk tolerance
        description: "Makes random decisions with basic thresholds."
    },
    skilled: {
        lookback: 1,
        keepThresholds: { low: 5, mid: 8 },
        keepProbabilities: { low: 0.85, mid: 0.6, high: 0.3 },
        noise: 0.08,
        endRoundAwareness: true,
        bluffProbability: 0.05, // 5% chance to bluff by discarding good cards
        columnValueThreshold: 6, // Will pursue triplets up to value 6
        simulationBudget: 10, // Limited simulation budget
        highVarianceWhenBehind: true,
        lowVarianceWhenAhead: true,
        deckMemory: false, // Doesn't remember across rounds
        drawDiscardBaseProb: 0.5, // Higher chance to evaluate discard
        riskTolerance: 0.4, // Medium risk tolerance
        description: "Evaluates options using simple heuristics and some tactical awareness."
    },
    expert: {
        lookback: Infinity,
        keepThresholds: { low: 6, mid: 9 },
        keepProbabilities: { low: 0.9, mid: 0.7, high: 0.4 },
        noise: 0,
        endRoundAwareness: true,
        bluffProbability: 0.15, // 15% chance to bluff with good cards
        columnValueThreshold: 12, // Will pursue triplets at any value
        simulationBudget: 30, // Higher simulation budget
        highVarianceWhenBehind: true,
        lowVarianceWhenAhead: true,
        deckMemory: true, // Remembers cards across rounds
        drawDiscardBaseProb: 0.7, // Much higher baseline for discard evaluation
        riskTolerance: 0.7, // High risk tolerance
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Game */ "./src/models/Game.ts");
/* harmony import */ var _models_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/types */ "./src/models/types.ts");
/* harmony import */ var _utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/GameUtils */ "./src/utils/GameUtils.ts");
/* harmony import */ var _skyjo_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skyjo-styles.css */ "./skyjo-styles.css");



// Import CSS

// Initialize the game
const game = new _models_Game__WEBPACK_IMPORTED_MODULE_0__.Game();
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
// Debug panel setup
const debugToggle = document.getElementById('debug-toggle');
const debugPanel = document.getElementById('debug-panel');
// Debug panel functionality
debugToggle.addEventListener('click', function () {
    if (debugPanel.style.display === 'none' || !debugPanel.style.display) {
        debugPanel.style.display = 'block';
    }
    else {
        debugPanel.style.display = 'none';
    }
});
// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Show an alert to confirm JS changes are being applied
    alert("NEW VERSION! JS changes applied successfully! Version: " + new Date().toISOString());
    // Set initial animation speeds
    updateAnimationSpeeds(_models_types__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_SPEEDS.medium);
    // Add direct event delegation for player cards
    playerCardsContainer.addEventListener('click', (event) => {
        const target = event.target;
        const cardEl = target.closest('.card');
        if (!cardEl)
            return;
        const index = parseInt(cardEl.dataset.index || '-1');
        if (index === -1)
            return;
        (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Card clicked via delegation: ${index}`);
        const state = game.getState();
        const card = state.players[0].cards[index];
        if (!card)
            return;
        if (state.initialCardSelectionPhase && !card.revealed) {
            // During initial selection, clicking reveals the card
            handleInitialCardSelection(index);
        }
        else if (state.currentPlayerIndex === 0 && state.currentDrawnCard !== null) {
            // During normal gameplay, clicking replaces the card
            handleCardClick(index);
        }
        else if (state.currentPlayerIndex === 0 && !card.revealed) {
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
        const animationSpeed = _models_types__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_SPEEDS[animationSpeedSelect.value];
        const computer1Difficulty = computer1DifficultySelect.value;
        const computer2Difficulty = computer2DifficultySelect.value;
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
        }
        else {
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
function updateUI() {
    const state = game.getState();
    // Update player name
    playerNameDisplay.textContent = state.players[0].name;
    // Update current player display
    if (state.initialCardSelectionPhase) {
        currentPlayerDisplay.textContent = "Initial Selection";
    }
    else {
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
function updatePlayerCards() {
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
            (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Card clicked with index ${cardIndex}`);
            const currentState = game.getState();
            if (currentState.initialCardSelectionPhase && !card.revealed) {
                // During initial selection, clicking reveals the card
                handleInitialCardSelection(cardIndex);
            }
            else if (currentState.currentPlayerIndex === 0 && currentState.currentDrawnCard !== null) {
                // During normal gameplay, clicking replaces the card
                handleCardClick(cardIndex);
            }
            else if (currentState.currentPlayerIndex === 0 && !card.revealed) {
                // Or reveals a face-down card
                revealCard(0, cardIndex);
            }
        });
        playerCardsContainer.appendChild(cardEl);
    }
}
// Update computer cards display
function updateComputerCards() {
    const state = game.getState();
    // Computer 1
    updateMiniCards(computer1CardsContainer, state.players[1].cards);
    // Computer 2
    updateMiniCards(computer2CardsContainer, state.players[2].cards);
}
// Update mini cards for a computer player
function updateMiniCards(container, cards) {
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
function updateDiscardPile() {
    const state = game.getState();
    const cardEl = discardPileEl.querySelector('.card');
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
    }
    else {
        cardEl.classList.add('empty');
    }
}
// Update the draw pile display
function updateDrawPile() {
    const state = game.getState();
    const cardEl = drawPile.querySelector('.card');
    if (state.deck.length === 0) {
        cardEl.classList.add('empty');
        cardEl.classList.remove('back');
    }
    else {
        cardEl.classList.remove('empty');
        cardEl.classList.add('back');
    }
}
// Update score displays
function updateScores() {
    const state = game.getState();
    // Update total scores
    document.querySelector('#player-area .score span').textContent = state.players[0].totalScore.toString();
    document.querySelector('#computer1 .score span').textContent = state.players[1].totalScore.toString();
    document.querySelector('#computer2 .score span').textContent = state.players[2].totalScore.toString();
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
function highlightCurrentPlayer() {
    const state = game.getState();
    // Reset all highlights
    document.querySelectorAll('.opponent, .player-area').forEach(el => {
        el.style.borderColor = 'var(--border-color)';
        el.style.boxShadow = 'none';
    });
    // Skip highlighting during initial selection
    if (state.initialCardSelectionPhase)
        return;
    // Highlight current player
    const currentPlayer = state.players[state.currentPlayerIndex];
    const currentPlayerEl = currentPlayer.id === 'player'
        ? document.querySelector('.player-area')
        : document.getElementById(currentPlayer.id);
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
function showMessage(msg, duration = 3000) {
    messageEl.textContent = msg;
    messageContainer.classList.remove('hidden');
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, duration);
}
// Handle player clicking on draw pile
function handleDrawPileClick() {
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
function handleDiscardPileClick() {
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
function drawCard(fromDrawPile) {
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
    }
    else {
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
    const cardElement = cardSelectionArea.querySelector('.card');
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
    }
    else {
        state.seenCards[drawnCard.value] = 1;
    }
    (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Player drew a ${drawnCard.value} from ${fromDrawPile ? 'draw pile' : 'discard pile'}`);
}
// Handle player deciding to keep the drawn card
function handleKeepCard() {
    const state = game.getState();
    if (state.currentDrawnCard === null) {
        (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)("Error: No drawn card to keep");
        return;
    }
    (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)("Player chose to keep card: " + state.currentDrawnCard.value);
    // Hide the card selection area
    cardSelectionArea.classList.add('hidden');
    // Let player click on a card to replace
    showMessage('Select a card to replace');
    // Add a temporary overlay to highlight that cards are clickable
    const cards = playerCardsContainer.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.add('clickable-highlight');
        // Add a direct click handler to this specific card
        card.onclick = function () {
            (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Direct card click on index ${index}`);
            handleCardClick(index);
            // Remove all temporary click handlers
            cards.forEach(c => {
                c.onclick = null;
                c.classList.remove('clickable-highlight');
            });
        };
    });
}
// Handle player deciding to discard the drawn card
function handleDiscardCard() {
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
    }
    else {
        // For computer players, automatically select a card to reveal
        const computerPlayer = game.getPlayer(state.currentPlayerIndex);
        const cardIndex = computerPlayer.selectCardToReveal();
        // Reveal the selected card
        setTimeout(() => {
            revealCard(state.currentPlayerIndex, cardIndex);
        }, state.animationSpeed);
    }
}
// Handle player canceling the draw
function handleCancelDraw() {
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
function handleCardClick(index) {
    const state = game.getState();
    (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Card clicked at index ${index}, currentDrawnCard: ${state.currentDrawnCard ? state.currentDrawnCard.value : 'none'}`);
    if (state.currentDrawnCard === null || state.currentPlayerIndex !== 0) {
        (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)("Cannot handle card click: no drawn card or not player's turn");
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
    (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Card replaced at index ${index}`);
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
function handleInitialCardSelection(cardIndex) {
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
    }
    else {
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
    }
    else {
        showMessage(`Select ${state.cardsToRevealCount} more card(s) to reveal.`);
    }
}
// Reveal initial cards for computer players
function revealInitialComputerCards() {
    const state = game.getState();
    // For each computer player
    for (let playerIndex = 1; playerIndex < state.players.length; playerIndex++) {
        const computerPlayer = state.players[playerIndex];
        // Simple AI for initial card selection
        // Just pick the first two cards - in a real implementation, we'd use the AI's strategy
        for (let i = 0; i < _models_types__WEBPACK_IMPORTED_MODULE_1__.INITIAL_CARDS_TO_REVEAL; i++) {
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
            }
            else {
                state.seenCards[cardValue] = 1;
            }
        }
    }
    // Update UI
    updateComputerCards();
    updateScores();
}
// Reveal a face-down card
function revealCard(playerIndex, cardIndex) {
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
    }
    else {
        state.seenCards[cardValue] = 1;
    }
    // Update UI
    if (playerIndex === 0) {
        updatePlayerCards();
    }
    else {
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
function endRound() {
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
function handleComputerTurn() {
    const state = game.getState();
    if (state.currentPlayerIndex === 0 || state.moveInProgress) {
        return; // Not a computer's turn
    }
    state.moveInProgress = true;
    // Get the current computer player
    const computerPlayer = game.getPlayer(state.currentPlayerIndex);
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
            }
            else {
                drawnCard = state.deck.pop();
            }
            showMessage(`${computerPlayer.name} draws from the deck`, state.animationSpeed);
        }
        else {
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
            }
            else {
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
        }
        else {
            state.seenCards[drawnCard.value] = 1;
        }
        // Animate the drawn card
        const cardElement = computerCardAnimation.querySelector('.card');
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
            }
            else {
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
function updateRoundScoreboard() {
    const state = game.getState();
    const tbody = roundScoreboardTable.querySelector('tbody');
    if (!tbody)
        return;
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
            }
            else {
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
function updateRoundEndScreen() {
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
    const nextRoundBtn = document.getElementById('next-round-btn');
    if (game.isGameOver()) {
        nextRoundBtn.textContent = 'See Final Results';
    }
    else {
        nextRoundBtn.textContent = 'Next Round';
    }
}
// Update the final cards display on the round end screen
function updateFinalCardsDisplay() {
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
function updateFinalCardGrid(container, cards) {
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
function updateAnimationSpeeds(speed) {
    const animationDuration = speed / 1000; // Convert ms to seconds
    // Update CSS variables directly
    document.documentElement.style.setProperty('--animation-duration', `${animationDuration}s`);
    // Add debug log
    (0,_utils_GameUtils__WEBPACK_IMPORTED_MODULE_2__.debugLog)(`Animation speed set to ${animationDuration}s`);
}
// These are placeholder functions that would need to be implemented
// to complete the game functionality 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2t5am8tZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5RztBQUNqQjtBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVywyQkFBMkIsZ0JBQWdCO0FBQ3RELFdBQVcsMkJBQTJCLGdCQUFnQjtBQUN0RCxVQUFVLDJCQUEyQixnQkFBZ0I7QUFDckQsVUFBVSwyQkFBMkIsZ0JBQWdCO0FBQ3JELFVBQVUsMkJBQTJCLGdCQUFnQjtBQUNyRCxVQUFVLDJCQUEyQixnQkFBZ0I7QUFDckQsVUFBVSwyQkFBMkIsZ0JBQWdCO0FBQ3JELFVBQVUsMkJBQTJCLGdCQUFnQjtBQUNyRCxVQUFVLDJCQUEyQixnQkFBZ0I7QUFDckQsVUFBVSwyQkFBMkIsZ0JBQWdCO0FBQ3JELFVBQVUsMkJBQTJCLGdCQUFnQjtBQUNyRCxVQUFVLDJCQUEyQixnQkFBZ0I7QUFDckQsV0FBVywyQkFBMkIsZ0JBQWdCO0FBQ3RELFdBQVcsMkJBQTJCLGdCQUFnQjtBQUN0RCxXQUFXLDJCQUEyQixnQkFBZ0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw4QkFBOEI7QUFDdkMsV0FBVywwQkFBMEI7QUFDckM7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFNBQVMscUNBQXFDO0FBQzlDLFdBQVcsOENBQThDO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHVCQUF1QjtBQUN0QyxVQUFVLHFCQUFxQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHFCQUFxQjtBQUM5QixVQUFVLHdCQUF3QjtBQUNsQyxXQUFXLHFCQUFxQjtBQUNoQzs7QUFFQTtBQUNBLFNBQVMsWUFBWTtBQUNyQixXQUFXLFlBQVk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFdBQVc7QUFDWDs7QUFFQSxxQ0FBcUMsMEZBQTBGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLHlCQUF5QixhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLDZDQUE2Qyw2Q0FBNkMsMkNBQTJDLDZDQUE2QywyQ0FBMkMsNkNBQTZDLDJDQUEyQywyQ0FBMkMsMkNBQTJDLDJDQUEyQywyQ0FBMkMsMkNBQTJDLDJDQUEyQywyQ0FBMkMsNENBQTRDLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxL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QUFDakQsU0FBUyxxQkFBcUIsQ0FBQyxLQUFhO0lBQ3hDLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLHdCQUF3QjtJQUVoRSxnQ0FBZ0M7SUFDaEMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBRTVGLGdCQUFnQjtJQUNoQiwwREFBUSxDQUFDLDBCQUEwQixpQkFBaUIsR0FBRyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELG9FQUFvRTtBQUNwRSxzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za3lqby8uL3NreWpvLXN0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vc2t5am8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NreWpvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NreWpvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NreWpvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NreWpvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9za3lqby8uL3NreWpvLXN0eWxlcy5jc3M/Y2MzZCIsIndlYnBhY2s6Ly9za3lqby8uL3NyYy9tb2RlbHMvQ29tcHV0ZXJQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9zcmMvbW9kZWxzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9zcmMvbW9kZWxzL0h1bWFuUGxheWVyLnRzIiwid2VicGFjazovL3NreWpvLy4vc3JjL21vZGVscy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vc2t5am8vLi9zcmMvbW9kZWxzL3R5cGVzLnRzIiwid2VicGFjazovL3NreWpvLy4vc3JjL3V0aWxzL0dhbWVVdGlscy50cyIsIndlYnBhY2s6Ly9za3lqby8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vc2t5am8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2t5am8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2t5am8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NreWpvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2t5am8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9za3lqby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc2t5am8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsIFN0eWxlcyAqL1xuOnJvb3Qge1xuICAgIC0tcGxheWVyLWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tY29tcHV0ZXIxLWNvbG9yOiAjZTc0YzNjO1xuICAgIC0tY29tcHV0ZXIyLWNvbG9yOiAjMmVjYzcxO1xuICAgIC0tYmctY29sb3I6ICNmNWY1ZjU7XG4gICAgLS1jYXJkLWJnOiB3aGl0ZTtcbiAgICAtLWNhcmQtYmFjazogIzM0NDk1ZTtcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XG4gICAgLS1hbmltYXRpb24tZHVyYXRpb246IDAuNXM7IC8qIERlZmF1bHQsIHdpbGwgYmUgb3ZlcnJpZGRlbiBieSBKUyAqL1xuICAgIC0ta2VlcC1idG4tY29sb3I6ICMyN2FlNjA7XG4gICAgLS1kaXNjYXJkLWJ0bi1jb2xvcjogI2U3NGMzYztcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZjdmYTsgLyogQ2hhbmdlZCB0byBsaWdodCBibHVlIHRvIGNvbmZpcm0gY2hhbmdlcyBhcmUgYXBwbGllZCAqL1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZ2FtZS1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogQnV0dG9uIFN0eWxlcyAqL1xuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5idG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ja2VlcC1jYXJkLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2VlcC1idG4tY29sb3IpO1xufVxuXG4jZGlzY2FyZC1jYXJkLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzY2FyZC1idG4tY29sb3IpO1xufVxuXG4vKiBTY3JlZW4gU3R5bGVzICovXG4uc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2NyZWVuLmFjdGl2ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogV2VsY29tZSBTY3JlZW4gKi9cbi53ZWxjb21lLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLndlbGNvbWUtY29udGVudCBoMSB7XG4gICAgY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBsYXllci1pbnB1dCB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMTVweDtcbn1cblxuLnBsYXllci1pbnB1dCBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnBsYXllci1pbnB1dCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qIEdhbWUgU2V0dGluZ3MgKi9cbi5nYW1lLXNldHRpbmdzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc2V0dGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2V0dGluZyBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2V0dGluZyBzZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogR2FtZSBMYXlvdXQgKi9cbi5nYW1lLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleDogMTtcbn1cblxuLmxlZnQtcGFuZWwge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbn1cblxuLnJpZ2h0LXBhbmVsIHtcbiAgICBmbGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDIwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XG59XG5cbi8qIEN1cnJlbnQgVHVybiBJbmRpY2F0b3IgKi9cbi5jdXJyZW50LXR1cm4taW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiA5MDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBHYW1lIFNjcmVlbiAqL1xuLmdhbWUtaW5mbyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAvKiBBZGQgc3BhY2UgZm9yIHRoZSB0dXJuIGluZGljYXRvciAqL1xufVxuXG4ucGxheWVyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi8qIE9wcG9uZW50IEFyZWEgKi9cbi5vcHBvbmVudHMtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLm9wcG9uZW50IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb21wdXRlcjEgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1jb21wdXRlcjEtY29sb3IpO1xufVxuXG4jY29tcHV0ZXIyIGgzIHtcbiAgICBjb2xvcjogdmFyKC0tY29tcHV0ZXIyLWNvbG9yKTtcbn1cblxuLm1pbmktY2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm1pbmktY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAyLzM7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFjayk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWluaS1jYXJkLnJldmVhbGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBDYXJkIFBpbGVzICovXG4uY2FyZC1waWxlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDQwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnBpbGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBpbGUgLmNhcmQge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG59XG5cbi8qIFBsYXllciBBcmVhICovXG4ucGxheWVyLWFyZWEge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucGxheWVyLWFyZWEgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucGxheWVyLWNhcmRzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zY29yZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxpdmUtc2NvcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNjY2O1xufVxuXG4vKiBDYXJkIFNlbGVjdGlvbiBBcmVhICovXG4uY2FyZC1zZWxlY3Rpb24tYXJlYSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5jYXJkLXNlbGVjdGlvbi1hcmVhIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xufVxuXG4uY2FyZC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4vKiBDYXJkIFN0eWxlcyAqL1xuLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMi8zO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmNhcmQuZmxpcHBlZCAuY2FyZC1pbm5lciB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5jYXJkLWZyb250LCAuY2FyZC1iYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmQtZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uY2FyZC1iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2spO1xufVxuXG4uY2FyZC5lbXB0eSAuY2FyZC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcbn1cblxuLmNhcmQuYmFjayAuY2FyZC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrKTtcbn1cblxuLyogQ2FyZCBWYWx1ZXMgYW5kIENvbG9ycyAqL1xuLmNhcmQtbTIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljOyBjb2xvcjogd2hpdGU7IH0gLyogRGFyayBUdXJxdW9pc2UgKi9cbi5jYXJkLW0xIHsgYmFja2dyb3VuZC1jb2xvcjogIzQ4YzliMDsgY29sb3I6IHdoaXRlOyB9IC8qIExpZ2h0IFR1cnF1b2lzZSAqL1xuLmNhcmQtMCB7IGJhY2tncm91bmQtY29sb3I6ICM5NWE1YTY7IGNvbG9yOiB3aGl0ZTsgfSAvKiBHcmF5ICovXG4uY2FyZC0xIHsgYmFja2dyb3VuZC1jb2xvcjogIzU4ZDY4ZDsgY29sb3I6IHdoaXRlOyB9IC8qIExpZ2h0IEdyZWVuICovXG4uY2FyZC0yIHsgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTsgY29sb3I6IHdoaXRlOyB9IC8qIEdyZWVuICovXG4uY2FyZC0zIHsgYmFja2dyb3VuZC1jb2xvcjogIzJkOWI1ODsgY29sb3I6IHdoaXRlOyB9IC8qIE9saXZlIEdyZWVuICovXG4uY2FyZC00IHsgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjsgY29sb3I6IGJsYWNrOyB9IC8qIFllbGxvdyAqL1xuLmNhcmQtNSB7IGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7IGNvbG9yOiB3aGl0ZTsgfSAvKiBPcmFuZ2UgKi9cbi5jYXJkLTYgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY3ZTIyOyBjb2xvcjogd2hpdGU7IH0gLyogQ29yYWwgKi9cbi5jYXJkLTcgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjOyBjb2xvcjogd2hpdGU7IH0gLyogTGlnaHQgUmVkICovXG4uY2FyZC04IHsgYmFja2dyb3VuZC1jb2xvcjogI2NiNDMzNTsgY29sb3I6IHdoaXRlOyB9IC8qIFJlZCAqL1xuLmNhcmQtOSB7IGJhY2tncm91bmQtY29sb3I6ICNhOTMyMjY7IGNvbG9yOiB3aGl0ZTsgfSAvKiBEYXJrIFJlZCAqL1xuLmNhcmQtMTAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU0NGFkOyBjb2xvcjogd2hpdGU7IH0gLyogUHVycGxlICovXG4uY2FyZC0xMSB7IGJhY2tncm91bmQtY29sb3I6ICM5YjU5YjY7IGNvbG9yOiB3aGl0ZTsgfSAvKiBNYWdlbnRhICovXG4uY2FyZC0xMiB7IGJhY2tncm91bmQtY29sb3I6ICNkOThjYjM7IGNvbG9yOiB3aGl0ZTsgfSAvKiBQaW5rICovXG5cbi8qIFJvdW5kIEVuZCBTY3JlZW4gKi9cbi5yb3VuZC1yZXN1bHRzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnJvdW5kLXJlc3VsdHMgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xufVxuXG4ucmVzdWx0cy1jb250YWluZXIsIC50b3RhbC1zY29yZXMsIC5maW5hbC1zY29yZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50b3RhbC1zY29yZXMgaDMsIC5maW5hbC1zY29yZXMgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnJlc3VsdC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uY29tcGxldGVkLWZpcnN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb21wbGV0ZWQtZmlyc3Q6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIuKYhVwiO1xuICAgIGNvbG9yOiBnb2xkO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZG91YmxlZC1zY29yZSB7XG4gICAgY29sb3I6IHZhcigtLWRpc2NhcmQtYnRuLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRvdWJsZWQtc2NvcmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiAoZG91YmxlZClcIjtcbiAgICBmb250LXNpemU6IDgwJTtcbn1cblxuLmZpbmFsLWNhcmRzLWRpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5wbGF5ZXItZmluYWwtY2FyZHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnBsYXllci1maW5hbC1jYXJkcyBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcbn1cblxuLnBsYXllci1maW5hbC1jYXJkcy5jb21wdXRlcjEgaDQge1xuICAgIGNvbG9yOiB2YXIoLS1jb21wdXRlcjEtY29sb3IpO1xufVxuXG4ucGxheWVyLWZpbmFsLWNhcmRzLmNvbXB1dGVyMiBoNCB7XG4gICAgY29sb3I6IHZhcigtLWNvbXB1dGVyMi1jb2xvcik7XG59XG5cbi5maW5hbC1jYXJkcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi5maW5hbC1jYXJkIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jbmV4dC1yb3VuZC1idG4sICNuZXctZ2FtZS1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBHYW1lIEVuZCBTY3JlZW4gKi9cbi5nYW1lLXJlc3VsdHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4jd2lubmVyLWFubm91bmNlbWVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ud2lubmVyLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xufVxuXG4vKiBNZXNzYWdlIENvbnRhaW5lciAqL1xuI21lc3NhZ2UtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDIwMDtcbn1cblxuLyogUm91bmQgU2NvcmVib2FyZCAqL1xuLnJvdW5kLXNjb3JlYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnJvdW5kLXNjb3JlYm9hcmQgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wbGF5ZXItY29sb3IpO1xufVxuXG4jcm91bmQtc2NvcmVib2FyZC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4jcm91bmQtc2NvcmVib2FyZC10YWJsZSB0aCxcbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4jcm91bmQtc2NvcmVib2FyZC10YWJsZSB0aDpmaXJzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3JvdW5kLXNjb3JlYm9hcmQtdGFibGUgdHI6bGFzdC1jaGlsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBDYXJkIEFuaW1hdGlvbiAqL1xuQGtleWZyYW1lcyBjYXJkRHJhdyB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmRNb3ZlIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGNhcmREaXNjYXJkIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCA1MHB4KSBzY2FsZSgwLjgpOyBvcGFjaXR5OiAwOyB9XG59XG5cbi5jYXJkLWFuaW1hdGVkIHtcbiAgICBhbmltYXRpb246IGNhcmREcmF3IHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgZWFzZS1vdXQ7XG59XG5cbi5jYXJkLW1vdmVkIHtcbiAgICBhbmltYXRpb246IGNhcmRNb3ZlIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkLWRpc2NhcmRlZCB7XG4gICAgYW5pbWF0aW9uOiBjYXJkRGlzY2FyZCB2YXIoLS1hbmltYXRpb24tZHVyYXRpb24pIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBUaGlua2luZyBBbmltYXRpb24gKi9cbi50aGlua2luZy1pbmRpY2F0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi50aGlua2luZy1kb3Qge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiB0aGlua2luZyAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4udGhpbmtpbmctZG90Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLnRoaW5raW5nLWRvdDpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnRoaW5raW5nLWRvdDpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuQGtleWZyYW1lcyB0aGlua2luZyB7XG4gICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuNik7IG9wYWNpdHk6IDAuNTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogTGVhZGVyYm9hcmQgU3R5bGVzICovXG4ubGVhZGVyYm9hcmQtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5sZWFkZXJib2FyZC1jb250ZW50IGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcbn1cblxuLmxlYWRlcmJvYXJkLXRhYmxlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jbGVhZGVyYm9hcmQtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbiNsZWFkZXJib2FyZC10YWJsZSB0aCxcbiNsZWFkZXJib2FyZC10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuI2xlYWRlcmJvYXJkLXRhYmxlIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4jYmFjay10by1nYW1lLWJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZ2FtZS1sYXlvdXQge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICBcbiAgICAucmlnaHQtcGFuZWwge1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG4gICAgXG4gICAgLmxlZnQtcGFuZWwge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgXG4gICAgLnBpbGUgLmNhcmQge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtc2VsZWN0aW9uLWFyZWEge1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC1zZWxlY3Rpb24tYXJlYSAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgIH1cbiAgICBcbiAgICAuZmluYWwtY2FyZHMtZGlzcGxheSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4vKiBDb2x1bW4gbWF0Y2ggYW5pbWF0aW9ucyAqL1xuLmNvbHVtbi1tYXRjaC1oaWdobGlnaHQge1xuICAgIGFuaW1hdGlvbjogaGlnaGxpZ2h0LXB1bHNlIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb2x1bW4tZmFkZS1vdXQge1xuICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQGtleWZyYW1lcyBoaWdobGlnaHQtcHVsc2Uge1xuICAgIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgyNTUsIDIxNSwgMCwgMCk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjgpOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMjU1LCAyMTUsIDAsIDApOyB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAgIDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IH1cbn1cblxuLyogUGxhY2Vob2xkZXIgY2FyZHMgdG8gbWFpbnRhaW4gZ3JpZCBzdHJ1Y3R1cmUgKi9cbi5jYXJkLnBsYWNlaG9sZGVyLFxuLm1pbmktY2FyZC5wbGFjZWhvbGRlciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBQbGF5ZXIgYW5kIENvbXB1dGVyIENhcmRzIEdyaWQgTGF5b3V0cyAqL1xuLnBsYXllci1jYXJkcywgLm1pbmktY2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi8qIFNwZWNpZmljIHN0eWxpbmcgZm9yIHBsYXllciBjYXJkcyAqL1xuLnBsYXllci1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cblxuLyogU3BlY2lmaWMgc3R5bGluZyBmb3IgY29tcHV0ZXIgY2FyZHMgKi9cbi5taW5pLWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGdhcDogNXB4O1xufVxuXG4vKiBNYWtlIHN1cmUgY2FyZHMgc3RheSBpbiB0aGVpciBhc3NpZ25lZCBwb3NpdGlvbnMgYW5kIGtlZXAgY29uc2lzdGVudCBzaXplICovXG4uY2FyZCwgLm1pbmktY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFzcGVjdC1yYXRpbzogMi8zO1xuICAgIG1hcmdpbjogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLyogRW5zdXJlIGNhcmRzIG1haW50YWluIGZpeGVkIGRpbWVuc2lvbnMgKi9cbi5jYXJkIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLm1pbmktY2FyZCB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIG1heC13aWR0aDogODBweDtcbn1cblxuLyogRW5zdXJlIHBhcmVudCBjb250YWluZXJzIGRvbid0IGV4cGFuZC9jb250cmFjdCB0b28gbXVjaCAqL1xuLnBsYXllci1hcmVhLCAub3Bwb25lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIENvbHVtbiBtYXRjaCBoaWdobGlnaHQgYW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIGhpZ2hsaWdodC1jb2x1bW4ge1xuICAgIDAlLCAxMDAlIHsgXG4gICAgICAgIG9wYWNpdHk6IDE7IFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICA1MCUgeyBcbiAgICAgICAgb3BhY2l0eTogMC44OyBcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggZ29sZDtcbiAgICB9XG59XG5cbi8qIEFwcGx5IGFuaW1hdGlvbiB0byBjb2x1bW5zIGJlaW5nIHJlbW92ZWQgKi9cbi5jb2x1bW4tYmVpbmctcmVtb3ZlZCB7XG4gICAgYW5pbWF0aW9uOiBoaWdobGlnaHQtY29sdW1uIDAuNXMgZWFzZS1pbi1vdXQgMztcbn1cblxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyBmb3IgY2FyZCBzaXppbmcgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIH1cbiAgICBcbiAgICAubWluaS1jYXJkIHtcbiAgICAgICAgbWluLXdpZHRoOiA0NXB4O1xuICAgIH1cbn1cblxuLyogUmVtb3ZlIGR1cGxpY2F0ZWQgcnVsZXMgKi9cblxuLyogQ2FyZCBoaWdobGlnaHQgZm9yIGNsaWNrYWJsZSBjYXJkcyAqL1xuLmNsaWNrYWJsZS1oaWdobGlnaHQge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLXBsYXllci1jb2xvcik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxLjVzIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAwJSB7IGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcGxheWVyLWNvbG9yKTsgfVxuICAgIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLXBsYXllci1jb2xvcik7IH1cbiAgICAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1wbGF5ZXItY29sb3IpOyB9XG59XG5cbi8qIENvbHVtbiBtYXRjaCBhbmltYXRpb25zICovIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2t5am8tc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDBCQUEwQixFQUFFLHNDQUFzQztJQUNsRSx5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCLEVBQUUseURBQXlEO0lBQ3BGLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQiw4QkFBOEI7QUFDbEM7O0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsZ0JBQWdCLEVBQUUscUNBQXFDO0FBQzNEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSwyQkFBMkI7QUFDM0IsV0FBVyx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxtQkFBbUI7QUFDekUsV0FBVyx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxvQkFBb0I7QUFDMUUsVUFBVSx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxTQUFTO0FBQzlELFVBQVUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLEVBQUUsZ0JBQWdCO0FBQ3JFLFVBQVUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLEVBQUUsVUFBVTtBQUMvRCxVQUFVLHlCQUF5QixFQUFFLFlBQVksRUFBRSxFQUFFLGdCQUFnQjtBQUNyRSxVQUFVLHlCQUF5QixFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVc7QUFDaEUsVUFBVSx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxXQUFXO0FBQ2hFLFVBQVUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLEVBQUUsVUFBVTtBQUMvRCxVQUFVLHlCQUF5QixFQUFFLFlBQVksRUFBRSxFQUFFLGNBQWM7QUFDbkUsVUFBVSx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxRQUFRO0FBQzdELFVBQVUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLEVBQUUsYUFBYTtBQUNsRSxXQUFXLHlCQUF5QixFQUFFLFlBQVksRUFBRSxFQUFFLFdBQVc7QUFDakUsV0FBVyx5QkFBeUIsRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZO0FBQ2xFLFdBQVcseUJBQXlCLEVBQUUsWUFBWSxFQUFFLEVBQUUsU0FBUzs7QUFFL0QscUJBQXFCO0FBQ3JCO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksS0FBSyw0QkFBNEIsRUFBRSxVQUFVLEVBQUU7SUFDL0MsT0FBTyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7QUFDakQ7O0FBRUE7SUFDSSxLQUFLLG1CQUFtQixFQUFFO0lBQzFCLE1BQU0scUJBQXFCLEVBQUU7SUFDN0IsT0FBTyxtQkFBbUIsRUFBRTtBQUNoQzs7QUFFQTtJQUNJLEtBQUssbUNBQW1DLEVBQUUsVUFBVSxFQUFFO0lBQ3RELE9BQU8sNENBQTRDLEVBQUUsVUFBVSxFQUFFO0FBQ3JFOztBQUVBO0lBQ0ksc0RBQXNEO0FBQzFEOztBQUVBO0lBQ0kseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksNERBQTREO0FBQ2hFOztBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVyxxQkFBcUIsRUFBRSxZQUFZLEVBQUU7SUFDaEQsTUFBTSxtQkFBbUIsRUFBRSxVQUFVLEVBQUU7QUFDM0M7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksNkNBQTZDO0lBQzdDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLEtBQUssbUJBQW1CLEVBQUUsc0NBQXNDLEVBQUU7SUFDbEUsTUFBTSxzQkFBc0IsRUFBRSwyQ0FBMkMsRUFBRTtJQUMzRSxPQUFPLG1CQUFtQixFQUFFLHNDQUFzQyxFQUFFO0FBQ3hFOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUUsbUJBQW1CLEVBQUU7SUFDdEMsT0FBTyxVQUFVLEVBQUUscUJBQXFCLEVBQUU7QUFDOUM7O0FBRUEsaURBQWlEO0FBQ2pEOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUEsMkNBQTJDO0FBQzNDO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtBQUNyQjs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSxrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQSw4RUFBOEU7QUFDOUU7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLG9CQUFvQjtBQUN4Qjs7QUFFQSwyQ0FBMkM7QUFDM0M7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUEsNERBQTREO0FBQzVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBLHFDQUFxQztBQUNyQztJQUNJO1FBQ0ksVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHNCQUFzQjtRQUN0Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQSw2Q0FBNkM7QUFDN0M7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUEsMkNBQTJDO0FBQzNDO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLDRCQUE0Qjs7QUFFNUIsdUNBQXVDO0FBQ3ZDO0lBQ0ksd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLEtBQUssdUNBQXVDLEVBQUU7SUFDOUMsTUFBTSx3Q0FBd0MsRUFBRTtJQUNoRCxPQUFPLHVDQUF1QyxFQUFFO0FBQ3BEOztBQUVBLDRCQUE0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsIFN0eWxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1wbGF5ZXItY29sb3I6ICMzNDk4ZGI7XFxuICAgIC0tY29tcHV0ZXIxLWNvbG9yOiAjZTc0YzNjO1xcbiAgICAtLWNvbXB1dGVyMi1jb2xvcjogIzJlY2M3MTtcXG4gICAgLS1iZy1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgLS1jYXJkLWJnOiB3aGl0ZTtcXG4gICAgLS1jYXJkLWJhY2s6ICMzNDQ5NWU7XFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMztcXG4gICAgLS1ib3JkZXItY29sb3I6ICNkZGQ7XFxuICAgIC0tYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzOyAvKiBEZWZhdWx0LCB3aWxsIGJlIG92ZXJyaWRkZW4gYnkgSlMgKi9cXG4gICAgLS1rZWVwLWJ0bi1jb2xvcjogIzI3YWU2MDtcXG4gICAgLS1kaXNjYXJkLWJ0bi1jb2xvcjogI2U3NGMzYztcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhOyAvKiBDaGFuZ2VkIHRvIGxpZ2h0IGJsdWUgdG8gY29uZmlybSBjaGFuZ2VzIGFyZSBhcHBsaWVkICovXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBCdXR0b24gU3R5bGVzICovXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLmJ0bjpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbiNrZWVwLWNhcmQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta2VlcC1idG4tY29sb3IpO1xcbn1cXG5cXG4jZGlzY2FyZC1jYXJkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpc2NhcmQtYnRuLWNvbG9yKTtcXG59XFxuXFxuLyogU2NyZWVuIFN0eWxlcyAqL1xcbi5zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2NyZWVuLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIFdlbGNvbWUgU2NyZWVuICovXFxuLndlbGNvbWUtY29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ud2VsY29tZS1jb250ZW50IGgxIHtcXG4gICAgY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wbGF5ZXItaW5wdXQge1xcbiAgICBtYXJnaW46IDMwcHggMCAxNXB4O1xcbn1cXG5cXG4ucGxheWVyLWlucHV0IGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wbGF5ZXItaW5wdXQgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qIEdhbWUgU2V0dGluZ3MgKi9cXG4uZ2FtZS1zZXR0aW5ncyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zZXR0aW5nIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnNldHRpbmcgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc2V0dGluZyBzZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBHYW1lIExheW91dCAqL1xcbi5nYW1lLWxheW91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmxlZnQtcGFuZWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG59XFxuXFxuLnJpZ2h0LXBhbmVsIHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XFxufVxcblxcbi8qIEN1cnJlbnQgVHVybiBJbmRpY2F0b3IgKi9cXG4uY3VycmVudC10dXJuLWluZGljYXRvciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDkwO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4vKiBHYW1lIFNjcmVlbiAqL1xcbi5nYW1lLWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyAvKiBBZGQgc3BhY2UgZm9yIHRoZSB0dXJuIGluZGljYXRvciAqL1xcbn1cXG5cXG4ucGxheWVyLWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIE9wcG9uZW50IEFyZWEgKi9cXG4ub3Bwb25lbnRzLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5vcHBvbmVudCB7XFxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb21wdXRlcjEgaDMge1xcbiAgICBjb2xvcjogdmFyKC0tY29tcHV0ZXIxLWNvbG9yKTtcXG59XFxuXFxuI2NvbXB1dGVyMiBoMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb21wdXRlcjItY29sb3IpO1xcbn1cXG5cXG4ubWluaS1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLm1pbmktY2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhc3BlY3QtcmF0aW86IDIvMztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2spO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5taW5pLWNhcmQucmV2ZWFsZWQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogQ2FyZCBQaWxlcyAqL1xcbi5jYXJkLXBpbGVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5waWxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucGlsZSAuY2FyZCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcXG59XFxuXFxuLyogUGxheWVyIEFyZWEgKi9cXG4ucGxheWVyLWFyZWEge1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnBsYXllci1hcmVhIGgzIHtcXG4gICAgY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnBsYXllci1jYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLnNjb3JlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ubGl2ZS1zY29yZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4vKiBDYXJkIFNlbGVjdGlvbiBBcmVhICovXFxuLmNhcmQtc2VsZWN0aW9uLWFyZWEge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmNhcmQtc2VsZWN0aW9uLWFyZWEgLmNhcmQge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XFxufVxcblxcbi5jYXJkLWFjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIENhcmQgU3R5bGVzICovXFxuLmNhcmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAyLzM7XFxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZC1pbm5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNhcmQuZmxpcHBlZCAuY2FyZC1pbm5lciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZC1mcm9udCwgLmNhcmQtYmFjayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2FyZC1mcm9udCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uY2FyZC1iYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrKTtcXG59XFxuXFxuLmNhcmQuZW1wdHkgLmNhcmQtaW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcXG59XFxuXFxuLmNhcmQuYmFjayAuY2FyZC1pbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFjayk7XFxufVxcblxcbi8qIENhcmQgVmFsdWVzIGFuZCBDb2xvcnMgKi9cXG4uY2FyZC1tMiB7IGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7IGNvbG9yOiB3aGl0ZTsgfSAvKiBEYXJrIFR1cnF1b2lzZSAqL1xcbi5jYXJkLW0xIHsgYmFja2dyb3VuZC1jb2xvcjogIzQ4YzliMDsgY29sb3I6IHdoaXRlOyB9IC8qIExpZ2h0IFR1cnF1b2lzZSAqL1xcbi5jYXJkLTAgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTVhNWE2OyBjb2xvcjogd2hpdGU7IH0gLyogR3JheSAqL1xcbi5jYXJkLTEgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjNThkNjhkOyBjb2xvcjogd2hpdGU7IH0gLyogTGlnaHQgR3JlZW4gKi9cXG4uY2FyZC0yIHsgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTsgY29sb3I6IHdoaXRlOyB9IC8qIEdyZWVuICovXFxuLmNhcmQtMyB7IGJhY2tncm91bmQtY29sb3I6ICMyZDliNTg7IGNvbG9yOiB3aGl0ZTsgfSAvKiBPbGl2ZSBHcmVlbiAqL1xcbi5jYXJkLTQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFjNDBmOyBjb2xvcjogYmxhY2s7IH0gLyogWWVsbG93ICovXFxuLmNhcmQtNSB7IGJhY2tncm91bmQtY29sb3I6ICNmMzljMTI7IGNvbG9yOiB3aGl0ZTsgfSAvKiBPcmFuZ2UgKi9cXG4uY2FyZC02IHsgYmFja2dyb3VuZC1jb2xvcjogI2U2N2UyMjsgY29sb3I6IHdoaXRlOyB9IC8qIENvcmFsICovXFxuLmNhcmQtNyB7IGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7IGNvbG9yOiB3aGl0ZTsgfSAvKiBMaWdodCBSZWQgKi9cXG4uY2FyZC04IHsgYmFja2dyb3VuZC1jb2xvcjogI2NiNDMzNTsgY29sb3I6IHdoaXRlOyB9IC8qIFJlZCAqL1xcbi5jYXJkLTkgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjYTkzMjI2OyBjb2xvcjogd2hpdGU7IH0gLyogRGFyayBSZWQgKi9cXG4uY2FyZC0xMCB7IGJhY2tncm91bmQtY29sb3I6ICM4ZTQ0YWQ7IGNvbG9yOiB3aGl0ZTsgfSAvKiBQdXJwbGUgKi9cXG4uY2FyZC0xMSB7IGJhY2tncm91bmQtY29sb3I6ICM5YjU5YjY7IGNvbG9yOiB3aGl0ZTsgfSAvKiBNYWdlbnRhICovXFxuLmNhcmQtMTIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk4Y2IzOyBjb2xvcjogd2hpdGU7IH0gLyogUGluayAqL1xcblxcbi8qIFJvdW5kIEVuZCBTY3JlZW4gKi9cXG4ucm91bmQtcmVzdWx0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5yb3VuZC1yZXN1bHRzIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcXG59XFxuXFxuLnJlc3VsdHMtY29udGFpbmVyLCAudG90YWwtc2NvcmVzLCAuZmluYWwtc2NvcmVzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnRvdGFsLXNjb3JlcyBoMywgLmZpbmFsLXNjb3JlcyBoMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucmVzdWx0LXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVxcblxcbi5jb21wbGV0ZWQtZmlyc3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jb21wbGV0ZWQtZmlyc3Q6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIuKYhVxcXCI7XFxuICAgIGNvbG9yOiBnb2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmRvdWJsZWQtc2NvcmUge1xcbiAgICBjb2xvcjogdmFyKC0tZGlzY2FyZC1idG4tY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRvdWJsZWQtc2NvcmU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiAoZG91YmxlZClcXFwiO1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLmZpbmFsLWNhcmRzLWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wbGF5ZXItZmluYWwtY2FyZHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5wbGF5ZXItZmluYWwtY2FyZHMgaDQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1maW5hbC1jYXJkcy5jb21wdXRlcjEgaDQge1xcbiAgICBjb2xvcjogdmFyKC0tY29tcHV0ZXIxLWNvbG9yKTtcXG59XFxuXFxuLnBsYXllci1maW5hbC1jYXJkcy5jb21wdXRlcjIgaDQge1xcbiAgICBjb2xvcjogdmFyKC0tY29tcHV0ZXIyLWNvbG9yKTtcXG59XFxuXFxuLmZpbmFsLWNhcmRzLWdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZpbmFsLWNhcmQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNuZXh0LXJvdW5kLWJ0biwgI25ldy1nYW1lLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogR2FtZSBFbmQgU2NyZWVuICovXFxuLmdhbWUtcmVzdWx0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbiN3aW5uZXItYW5ub3VuY2VtZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi53aW5uZXItbmFtZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcXG59XFxuXFxuLyogTWVzc2FnZSBDb250YWluZXIgKi9cXG4jbWVzc2FnZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4vKiBSb3VuZCBTY29yZWJvYXJkICovXFxuLnJvdW5kLXNjb3JlYm9hcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG4ucm91bmQtc2NvcmVib2FyZCBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLXBsYXllci1jb2xvcik7XFxufVxcblxcbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHRoLFxcbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbiNyb3VuZC1zY29yZWJvYXJkLXRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG59XFxuXFxuI3JvdW5kLXNjb3JlYm9hcmQtdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4jcm91bmQtc2NvcmVib2FyZC10YWJsZSB0cjpsYXN0LWNoaWxkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIENhcmQgQW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyBjYXJkRHJhdyB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZE1vdmUge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZERpc2NhcmQge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDBweCwgNTBweCkgc2NhbGUoMC44KTsgb3BhY2l0eTogMDsgfVxcbn1cXG5cXG4uY2FyZC1hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbjogY2FyZERyYXcgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSBlYXNlLW91dDtcXG59XFxuXFxuLmNhcmQtbW92ZWQge1xcbiAgICBhbmltYXRpb246IGNhcmRNb3ZlIHZhcigtLWFuaW1hdGlvbi1kdXJhdGlvbikgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJkLWRpc2NhcmRlZCB7XFxuICAgIGFuaW1hdGlvbjogY2FyZERpc2NhcmQgdmFyKC0tYW5pbWF0aW9uLWR1cmF0aW9uKSBlYXNlLWluLW91dDtcXG59XFxuXFxuLyogVGhpbmtpbmcgQW5pbWF0aW9uICovXFxuLnRoaW5raW5nLWluZGljYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4udGhpbmtpbmctZG90IHtcXG4gICAgd2lkdGg6IDEycHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uOiB0aGlua2luZyAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGhpbmtpbmctZG90Om50aC1jaGlsZCgxKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxufVxcblxcbi50aGlua2luZy1kb3Q6bnRoLWNoaWxkKDIpIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG5cXG4udGhpbmtpbmctZG90Om50aC1jaGlsZCgzKSB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcXG59XFxuXFxuQGtleWZyYW1lcyB0aGlua2luZyB7XFxuICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjYpOyBvcGFjaXR5OiAwLjU7IH1cXG4gICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiBMZWFkZXJib2FyZCBTdHlsZXMgKi9cXG4ubGVhZGVyYm9hcmQtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5sZWFkZXJib2FyZC1jb250ZW50IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tcGxheWVyLWNvbG9yKTtcXG59XFxuXFxuLmxlYWRlcmJvYXJkLXRhYmxlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jbGVhZGVyYm9hcmQtdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuI2xlYWRlcmJvYXJkLXRhYmxlIHRoLFxcbiNsZWFkZXJib2FyZC10YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuI2xlYWRlcmJvYXJkLXRhYmxlIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4jYmFjay10by1nYW1lLWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmdhbWUtbGF5b3V0IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgXFxuICAgIC5yaWdodC1wYW5lbCB7XFxuICAgICAgICBvcmRlcjogMTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmxlZnQtcGFuZWwge1xcbiAgICAgICAgb3JkZXI6IDI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5waWxlIC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNhcmQtc2VsZWN0aW9uLWFyZWEge1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmNhcmQtc2VsZWN0aW9uLWFyZWEgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwNXB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAuZmluYWwtY2FyZHMtZGlzcGxheSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxufVxcblxcbi8qIENvbHVtbiBtYXRjaCBhbmltYXRpb25zICovXFxuLmNvbHVtbi1tYXRjaC1oaWdobGlnaHQge1xcbiAgICBhbmltYXRpb246IGhpZ2hsaWdodC1wdWxzZSAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29sdW1uLWZhZGUtb3V0IHtcXG4gICAgYW5pbWF0aW9uOiBmYWRlLW91dCAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBoaWdobGlnaHQtcHVsc2Uge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMjU1LCAyMTUsIDAsIDApOyB9XFxuICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuOCk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMjU1LCAyMTUsIDAsIDApOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xcbiAgICAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMC44KTsgfVxcbn1cXG5cXG4vKiBQbGFjZWhvbGRlciBjYXJkcyB0byBtYWludGFpbiBncmlkIHN0cnVjdHVyZSAqL1xcbi5jYXJkLnBsYWNlaG9sZGVyLFxcbi5taW5pLWNhcmQucGxhY2Vob2xkZXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBQbGF5ZXIgYW5kIENvbXB1dGVyIENhcmRzIEdyaWQgTGF5b3V0cyAqL1xcbi5wbGF5ZXItY2FyZHMsIC5taW5pLWNhcmRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xcbiAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4vKiBTcGVjaWZpYyBzdHlsaW5nIGZvciBwbGF5ZXIgY2FyZHMgKi9cXG4ucGxheWVyLWNhcmRzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgbWluLWhlaWdodDogMzUwcHg7XFxufVxcblxcbi8qIFNwZWNpZmljIHN0eWxpbmcgZm9yIGNvbXB1dGVyIGNhcmRzICovXFxuLm1pbmktY2FyZHMge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi8qIE1ha2Ugc3VyZSBjYXJkcyBzdGF5IGluIHRoZWlyIGFzc2lnbmVkIHBvc2l0aW9ucyBhbmQga2VlcCBjb25zaXN0ZW50IHNpemUgKi9cXG4uY2FyZCwgLm1pbmktY2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMi8zO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogRW5zdXJlIGNhcmRzIG1haW50YWluIGZpeGVkIGRpbWVuc2lvbnMgKi9cXG4uY2FyZCB7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG59XFxuXFxuLm1pbmktY2FyZCB7XFxuICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xcbn1cXG5cXG4vKiBFbnN1cmUgcGFyZW50IGNvbnRhaW5lcnMgZG9uJ3QgZXhwYW5kL2NvbnRyYWN0IHRvbyBtdWNoICovXFxuLnBsYXllci1hcmVhLCAub3Bwb25lbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIENvbHVtbiBtYXRjaCBoaWdobGlnaHQgYW5pbWF0aW9uICovXFxuQGtleWZyYW1lcyBoaWdobGlnaHQtY29sdW1uIHtcXG4gICAgMCUsIDEwMCUgeyBcXG4gICAgICAgIG9wYWNpdHk6IDE7IFxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICA1MCUgeyBcXG4gICAgICAgIG9wYWNpdHk6IDAuODsgXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggZ29sZDtcXG4gICAgfVxcbn1cXG5cXG4vKiBBcHBseSBhbmltYXRpb24gdG8gY29sdW1ucyBiZWluZyByZW1vdmVkICovXFxuLmNvbHVtbi1iZWluZy1yZW1vdmVkIHtcXG4gICAgYW5pbWF0aW9uOiBoaWdobGlnaHQtY29sdW1uIDAuNXMgZWFzZS1pbi1vdXQgMztcXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBhZGp1c3RtZW50cyBmb3IgY2FyZCBzaXppbmcgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNhcmQge1xcbiAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgICB9XFxuICAgIFxcbiAgICAubWluaS1jYXJkIHtcXG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcXG4gICAgfVxcbn1cXG5cXG4vKiBSZW1vdmUgZHVwbGljYXRlZCBydWxlcyAqL1xcblxcbi8qIENhcmQgaGlnaGxpZ2h0IGZvciBjbGlja2FibGUgY2FyZHMgKi9cXG4uY2xpY2thYmxlLWhpZ2hsaWdodCB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLXBsYXllci1jb2xvcik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgMS41cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAgIDAlIHsgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1wbGF5ZXItY29sb3IpOyB9XFxuICAgIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLXBsYXllci1jb2xvcik7IH1cXG4gICAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcGxheWVyLWNvbG9yKTsgfVxcbn1cXG5cXG4vKiBDb2x1bW4gbWF0Y2ggYW5pbWF0aW9ucyAqLyBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2t5am8tc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za3lqby1zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgQ2FyZCwgRGlmZmljdWx0eSwgRGlmZmljdWx0eVNldHRpbmdzLCBBY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcbmltcG9ydCB7IERJRkZJQ1VMVFlfUFJFU0VUUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBDb21wdXRlclBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgZGlmZmljdWx0eTogRGlmZmljdWx0eTtcbiAgICBjYXJkTWVtb3J5OiBDYXJkW107XG4gICAgYmVzdFRhcmdldEluZGV4PzogbnVtYmVyO1xuICAgIGRpZmZpY3VsdHlTZXR0aW5nczogRGlmZmljdWx0eVNldHRpbmdzO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5LCBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBmYWxzZSwgY29sb3IpO1xuICAgICAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xuICAgICAgICB0aGlzLmNhcmRNZW1vcnkgPSBbXTtcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5U2V0dGluZ3MgPSBESUZGSUNVTFRZX1BSRVNFVFNbZGlmZmljdWx0eV07XG4gICAgfVxuXG4gICAgcmVzZXRGb3JOZXdSb3VuZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIucmVzZXRGb3JOZXdSb3VuZCgpO1xuICAgICAgICB0aGlzLmNhcmRNZW1vcnkgPSBbXTtcbiAgICAgICAgdGhpcy5iZXN0VGFyZ2V0SW5kZXggPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjaWRlIHdoZXRoZXIgdG8gZHJhdyBmcm9tIGRlY2sgb3IgZGlzY2FyZCBwaWxlXG4gICAgICogQHBhcmFtIHRvcERpc2NhcmRDYXJkIFRoZSB0b3AgY2FyZCBvZiB0aGUgZGlzY2FyZCBwaWxlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBkcmF3aW5nIGZyb20gZGVjaywgZmFsc2UgaWYgZHJhd2luZyBmcm9tIGRpc2NhcmQgcGlsZVxuICAgICAqL1xuICAgIGRlY2lkZURyYXdTb3VyY2UodG9wRGlzY2FyZENhcmQ6IENhcmQgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0b3BEaXNjYXJkQ2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIE11c3QgZHJhdyBmcm9tIGRlY2sgaWYgZGlzY2FyZCBwaWxlIGlzIGVtcHR5XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZGlmZmljdWx0eVNldHRpbmdzO1xuICAgICAgICBsZXQgZHJhd0Zyb21EZWNrID0gdHJ1ZTtcblxuICAgICAgICAvLyBEaWZmZXJlbnQgc3RyYXRlZ2llcyBiYXNlZCBvbiBkaWZmaWN1bHR5IGxldmVsXG4gICAgICAgIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdjYXN1YWwnKSB7XG4gICAgICAgICAgICAvLyBDYXN1YWw6IFNpbXBsZSByYW5kb20gY2hvaWNlIHdpdGggZml4ZWQgcHJvYmFiaWxpdHlcbiAgICAgICAgICAgIGRyYXdGcm9tRGVjayA9IE1hdGgucmFuZG9tKCkgPiBzZXR0aW5ncy5kcmF3RGlzY2FyZEJhc2VQcm9iO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpZmZpY3VsdHkgPT09ICdza2lsbGVkJyB8fCB0aGlzLmRpZmZpY3VsdHkgPT09ICdleHBlcnQnKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZGlzY2FyZCB2YWx1ZSBpcyBiZWxvdyB0aHJlc2hvbGQgb3IgY2FuIGNvbXBsZXRlIGEgY29sdW1uXG4gICAgICAgICAgICBpZiAodG9wRGlzY2FyZENhcmQudmFsdWUgPD0gc2V0dGluZ3Mua2VlcFRocmVzaG9sZHMubG93KSB7XG4gICAgICAgICAgICAgICAgZHJhd0Zyb21EZWNrID0gZmFsc2U7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jYW5Db21wbGV0ZUNvbHVtbih0b3BEaXNjYXJkQ2FyZC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkcmF3RnJvbURlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEV4cGVydCBhZGRzIG1vcmUgY29uc2lkZXJhdGlvbnNcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ2V4cGVydCcpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHBlcnQgY29uc2lkZXJzIGRlY2sgZXhoYXVzdGlvbiBzdHJhdGVneVxuICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgZXhwZXJ0IGxvZ2ljIHdvdWxkIGdvIGhlcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IG5vaXNlIHRvIHRoZSBkZWNpc2lvbiBiYXNlZCBvbiBkaWZmaWN1bHR5XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgc2V0dGluZ3Mubm9pc2UpIHtcbiAgICAgICAgICAgIGRyYXdGcm9tRGVjayA9ICFkcmF3RnJvbURlY2s7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHJhd0Zyb21EZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY2lkZSB3aGV0aGVyIHRvIGtlZXAgb3IgZGlzY2FyZCBhIGRyYXduIGNhcmRcbiAgICAgKiBAcGFyYW0gY2FyZFZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZHJhd24gY2FyZFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYga2VlcGluZywgZmFsc2UgaWYgZGlzY2FyZGluZ1xuICAgICAqL1xuICAgIGRlY2lkZUtlZXBPckRpc2NhcmQoY2FyZFZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmRpZmZpY3VsdHlTZXR0aW5ncztcbiAgICAgICAgbGV0IGtlZXBDYXJkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBEaWZmZXJlbnQgc3RyYXRlZ2llcyBiYXNlZCBvbiBBSSBsZXZlbFxuICAgICAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnY2FzdWFsJykge1xuICAgICAgICAgICAgLy8gQ2FzdWFsIEFJIHVzZXMgc2ltcGxlIHByb2JhYmlsaXR5IHRocmVzaG9sZHNcbiAgICAgICAgICAgIGlmIChjYXJkVmFsdWUgPD0gc2V0dGluZ3Mua2VlcFRocmVzaG9sZHMubG93KSB7XG4gICAgICAgICAgICAgICAga2VlcENhcmQgPSBNYXRoLnJhbmRvbSgpIDwgc2V0dGluZ3Mua2VlcFByb2JhYmlsaXRpZXMubG93O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYXJkVmFsdWUgPD0gc2V0dGluZ3Mua2VlcFRocmVzaG9sZHMubWlkKSB7XG4gICAgICAgICAgICAgICAga2VlcENhcmQgPSBNYXRoLnJhbmRvbSgpIDwgc2V0dGluZ3Mua2VlcFByb2JhYmlsaXRpZXMubWlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZWVwQ2FyZCA9IE1hdGgucmFuZG9tKCkgPCBzZXR0aW5ncy5rZWVwUHJvYmFiaWxpdGllcy5oaWdoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBCYXNpYyBjb2x1bW4gbWF0Y2hpbmcgZm9yIGNhc3VhbFxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuQ29tcGxldGVDb2x1bW4oY2FyZFZhbHVlKSAmJiBjYXJkVmFsdWUgPD0gc2V0dGluZ3MuY29sdW1uVmFsdWVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBrZWVwQ2FyZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ3NraWxsZWQnIHx8IHRoaXMuZGlmZmljdWx0eSA9PT0gJ2V4cGVydCcpIHtcbiAgICAgICAgICAgIC8vIEFkdmFuY2VkIHNlbGVjdGlvbiBsb2dpYyB3b3VsZCBnbyBoZXJlXG4gICAgICAgICAgICAvLyBGb3IgYnJldml0eSB3ZSdyZSBzaW1wbGlmeWluZyB0aGUgc2tpbGxlZC9leHBlcnQgbG9naWNcbiAgICAgICAgICAgIGtlZXBDYXJkID0gY2FyZFZhbHVlIDw9IHNldHRpbmdzLmtlZXBUaHJlc2hvbGRzLm1pZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgcmFuZG9tbmVzcyBiYXNlZCBvbiBkaWZmaWN1bHR5XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgc2V0dGluZ3Mubm9pc2UpIHtcbiAgICAgICAgICAgIGtlZXBDYXJkID0gIWtlZXBDYXJkOyAvLyBSYW5kb21seSBmbGlwIGRlY2lzaW9uIHRvIHNpbXVsYXRlIG1pc3Rha2VcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGtlZXBDYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIGNhcmQgdG8gcmVwbGFjZSB3aXRoIHRoZSBkcmF3biBjYXJkXG4gICAgICogQHBhcmFtIGRyYXduQ2FyZFZhbHVlIFRoZSB2YWx1ZSBvZiB0aGUgZHJhd24gY2FyZFxuICAgICAqIEByZXR1cm5zIEluZGV4IG9mIHRoZSBjYXJkIHRvIHJlcGxhY2VcbiAgICAgKi9cbiAgICBzZWxlY3RDYXJkVG9SZXBsYWNlKGRyYXduQ2FyZFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZGlmZmljdWx0eVNldHRpbmdzO1xuICAgICAgICBsZXQgYmVzdENhcmRJbmRleCA9IC0xO1xuICAgICAgICBcbiAgICAgICAgLy8gRGlmZmVyZW50IHJlcGxhY2VtZW50IHN0cmF0ZWdpZXMgYmFzZWQgb24gZGlmZmljdWx0eVxuICAgICAgICBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnY2FzdWFsJykge1xuICAgICAgICAgICAgLy8gQ2FzdWFsIEFJIHByZWZlcnMgdG8gcmVwbGFjZSBoaWdoZXN0IHJldmVhbGVkIGNhcmQsIGVsc2UgcmFuZG9tIGhpZGRlblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBGaXJzdCBjaGVjayBmb3IgcmV2ZWFsZWQgY2FyZHNcbiAgICAgICAgICAgIGNvbnN0IHJldmVhbGVkQ2FyZHMgPSB0aGlzLmNhcmRzXG4gICAgICAgICAgICAgICAgLm1hcCgoY2FyZCwgaW5kZXgpID0+ICh7IGNhcmQsIGluZGV4IH0pKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhcmQucmV2ZWFsZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmV2ZWFsZWRDYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU29ydCBieSB2YWx1ZSAoaGlnaGVzdCBmaXJzdClcbiAgICAgICAgICAgICAgICByZXZlYWxlZENhcmRzLnNvcnQoKGEsIGIpID0+IGIuY2FyZC52YWx1ZSAtIGEuY2FyZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBoaWdoIGVub3VnaCB2YWx1ZXMgd29ydGggcmVwbGFjaW5nXG4gICAgICAgICAgICAgICAgaWYgKHJldmVhbGVkQ2FyZHNbMF0uY2FyZC52YWx1ZSA+IGRyYXduQ2FyZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RDYXJkSW5kZXggPSByZXZlYWxlZENhcmRzWzBdLmluZGV4O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENob29zZSBhIHJhbmRvbSBoaWRkZW4gY2FyZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW5DYXJkcyA9IHRoaXMuY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNhcmQsIGluZGV4KSA9PiAoeyBjYXJkLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5jYXJkLnJldmVhbGVkKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaWRkZW5DYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21IaWRkZW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoaWRkZW5DYXJkcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdENhcmRJbmRleCA9IGhpZGRlbkNhcmRzW3JhbmRvbUhpZGRlbl0uaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayB0byBoaWdoZXN0IHJldmVhbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBiZXN0Q2FyZEluZGV4ID0gcmV2ZWFsZWRDYXJkc1swXS5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQWxsIGNhcmRzIGFyZSBoaWRkZW4sIGNob29zZSByYW5kb21seVxuICAgICAgICAgICAgICAgIGJlc3RDYXJkSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaWZmaWN1bHR5ID09PSAnc2tpbGxlZCcgfHwgdGhpcy5kaWZmaWN1bHR5ID09PSAnZXhwZXJ0Jykge1xuICAgICAgICAgICAgLy8gTW9yZSBhZHZhbmNlZCBsb2dpYyB3b3VsZCBiZSBoZXJlXG4gICAgICAgICAgICAvLyBGb3IgYnJldml0eSwgd2UnbGwgdXNlIGEgc2ltcGxpZmllZCB2ZXJzaW9uXG4gICAgICAgICAgICBjb25zdCByZXZlYWxlZENhcmRzID0gdGhpcy5jYXJkc1xuICAgICAgICAgICAgICAgIC5tYXAoKGNhcmQsIGluZGV4KSA9PiAoeyBjYXJkLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXJkLnJldmVhbGVkKVxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmNhcmQudmFsdWUgLSBhLmNhcmQudmFsdWUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHJldmVhbGVkQ2FyZHMubGVuZ3RoID4gMCAmJiByZXZlYWxlZENhcmRzWzBdLmNhcmQudmFsdWUgPiBkcmF3bkNhcmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGJlc3RDYXJkSW5kZXggPSByZXZlYWxlZENhcmRzWzBdLmluZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBDaG9vc2UgYSByYW5kb20gY2FyZFxuICAgICAgICAgICAgICAgIGJlc3RDYXJkSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhcmRzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZSBpbmRleCBpcyBzdGlsbCBpbnZhbGlkLCBwaWNrIGEgcmFuZG9tIGNhcmQgYXMgZmFsbGJhY2tcbiAgICAgICAgaWYgKGJlc3RDYXJkSW5kZXggPT09IC0xIHx8IGJlc3RDYXJkSW5kZXggPj0gdGhpcy5jYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJlc3RDYXJkSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhcmRzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBiZXN0Q2FyZEluZGV4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIGZhY2UtZG93biBjYXJkIHRvIHJldmVhbCBhZnRlciBkaXNjYXJkaW5nXG4gICAgICogQHJldHVybnMgSW5kZXggb2YgdGhlIGNhcmQgdG8gcmV2ZWFsXG4gICAgICovXG4gICAgc2VsZWN0Q2FyZFRvUmV2ZWFsKCk6IG51bWJlciB7XG4gICAgICAgIC8vIEdldCBhbGwgZmFjZS1kb3duIGNhcmRzXG4gICAgICAgIGNvbnN0IGZhY2Vkb3duQ2FyZHMgPSB0aGlzLmNhcmRzXG4gICAgICAgICAgICAubWFwKChjYXJkLCBpbmRleCkgPT4gKHsgY2FyZCwgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uY2FyZC5yZXZlYWxlZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZmFjZWRvd25DYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZmFjZS1kb3duIGNhcmRzIHRvIHJldmVhbCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBGb3IgY2FzdWFsLCBqdXN0IHBpY2sgcmFuZG9tbHlcbiAgICAgICAgaWYgKHRoaXMuZGlmZmljdWx0eSA9PT0gJ2Nhc3VhbCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmFjZWRvd25DYXJkcy5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhY2Vkb3duQ2FyZHNbcmFuZG9tSW5kZXhdLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBGb3Igc2tpbGxlZCBhbmQgZXhwZXJ0LCB1c2UgbW9yZSBhZHZhbmNlZCBsb2dpY1xuICAgICAgICAvLyBGb3IgYnJldml0eSwgd2UnbGwganVzdCB1c2UgcmFuZG9tIGZvciBub3dcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmYWNlZG93bkNhcmRzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBmYWNlZG93bkNhcmRzW3JhbmRvbUluZGV4XS5pbmRleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSBjYW4gY29tcGxldGUgYSBjb2x1bW4gd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgKiBAcGFyYW0gY2FyZFZhbHVlIFRoZSB2YWx1ZSB0byBjaGVja1xuICAgICAqIEByZXR1cm5zIFRydWUgaWYgd2UgY2FuIGNvbXBsZXRlIGEgY29sdW1uXG4gICAgICovXG4gICAgY2FuQ29tcGxldGVDb2x1bW4oY2FyZFZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGN1cnJlbnQgY29sdW1uIGNvdW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2xzID0gdGhpcy5jYXJkcy5sZW5ndGggLyAzOyAvLyBBc3N1bWluZyBST1dTID0gM1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBjb2x1bW5cbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgY3VycmVudENvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAvLyBDb3VudCBjYXJkcyBpbiB0aGlzIGNvbHVtbiB3aXRoIG1hdGNoaW5nIHZhbHVlXG4gICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDM7IHJvdysrKSB7IC8vIEFzc3VtaW5nIFJPV1MgPSAzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSByb3cgKiBjdXJyZW50Q29scyArIGNvbDtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLmNhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5jYXJkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkLnJldmVhbGVkICYmIGNhcmQudmFsdWUgPT09IGNhcmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIDIgbWF0Y2hpbmcgY2FyZHMsIHdlIGNvdWxkIGNvbXBsZXRlIHdpdGggdGhpcyBvbmVcbiAgICAgICAgICAgIGlmIChtYXRjaENvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59ICIsImltcG9ydCB7IENhcmQsIEdhbWVTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgSHVtYW5QbGF5ZXIgfSBmcm9tICcuL0h1bWFuUGxheWVyJztcbmltcG9ydCB7IENvbXB1dGVyUGxheWVyIH0gZnJvbSAnLi9Db21wdXRlclBsYXllcic7XG5pbXBvcnQgeyBDQVJEX0RJU1RSSUJVVElPTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgc2h1ZmZsZUNhcmRzLCBnZXRSb3dDb2xGcm9tSW5kZXgsIGdldEluZGV4RnJvbVJvd0NvbCB9IGZyb20gJy4uL3V0aWxzL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBST1dTLCBDT0xTLCBDQVJEU19QRVJfUExBWUVSLCBXSU5fVEhSRVNIT0xELCBJTklUSUFMX0NBUkRTX1RPX1JFVkVBTCwgQU5JTUFUSU9OX1NQRUVEUyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gICAgLy8gR2FtZSBzdGF0ZVxuICAgIHByaXZhdGUgc3RhdGU6IEdhbWVTdGF0ZTtcbiAgICBcbiAgICAvLyBET00gRWxlbWVudHNcbiAgICBwcml2YXRlIGRvbUVsZW1lbnRzOiBSZWNvcmQ8c3RyaW5nLCBIVE1MRWxlbWVudD47XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBkZWNrOiBbXSxcbiAgICAgICAgICAgIGRpc2NhcmRQaWxlOiBbXSxcbiAgICAgICAgICAgIHBsYXllcnM6IFtdLFxuICAgICAgICAgICAgY3VycmVudFBsYXllckluZGV4OiAwLFxuICAgICAgICAgICAgY3VycmVudFJvdW5kOiAxLFxuICAgICAgICAgICAgbWF4Um91bmRzOiAzLFxuICAgICAgICAgICAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50RHJhd25DYXJkOiBudWxsLFxuICAgICAgICAgICAgc2VsZWN0ZWRDYXJkSW5kZXg6IG51bGwsXG4gICAgICAgICAgICBhbmltYXRpb25TcGVlZDogQU5JTUFUSU9OX1NQRUVEUy5tZWRpdW0sXG4gICAgICAgICAgICByb3VuZEhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgc2VlbkNhcmRzOiB7fSxcbiAgICAgICAgICAgIG1vdmVJblByb2dyZXNzOiBmYWxzZSxcbiAgICAgICAgICAgIGluaXRpYWxDYXJkU2VsZWN0aW9uUGhhc2U6IHRydWUsXG4gICAgICAgICAgICBjYXJkc1RvUmV2ZWFsQ291bnQ6IElOSVRJQUxfQ0FSRFNfVE9fUkVWRUFMLFxuICAgICAgICAgICAgcm91bmRGaW5pc2hlcjogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBET00gZWxlbWVudHNcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cyA9IHt9O1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBnYW1lIHdpdGggcGxheWVycyBhbmQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdEdhbWUocGxheWVyTmFtZTogc3RyaW5nLCBtYXhSb3VuZHM6IG51bWJlciwgYW5pbWF0aW9uU3BlZWQ6IG51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyMURpZmZpY3VsdHk6ICdjYXN1YWwnIHwgJ3NraWxsZWQnIHwgJ2V4cGVydCcsIFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlcjJEaWZmaWN1bHR5OiAnY2FzdWFsJyB8ICdza2lsbGVkJyB8ICdleHBlcnQnKTogdm9pZCB7XG4gICAgICAgIC8vIFJlc2V0IHN0YXRlXG4gICAgICAgIHRoaXMuc3RhdGUuZGVjayA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmRpc2NhcmRQaWxlID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFJvdW5kID0gMTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tYXhSb3VuZHMgPSBtYXhSb3VuZHM7XG4gICAgICAgIHRoaXMuc3RhdGUuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnREcmF3bkNhcmQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZEluZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZS5yb3VuZEhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWVuQ2FyZHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLmluaXRpYWxDYXJkU2VsZWN0aW9uUGhhc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLmNhcmRzVG9SZXZlYWxDb3VudCA9IElOSVRJQUxfQ0FSRFNfVE9fUkVWRUFMO1xuICAgICAgICB0aGlzLnN0YXRlLnJvdW5kRmluaXNoZXIgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IGFuaW1hdGlvbiBzcGVlZFxuICAgICAgICB0aGlzLnN0YXRlLmFuaW1hdGlvblNwZWVkID0gYW5pbWF0aW9uU3BlZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgcGxheWVyc1xuICAgICAgICBjb25zdCBodW1hblBsYXllciA9IG5ldyBIdW1hblBsYXllcihwbGF5ZXJOYW1lIHx8ICdZb3UnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyMSA9IG5ldyBDb21wdXRlclBsYXllcihcbiAgICAgICAgICAgICdjb21wdXRlcjEnLFxuICAgICAgICAgICAgYENvbXB1dGVyIDEgKCR7Y29tcHV0ZXIxRGlmZmljdWx0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNvbXB1dGVyMURpZmZpY3VsdHkuc2xpY2UoMSl9KWAsXG4gICAgICAgICAgICBjb21wdXRlcjFEaWZmaWN1bHR5LFxuICAgICAgICAgICAgJ3ZhcigtLWNvbXB1dGVyMS1jb2xvciknXG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb21wdXRlcjIgPSBuZXcgQ29tcHV0ZXJQbGF5ZXIoXG4gICAgICAgICAgICAnY29tcHV0ZXIyJyxcbiAgICAgICAgICAgIGBDb21wdXRlciAyICgke2NvbXB1dGVyMkRpZmZpY3VsdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjb21wdXRlcjJEaWZmaWN1bHR5LnNsaWNlKDEpfSlgLFxuICAgICAgICAgICAgY29tcHV0ZXIyRGlmZmljdWx0eSxcbiAgICAgICAgICAgICd2YXIoLS1jb21wdXRlcjItY29sb3IpJ1xuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZS5wbGF5ZXJzID0gW2h1bWFuUGxheWVyLCBjb21wdXRlcjEsIGNvbXB1dGVyMl07XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIGRlY2tcbiAgICAgICAgdGhpcy5jcmVhdGVEZWNrKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBEZWFsIGNhcmRzXG4gICAgICAgIHRoaXMuZGVhbENhcmRzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTdGFydCB0aGUgZGlzY2FyZCBwaWxlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRlY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuc3RhdGUuZGVjay5wb3AoKTtcbiAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNjYXJkUGlsZS5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tDYXJkU2VlbihjYXJkLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGRlY2sgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZGlzdHJpYnV0aW9uIG9mIGNhcmRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmRlY2sgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBjYXJkcyBiYXNlZCBvbiBkaXN0cmlidXRpb25cbiAgICAgICAgQ0FSRF9ESVNUUklCVVRJT04uZm9yRWFjaChjYXJkVHlwZSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRUeXBlLmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRlY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXJkVHlwZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDbGFzczogY2FyZFR5cGUuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHJldmVhbGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNodWZmbGUgdGhlIGRlY2tcbiAgICAgICAgdGhpcy5zdGF0ZS5kZWNrID0gc2h1ZmZsZUNhcmRzKHRoaXMuc3RhdGUuZGVjayk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIERlYWwgaW5pdGlhbCBjYXJkcyB0byBwbGF5ZXJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZWFsQ2FyZHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ0FSRFNfUEVSX1BMQVlFUjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGVjay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLnN0YXRlLmRlY2sucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuY2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFRyYWNrIGNhcmRzIHRoYXQgaGF2ZSBiZWVuIHNlZW4gKGZvciBBSSBtZW1vcnkpXG4gICAgICovXG4gICAgcHJpdmF0ZSB0cmFja0NhcmRTZWVuKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlZW5DYXJkc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VlbkNhcmRzW3ZhbHVlXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5zZWVuQ2FyZHNbdmFsdWVdKys7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBnYW1lIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldFN0YXRlKCk6IEdhbWVTdGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgYSBwbGF5ZXIgYnkgaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGxheWVyKGluZGV4OiBudW1iZXIpOiBQbGF5ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5wbGF5ZXJzW2luZGV4XTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHBsYXllclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50UGxheWVyKCk6IFBsYXllciB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBsYXllcnNbdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVySW5kZXhdO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgcm91bmQgc2hvdWxkIGVuZCAoYWxsIGNhcmRzIHJldmVhbGVkKVxuICAgICAqL1xuICAgIHB1YmxpYyBjaGVja0ZvclJvdW5kRW5kKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGlmIGFsbCBjYXJkcyBhcmUgcmV2ZWFsZWRcbiAgICAgICAgY29uc3QgYWxsUmV2ZWFsZWQgPSBwbGF5ZXIuY2FyZHMuZXZlcnkoY2FyZCA9PiBjYXJkLnJldmVhbGVkKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhbGxSZXZlYWxlZCkge1xuICAgICAgICAgICAgLy8gRW5kIHRoZSByb3VuZCB3aXRoIHRoaXMgcGxheWVyIGFzIGZpbmlzaGVyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJvdW5kRmluaXNoZXIgPSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIEVuZCB0aGUgY3VycmVudCByb3VuZFxuICAgICAqL1xuICAgIHB1YmxpYyBlbmRSb3VuZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHNjb3JlcyBmb3IgdGhpcyByb3VuZFxuICAgICAgICBjb25zdCByb3VuZEZpbmlzaGVyID0gdGhpcy5zdGF0ZS5yb3VuZEZpbmlzaGVyICE9PSBudWxsID8gdGhpcy5zdGF0ZS5yb3VuZEZpbmlzaGVyIDogdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVySW5kZXg7XG4gICAgICAgIFxuICAgICAgICBkZWJ1Z0xvZyhgUm91bmQgZW5kaW5nISBQbGF5ZXIgJHtyb3VuZEZpbmlzaGVyfSAoJHt0aGlzLnN0YXRlLnBsYXllcnNbcm91bmRGaW5pc2hlcl0ubmFtZX0pIGZpbmlzaGVkIGZpcnN0YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZXZlYWwgYWxsIGNhcmRzIGFuZCBjYWxjdWxhdGUgc2NvcmVzXG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5mb3JFYWNoKChwbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXZlYWwgYWxsIGNhcmRzIGlmIG5vdCBhbHJlYWR5IHJldmVhbGVkXG4gICAgICAgICAgICBwbGF5ZXIucmV2ZWFsQWxsQ2FyZHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHJvdW5kIHNjb3JlXG4gICAgICAgICAgICBwbGF5ZXIuY2FsY3VsYXRlUm91bmRTY29yZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBNYXJrIHRoaXMgcGxheWVyIGFzIGhhdmluZyBmaW5pc2hlZCB0aGlzIHJvdW5kIChpZiB0aGV5IHdlcmUgdGhlIGZpbmlzaGVyKVxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSByb3VuZEZpbmlzaGVyKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLm1hcmtSb3VuZEZpbmlzaGVkKHRoaXMuc3RhdGUuY3VycmVudFJvdW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVidWdMb2coYFBsYXllciAke2luZGV4fSAoJHtwbGF5ZXIubmFtZX0pIGluaXRpYWwgcm91bmQgc2NvcmU6ICR7cGxheWVyLnJvdW5kU2NvcmV9YCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgcGxheWVyIHdobyBlbmRlZCB0aGUgcm91bmQgaGFzIHRoZSBsb3dlc3Qgc2NvcmVcbiAgICAgICAgY29uc3QgbG93ZXN0U2NvcmVQbGF5ZXIgPSBbLi4udGhpcy5zdGF0ZS5wbGF5ZXJzXS5zb3J0KChhLCBiKSA9PiBhLnJvdW5kU2NvcmUgLSBiLnJvdW5kU2NvcmUpWzBdO1xuICAgICAgICBsZXQgZG91YmxlZFNjb3JlID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBkZWJ1Z0xvZyhgTG93ZXN0IHNjb3JlIHBsYXllciBpcyAke2xvd2VzdFNjb3JlUGxheWVyLm5hbWV9IHdpdGggJHtsb3dlc3RTY29yZVBsYXllci5yb3VuZFNjb3JlfSBwb2ludHNgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZSBwbGF5ZXIgd2hvIGZpbmlzaGVkIHRoZSByb3VuZCBkb2Vzbid0IGhhdmUgdGhlIGxvd2VzdCBzY29yZSwgZG91YmxlIHRoZWlyIHJvdW5kIHNjb3JlXG4gICAgICAgIGNvbnN0IGZpbmlzaGVyID0gdGhpcy5zdGF0ZS5wbGF5ZXJzW3JvdW5kRmluaXNoZXJdO1xuICAgICAgICBpZiAoZmluaXNoZXIucm91bmRTY29yZSA+IGxvd2VzdFNjb3JlUGxheWVyLnJvdW5kU2NvcmUgJiYgZmluaXNoZXIucm91bmRTY29yZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2NvcmUgPSBmaW5pc2hlci5yb3VuZFNjb3JlO1xuICAgICAgICAgICAgZmluaXNoZXIuZG91YmxlUm91bmRTY29yZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkb3VibGVkU2NvcmUgPSB0cnVlO1xuICAgICAgICAgICAgZGVidWdMb2coYCR7ZmluaXNoZXIubmFtZX0ncyBzY29yZSBET1VCTEVEIGZyb20gJHtvcmlnaW5hbFNjb3JlfSB0byAke2ZpbmlzaGVyLnJvdW5kU2NvcmV9IWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVidWdMb2coYCR7ZmluaXNoZXIubmFtZX0gZmluaXNoZWQgZmlyc3QgV0lUSCB0aGUgbG93ZXN0IHNjb3JlIC0gbm8gcGVuYWx0eSFgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIHJvdW5kIHNjb3JlIHRvIHRvdGFsIHNjb3JlXG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlVG90YWxTY29yZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogU3RhcnQgYSBuZXcgcm91bmRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnROZXdSb3VuZCgpOiBib29sZWFuIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZ2FtZSBpcyBvdmVyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBsYXllcnMuc29tZShwbGF5ZXIgPT4gcGxheWVyLnRvdGFsU2NvcmUgPj0gV0lOX1RIUkVTSE9MRCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gR2FtZSBpcyBvdmVyXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFJlc2V0IHJvdW5kIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRSb3VuZCsrO1xuICAgICAgICB0aGlzLnN0YXRlLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5kaXNjYXJkUGlsZSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnREcmF3bkNhcmQgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkQ2FyZEluZGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZS5zZWVuQ2FyZHMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXRlLmluaXRpYWxDYXJkU2VsZWN0aW9uUGhhc2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlLmNhcmRzVG9SZXZlYWxDb3VudCA9IElOSVRJQUxfQ0FSRFNfVE9fUkVWRUFMO1xuICAgICAgICB0aGlzLnN0YXRlLnJvdW5kRmluaXNoZXIgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBkZWNrXG4gICAgICAgIHRoaXMuY3JlYXRlRGVjaygpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmVzZXQgcGxheWVyIGNhcmRzXG4gICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIucmVzZXRGb3JOZXdSb3VuZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIERlYWwgbmV3IGNhcmRzXG4gICAgICAgIHRoaXMuZGVhbENhcmRzKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTdGFydCB0aGUgZGlzY2FyZCBwaWxlXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRlY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuc3RhdGUuZGVjay5wb3AoKTtcbiAgICAgICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kaXNjYXJkUGlsZS5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tDYXJkU2VlbihjYXJkLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIFJvdW5kIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNHYW1lT3ZlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNHYW1lT3ZlciB8fCBcbiAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLm1heFJvdW5kcyA+IDAgJiYgdGhpcy5zdGF0ZS5jdXJyZW50Um91bmQgPiB0aGlzLnN0YXRlLm1heFJvdW5kcykgfHxcbiAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGxheWVycy5zb21lKHBsYXllciA9PiBwbGF5ZXIudG90YWxTY29yZSA+PSBXSU5fVEhSRVNIT0xEKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3aW5uZXIgb2YgdGhlIGdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0V2lubmVyKCk6IFBsYXllciB8IG51bGwge1xuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gTG93ZXN0IHRvdGFsIHNjb3JlIHdpbnNcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnN0YXRlLnBsYXllcnNdLnNvcnQoKGEsIGIpID0+IGEudG90YWxTY29yZSAtIGIudG90YWxTY29yZSlbMF07XG4gICAgfVxufSAiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBIdW1hblBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCdwbGF5ZXInLCBuYW1lLCB0cnVlLCAndmFyKC0tcGxheWVyLWNvbG9yKScpO1xuICAgIH1cblxuICAgIC8vIEh1bWFuIHBsYXllcnMgZG9uJ3QgbmVlZCBzcGVjaWFsIEFJIGxvZ2ljIG1ldGhvZHNcbiAgICAvLyBCdXQgd2UgY291bGQgYWRkIG1ldGhvZHMgZm9yIGhhbmRsaW5nIFVJIGludGVyYWN0aW9ucyBzcGVjaWZpYyB0byBodW1hbiBwbGF5ZXJzXG59ICIsImltcG9ydCB7IENhcmQsIFBsYXllciBhcyBQbGF5ZXJJbnRlcmZhY2UgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYXllciBpbXBsZW1lbnRzIFBsYXllckludGVyZmFjZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2FyZHM6IENhcmRbXTtcbiAgICB0b3RhbFNjb3JlOiBudW1iZXI7XG4gICAgcm91bmRTY29yZTogbnVtYmVyO1xuICAgIGxpdmVTY29yZTogbnVtYmVyO1xuICAgIGlzSHVtYW46IGJvb2xlYW47XG4gICAgY29sb3I6IHN0cmluZztcbiAgICByb3VuZFNjb3JlczogbnVtYmVyW107XG4gICAgZmluaXNoZWRSb3VuZHM6IG51bWJlcltdO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBpc0h1bWFuOiBib29sZWFuLCBjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLnRvdGFsU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnJvdW5kU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmxpdmVTY29yZSA9IDA7XG4gICAgICAgIHRoaXMuaXNIdW1hbiA9IGlzSHVtYW47XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yb3VuZFNjb3JlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpbmlzaGVkUm91bmRzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHBsYXllcidzIHN0YXRlIGZvciBhIG5ldyByb3VuZFxuICAgICAqL1xuICAgIHJlc2V0Rm9yTmV3Um91bmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5yb3VuZFNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5saXZlU2NvcmUgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSB0aGUgbGl2ZSBzY29yZSBiYXNlZCBvbiByZXZlYWxlZCBjYXJkc1xuICAgICAqL1xuICAgIGNhbGN1bGF0ZUxpdmVTY29yZSgpOiBudW1iZXIge1xuICAgICAgICB0aGlzLmxpdmVTY29yZSA9IHRoaXMuY2FyZHMucmVkdWNlKChzdW0sIGNhcmQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjYXJkLnJldmVhbGVkID8gc3VtICsgY2FyZC52YWx1ZSA6IHN1bTtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmxpdmVTY29yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIHJvdW5kIHNjb3JlIChzdW0gb2YgYWxsIGNhcmQgdmFsdWVzKVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZVJvdW5kU2NvcmUoKTogbnVtYmVyIHtcbiAgICAgICAgdGhpcy5yb3VuZFNjb3JlID0gdGhpcy5jYXJkcy5yZWR1Y2UoKHN1bSwgY2FyZCkgPT4gc3VtICsgY2FyZC52YWx1ZSwgMCk7XG4gICAgICAgIHRoaXMucm91bmRTY29yZXMucHVzaCh0aGlzLnJvdW5kU2NvcmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb3VuZFNjb3JlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgcm91bmQgc2NvcmUgdG8gdGhlIHRvdGFsIHNjb3JlXG4gICAgICovXG4gICAgdXBkYXRlVG90YWxTY29yZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b3RhbFNjb3JlICs9IHRoaXMucm91bmRTY29yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWNvcmQgdGhhdCB0aGlzIHBsYXllciBmaW5pc2hlZCBhIHJvdW5kXG4gICAgICogQHBhcmFtIHJvdW5kTnVtYmVyIFRoZSByb3VuZCBudW1iZXIgZmluaXNoZWRcbiAgICAgKi9cbiAgICBtYXJrUm91bmRGaW5pc2hlZChyb3VuZE51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmluaXNoZWRSb3VuZHMucHVzaChyb3VuZE51bWJlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG91YmxlIHRoZSBwbGF5ZXIncyByb3VuZCBzY29yZSAoZm9yIHNjb3JpbmcgcnVsZXMpXG4gICAgICovXG4gICAgZG91YmxlUm91bmRTY29yZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTY29yZSA9IHRoaXMucm91bmRTY29yZTtcbiAgICAgICAgdGhpcy5yb3VuZFNjb3JlICo9IDI7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgbGFzdCByb3VuZCBzY29yZSBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYgKHRoaXMucm91bmRTY29yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3VuZFNjb3Jlc1t0aGlzLnJvdW5kU2NvcmVzLmxlbmd0aCAtIDFdID0gdGhpcy5yb3VuZFNjb3JlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhbGwgY2FyZHMgYXJlIHJldmVhbGVkXG4gICAgICovXG4gICAgYXJlQWxsQ2FyZHNSZXZlYWxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZHMuZXZlcnkoY2FyZCA9PiBjYXJkLnJldmVhbGVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlYWwgYWxsIGNhcmRzXG4gICAgICovXG4gICAgcmV2ZWFsQWxsQ2FyZHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNhcmQucmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59ICIsIi8vIEdhbWUgQ29uc3RhbnRzXG5leHBvcnQgY29uc3QgUk9XUyA9IDM7XG5leHBvcnQgY29uc3QgQ09MUyA9IDQ7XG5leHBvcnQgY29uc3QgQ0FSRFNfUEVSX1BMQVlFUiA9IFJPV1MgKiBDT0xTO1xuZXhwb3J0IGNvbnN0IFdJTl9USFJFU0hPTEQgPSAxMDA7XG5leHBvcnQgY29uc3QgSU5JVElBTF9DQVJEU19UT19SRVZFQUwgPSAyO1xuXG4vLyBBbmltYXRpb24gU3BlZWQgQ29uc3RhbnRzIChpbiBtaWxsaXNlY29uZHMpXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX1NQRUVEUyA9IHtcbiAgICBzbG93OiAxMDAwLFxuICAgIG1lZGl1bTogNTAwLFxuICAgIGZhc3Q6IDIwMFxufTtcblxuLy8gVHlwZXMgZm9yIGdhbWUgZWxlbWVudHNcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZCB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBjb2xvckNsYXNzOiBzdHJpbmc7XG4gICAgcmV2ZWFsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZmljdWx0eVNldHRpbmdzIHtcbiAgICBsb29rYmFjazogbnVtYmVyO1xuICAgIGtlZXBUaHJlc2hvbGRzOiB7IGxvdzogbnVtYmVyOyBtaWQ6IG51bWJlciB9O1xuICAgIGtlZXBQcm9iYWJpbGl0aWVzOiB7IGxvdzogbnVtYmVyOyBtaWQ6IG51bWJlcjsgaGlnaDogbnVtYmVyIH07XG4gICAgbm9pc2U6IG51bWJlcjtcbiAgICBlbmRSb3VuZEF3YXJlbmVzczogYm9vbGVhbjtcbiAgICBibHVmZlByb2JhYmlsaXR5OiBudW1iZXI7XG4gICAgY29sdW1uVmFsdWVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgICBzaW11bGF0aW9uQnVkZ2V0OiBudW1iZXI7XG4gICAgaGlnaFZhcmlhbmNlV2hlbkJlaGluZDogYm9vbGVhbjtcbiAgICBsb3dWYXJpYW5jZVdoZW5BaGVhZDogYm9vbGVhbjtcbiAgICBkZWNrTWVtb3J5OiBib29sZWFuO1xuICAgIGRyYXdEaXNjYXJkQmFzZVByb2I6IG51bWJlcjtcbiAgICByaXNrVG9sZXJhbmNlOiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgRGlmZmljdWx0eSA9ICdjYXN1YWwnIHwgJ3NraWxsZWQnIHwgJ2V4cGVydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZERpc3RyaWJ1dGlvbiB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWVyIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjYXJkczogQ2FyZFtdO1xuICAgIHRvdGFsU2NvcmU6IG51bWJlcjtcbiAgICByb3VuZFNjb3JlOiBudW1iZXI7XG4gICAgbGl2ZVNjb3JlOiBudW1iZXI7XG4gICAgaXNIdW1hbjogYm9vbGVhbjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHJvdW5kU2NvcmVzOiBudW1iZXJbXTtcbiAgICBmaW5pc2hlZFJvdW5kczogbnVtYmVyW107XG4gICAgZGlmZmljdWx0eT86IERpZmZpY3VsdHk7XG4gICAgY2FyZE1lbW9yeT86IENhcmRbXTtcbiAgICBiZXN0VGFyZ2V0SW5kZXg/OiBudW1iZXI7XG4gICAgXG4gICAgLy8gTWV0aG9kc1xuICAgIHJlc2V0Rm9yTmV3Um91bmQoKTogdm9pZDtcbiAgICBjYWxjdWxhdGVMaXZlU2NvcmUoKTogbnVtYmVyO1xuICAgIGNhbGN1bGF0ZVJvdW5kU2NvcmUoKTogbnVtYmVyO1xuICAgIHVwZGF0ZVRvdGFsU2NvcmUoKTogdm9pZDtcbiAgICBtYXJrUm91bmRGaW5pc2hlZChyb3VuZE51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBkb3VibGVSb3VuZFNjb3JlKCk6IHZvaWQ7XG4gICAgYXJlQWxsQ2FyZHNSZXZlYWxlZCgpOiBib29sZWFuO1xuICAgIHJldmVhbEFsbENhcmRzKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uIHtcbiAgICB0eXBlOiAna2VlcCcgfCAnZGlzY2FyZCc7XG4gICAgdGFyZ2V0SW5kZXg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVN0YXRlIHtcbiAgICBkZWNrOiBDYXJkW107XG4gICAgZGlzY2FyZFBpbGU6IENhcmRbXTtcbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXTtcbiAgICBjdXJyZW50UGxheWVySW5kZXg6IG51bWJlcjtcbiAgICBjdXJyZW50Um91bmQ6IG51bWJlcjtcbiAgICBtYXhSb3VuZHM6IG51bWJlcjtcbiAgICBpc0dhbWVPdmVyOiBib29sZWFuO1xuICAgIGN1cnJlbnREcmF3bkNhcmQ6IENhcmQgfCBudWxsO1xuICAgIHNlbGVjdGVkQ2FyZEluZGV4OiBudW1iZXIgfCBudWxsO1xuICAgIGFuaW1hdGlvblNwZWVkOiBudW1iZXI7XG4gICAgcm91bmRIaXN0b3J5OiBhbnlbXTsgLy8gRGVmaW5lIGJldHRlciB0eXBlIGlmIG5lZWRlZFxuICAgIHNlZW5DYXJkczogUmVjb3JkPG51bWJlciwgbnVtYmVyPjtcbiAgICBtb3ZlSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgICBpbml0aWFsQ2FyZFNlbGVjdGlvblBoYXNlOiBib29sZWFuO1xuICAgIGNhcmRzVG9SZXZlYWxDb3VudDogbnVtYmVyO1xuICAgIHJvdW5kRmluaXNoZXI6IG51bWJlciB8IG51bGw7XG59ICIsImltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9tb2RlbHMvdHlwZXMnO1xuaW1wb3J0IHsgUk9XUywgQ09MUyB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XG5cbi8qKlxuICogRGVidWcgbG9nZ2luZyBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2cobWVzc2FnZTogc3RyaW5nLCBvYmo6IGFueSA9IG51bGwpOiB2b2lkIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcbiAgICBjb25zdCBsb2dNZXNzYWdlID0gYFske3RpbWVzdGFtcH1dICR7bWVzc2FnZX1gO1xuICAgIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UpO1xuICAgIGlmIChvYmopIHtcbiAgICAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICB9XG59XG5cbi8qKlxuICogRmlzaGVyLVlhdGVzIHNodWZmbGUgYWxnb3JpdGhtIGZvciBjYXJkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKGNhcmRzOiBDYXJkW10pOiBDYXJkW10ge1xuICAgIGNvbnN0IHNodWZmbGVkID0gWy4uLmNhcmRzXTtcbiAgICBmb3IgKGxldCBpID0gc2h1ZmZsZWQubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIFtzaHVmZmxlZFtpXSwgc2h1ZmZsZWRbal1dID0gW3NodWZmbGVkW2pdLCBzaHVmZmxlZFtpXV07XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZDtcbn1cblxuLyoqXG4gKiBHZXQgcm93L2NvbCBmcm9tIGluZGV4IGJhc2VkIG9uIGN1cnJlbnQgZ3JpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um93Q29sRnJvbUluZGV4KGluZGV4OiBudW1iZXIsIGNvbHVtbkNvdW50OiBudW1iZXIpOiB7IHJvdzogbnVtYmVyOyBjb2w6IG51bWJlciB9IHtcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gY29sdW1uQ291bnQpO1xuICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgY29sdW1uQ291bnQ7XG4gICAgcmV0dXJuIHsgcm93LCBjb2wgfTtcbn1cblxuLyoqXG4gKiBHZXQgaW5kZXggZnJvbSByb3cvY29sIGJhc2VkIG9uIGN1cnJlbnQgZ3JpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXhGcm9tUm93Q29sKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgY29sdW1uQ291bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHJvdyAqIGNvbHVtbkNvdW50ICsgY29sO1xufVxuXG4vKipcbiAqIEVzdGltYXRlIHRoZSB2YWx1ZSBvZiBhIGhpZGRlbiBjYXJkIGJhc2VkIG9uIHNlZW4gY2FyZHNcbiAqIEBwYXJhbSBzZWVuQ2FyZHMgUmVjb3JkIG9mIHNlZW4gY2FyZCB2YWx1ZXMgYW5kIHRoZWlyIGNvdW50c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXN0aW1hdGVIaWRkZW5WYWx1ZShzZWVuQ2FyZHM6IFJlY29yZDxudW1iZXIsIG51bWJlcj4pOiBudW1iZXIge1xuICAgIC8vIERlZmF1bHQgZXN0aW1hdGUgKGF2ZXJhZ2UtaXNoIGNhcmQgdmFsdWUpXG4gICAgbGV0IGVzdGltYXRlID0gNTtcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgYmFzZWQgb24gc2VlbiBjYXJkc1xuICAgIGxldCB0b3RhbFNlZW5WYWx1ZXMgPSAwO1xuICAgIGxldCB0b3RhbFNlZW5DYXJkcyA9IDA7XG4gICAgXG4gICAgLy8gQ291bnQgY2FyZHMgaW4gc2VlbiBjYXJkcyBvYmplY3RcbiAgICBmb3IgKGNvbnN0IFt2YWx1ZSwgY291bnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlZW5DYXJkcykpIHtcbiAgICAgICAgdG90YWxTZWVuVmFsdWVzICs9IE51bWJlcih2YWx1ZSkgKiBjb3VudDtcbiAgICAgICAgdG90YWxTZWVuQ2FyZHMgKz0gY291bnQ7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBzb21lIHJhbmRvbW5lc3Mgd2l0aGluIMKxMS41IG9mIHRoZSBlc3RpbWF0ZVxuICAgIGVzdGltYXRlICs9IChNYXRoLnJhbmRvbSgpICogMyAtIDEuNSk7XG4gICAgXG4gICAgLy8gUm91bmQgdG8gbmVhcmVzdCAwLjVcbiAgICBlc3RpbWF0ZSA9IE1hdGgucm91bmQoZXN0aW1hdGUgKiAyKSAvIDI7XG4gICAgXG4gICAgcmV0dXJuIGVzdGltYXRlO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcGxheWVyIHNob3VsZCBmaW5pc2ggdGhlIHJvdW5kIGJhc2VkIG9uIHJlbGF0aXZlIHNjb3Jlc1xuICogQHBhcmFtIHBsYXllclNjb3JlIEN1cnJlbnQgcGxheWVyJ3Mgc2NvcmVcbiAqIEBwYXJhbSBvdGhlclNjb3JlcyBBcnJheSBvZiBvdGhlciBwbGF5ZXJzJyBzY29yZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEZpbmlzaFJvdW5kKHBsYXllclNjb3JlOiBudW1iZXIsIG90aGVyU2NvcmVzOiBudW1iZXJbXSk6IGJvb2xlYW4ge1xuICAgIC8vIFNvcnQgc2NvcmVzIChsb3dlc3QgaXMgYmVzdClcbiAgICBjb25zdCBhbGxTY29yZXMgPSBbcGxheWVyU2NvcmUsIC4uLm90aGVyU2NvcmVzXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgXG4gICAgLy8gSWYgcGxheWVyIGhhcyBsb3dlc3Qgc2NvcmUsIGZpbmlzaGluZyBpcyBnb29kXG4gICAgcmV0dXJuIHBsYXllclNjb3JlID09PSBhbGxTY29yZXNbMF07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHBsYXllciBzaG91bGQgcGxheSBoaWdoIHZhcmlhbmNlIChyaXNreSkgc3RyYXRlZ3lcbiAqIEBwYXJhbSBwbGF5ZXJTY29yZSBDdXJyZW50IHBsYXllcidzIHZpc2libGUgc2NvcmVcbiAqIEBwYXJhbSBvdGhlclNjb3JlcyBBcnJheSBvZiBvdGhlciBwbGF5ZXJzJyB2aXNpYmxlIHNjb3Jlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUGxheUhpZ2hWYXJpYW5jZShwbGF5ZXJTY29yZTogbnVtYmVyLCBvdGhlclNjb3JlczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAvLyBTb3J0IHNjb3JlcyAobG93ZXN0IGlzIGJlc3QpXG4gICAgY29uc3QgYWxsU2NvcmVzID0gW3BsYXllclNjb3JlLCAuLi5vdGhlclNjb3Jlc10uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIFxuICAgIC8vIElmIHBsYXllciBpcyBtb3JlIHRoYW4gMTAgcG9pbnRzIGJlaGluZCB0aGUgbGVhZGVyLCBwbGF5IGhpZ2ggdmFyaWFuY2VcbiAgICByZXR1cm4gcGxheWVyU2NvcmUgLSBhbGxTY29yZXNbMF0gPj0gMTA7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHBsYXllciBzaG91bGQgcGxheSBsb3cgdmFyaWFuY2UgKHNhZmUpIHN0cmF0ZWd5XG4gKiBAcGFyYW0gcGxheWVyU2NvcmUgQ3VycmVudCBwbGF5ZXIncyB2aXNpYmxlIHNjb3JlXG4gKiBAcGFyYW0gb3RoZXJTY29yZXMgQXJyYXkgb2Ygb3RoZXIgcGxheWVycycgdmlzaWJsZSBzY29yZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFBsYXlMb3dWYXJpYW5jZShwbGF5ZXJTY29yZTogbnVtYmVyLCBvdGhlclNjb3JlczogbnVtYmVyW10pOiBib29sZWFuIHtcbiAgICAvLyBTb3J0IHNjb3JlcyAobG93ZXN0IGlzIGJlc3QpXG4gICAgY29uc3QgYWxsU2NvcmVzID0gW3BsYXllclNjb3JlLCAuLi5vdGhlclNjb3Jlc10uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIFxuICAgIC8vIElmIHBsYXllciBpcyBpbiBmaXJzdCBwbGFjZSBhbmQgYWhlYWQgYnkgMTUrIHBvaW50cywgcGxheSBsb3cgdmFyaWFuY2VcbiAgICBpZiAocGxheWVyU2NvcmUgPT09IGFsbFNjb3Jlc1swXSkge1xuICAgICAgICBjb25zdCBzZWNvbmRQbGFjZVNjb3JlID0gYWxsU2NvcmVzWzFdO1xuICAgICAgICByZXR1cm4gc2Vjb25kUGxhY2VTY29yZSAtIHBsYXllclNjb3JlID49IDE1O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG59ICIsImltcG9ydCB7IERpZmZpY3VsdHlTZXR0aW5ncywgQ2FyZERpc3RyaWJ1dGlvbiB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XG5cbi8vIERpZmZpY3VsdHkgUHJlc2V0c1xuZXhwb3J0IGNvbnN0IERJRkZJQ1VMVFlfUFJFU0VUUzogUmVjb3JkPHN0cmluZywgRGlmZmljdWx0eVNldHRpbmdzPiA9IHtcbiAgICBjYXN1YWw6IHsgXG4gICAgICAgIGxvb2tiYWNrOiAwLCBcbiAgICAgICAga2VlcFRocmVzaG9sZHM6IHsgbG93OiA0LCBtaWQ6IDcgfSwgXG4gICAgICAgIGtlZXBQcm9iYWJpbGl0aWVzOiB7IGxvdzogMC44LCBtaWQ6IDAuNSwgaGlnaDogMC4yIH0sXG4gICAgICAgIG5vaXNlOiAwLjI1LFxuICAgICAgICBlbmRSb3VuZEF3YXJlbmVzczogZmFsc2UsXG4gICAgICAgIGJsdWZmUHJvYmFiaWxpdHk6IDAsXG4gICAgICAgIGNvbHVtblZhbHVlVGhyZXNob2xkOiAzLFxuICAgICAgICBzaW11bGF0aW9uQnVkZ2V0OiAwLFxuICAgICAgICBoaWdoVmFyaWFuY2VXaGVuQmVoaW5kOiBmYWxzZSxcbiAgICAgICAgbG93VmFyaWFuY2VXaGVuQWhlYWQ6IGZhbHNlLFxuICAgICAgICBkZWNrTWVtb3J5OiBmYWxzZSxcbiAgICAgICAgZHJhd0Rpc2NhcmRCYXNlUHJvYjogMC4yNSwgIC8vIEJhc2UgcHJvYmFiaWxpdHkgdG8gZHJhdyBmcm9tIGRpc2NhcmQgcGlsZVxuICAgICAgICByaXNrVG9sZXJhbmNlOiAwLjAsICAgICAgICAgLy8gTG93IHJpc2sgdG9sZXJhbmNlXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1ha2VzIHJhbmRvbSBkZWNpc2lvbnMgd2l0aCBiYXNpYyB0aHJlc2hvbGRzLlwiXG4gICAgfSxcbiAgICBza2lsbGVkOiB7IFxuICAgICAgICBsb29rYmFjazogMSwgXG4gICAgICAgIGtlZXBUaHJlc2hvbGRzOiB7IGxvdzogNSwgbWlkOiA4IH0sIFxuICAgICAgICBrZWVwUHJvYmFiaWxpdGllczogeyBsb3c6IDAuODUsIG1pZDogMC42LCBoaWdoOiAwLjMgfSxcbiAgICAgICAgbm9pc2U6IDAuMDgsXG4gICAgICAgIGVuZFJvdW5kQXdhcmVuZXNzOiB0cnVlLFxuICAgICAgICBibHVmZlByb2JhYmlsaXR5OiAwLjA1LCAgICAgLy8gNSUgY2hhbmNlIHRvIGJsdWZmIGJ5IGRpc2NhcmRpbmcgZ29vZCBjYXJkc1xuICAgICAgICBjb2x1bW5WYWx1ZVRocmVzaG9sZDogNiwgICAgLy8gV2lsbCBwdXJzdWUgdHJpcGxldHMgdXAgdG8gdmFsdWUgNlxuICAgICAgICBzaW11bGF0aW9uQnVkZ2V0OiAxMCwgICAgICAgLy8gTGltaXRlZCBzaW11bGF0aW9uIGJ1ZGdldFxuICAgICAgICBoaWdoVmFyaWFuY2VXaGVuQmVoaW5kOiB0cnVlLFxuICAgICAgICBsb3dWYXJpYW5jZVdoZW5BaGVhZDogdHJ1ZSxcbiAgICAgICAgZGVja01lbW9yeTogZmFsc2UsICAgICAgICAgIC8vIERvZXNuJ3QgcmVtZW1iZXIgYWNyb3NzIHJvdW5kc1xuICAgICAgICBkcmF3RGlzY2FyZEJhc2VQcm9iOiAwLjUsICAgLy8gSGlnaGVyIGNoYW5jZSB0byBldmFsdWF0ZSBkaXNjYXJkXG4gICAgICAgIHJpc2tUb2xlcmFuY2U6IDAuNCwgICAgICAgICAvLyBNZWRpdW0gcmlzayB0b2xlcmFuY2VcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRXZhbHVhdGVzIG9wdGlvbnMgdXNpbmcgc2ltcGxlIGhldXJpc3RpY3MgYW5kIHNvbWUgdGFjdGljYWwgYXdhcmVuZXNzLlwiXG4gICAgfSxcbiAgICBleHBlcnQ6IHsgXG4gICAgICAgIGxvb2tiYWNrOiBJbmZpbml0eSwgXG4gICAgICAgIGtlZXBUaHJlc2hvbGRzOiB7IGxvdzogNiwgbWlkOiA5IH0sIFxuICAgICAgICBrZWVwUHJvYmFiaWxpdGllczogeyBsb3c6IDAuOSwgbWlkOiAwLjcsIGhpZ2g6IDAuNCB9LFxuICAgICAgICBub2lzZTogMCxcbiAgICAgICAgZW5kUm91bmRBd2FyZW5lc3M6IHRydWUsXG4gICAgICAgIGJsdWZmUHJvYmFiaWxpdHk6IDAuMTUsICAgICAvLyAxNSUgY2hhbmNlIHRvIGJsdWZmIHdpdGggZ29vZCBjYXJkc1xuICAgICAgICBjb2x1bW5WYWx1ZVRocmVzaG9sZDogMTIsICAgLy8gV2lsbCBwdXJzdWUgdHJpcGxldHMgYXQgYW55IHZhbHVlXG4gICAgICAgIHNpbXVsYXRpb25CdWRnZXQ6IDMwLCAgICAgICAvLyBIaWdoZXIgc2ltdWxhdGlvbiBidWRnZXRcbiAgICAgICAgaGlnaFZhcmlhbmNlV2hlbkJlaGluZDogdHJ1ZSxcbiAgICAgICAgbG93VmFyaWFuY2VXaGVuQWhlYWQ6IHRydWUsXG4gICAgICAgIGRlY2tNZW1vcnk6IHRydWUsICAgICAgICAgICAvLyBSZW1lbWJlcnMgY2FyZHMgYWNyb3NzIHJvdW5kc1xuICAgICAgICBkcmF3RGlzY2FyZEJhc2VQcm9iOiAwLjcsICAgLy8gTXVjaCBoaWdoZXIgYmFzZWxpbmUgZm9yIGRpc2NhcmQgZXZhbHVhdGlvblxuICAgICAgICByaXNrVG9sZXJhbmNlOiAwLjcsICAgICAgICAgLy8gSGlnaCByaXNrIHRvbGVyYW5jZVxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VzIGFkdmFuY2VkIHNpbXVsYXRpb24sIGNhcmQgY291bnRpbmcsIGFuZCBzdHJhdGVnaWMgcGxhbm5pbmcuXCJcbiAgICB9XG59O1xuXG4vLyBDYXJkIFZhbHVlcyBhbmQgRGlzdHJpYnV0aW9uXG5leHBvcnQgY29uc3QgQ0FSRF9ESVNUUklCVVRJT046IENhcmREaXN0cmlidXRpb25bXSA9IFtcbiAgICB7IHZhbHVlOiAtMiwgY291bnQ6IDUsIGNvbG9yOiAnY2FyZC1tMicgfSxcbiAgICB7IHZhbHVlOiAtMSwgY291bnQ6IDEwLCBjb2xvcjogJ2NhcmQtbTEnIH0sXG4gICAgeyB2YWx1ZTogMCwgY291bnQ6IDE1LCBjb2xvcjogJ2NhcmQtMCcgfSxcbiAgICB7IHZhbHVlOiAxLCBjb3VudDogMTAsIGNvbG9yOiAnY2FyZC0xJyB9LFxuICAgIHsgdmFsdWU6IDIsIGNvdW50OiAxMCwgY29sb3I6ICdjYXJkLTInIH0sXG4gICAgeyB2YWx1ZTogMywgY291bnQ6IDEwLCBjb2xvcjogJ2NhcmQtMycgfSxcbiAgICB7IHZhbHVlOiA0LCBjb3VudDogMTAsIGNvbG9yOiAnY2FyZC00JyB9LFxuICAgIHsgdmFsdWU6IDUsIGNvdW50OiAxMCwgY29sb3I6ICdjYXJkLTUnIH0sXG4gICAgeyB2YWx1ZTogNiwgY291bnQ6IDEwLCBjb2xvcjogJ2NhcmQtNicgfSxcbiAgICB7IHZhbHVlOiA3LCBjb3VudDogMTAsIGNvbG9yOiAnY2FyZC03JyB9LFxuICAgIHsgdmFsdWU6IDgsIGNvdW50OiAxMCwgY29sb3I6ICdjYXJkLTgnIH0sXG4gICAgeyB2YWx1ZTogOSwgY291bnQ6IDEwLCBjb2xvcjogJ2NhcmQtOScgfSxcbiAgICB7IHZhbHVlOiAxMCwgY291bnQ6IDEwLCBjb2xvcjogJ2NhcmQtMTAnIH0sXG4gICAgeyB2YWx1ZTogMTEsIGNvdW50OiAxMCwgY29sb3I6ICdjYXJkLTExJyB9LFxuICAgIHsgdmFsdWU6IDEyLCBjb3VudDogMTAsIGNvbG9yOiAnY2FyZC0xMicgfVxuXTsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vbW9kZWxzL0dhbWUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX1NQRUVEUywgSU5JVElBTF9DQVJEU19UT19SRVZFQUwgfSBmcm9tICcuL21vZGVscy90eXBlcyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4vdXRpbHMvR2FtZVV0aWxzJztcbmltcG9ydCB7IENvbXB1dGVyUGxheWVyIH0gZnJvbSAnLi9tb2RlbHMvQ29tcHV0ZXJQbGF5ZXInO1xuXG4vLyBJbXBvcnQgQ1NTXG5pbXBvcnQgJy4uL3NreWpvLXN0eWxlcy5jc3MnO1xuXG4vLyBJbml0aWFsaXplIHRoZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxuLy8gRE9NIEVsZW1lbnRzXG5jb25zdCB3ZWxjb21lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUtc2NyZWVuJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2NyZWVuJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCByb3VuZEVuZFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3VuZC1lbmQtc2NyZWVuJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBnYW1lRW5kU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZW5kLXNjcmVlbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgcGxheWVyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1uYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgbmV4dFJvdW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcm91bmQtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5jb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3Qga2VlcENhcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2VlcC1jYXJkLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZGlzY2FyZENhcmRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY2FyZC1jYXJkLWJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgY2FuY2VsRHJhd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZHJhdy1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbmNvbnN0IGNhcmRTZWxlY3Rpb25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtc2VsZWN0aW9uLWFyZWEnKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGNvbXB1dGVyQ2FyZEFuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1jYXJkLWFuaW1hdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgY3VycmVudFR1cm5JbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC10dXJuLWluZGljYXRvcicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgdHVybkluZGljYXRvclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHVybi1pbmRpY2F0b3ItdGV4dCcpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgcGxheWVyTmFtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUtZGlzcGxheScpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgY3VycmVudFBsYXllckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wbGF5ZXIgc3BhbicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3Qgcm91bmRJbmZvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb3VuZC1pbmZvIHNwYW4nKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHBsYXllckNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jYXJkcycpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgY29tcHV0ZXIxQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXIxIC5taW5pLWNhcmRzJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBjb21wdXRlcjJDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wdXRlcjIgLm1pbmktY2FyZHMnKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGRyYXdQaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXctcGlsZScpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgZGlzY2FyZFBpbGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNjYXJkLXBpbGUnKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IG1lc3NhZ2VFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBhbmltYXRpb25TcGVlZFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbmltYXRpb24tc3BlZWQnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcbmNvbnN0IG1heFJvdW5kc1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgtcm91bmRzJykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5jb25zdCBjb21wdXRlcjFEaWZmaWN1bHR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyMS1kaWZmaWN1bHR5JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5jb25zdCBjb21wdXRlcjJEaWZmaWN1bHR5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyMi1kaWZmaWN1bHR5JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5jb25zdCByb3VuZFNjb3JlYm9hcmRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3VuZC1zY29yZWJvYXJkLXRhYmxlJykgYXMgSFRNTFRhYmxlRWxlbWVudDtcbmNvbnN0IHBsYXllckZpbmFsR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItZmluYWwtZ3JpZCcpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgY29tcHV0ZXIxRmluYWxHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyMS1maW5hbC1ncmlkJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBjb21wdXRlcjJGaW5hbEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXIyLWZpbmFsLWdyaWQnKSBhcyBIVE1MRWxlbWVudDtcblxuLy8gRGVidWcgcGFuZWwgc2V0dXBcbmNvbnN0IGRlYnVnVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnLXRvZ2dsZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuY29uc3QgZGVidWdQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWJ1Zy1wYW5lbCcpIGFzIEhUTUxFbGVtZW50O1xuXG4vLyBEZWJ1ZyBwYW5lbCBmdW5jdGlvbmFsaXR5XG5kZWJ1Z1RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChkZWJ1Z1BhbmVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCAhZGVidWdQYW5lbC5zdHlsZS5kaXNwbGF5KSB7XG4gICAgICAgIGRlYnVnUGFuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVidWdQYW5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn0pO1xuXG4vLyBFdmVudCBsaXN0ZW5lcnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gU2hvdyBhbiBhbGVydCB0byBjb25maXJtIEpTIGNoYW5nZXMgYXJlIGJlaW5nIGFwcGxpZWRcbiAgICBhbGVydChcIk5FVyBWRVJTSU9OISBKUyBjaGFuZ2VzIGFwcGxpZWQgc3VjY2Vzc2Z1bGx5ISBWZXJzaW9uOiBcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG4gICAgXG4gICAgLy8gU2V0IGluaXRpYWwgYW5pbWF0aW9uIHNwZWVkc1xuICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkcyhBTklNQVRJT05fU1BFRURTLm1lZGl1bSk7XG4gICAgXG4gICAgLy8gQWRkIGRpcmVjdCBldmVudCBkZWxlZ2F0aW9uIGZvciBwbGF5ZXIgY2FyZHNcbiAgICBwbGF5ZXJDYXJkc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNhcmRFbCA9IHRhcmdldC5jbG9zZXN0KCcuY2FyZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgaWYgKCFjYXJkRWwpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoY2FyZEVsLmRhdGFzZXQuaW5kZXggfHwgJy0xJyk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGRlYnVnTG9nKGBDYXJkIGNsaWNrZWQgdmlhIGRlbGVnYXRpb246ICR7aW5kZXh9YCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgICAgICBjb25zdCBjYXJkID0gc3RhdGUucGxheWVyc1swXS5jYXJkc1tpbmRleF07XG4gICAgICAgIFxuICAgICAgICBpZiAoIWNhcmQpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmIChzdGF0ZS5pbml0aWFsQ2FyZFNlbGVjdGlvblBoYXNlICYmICFjYXJkLnJldmVhbGVkKSB7XG4gICAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbCBzZWxlY3Rpb24sIGNsaWNraW5nIHJldmVhbHMgdGhlIGNhcmRcbiAgICAgICAgICAgIGhhbmRsZUluaXRpYWxDYXJkU2VsZWN0aW9uKGluZGV4KTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPT09IDAgJiYgc3RhdGUuY3VycmVudERyYXduQ2FyZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRHVyaW5nIG5vcm1hbCBnYW1lcGxheSwgY2xpY2tpbmcgcmVwbGFjZXMgdGhlIGNhcmRcbiAgICAgICAgICAgIGhhbmRsZUNhcmRDbGljayhpbmRleCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ID09PSAwICYmICFjYXJkLnJldmVhbGVkKSB7XG4gICAgICAgICAgICAvLyBPciByZXZlYWxzIGEgZmFjZS1kb3duIGNhcmRcbiAgICAgICAgICAgIHJldmVhbENhcmQoMCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy8gU3RhcnQgZ2FtZSBidXR0b25cbiAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHdlbGNvbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGdhbWVTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBnYW1lIHdpdGggc2V0dGluZ3NcbiAgICAgICAgY29uc3QgcGxheWVyTmFtZSA9IHBsYXllck5hbWVJbnB1dC52YWx1ZS50cmltKCkgfHwgJ1lvdSc7XG4gICAgICAgIGNvbnN0IG1heFJvdW5kcyA9IHBhcnNlSW50KG1heFJvdW5kc1NlbGVjdC52YWx1ZSkgfHwgMztcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uU3BlZWQgPSBBTklNQVRJT05fU1BFRURTW2FuaW1hdGlvblNwZWVkU2VsZWN0LnZhbHVlIGFzIGtleW9mIHR5cGVvZiBBTklNQVRJT05fU1BFRURTXTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXIxRGlmZmljdWx0eSA9IGNvbXB1dGVyMURpZmZpY3VsdHlTZWxlY3QudmFsdWUgYXMgJ2Nhc3VhbCcgfCAnc2tpbGxlZCcgfCAnZXhwZXJ0JztcbiAgICAgICAgY29uc3QgY29tcHV0ZXIyRGlmZmljdWx0eSA9IGNvbXB1dGVyMkRpZmZpY3VsdHlTZWxlY3QudmFsdWUgYXMgJ2Nhc3VhbCcgfCAnc2tpbGxlZCcgfCAnZXhwZXJ0JztcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBhbmltYXRpb24gc3BlZWRzIGluIENTU1xuICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZHMoYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICBcbiAgICAgICAgZ2FtZS5pbml0R2FtZShwbGF5ZXJOYW1lLCBtYXhSb3VuZHMsIGFuaW1hdGlvblNwZWVkLCBjb21wdXRlcjFEaWZmaWN1bHR5LCBjb21wdXRlcjJEaWZmaWN1bHR5KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFVwZGF0ZSBVSVxuICAgICAgICB1cGRhdGVVSSgpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIE5leHQgcm91bmQgYnV0dG9uXG4gICAgbmV4dFJvdW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoZ2FtZS5pc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgICAgIC8vIFNob3cgZ2FtZSBlbmQgc2NyZWVuXG4gICAgICAgICAgICByb3VuZEVuZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGdhbWVFbmRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTdGFydCBhIG5ldyByb3VuZFxuICAgICAgICAgICAgZ2FtZS5zdGFydE5ld1JvdW5kKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEhpZGUgcm91bmQgZW5kIHNjcmVlbiwgc2hvdyBnYW1lIHNjcmVlblxuICAgICAgICAgICAgcm91bmRFbmRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgVUlcbiAgICAgICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBOZXcgZ2FtZSBidXR0b25cbiAgICBuZXdHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBnYW1lRW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB3ZWxjb21lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIERyYXcgYW5kIGRpc2NhcmQgcGlsZSBjbGlja3NcbiAgICBkcmF3UGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZURyYXdQaWxlQ2xpY2spO1xuICAgIGRpc2NhcmRQaWxlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEaXNjYXJkUGlsZUNsaWNrKTtcbiAgICBcbiAgICAvLyBDYXJkIGFjdGlvbiBidXR0b25zXG4gICAga2VlcENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVLZWVwQ2FyZCk7XG4gICAgZGlzY2FyZENhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVEaXNjYXJkQ2FyZCk7XG4gICAgY2FuY2VsRHJhd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNhbmNlbERyYXcpO1xufSk7XG5cbi8vIFVwZGF0ZSB0aGUgVUkgYmFzZWQgb24gdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZVxuZnVuY3Rpb24gdXBkYXRlVUkoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHBsYXllciBuYW1lXG4gICAgcGxheWVyTmFtZURpc3BsYXkudGV4dENvbnRlbnQgPSBzdGF0ZS5wbGF5ZXJzWzBdLm5hbWU7XG4gICAgXG4gICAgLy8gVXBkYXRlIGN1cnJlbnQgcGxheWVyIGRpc3BsYXlcbiAgICBpZiAoc3RhdGUuaW5pdGlhbENhcmRTZWxlY3Rpb25QaGFzZSkge1xuICAgICAgICBjdXJyZW50UGxheWVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiSW5pdGlhbCBTZWxlY3Rpb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50UGxheWVyRGlzcGxheS50ZXh0Q29udGVudCA9IHN0YXRlLnBsYXllcnNbc3RhdGUuY3VycmVudFBsYXllckluZGV4XS5uYW1lO1xuICAgIH1cbiAgICBcbiAgICAvLyBVcGRhdGUgcm91bmQgaW5mb1xuICAgIHJvdW5kSW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBzdGF0ZS5jdXJyZW50Um91bmQudG9TdHJpbmcoKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgcGxheWVyIGNhcmRzXG4gICAgdXBkYXRlUGxheWVyQ2FyZHMoKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgY29tcHV0ZXIgY2FyZHNcbiAgICB1cGRhdGVDb21wdXRlckNhcmRzKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGRpc2NhcmQgcGlsZVxuICAgIHVwZGF0ZURpc2NhcmRQaWxlKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGRyYXcgcGlsZVxuICAgIHVwZGF0ZURyYXdQaWxlKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHNjb3Jlc1xuICAgIHVwZGF0ZVNjb3JlcygpO1xuICAgIFxuICAgIC8vIEhpZ2hsaWdodCBjdXJyZW50IHBsYXllclxuICAgIGhpZ2hsaWdodEN1cnJlbnRQbGF5ZXIoKTtcbn1cblxuLy8gVXBkYXRlIHBsYXllciBjYXJkcyBkaXNwbGF5XG5mdW5jdGlvbiB1cGRhdGVQbGF5ZXJDYXJkcygpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBwbGF5ZXJDYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGN1cnJlbnQgbnVtYmVyIG9mIGNvbHVtbnMgYmFzZWQgb24gcGxheWVyIGNhcmRzXG4gICAgY29uc3QgY3VycmVudENvbHMgPSBNYXRoLmNlaWwoc3RhdGUucGxheWVyc1swXS5jYXJkcy5sZW5ndGggLyAzKTsgLy8gQXNzdW1pbmcgUk9XUyA9IDNcbiAgICBcbiAgICAvLyBTZXQgdGhlIGdyaWQgdGVtcGxhdGUgY29sdW1uc1xuICAgIHBsYXllckNhcmRzQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y3VycmVudENvbHN9LCAxZnIpYDtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBsYXllcnNbMF0uY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHN0YXRlLnBsYXllcnNbMF0uY2FyZHNbaV07XG4gICAgICAgIGNvbnN0IGNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRWwuY2xhc3NOYW1lID0gYGNhcmQgJHtjYXJkLnJldmVhbGVkID8gJ2ZsaXBwZWQnIDogJyd9YDtcbiAgICAgICAgY2FyZEVsLmRhdGFzZXQuaW5kZXggPSBpLnRvU3RyaW5nKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHByb3BlciBwb3NpdGlvbiBpbiB0aGUgZ3JpZFxuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjdXJyZW50Q29scyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IGkgJSBjdXJyZW50Q29scztcbiAgICAgICAgXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBjYXJkIHVzaW5nIGdyaWRcbiAgICAgICAgY2FyZEVsLnN0eWxlLmdyaWRSb3cgPSBgJHtyb3cgKyAxfWA7XG4gICAgICAgIGNhcmRFbC5zdHlsZS5ncmlkQ29sdW1uID0gYCR7Y29sICsgMX1gO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRJbm5lci5jbGFzc05hbWUgPSAnY2FyZC1pbm5lcic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZEZyb250LmNsYXNzTmFtZSA9IGBjYXJkLWZyb250ICR7Y2FyZC5jb2xvckNsYXNzfWA7XG4gICAgICAgIGNhcmRGcm9udC50ZXh0Q29udGVudCA9IGNhcmQudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmRCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRCYWNrLmNsYXNzTmFtZSA9ICdjYXJkLWJhY2snO1xuICAgICAgICBcbiAgICAgICAgY2FyZElubmVyLmFwcGVuZENoaWxkKGNhcmRGcm9udCk7XG4gICAgICAgIGNhcmRJbm5lci5hcHBlbmRDaGlsZChjYXJkQmFjayk7XG4gICAgICAgIGNhcmRFbC5hcHBlbmRDaGlsZChjYXJkSW5uZXIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGNsaWNrIGV2ZW50IGZvciBwbGF5ZXIncyB0dXJuIC0gdXNlIGNsb3N1cmUgdG8gY2FwdHVyZSB0aGUgY3VycmVudCBpbmRleFxuICAgICAgICBjb25zdCBjYXJkSW5kZXggPSBpOyAvLyBDYXB0dXJlIHRoZSBjdXJyZW50IGluZGV4IGluIGEgY2xvc3VyZVxuICAgICAgICBjYXJkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhgQ2FyZCBjbGlja2VkIHdpdGggaW5kZXggJHtjYXJkSW5kZXh9YCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuaW5pdGlhbENhcmRTZWxlY3Rpb25QaGFzZSAmJiAhY2FyZC5yZXZlYWxlZCkge1xuICAgICAgICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsIHNlbGVjdGlvbiwgY2xpY2tpbmcgcmV2ZWFscyB0aGUgY2FyZFxuICAgICAgICAgICAgICAgIGhhbmRsZUluaXRpYWxDYXJkU2VsZWN0aW9uKGNhcmRJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPT09IDAgJiYgY3VycmVudFN0YXRlLmN1cnJlbnREcmF3bkNhcmQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBEdXJpbmcgbm9ybWFsIGdhbWVwbGF5LCBjbGlja2luZyByZXBsYWNlcyB0aGUgY2FyZFxuICAgICAgICAgICAgICAgIGhhbmRsZUNhcmRDbGljayhjYXJkSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50U3RhdGUuY3VycmVudFBsYXllckluZGV4ID09PSAwICYmICFjYXJkLnJldmVhbGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gT3IgcmV2ZWFscyBhIGZhY2UtZG93biBjYXJkXG4gICAgICAgICAgICAgICAgcmV2ZWFsQ2FyZCgwLCBjYXJkSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHBsYXllckNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRFbCk7XG4gICAgfVxufVxuXG4vLyBVcGRhdGUgY29tcHV0ZXIgY2FyZHMgZGlzcGxheVxuZnVuY3Rpb24gdXBkYXRlQ29tcHV0ZXJDYXJkcygpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAvLyBDb21wdXRlciAxXG4gICAgdXBkYXRlTWluaUNhcmRzKGNvbXB1dGVyMUNhcmRzQ29udGFpbmVyLCBzdGF0ZS5wbGF5ZXJzWzFdLmNhcmRzKTtcbiAgICBcbiAgICAvLyBDb21wdXRlciAyXG4gICAgdXBkYXRlTWluaUNhcmRzKGNvbXB1dGVyMkNhcmRzQ29udGFpbmVyLCBzdGF0ZS5wbGF5ZXJzWzJdLmNhcmRzKTtcbn1cblxuLy8gVXBkYXRlIG1pbmkgY2FyZHMgZm9yIGEgY29tcHV0ZXIgcGxheWVyXG5mdW5jdGlvbiB1cGRhdGVNaW5pQ2FyZHMoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZHM6IGFueVtdKTogdm9pZCB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIC8vIENhbGN1bGF0ZSB0aGUgY3VycmVudCBudW1iZXIgb2YgY29sdW1ucyBiYXNlZCBvbiBjYXJkc1xuICAgIGNvbnN0IGN1cnJlbnRDb2xzID0gTWF0aC5jZWlsKGNhcmRzLmxlbmd0aCAvIDMpOyAvLyBBc3N1bWluZyBST1dTID0gM1xuICAgIFxuICAgIC8vIFNldCB0aGUgZ3JpZCB0ZW1wbGF0ZSBjb2x1bW5zXG4gICAgY29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y3VycmVudENvbHN9LCAxZnIpYDtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBjYXJkc1tpXTtcbiAgICAgICAgY29uc3QgbWluaUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWluaUNhcmQuY2xhc3NOYW1lID0gYG1pbmktY2FyZCAke2NhcmQucmV2ZWFsZWQgPyAncmV2ZWFsZWQgJyArIGNhcmQuY29sb3JDbGFzcyA6ICcnfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHByb3BlciBwb3NpdGlvbiBpbiB0aGUgZ3JpZFxuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjdXJyZW50Q29scyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IGkgJSBjdXJyZW50Q29scztcbiAgICAgICAgXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBjYXJkIHVzaW5nIGdyaWRcbiAgICAgICAgbWluaUNhcmQuc3R5bGUuZ3JpZFJvdyA9IGAke3JvdyArIDF9YDtcbiAgICAgICAgbWluaUNhcmQuc3R5bGUuZ3JpZENvbHVtbiA9IGAke2NvbCArIDF9YDtcbiAgICAgICAgXG4gICAgICAgIGlmIChjYXJkLnJldmVhbGVkKSB7XG4gICAgICAgICAgICBtaW5pQ2FyZC50ZXh0Q29udGVudCA9IGNhcmQudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1pbmlDYXJkKTtcbiAgICB9XG59XG5cbi8vIFVwZGF0ZSB0aGUgZGlzY2FyZCBwaWxlIGRpc3BsYXlcbmZ1bmN0aW9uIHVwZGF0ZURpc2NhcmRQaWxlKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IGNhcmRFbCA9IGRpc2NhcmRQaWxlRWwucXVlcnlTZWxlY3RvcignLmNhcmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjYXJkRWwuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIGNhcmRFbC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBpZiAoc3RhdGUuZGlzY2FyZFBpbGUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0b3BDYXJkID0gc3RhdGUuZGlzY2FyZFBpbGVbc3RhdGUuZGlzY2FyZFBpbGUubGVuZ3RoIC0gMV07XG4gICAgICAgIGNhcmRFbC5jbGFzc0xpc3QuYWRkKCdmbGlwcGVkJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZElubmVyLmNsYXNzTmFtZSA9ICdjYXJkLWlubmVyJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmRGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRnJvbnQuY2xhc3NOYW1lID0gYGNhcmQtZnJvbnQgJHt0b3BDYXJkLmNvbG9yQ2xhc3N9YDtcbiAgICAgICAgY2FyZEZyb250LnRleHRDb250ZW50ID0gdG9wQ2FyZC52YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZEJhY2suY2xhc3NOYW1lID0gJ2NhcmQtYmFjayc7XG4gICAgICAgIFxuICAgICAgICBjYXJkSW5uZXIuYXBwZW5kQ2hpbGQoY2FyZEZyb250KTtcbiAgICAgICAgY2FyZElubmVyLmFwcGVuZENoaWxkKGNhcmRCYWNrKTtcbiAgICAgICAgY2FyZEVsLmFwcGVuZENoaWxkKGNhcmRJbm5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgfVxufVxuXG4vLyBVcGRhdGUgdGhlIGRyYXcgcGlsZSBkaXNwbGF5XG5mdW5jdGlvbiB1cGRhdGVEcmF3UGlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBjYXJkRWwgPSBkcmF3UGlsZS5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIFxuICAgIGlmIChzdGF0ZS5kZWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2JhY2snKTtcbiAgICB9XG59XG5cbi8vIFVwZGF0ZSBzY29yZSBkaXNwbGF5c1xuZnVuY3Rpb24gdXBkYXRlU2NvcmVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0b3RhbCBzY29yZXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWFyZWEgLnNjb3JlIHNwYW4nKSEudGV4dENvbnRlbnQgPSBzdGF0ZS5wbGF5ZXJzWzBdLnRvdGFsU2NvcmUudG9TdHJpbmcoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcHV0ZXIxIC5zY29yZSBzcGFuJykhLnRleHRDb250ZW50ID0gc3RhdGUucGxheWVyc1sxXS50b3RhbFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyMiAuc2NvcmUgc3BhbicpIS50ZXh0Q29udGVudCA9IHN0YXRlLnBsYXllcnNbMl0udG90YWxTY29yZS50b1N0cmluZygpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBsaXZlIHNjb3Jlc1xuICAgIHN0YXRlLnBsYXllcnMuZm9yRWFjaCgocGxheWVyLCBpbmRleCkgPT4ge1xuICAgICAgICBwbGF5ZXIuY2FsY3VsYXRlTGl2ZVNjb3JlKCk7XG4gICAgICAgIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3BsYXllci5pZCA9PT0gJ3BsYXllcicgPyAncGxheWVyLWFyZWEnIDogcGxheWVyLmlkfSAubGl2ZS1zY29yZSBzcGFuYCk7XG4gICAgICAgIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IHBsYXllci5saXZlU2NvcmUudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBIaWdobGlnaHQgdGhlIGN1cnJlbnQgcGxheWVyJ3MgYXJlYVxuZnVuY3Rpb24gaGlnaGxpZ2h0Q3VycmVudFBsYXllcigpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAvLyBSZXNldCBhbGwgaGlnaGxpZ2h0c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHBvbmVudCwgLnBsYXllci1hcmVhJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyQ29sb3IgPSAndmFyKC0tYm9yZGVyLWNvbG9yKSc7XG4gICAgICAgIChlbCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgIFxuICAgIC8vIFNraXAgaGlnaGxpZ2h0aW5nIGR1cmluZyBpbml0aWFsIHNlbGVjdGlvblxuICAgIGlmIChzdGF0ZS5pbml0aWFsQ2FyZFNlbGVjdGlvblBoYXNlKSByZXR1cm47XG4gICAgXG4gICAgLy8gSGlnaGxpZ2h0IGN1cnJlbnQgcGxheWVyXG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IHN0YXRlLnBsYXllcnNbc3RhdGUuY3VycmVudFBsYXllckluZGV4XTtcbiAgICBjb25zdCBjdXJyZW50UGxheWVyRWwgPSBjdXJyZW50UGxheWVyLmlkID09PSAncGxheWVyJyBcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWFyZWEnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJlbnRQbGF5ZXIuaWQpIGFzIEhUTUxFbGVtZW50O1xuICAgIFxuICAgIGlmIChjdXJyZW50UGxheWVyRWwpIHtcbiAgICAgICAgY3VycmVudFBsYXllckVsLnN0eWxlLmJvcmRlckNvbG9yID0gY3VycmVudFBsYXllci5jb2xvcjtcbiAgICAgICAgY3VycmVudFBsYXllckVsLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMTBweCAke2N1cnJlbnRQbGF5ZXIuY29sb3J9YDtcbiAgICB9XG4gICAgXG4gICAgLy8gVXBkYXRlIHR1cm4gaW5kaWNhdG9yXG4gICAgdHVybkluZGljYXRvclRleHQudGV4dENvbnRlbnQgPSBgQ3VycmVudCBUdXJuOiAke2N1cnJlbnRQbGF5ZXIubmFtZX1gO1xuICAgIGN1cnJlbnRUdXJuSW5kaWNhdG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRQbGF5ZXIuY29sb3I7XG4gICAgY3VycmVudFR1cm5JbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbi8vIFNob3cgYSBtZXNzYWdlIHRvIHRoZSBwbGF5ZXJcbmZ1bmN0aW9uIHNob3dNZXNzYWdlKG1zZzogc3RyaW5nLCBkdXJhdGlvbjogbnVtYmVyID0gMzAwMCk6IHZvaWQge1xuICAgIG1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IG1zZztcbiAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH0sIGR1cmF0aW9uKTtcbn1cblxuLy8gSGFuZGxlIHBsYXllciBjbGlja2luZyBvbiBkcmF3IHBpbGVcbmZ1bmN0aW9uIGhhbmRsZURyYXdQaWxlQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgXG4gICAgLy8gUHJldmVudCBkcmF3aW5nIGR1cmluZyBpbml0aWFsIGNhcmQgc2VsZWN0aW9uIHBoYXNlXG4gICAgaWYgKHN0YXRlLmluaXRpYWxDYXJkU2VsZWN0aW9uUGhhc2UpIHtcbiAgICAgICAgc2hvd01lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgeW91ciBpbml0aWFsIGNhcmRzIGZpcnN0JywgMjAwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gT25seSBhbGxvdyB0aGUgY3VycmVudCBwbGF5ZXIgdG8gZHJhd1xuICAgIGlmIChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPT09IDAgJiYgc3RhdGUuY3VycmVudERyYXduQ2FyZCA9PT0gbnVsbCAmJiAhc3RhdGUubW92ZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgZHJhd0NhcmQodHJ1ZSk7XG4gICAgfVxufVxuXG4vLyBIYW5kbGUgcGxheWVyIGNsaWNraW5nIG9uIGRpc2NhcmQgcGlsZVxuZnVuY3Rpb24gaGFuZGxlRGlzY2FyZFBpbGVDbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAvLyBQcmV2ZW50IGRyYXdpbmcgZHVyaW5nIGluaXRpYWwgY2FyZCBzZWxlY3Rpb24gcGhhc2VcbiAgICBpZiAoc3RhdGUuaW5pdGlhbENhcmRTZWxlY3Rpb25QaGFzZSkge1xuICAgICAgICBzaG93TWVzc2FnZSgnUGxlYXNlIHNlbGVjdCB5b3VyIGluaXRpYWwgY2FyZHMgZmlyc3QnLCAyMDAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBPbmx5IGFsbG93IHRoZSBjdXJyZW50IHBsYXllciB0byBkcmF3XG4gICAgaWYgKHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCA9PT0gMCAmJiBzdGF0ZS5jdXJyZW50RHJhd25DYXJkID09PSBudWxsICYmIFxuICAgICAgICBzdGF0ZS5kaXNjYXJkUGlsZS5sZW5ndGggPiAwICYmICFzdGF0ZS5tb3ZlSW5Qcm9ncmVzcykge1xuICAgICAgICBkcmF3Q2FyZChmYWxzZSk7XG4gICAgfVxufVxuXG4vLyBEcmF3IGEgY2FyZCAoZnJvbSBkcmF3IHBpbGUgb3IgZGlzY2FyZCBwaWxlKVxuZnVuY3Rpb24gZHJhd0NhcmQoZnJvbURyYXdQaWxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIFxuICAgIGxldCBkcmF3bkNhcmQ7XG4gICAgXG4gICAgaWYgKGZyb21EcmF3UGlsZSkge1xuICAgICAgICAvLyBEcmF3IGZyb20gdGhlIGRlY2tcbiAgICAgICAgaWYgKHN0YXRlLmRlY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBzaG93TWVzc2FnZSgnRHJhdyBwaWxlIGlzIGVtcHR5IScpO1xuICAgICAgICAgICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZHJhd25DYXJkID0gc3RhdGUuZGVjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEcmF3IGZyb20gZGlzY2FyZCBwaWxlXG4gICAgICAgIGlmIChzdGF0ZS5kaXNjYXJkUGlsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKCdEaXNjYXJkIHBpbGUgaXMgZW1wdHkhJyk7XG4gICAgICAgICAgICBzdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkcmF3bkNhcmQgPSBzdGF0ZS5kaXNjYXJkUGlsZS5wb3AoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCFkcmF3bkNhcmQpIHtcbiAgICAgICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBTZXQgdGhlIGN1cnJlbnQgZHJhd24gY2FyZFxuICAgIHN0YXRlLmN1cnJlbnREcmF3bkNhcmQgPSBkcmF3bkNhcmQ7XG4gICAgXG4gICAgLy8gU2hvdyB0aGUgY2FyZCBzZWxlY3Rpb24gYXJlYVxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFNlbGVjdGlvbkFyZWEucXVlcnlTZWxlY3RvcignLmNhcmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjYXJkRWxlbWVudC5jbGFzc05hbWUgPSBgY2FyZCBmbGlwcGVkYDtcbiAgICBjYXJkRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICBjb25zdCBjYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkSW5uZXIuY2xhc3NOYW1lID0gJ2NhcmQtaW5uZXInO1xuICAgIFxuICAgIGNvbnN0IGNhcmRGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRGcm9udC5jbGFzc05hbWUgPSBgY2FyZC1mcm9udCAke2RyYXduQ2FyZC5jb2xvckNsYXNzfWA7XG4gICAgY2FyZEZyb250LnRleHRDb250ZW50ID0gZHJhd25DYXJkLnZhbHVlLnRvU3RyaW5nKCk7XG4gICAgXG4gICAgY29uc3QgY2FyZEJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkQmFjay5jbGFzc05hbWUgPSAnY2FyZC1iYWNrJztcbiAgICBcbiAgICBjYXJkSW5uZXIuYXBwZW5kQ2hpbGQoY2FyZEZyb250KTtcbiAgICBjYXJkSW5uZXIuYXBwZW5kQ2hpbGQoY2FyZEJhY2spO1xuICAgIGNhcmRFbGVtZW50LmFwcGVuZENoaWxkKGNhcmRJbm5lcik7XG4gICAgXG4gICAgLy8gU2hvdyB0aGUgY2FyZCBzZWxlY3Rpb24gYXJlYVxuICAgIGNhcmRTZWxlY3Rpb25BcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIFxuICAgIC8vIFRyYWNrIHRoZSBjYXJkIGFzIHNlZW5cbiAgICBpZiAoZHJhd25DYXJkLnZhbHVlIGluIHN0YXRlLnNlZW5DYXJkcykge1xuICAgICAgICBzdGF0ZS5zZWVuQ2FyZHNbZHJhd25DYXJkLnZhbHVlXSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlZW5DYXJkc1tkcmF3bkNhcmQudmFsdWVdID0gMTtcbiAgICB9XG4gICAgXG4gICAgZGVidWdMb2coYFBsYXllciBkcmV3IGEgJHtkcmF3bkNhcmQudmFsdWV9IGZyb20gJHtmcm9tRHJhd1BpbGUgPyAnZHJhdyBwaWxlJyA6ICdkaXNjYXJkIHBpbGUnfWApO1xufVxuXG4vLyBIYW5kbGUgcGxheWVyIGRlY2lkaW5nIHRvIGtlZXAgdGhlIGRyYXduIGNhcmRcbmZ1bmN0aW9uIGhhbmRsZUtlZXBDYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIGlmIChzdGF0ZS5jdXJyZW50RHJhd25DYXJkID09PSBudWxsKSB7XG4gICAgICAgIGRlYnVnTG9nKFwiRXJyb3I6IE5vIGRyYXduIGNhcmQgdG8ga2VlcFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBkZWJ1Z0xvZyhcIlBsYXllciBjaG9zZSB0byBrZWVwIGNhcmQ6IFwiICsgc3RhdGUuY3VycmVudERyYXduQ2FyZC52YWx1ZSk7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgY2FyZCBzZWxlY3Rpb24gYXJlYVxuICAgIGNhcmRTZWxlY3Rpb25BcmVhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIFxuICAgIC8vIExldCBwbGF5ZXIgY2xpY2sgb24gYSBjYXJkIHRvIHJlcGxhY2VcbiAgICBzaG93TWVzc2FnZSgnU2VsZWN0IGEgY2FyZCB0byByZXBsYWNlJyk7XG4gICAgXG4gICAgLy8gQWRkIGEgdGVtcG9yYXJ5IG92ZXJsYXkgdG8gaGlnaGxpZ2h0IHRoYXQgY2FyZHMgYXJlIGNsaWNrYWJsZVxuICAgIGNvbnN0IGNhcmRzID0gcGxheWVyQ2FyZHNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NsaWNrYWJsZS1oaWdobGlnaHQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFkZCBhIGRpcmVjdCBjbGljayBoYW5kbGVyIHRvIHRoaXMgc3BlY2lmaWMgY2FyZFxuICAgICAgICAoY2FyZCBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVidWdMb2coYERpcmVjdCBjYXJkIGNsaWNrIG9uIGluZGV4ICR7aW5kZXh9YCk7XG4gICAgICAgICAgICBoYW5kbGVDYXJkQ2xpY2soaW5kZXgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIHRlbXBvcmFyeSBjbGljayBoYW5kbGVyc1xuICAgICAgICAgICAgY2FyZHMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICAoYyBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IG51bGw7XG4gICAgICAgICAgICAgICAgYy5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2FibGUtaGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuLy8gSGFuZGxlIHBsYXllciBkZWNpZGluZyB0byBkaXNjYXJkIHRoZSBkcmF3biBjYXJkXG5mdW5jdGlvbiBoYW5kbGVEaXNjYXJkQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICBpZiAoc3RhdGUuY3VycmVudERyYXduQ2FyZCA9PT0gbnVsbCkge1xuICAgICAgICBzdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCB0aGUgY2FyZCB0byB0aGUgZGlzY2FyZCBwaWxlXG4gICAgc3RhdGUuZGlzY2FyZFBpbGUucHVzaChzdGF0ZS5jdXJyZW50RHJhd25DYXJkKTtcbiAgICBcbiAgICAvLyBIaWRlIHRoZSBjYXJkIHNlbGVjdGlvbiBhcmVhXG4gICAgY2FyZFNlbGVjdGlvbkFyZWEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGhlIGN1cnJlbnQgZHJhd24gY2FyZFxuICAgIHN0YXRlLmN1cnJlbnREcmF3bkNhcmQgPSBudWxsO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgVUlcbiAgICB1cGRhdGVEaXNjYXJkUGlsZSgpO1xuICAgIFxuICAgIC8vIElmIGl0J3MgdGhlIGh1bWFuIHBsYXllcidzIHR1cm4sIHRoZXkgbmVlZCB0byByZXZlYWwgYSBjYXJkIG5leHRcbiAgICBpZiAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ID09PSAwKSB7XG4gICAgICAgIHNob3dNZXNzYWdlKCdTZWxlY3QgYSBmYWNlLWRvd24gY2FyZCB0byByZXZlYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3IgY29tcHV0ZXIgcGxheWVycywgYXV0b21hdGljYWxseSBzZWxlY3QgYSBjYXJkIHRvIHJldmVhbFxuICAgICAgICBjb25zdCBjb21wdXRlclBsYXllciA9IGdhbWUuZ2V0UGxheWVyKHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCkgYXMgQ29tcHV0ZXJQbGF5ZXI7XG4gICAgICAgIGNvbnN0IGNhcmRJbmRleCA9IGNvbXB1dGVyUGxheWVyLnNlbGVjdENhcmRUb1JldmVhbCgpO1xuICAgICAgICBcbiAgICAgICAgLy8gUmV2ZWFsIHRoZSBzZWxlY3RlZCBjYXJkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmV2ZWFsQ2FyZChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXgsIGNhcmRJbmRleCk7XG4gICAgICAgIH0sIHN0YXRlLmFuaW1hdGlvblNwZWVkKTtcbiAgICB9XG59XG5cbi8vIEhhbmRsZSBwbGF5ZXIgY2FuY2VsaW5nIHRoZSBkcmF3XG5mdW5jdGlvbiBoYW5kbGVDYW5jZWxEcmF3KCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIGlmIChzdGF0ZS5jdXJyZW50RHJhd25DYXJkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gUHV0IHRoZSBjYXJkIGJhY2sgaW4gdGhlIGFwcHJvcHJpYXRlIHBpbGVcbiAgICAvLyBGb3Igc2ltcGxpY2l0eSwgd2UnbGwgYWx3YXlzIHB1dCBpdCBiYWNrIGluIHRoZSBkcmF3IHBpbGVcbiAgICBzdGF0ZS5kZWNrLnB1c2goc3RhdGUuY3VycmVudERyYXduQ2FyZCk7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGhlIGN1cnJlbnQgZHJhd24gY2FyZFxuICAgIHN0YXRlLmN1cnJlbnREcmF3bkNhcmQgPSBudWxsO1xuICAgIFxuICAgIC8vIEhpZGUgdGhlIGNhcmQgc2VsZWN0aW9uIGFyZWFcbiAgICBjYXJkU2VsZWN0aW9uQXJlYS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBcbiAgICAvLyBSZXNldCB0aGUgbW92ZSBpbiBwcm9ncmVzcyBmbGFnXG4gICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIFVJXG4gICAgdXBkYXRlRHJhd1BpbGUoKTtcbn1cblxuLy8gSGFuZGxlIHBsYXllciBjbGlja2luZyBvbiBhIGNhcmRcbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgXG4gICAgZGVidWdMb2coYENhcmQgY2xpY2tlZCBhdCBpbmRleCAke2luZGV4fSwgY3VycmVudERyYXduQ2FyZDogJHtzdGF0ZS5jdXJyZW50RHJhd25DYXJkID8gc3RhdGUuY3VycmVudERyYXduQ2FyZC52YWx1ZSA6ICdub25lJ31gKTtcbiAgICBcbiAgICBpZiAoc3RhdGUuY3VycmVudERyYXduQ2FyZCA9PT0gbnVsbCB8fCBzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggIT09IDApIHtcbiAgICAgICAgZGVidWdMb2coXCJDYW5ub3QgaGFuZGxlIGNhcmQgY2xpY2s6IG5vIGRyYXduIGNhcmQgb3Igbm90IHBsYXllcidzIHR1cm5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gUmVwbGFjZSB0aGUgc2VsZWN0ZWQgY2FyZCB3aXRoIHRoZSBkcmF3biBjYXJkXG4gICAgY29uc3Qgc2VsZWN0ZWRDYXJkID0gc3RhdGUucGxheWVyc1swXS5jYXJkc1tpbmRleF07XG4gICAgXG4gICAgLy8gSWYgcmVwbGFjaW5nIGEgZmFjZS1kb3duIGNhcmQsIHJldmVhbCBpdCBmaXJzdFxuICAgIGlmICghc2VsZWN0ZWRDYXJkLnJldmVhbGVkKSB7XG4gICAgICAgIHNlbGVjdGVkQ2FyZC5yZXZlYWxlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCB0aGUgcmVwbGFjZWQgY2FyZCB0byB0aGUgZGlzY2FyZCBwaWxlXG4gICAgc3RhdGUuZGlzY2FyZFBpbGUucHVzaCh7XG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZENhcmQudmFsdWUsXG4gICAgICAgIGNvbG9yQ2xhc3M6IHNlbGVjdGVkQ2FyZC5jb2xvckNsYXNzLFxuICAgICAgICByZXZlYWxlZDogdHJ1ZVxuICAgIH0pO1xuICAgIFxuICAgIC8vIFJlcGxhY2UgdGhlIGNhcmQgd2l0aCB0aGUgZHJhd24gY2FyZFxuICAgIHN0YXRlLnBsYXllcnNbMF0uY2FyZHNbaW5kZXhdID0gc3RhdGUuY3VycmVudERyYXduQ2FyZDtcbiAgICBcbiAgICAvLyBDbGVhciB0aGUgY3VycmVudCBkcmF3biBjYXJkXG4gICAgc3RhdGUuY3VycmVudERyYXduQ2FyZCA9IG51bGw7XG4gICAgXG4gICAgLy8gSGlkZSB0aGUgY2FyZCBzZWxlY3Rpb24gYXJlYVxuICAgIGNhcmRTZWxlY3Rpb25BcmVhLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBVSVxuICAgIHVwZGF0ZVBsYXllckNhcmRzKCk7XG4gICAgdXBkYXRlRGlzY2FyZFBpbGUoKTtcbiAgICB1cGRhdGVTY29yZXMoKTtcbiAgICBcbiAgICBkZWJ1Z0xvZyhgQ2FyZCByZXBsYWNlZCBhdCBpbmRleCAke2luZGV4fWApO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRoZSByb3VuZCBzaG91bGQgZW5kXG4gICAgaWYgKGdhbWUuY2hlY2tGb3JSb3VuZEVuZCgpKSB7XG4gICAgICAgIGVuZFJvdW5kKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8gTW92ZSB0byB0aGUgbmV4dCBwbGF5ZXIncyB0dXJuXG4gICAgc3RhdGUuY3VycmVudFBsYXllckluZGV4ID0gKHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgc3RhdGUucGxheWVycy5sZW5ndGg7XG4gICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBcbiAgICAvLyBVcGRhdGUgVUkgdG8gc2hvdyBuZXh0IHBsYXllclxuICAgIGhpZ2hsaWdodEN1cnJlbnRQbGF5ZXIoKTtcbiAgICBcbiAgICAvLyBJZiBpdCdzIGEgY29tcHV0ZXIncyB0dXJuLCBoYW5kbGUgaXQgYXV0b21hdGljYWxseVxuICAgIGlmIChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggIT09IDApIHtcbiAgICAgICAgc2V0VGltZW91dChoYW5kbGVDb21wdXRlclR1cm4sIHN0YXRlLmFuaW1hdGlvblNwZWVkKTtcbiAgICB9XG59XG5cbi8vIEhhbmRsZSBpbml0aWFsIGNhcmQgc2VsZWN0aW9uXG5mdW5jdGlvbiBoYW5kbGVJbml0aWFsQ2FyZFNlbGVjdGlvbihjYXJkSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIGlmICghc3RhdGUuaW5pdGlhbENhcmRTZWxlY3Rpb25QaGFzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIFJldmVhbCB0aGUgc2VsZWN0ZWQgY2FyZFxuICAgIHN0YXRlLnBsYXllcnNbMF0uY2FyZHNbY2FyZEluZGV4XS5yZXZlYWxlZCA9IHRydWU7XG4gICAgXG4gICAgLy8gVHJhY2sgdGhlIGNhcmQgYXMgc2VlblxuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IHN0YXRlLnBsYXllcnNbMF0uY2FyZHNbY2FyZEluZGV4XS52YWx1ZTtcbiAgICBpZiAoY2FyZFZhbHVlIGluIHN0YXRlLnNlZW5DYXJkcykge1xuICAgICAgICBzdGF0ZS5zZWVuQ2FyZHNbY2FyZFZhbHVlXSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlZW5DYXJkc1tjYXJkVmFsdWVdID0gMTtcbiAgICB9XG4gICAgXG4gICAgLy8gRGVjcmVtZW50IGNhcmRzIHRvIHJldmVhbCBjb3VudFxuICAgIHN0YXRlLmNhcmRzVG9SZXZlYWxDb3VudC0tO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBVSVxuICAgIHVwZGF0ZVBsYXllckNhcmRzKCk7XG4gICAgdXBkYXRlU2NvcmVzKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgaW5pdGlhbCBzZWxlY3Rpb24gaXMgY29tcGxldGVcbiAgICBpZiAoc3RhdGUuY2FyZHNUb1JldmVhbENvdW50IDw9IDApIHtcbiAgICAgICAgLy8gSW5pdGlhbCBzZWxlY3Rpb24gcGhhc2UgaXMgY29tcGxldGVcbiAgICAgICAgc3RhdGUuaW5pdGlhbENhcmRTZWxlY3Rpb25QaGFzZSA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgLy8gQWxzbyByZXZlYWwgaW5pdGlhbCBjYXJkcyBmb3IgY29tcHV0ZXIgcGxheWVyc1xuICAgICAgICByZXZlYWxJbml0aWFsQ29tcHV0ZXJDYXJkcygpO1xuICAgICAgICBcbiAgICAgICAgLy8gU3RhcnQgZmlyc3QgcGxheWVyJ3MgdHVyblxuICAgICAgICBzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPSAwO1xuICAgICAgICBoaWdobGlnaHRDdXJyZW50UGxheWVyKCk7XG4gICAgICAgIFxuICAgICAgICBzaG93TWVzc2FnZSgnWW91ciB0dXJuISBEcmF3IGEgY2FyZCBmcm9tIHRoZSBkZWNrIG9yIGRpc2NhcmQgcGlsZS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93TWVzc2FnZShgU2VsZWN0ICR7c3RhdGUuY2FyZHNUb1JldmVhbENvdW50fSBtb3JlIGNhcmQocykgdG8gcmV2ZWFsLmApO1xuICAgIH1cbn1cblxuLy8gUmV2ZWFsIGluaXRpYWwgY2FyZHMgZm9yIGNvbXB1dGVyIHBsYXllcnNcbmZ1bmN0aW9uIHJldmVhbEluaXRpYWxDb21wdXRlckNhcmRzKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIC8vIEZvciBlYWNoIGNvbXB1dGVyIHBsYXllclxuICAgIGZvciAobGV0IHBsYXllckluZGV4ID0gMTsgcGxheWVySW5kZXggPCBzdGF0ZS5wbGF5ZXJzLmxlbmd0aDsgcGxheWVySW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb21wdXRlclBsYXllciA9IHN0YXRlLnBsYXllcnNbcGxheWVySW5kZXhdIGFzIENvbXB1dGVyUGxheWVyO1xuICAgICAgICBcbiAgICAgICAgLy8gU2ltcGxlIEFJIGZvciBpbml0aWFsIGNhcmQgc2VsZWN0aW9uXG4gICAgICAgIC8vIEp1c3QgcGljayB0aGUgZmlyc3QgdHdvIGNhcmRzIC0gaW4gYSByZWFsIGltcGxlbWVudGF0aW9uLCB3ZSdkIHVzZSB0aGUgQUkncyBzdHJhdGVneVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElOSVRJQUxfQ0FSRFNfVE9fUkVWRUFMOyBpKyspIHtcbiAgICAgICAgICAgIC8vIFJhbmRvbSBpbmRleCBmb3IgaW5pdGlhbCByZXZlYWxcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJQbGF5ZXIuY2FyZHMubGVuZ3RoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2tpcCBhbHJlYWR5IHJldmVhbGVkIGNhcmRzXG4gICAgICAgICAgICBpZiAoY29tcHV0ZXJQbGF5ZXIuY2FyZHNbcmFuZG9tSW5kZXhdLnJldmVhbGVkKSB7XG4gICAgICAgICAgICAgICAgaS0tOyAvLyBUcnkgYWdhaW5cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmV2ZWFsIHRoZSBjYXJkXG4gICAgICAgICAgICBjb21wdXRlclBsYXllci5jYXJkc1tyYW5kb21JbmRleF0ucmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUcmFjayB0aGUgY2FyZCBhcyBzZWVuXG4gICAgICAgICAgICBjb25zdCBjYXJkVmFsdWUgPSBjb21wdXRlclBsYXllci5jYXJkc1tyYW5kb21JbmRleF0udmFsdWU7XG4gICAgICAgICAgICBpZiAoY2FyZFZhbHVlIGluIHN0YXRlLnNlZW5DYXJkcykge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlZW5DYXJkc1tjYXJkVmFsdWVdKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLnNlZW5DYXJkc1tjYXJkVmFsdWVdID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBVcGRhdGUgVUlcbiAgICB1cGRhdGVDb21wdXRlckNhcmRzKCk7XG4gICAgdXBkYXRlU2NvcmVzKCk7XG59XG5cbi8vIFJldmVhbCBhIGZhY2UtZG93biBjYXJkXG5mdW5jdGlvbiByZXZlYWxDYXJkKHBsYXllckluZGV4OiBudW1iZXIsIGNhcmRJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lLmdldFN0YXRlKCk7XG4gICAgY29uc3QgcGxheWVyID0gc3RhdGUucGxheWVyc1twbGF5ZXJJbmRleF07XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNhcmQgaXMgYWxyZWFkeSByZXZlYWxlZFxuICAgIGlmIChwbGF5ZXIuY2FyZHNbY2FyZEluZGV4XS5yZXZlYWxlZCkge1xuICAgICAgICBpZiAocGxheWVySW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKCdUaGlzIGNhcmQgaXMgYWxyZWFkeSByZXZlYWxlZC4gU2VsZWN0IGEgZmFjZS1kb3duIGNhcmQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXZlYWwgdGhlIGNhcmRcbiAgICBwbGF5ZXIuY2FyZHNbY2FyZEluZGV4XS5yZXZlYWxlZCA9IHRydWU7XG4gICAgXG4gICAgLy8gVHJhY2sgdGhlIGNhcmQgYXMgc2VlblxuICAgIGNvbnN0IGNhcmRWYWx1ZSA9IHBsYXllci5jYXJkc1tjYXJkSW5kZXhdLnZhbHVlO1xuICAgIGlmIChjYXJkVmFsdWUgaW4gc3RhdGUuc2VlbkNhcmRzKSB7XG4gICAgICAgIHN0YXRlLnNlZW5DYXJkc1tjYXJkVmFsdWVdKys7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuc2VlbkNhcmRzW2NhcmRWYWx1ZV0gPSAxO1xuICAgIH1cbiAgICBcbiAgICAvLyBVcGRhdGUgVUlcbiAgICBpZiAocGxheWVySW5kZXggPT09IDApIHtcbiAgICAgICAgdXBkYXRlUGxheWVyQ2FyZHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVDb21wdXRlckNhcmRzKCk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZVNjb3JlcygpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRoZSByb3VuZCBzaG91bGQgZW5kXG4gICAgaWYgKGdhbWUuY2hlY2tGb3JSb3VuZEVuZCgpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZW5kUm91bmQoKTtcbiAgICAgICAgfSwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgcGxheWVyJ3MgdHVyblxuICAgIHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCA9IChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggKyAxKSAlIHN0YXRlLnBsYXllcnMubGVuZ3RoO1xuICAgIHN0YXRlLm1vdmVJblByb2dyZXNzID0gZmFsc2U7XG4gICAgXG4gICAgLy8gVXBkYXRlIFVJIHRvIHNob3cgbmV4dCBwbGF5ZXJcbiAgICBoaWdobGlnaHRDdXJyZW50UGxheWVyKCk7XG4gICAgXG4gICAgLy8gSWYgaXQncyBhIGNvbXB1dGVyJ3MgdHVybiwgaGFuZGxlIGl0IGF1dG9tYXRpY2FsbHlcbiAgICBpZiAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ICE9PSAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoaGFuZGxlQ29tcHV0ZXJUdXJuLCBzdGF0ZS5hbmltYXRpb25TcGVlZCk7XG4gICAgfVxufVxuXG4vLyBFbmQgdGhlIGN1cnJlbnQgcm91bmQgYW5kIHNob3cgdGhlIHJvdW5kIGVuZCBzY3JlZW5cbmZ1bmN0aW9uIGVuZFJvdW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZS5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIC8vIEVuZCB0aGUgcm91bmQgaW4gdGhlIGdhbWUgbG9naWNcbiAgICBnYW1lLmVuZFJvdW5kKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBzY29yZWJvYXJkXG4gICAgdXBkYXRlUm91bmRTY29yZWJvYXJkKCk7XG4gICAgXG4gICAgLy8gU2hvdyB0aGUgcm91bmQgZW5kIHNjcmVlblxuICAgIGdhbWVTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgcm91bmRFbmRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSByb3VuZCBlbmQgc2NyZWVuIHdpdGggcmVzdWx0c1xuICAgIHVwZGF0ZVJvdW5kRW5kU2NyZWVuKCk7XG59XG5cbi8vIEhhbmRsZSBhIGNvbXB1dGVyIHBsYXllcidzIHR1cm5cbmZ1bmN0aW9uIGhhbmRsZUNvbXB1dGVyVHVybigpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICBpZiAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ID09PSAwIHx8IHN0YXRlLm1vdmVJblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybjsgLy8gTm90IGEgY29tcHV0ZXIncyB0dXJuXG4gICAgfVxuICAgIFxuICAgIHN0YXRlLm1vdmVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBHZXQgdGhlIGN1cnJlbnQgY29tcHV0ZXIgcGxheWVyXG4gICAgY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBnYW1lLmdldFBsYXllcihzdGF0ZS5jdXJyZW50UGxheWVySW5kZXgpIGFzIENvbXB1dGVyUGxheWVyO1xuICAgIFxuICAgIC8vIERlY2lkZSB3aGV0aGVyIHRvIGRyYXcgZnJvbSBkZWNrIG9yIGRpc2NhcmQgcGlsZVxuICAgIGNvbnN0IHRvcERpc2NhcmRDYXJkID0gc3RhdGUuZGlzY2FyZFBpbGUubGVuZ3RoID4gMCA/IHN0YXRlLmRpc2NhcmRQaWxlW3N0YXRlLmRpc2NhcmRQaWxlLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGRyYXdGcm9tRGVjayA9IGNvbXB1dGVyUGxheWVyLmRlY2lkZURyYXdTb3VyY2UodG9wRGlzY2FyZENhcmQpO1xuICAgIFxuICAgIC8vIEFuaW1hdGUgdGhlIGNvbXB1dGVyJ3MgZGVjaXNpb25cbiAgICBzaG93TWVzc2FnZShgJHtjb21wdXRlclBsYXllci5uYW1lfSBpcyB0aGlua2luZy4uLmAsIHN0YXRlLmFuaW1hdGlvblNwZWVkKTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gRHJhdyBhIGNhcmRcbiAgICAgICAgbGV0IGRyYXduQ2FyZDtcbiAgICAgICAgXG4gICAgICAgIGlmIChkcmF3RnJvbURlY2spIHtcbiAgICAgICAgICAgIC8vIERyYXcgZnJvbSBkZWNrXG4gICAgICAgICAgICBpZiAoc3RhdGUuZGVjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBkZWNrIGlzIGVtcHR5LCBkcmF3IGZyb20gZGlzY2FyZCBwaWxlXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmRpc2NhcmRQaWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBCb3RoIHBpbGVzIGVtcHR5LCBlbmQgdHVyblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPSAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0Q3VycmVudFBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyYXduQ2FyZCA9IHN0YXRlLmRpc2NhcmRQaWxlLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3bkNhcmQgPSBzdGF0ZS5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzaG93TWVzc2FnZShgJHtjb21wdXRlclBsYXllci5uYW1lfSBkcmF3cyBmcm9tIHRoZSBkZWNrYCwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRHJhdyBmcm9tIGRpc2NhcmQgcGlsZVxuICAgICAgICAgICAgaWYgKHN0YXRlLmRpc2NhcmRQaWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGRpc2NhcmQgcGlsZSBpcyBlbXB0eSwgZHJhdyBmcm9tIGRlY2tcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuZGVjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQm90aCBwaWxlcyBlbXB0eSwgZW5kIHR1cm5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFBsYXllckluZGV4ID0gKHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgc3RhdGUucGxheWVycy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmF3bkNhcmQgPSBzdGF0ZS5kZWNrLnBvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkcmF3bkNhcmQgPSBzdGF0ZS5kaXNjYXJkUGlsZS5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2hvd01lc3NhZ2UoYCR7Y29tcHV0ZXJQbGF5ZXIubmFtZX0gZHJhd3MgZnJvbSB0aGUgZGlzY2FyZCBwaWxlYCwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRyYXduQ2FyZCkge1xuICAgICAgICAgICAgc3RhdGUubW92ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gVHJhY2sgdGhlIGNhcmQgYXMgc2VlblxuICAgICAgICBpZiAoZHJhd25DYXJkLnZhbHVlIGluIHN0YXRlLnNlZW5DYXJkcykge1xuICAgICAgICAgICAgc3RhdGUuc2VlbkNhcmRzW2RyYXduQ2FyZC52YWx1ZV0rKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlLnNlZW5DYXJkc1tkcmF3bkNhcmQudmFsdWVdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQW5pbWF0ZSB0aGUgZHJhd24gY2FyZFxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGNvbXB1dGVyQ2FyZEFuaW1hdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2FyZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjYXJkRWxlbWVudC5jbGFzc05hbWUgPSAnY2FyZCBmbGlwcGVkJztcbiAgICAgICAgY2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjYXJkSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZElubmVyLmNsYXNzTmFtZSA9ICdjYXJkLWlubmVyJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmRGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRnJvbnQuY2xhc3NOYW1lID0gYGNhcmQtZnJvbnQgJHtkcmF3bkNhcmQuY29sb3JDbGFzc31gO1xuICAgICAgICBjYXJkRnJvbnQudGV4dENvbnRlbnQgPSBkcmF3bkNhcmQudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhcmRCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRCYWNrLmNsYXNzTmFtZSA9ICdjYXJkLWJhY2snO1xuICAgICAgICBcbiAgICAgICAgY2FyZElubmVyLmFwcGVuZENoaWxkKGNhcmRGcm9udCk7XG4gICAgICAgIGNhcmRJbm5lci5hcHBlbmRDaGlsZChjYXJkQmFjayk7XG4gICAgICAgIGNhcmRFbGVtZW50LmFwcGVuZENoaWxkKGNhcmRJbm5lcik7XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlckNhcmRBbmltYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBEZWNpZGUgd2hldGhlciB0byBrZWVwIG9yIGRpc2NhcmQgdGhlIGNhcmRcbiAgICAgICAgY29uc3Qga2VlcENhcmQgPSBjb21wdXRlclBsYXllci5kZWNpZGVLZWVwT3JEaXNjYXJkKGRyYXduQ2FyZC52YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2FyZEFuaW1hdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGtlZXBDYXJkKSB7XG4gICAgICAgICAgICAgICAgLy8gS2VlcCB0aGUgY2FyZCwgc2VsZWN0IGEgY2FyZCB0byByZXBsYWNlXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBjb21wdXRlclBsYXllci5zZWxlY3RDYXJkVG9SZXBsYWNlKGRyYXduQ2FyZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgY2FyZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VkQ2FyZCA9IGNvbXB1dGVyUGxheWVyLmNhcmRzW3RhcmdldEluZGV4XTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiByZXBsYWNpbmcgYSBmYWNlLWRvd24gY2FyZCwgcmV2ZWFsIGl0XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBsYWNlZENhcmQucmV2ZWFsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZWRDYXJkLnJldmVhbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSByZXBsYWNlZCBjYXJkIHRvIHRoZSBkaXNjYXJkIHBpbGVcbiAgICAgICAgICAgICAgICBzdGF0ZS5kaXNjYXJkUGlsZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlcGxhY2VkQ2FyZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDbGFzczogcmVwbGFjZWRDYXJkLmNvbG9yQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHJldmVhbGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHRoZSBkcmF3biBjYXJkXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJQbGF5ZXIuY2FyZHNbdGFyZ2V0SW5kZXhdID0gZHJhd25DYXJkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKGAke2NvbXB1dGVyUGxheWVyLm5hbWV9IGtlZXBzIHRoZSBjYXJkYCwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBVSVxuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbXB1dGVyQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNjYXJkUGlsZSgpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3JlcygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByb3VuZCBzaG91bGQgZW5kXG4gICAgICAgICAgICAgICAgaWYgKGdhbWUuY2hlY2tGb3JSb3VuZEVuZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kUm91bmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gbmV4dCBwbGF5ZXJcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggPSAoc3RhdGUuY3VycmVudFBsYXllckluZGV4ICsgMSkgJSBzdGF0ZS5wbGF5ZXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5tb3ZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBVSVxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodEN1cnJlbnRQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBuZXh0IHBsYXllciBpcyBhIGNvbXB1dGVyLCBoYW5kbGUgdGhlaXIgdHVyblxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jdXJyZW50UGxheWVySW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoYW5kbGVDb21wdXRlclR1cm4sIHN0YXRlLmFuaW1hdGlvblNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERpc2NhcmQgdGhlIGNhcmRcbiAgICAgICAgICAgICAgICBzdGF0ZS5kaXNjYXJkUGlsZS5wdXNoKGRyYXduQ2FyZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoYCR7Y29tcHV0ZXJQbGF5ZXIubmFtZX0gZGlzY2FyZHMgdGhlIGNhcmRgLCBzdGF0ZS5hbmltYXRpb25TcGVlZCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIFVJXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzY2FyZFBpbGUoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgYSBjYXJkIHRvIHJldmVhbFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRJbmRleCA9IGNvbXB1dGVyUGxheWVyLnNlbGVjdENhcmRUb1JldmVhbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJldmVhbCB0aGUgc2VsZWN0ZWQgY2FyZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXZlYWxDYXJkKHN0YXRlLmN1cnJlbnRQbGF5ZXJJbmRleCwgY2FyZEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCBzdGF0ZS5hbmltYXRpb25TcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHN0YXRlLmFuaW1hdGlvblNwZWVkICogMS41KTtcbiAgICAgICAgXG4gICAgfSwgc3RhdGUuYW5pbWF0aW9uU3BlZWQpO1xufVxuXG4vLyBVcGRhdGUgdGhlIHJvdW5kIHNjb3JlYm9hcmQgdGFibGVcbmZ1bmN0aW9uIHVwZGF0ZVJvdW5kU2NvcmVib2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB0Ym9keSA9IHJvdW5kU2NvcmVib2FyZFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG4gICAgXG4gICAgaWYgKCF0Ym9keSkgcmV0dXJuO1xuICAgIFxuICAgIC8vIENsZWFyIGV4aXN0aW5nIHJvd3NcbiAgICB0Ym9keS5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAvLyBBZGQgYSByb3cgZm9yIGVhY2ggcm91bmQgcGxheWVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jdXJyZW50Um91bmQ7IGkrKykge1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBcbiAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgIGNvbnN0IHJvdW5kQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHJvdW5kQ2VsbC50ZXh0Q29udGVudCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJvdW5kQ2VsbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBQbGF5ZXIgc2NvcmVzXG4gICAgICAgIHN0YXRlLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGlmIChpIDwgcGxheWVyLnJvdW5kU2NvcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjb3JlQ2VsbC50ZXh0Q29udGVudCA9IHBsYXllci5yb3VuZFNjb3Jlc1tpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY29yZUNlbGwudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoc2NvcmVDZWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICAvLyBBZGQgYSB0b3RhbCByb3dcbiAgICBjb25zdCB0b3RhbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdG90YWxSb3cuY2xhc3NOYW1lID0gJ3RvdGFsLXJvdyc7XG4gICAgXG4gICAgY29uc3QgdG90YWxDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0b3RhbENlbGwudGV4dENvbnRlbnQgPSAnVG90YWwnO1xuICAgIHRvdGFsUm93LmFwcGVuZENoaWxkKHRvdGFsQ2VsbCk7XG4gICAgXG4gICAgc3RhdGUucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgIGNvbnN0IHRvdGFsU2NvcmVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdG90YWxTY29yZUNlbGwudGV4dENvbnRlbnQgPSBwbGF5ZXIudG90YWxTY29yZS50b1N0cmluZygpO1xuICAgICAgICB0b3RhbFJvdy5hcHBlbmRDaGlsZCh0b3RhbFNjb3JlQ2VsbCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGJvZHkuYXBwZW5kQ2hpbGQodG90YWxSb3cpO1xufVxuXG4vLyBVcGRhdGUgdGhlIHJvdW5kIGVuZCBzY3JlZW4gd2l0aCByZXN1bHRzXG5mdW5jdGlvbiB1cGRhdGVSb3VuZEVuZFNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgcm91bmQgc2NvcmVzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kLXJlc3VsdHMgLnBsYXllci1zY29yZScpLnRleHRDb250ZW50ID0gc3RhdGUucGxheWVyc1swXS5yb3VuZFNjb3Jlc1tzdGF0ZS5jdXJyZW50Um91bmQgLSAxXS50b1N0cmluZygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZC1yZXN1bHRzIC5jb21wMS1zY29yZScpLnRleHRDb250ZW50ID0gc3RhdGUucGxheWVyc1sxXS5yb3VuZFNjb3Jlc1tzdGF0ZS5jdXJyZW50Um91bmQgLSAxXS50b1N0cmluZygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZC1yZXN1bHRzIC5jb21wMi1zY29yZScpLnRleHRDb250ZW50ID0gc3RhdGUucGxheWVyc1syXS5yb3VuZFNjb3Jlc1tzdGF0ZS5jdXJyZW50Um91bmQgLSAxXS50b1N0cmluZygpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0b3RhbCBzY29yZXNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmQtcmVzdWx0cyAucGxheWVyLXRvdGFsJykudGV4dENvbnRlbnQgPSBzdGF0ZS5wbGF5ZXJzWzBdLnRvdGFsU2NvcmUudG9TdHJpbmcoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmQtcmVzdWx0cyAuY29tcDEtdG90YWwnKS50ZXh0Q29udGVudCA9IHN0YXRlLnBsYXllcnNbMV0udG90YWxTY29yZS50b1N0cmluZygpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3VuZC1yZXN1bHRzIC5jb21wMi10b3RhbCcpLnRleHRDb250ZW50ID0gc3RhdGUucGxheWVyc1syXS50b3RhbFNjb3JlLnRvU3RyaW5nKCk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGZpbmFsIGNhcmRzIGRpc3BsYXlcbiAgICB1cGRhdGVGaW5hbENhcmRzRGlzcGxheSgpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBuZXh0IHJvdW5kIGJ1dHRvbiB0ZXh0XG4gICAgY29uc3QgbmV4dFJvdW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcm91bmQtYnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgaWYgKGdhbWUuaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIG5leHRSb3VuZEJ0bi50ZXh0Q29udGVudCA9ICdTZWUgRmluYWwgUmVzdWx0cyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFJvdW5kQnRuLnRleHRDb250ZW50ID0gJ05leHQgUm91bmQnO1xuICAgIH1cbn1cblxuLy8gVXBkYXRlIHRoZSBmaW5hbCBjYXJkcyBkaXNwbGF5IG9uIHRoZSByb3VuZCBlbmQgc2NyZWVuXG5mdW5jdGlvbiB1cGRhdGVGaW5hbENhcmRzRGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWUuZ2V0U3RhdGUoKTtcbiAgICBcbiAgICAvLyBDbGVhciBleGlzdGluZyBkaXNwbGF5c1xuICAgIHBsYXllckZpbmFsR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb21wdXRlcjFGaW5hbEdyaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29tcHV0ZXIyRmluYWxHcmlkLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBwbGF5ZXIgY2FyZHNcbiAgICB1cGRhdGVGaW5hbENhcmRHcmlkKHBsYXllckZpbmFsR3JpZCwgc3RhdGUucGxheWVyc1swXS5jYXJkcyk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNvbXB1dGVyIGNhcmRzXG4gICAgdXBkYXRlRmluYWxDYXJkR3JpZChjb21wdXRlcjFGaW5hbEdyaWQsIHN0YXRlLnBsYXllcnNbMV0uY2FyZHMpO1xuICAgIHVwZGF0ZUZpbmFsQ2FyZEdyaWQoY29tcHV0ZXIyRmluYWxHcmlkLCBzdGF0ZS5wbGF5ZXJzWzJdLmNhcmRzKTtcbn1cblxuLy8gVXBkYXRlIGEgZmluYWwgY2FyZCBncmlkIHdpdGggY2FyZHNcbmZ1bmN0aW9uIHVwZGF0ZUZpbmFsQ2FyZEdyaWQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgY2FyZHM6IGFueVtdKTogdm9pZCB7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBjdXJyZW50IG51bWJlciBvZiBjb2x1bW5zIGJhc2VkIG9uIGNhcmRzXG4gICAgY29uc3QgY3VycmVudENvbHMgPSBNYXRoLmNlaWwoY2FyZHMubGVuZ3RoIC8gMyk7IC8vIEFzc3VtaW5nIFJPV1MgPSAzXG4gICAgXG4gICAgLy8gU2V0IHRoZSBncmlkIHRlbXBsYXRlIGNvbHVtbnNcbiAgICBjb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjdXJyZW50Q29sc30sIDFmcilgO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuICAgICAgICBjb25zdCBmaW5hbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmluYWxDYXJkLmNsYXNzTmFtZSA9IGBmaW5hbC1jYXJkICR7Y2FyZC5jb2xvckNsYXNzfWA7XG4gICAgICAgIGZpbmFsQ2FyZC50ZXh0Q29udGVudCA9IGNhcmQudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcHJvcGVyIHBvc2l0aW9uIGluIHRoZSBncmlkXG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGN1cnJlbnRDb2xzKTtcbiAgICAgICAgY29uc3QgY29sID0gaSAlIGN1cnJlbnRDb2xzO1xuICAgICAgICBcbiAgICAgICAgLy8gUG9zaXRpb24gdGhlIGNhcmQgdXNpbmcgZ3JpZFxuICAgICAgICBmaW5hbENhcmQuc3R5bGUuZ3JpZFJvdyA9IGAke3JvdyArIDF9YDtcbiAgICAgICAgZmluYWxDYXJkLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHtjb2wgKyAxfWA7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmluYWxDYXJkKTtcbiAgICB9XG59XG5cbi8vIFVwZGF0ZSBhbmltYXRpb24gc3BlZWRzIGJhc2VkIG9uIGdhbWUgc2V0dGluZ3NcbmZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvblNwZWVkcyhzcGVlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSBzcGVlZCAvIDEwMDA7IC8vIENvbnZlcnQgbXMgdG8gc2Vjb25kc1xuICAgIFxuICAgIC8vIFVwZGF0ZSBDU1MgdmFyaWFibGVzIGRpcmVjdGx5XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWFuaW1hdGlvbi1kdXJhdGlvbicsIGAke2FuaW1hdGlvbkR1cmF0aW9ufXNgKTtcbiAgICBcbiAgICAvLyBBZGQgZGVidWcgbG9nXG4gICAgZGVidWdMb2coYEFuaW1hdGlvbiBzcGVlZCBzZXQgdG8gJHthbmltYXRpb25EdXJhdGlvbn1zYCk7XG59XG5cbi8vIFRoZXNlIGFyZSBwbGFjZWhvbGRlciBmdW5jdGlvbnMgdGhhdCB3b3VsZCBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG4vLyB0byBjb21wbGV0ZSB0aGUgZ2FtZSBmdW5jdGlvbmFsaXR5ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==